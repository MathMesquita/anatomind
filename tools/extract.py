"""Extract quiz plates and labelled markers from the UFRJ photographic anatomy atlas.

The atlas is a LibreOffice Impress export: every page is a white slide holding
one banner image, a big region title, one or more cadaver photographs, and a set
of text labels each joined to the structure it names by a thin leader line.

That makes the atlas machine-readable without OCR. For every page we:

  1. find the photographs actually painted on the page (dropping the UFRJ banner),
  2. chain the stroked path segments into polylines -- the leader lines,
  3. decide which free end of each leader touches text (the *tail*) and which
     lands on the anatomy (the *head*),
  4. grow the tail's text line into a full multi-line label,
  5. attribute the head to a photograph and store it in that photo's own
     normalised coordinate space.

Text left over once every leader has claimed its label is the page title and the
plate captions -- we never need a separate heuristic for those.

Usage:  python tools/extract.py --pdf tools/atlas.pdf --out public/atlas
"""

from __future__ import annotations

import argparse
import json
import math
import re
import unicodedata
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path

import fitz

# ---------------------------------------------------------------- tuning knobs

BANNER_MAX_Y = 90.0       # the UFRJ strip never reaches further down the slide
BANNER_MIN_WIDTH = 450.0  # ...and always spans nearly the full slide width
MIN_PLATE_SIDE = 90.0     # smaller pictures are decoration, not anatomy
JOIN_TOLERANCE = 0.75     # pt; endpoints this close are the same vertex
MIN_LEADER_LENGTH = 12.0  # pt; shorter polylines are dashes or tick marks
MAX_TAIL_GAP = 26.0       # pt; a leader tail must sit this close to its label
TITLE_MIN_SIZE = 18.0     # pt; the big region heading
LINE_MERGE_GAP = 7.0      # pt; vertical gap that still counts as one label
IMAGE_LONG_EDGE = 1400    # px; exported plate size
IMAGE_QUALITY = 82

# Systems, with the page range each covers. Book page numbers from the table of
# contents; `PAGE_OFFSET` converts them to zero-based PDF indices.
PAGE_OFFSET = 2
SYSTEMS: list[tuple[str, str, int, int]] = [
    ("osteoarticular", "Sistema osteoarticular", 6, 74),
    ("muscular", "Sistema muscular", 75, 110),
    ("cardiovascular", "Sistema cardiovascular", 111, 153),
    ("respiratorio", "Sistema respiratório", 154, 176),
    ("nervoso", "Sistema nervoso", 177, 273),
    ("digestorio", "Sistema digestório", 274, 288),
    ("urinario", "Sistema urinário", 289, 300),
    ("reprodutor", "Sistema reprodutor", 301, 316),
    ("casos", "Casos para estudo", 317, 332),
]

BULLET_RE = re.compile(r"^[\u2022\u00b7\u25aa\u25cf\u2043\-]+$")
SIZE_TOLERANCE = 0.75   # pt; same-size lines belong to the same label
DETAIL_MAX_GAP = 9.0    # pt; how far below a heading its bullet list may start

# Portuguese function words a real structure name never ends on. A term ending
# here was cut mid-phrase -- the label splitter mangled it.
DANGLING_RE = re.compile(r"\s(e|ou|do|da|de|dos|das|no|na|com|em|ao|para)$")


def looks_truncated(term: str) -> bool:
    """Whether a term reads as a fragment of a longer label.

    Several leaders converging on one multi-line label each claim a line of it,
    leaving pieces like "Cabeça do" or "(respectivamente)". Case matters here:
    the atlas capitalises every real structure name, so a lowercase opening is
    itself the tell.
    """
    return bool(DANGLING_RE.search(term)) or term[:1].islower() or term.startswith("(")



# ------------------------------------------------------------------ primitives


@dataclass
class TextLine:
    text: str
    """The line exactly as the PDF holds it, trailing space and all."""
    raw: str
    bbox: fitz.Rect
    size: float
    claimed: bool = False

    @property
    def is_title(self) -> bool:
        return self.size >= TITLE_MIN_SIZE


@dataclass
class Leader:
    head: fitz.Point          # lands on the anatomy
    tail: fitz.Point          # touches the label
    length: float


@dataclass
class Plate:
    page: int
    index: int
    rect: fitz.Rect
    caption: str = ""
    markers: list[dict] = field(default_factory=list)


# ------------------------------------------------------------------- geometry


def _quantise(point: fitz.Point) -> tuple[int, int]:
    return (round(point.x / JOIN_TOLERANCE), round(point.y / JOIN_TOLERANCE))


def _distance_to_rect(point: fitz.Point, rect: fitz.Rect) -> float:
    dx = max(rect.x0 - point.x, 0.0, point.x - rect.x1)
    dy = max(rect.y0 - point.y, 0.0, point.y - rect.y1)
    return math.hypot(dx, dy)


def collect_segments(page: fitz.Page) -> list[tuple[fitz.Point, fitz.Point]]:
    """Every stroked straight line and bezier, reduced to its two endpoints."""
    segments = []
    for drawing in page.get_drawings():
        if drawing["type"] != "s":  # fills are the slide background
            continue
        for item in drawing["items"]:
            if item[0] == "l":
                segments.append((item[1], item[2]))
            elif item[0] == "c":
                segments.append((item[1], item[4]))
    return segments


def chain_polylines(segments) -> list[list[fitz.Point]]:
    """Join segments that share an endpoint into polylines.

    Leader lines are exported as several short pieces, and the dashed region
    outlines as dozens of tiny beziers, so chaining is what tells a real leader
    (one long open run) apart from decoration (a short or closed run).
    """
    adjacency: dict[tuple[int, int], list[int]] = defaultdict(list)
    for i, (a, b) in enumerate(segments):
        adjacency[_quantise(a)].append(i)
        adjacency[_quantise(b)].append(i)

    seen: set[int] = set()
    polylines = []
    for start in range(len(segments)):
        if start in seen:
            continue
        # Walk outwards from this segment in both directions.
        seen.add(start)
        points = [segments[start][0], segments[start][1]]
        for end in (0, 1):
            while True:
                tip = points[0] if end == 0 else points[-1]
                nxt = None
                for cand in adjacency[_quantise(tip)]:
                    if cand not in seen:
                        nxt = cand
                        break
                if nxt is None:
                    break
                seen.add(nxt)
                a, b = segments[nxt]
                far = b if _quantise(a) == _quantise(tip) else a
                if end == 0:
                    points.insert(0, far)
                else:
                    points.append(far)
        polylines.append(points)
    return polylines


def polyline_length(points) -> float:
    return sum(math.hypot(b.x - a.x, b.y - a.y) for a, b in zip(points, points[1:]))


# ----------------------------------------------------------------- page pieces


def page_text_lines(page: fitz.Page) -> list[TextLine]:
    lines = []
    for block in page.get_text("dict")["blocks"]:
        if block["type"] != 0:
            continue
        for line in block["lines"]:
            raw = "".join(span["text"] for span in line["spans"])
            text = raw.strip()
            # The base-of-skull pages bullet each foramen's contents, and every
            # bullet glyph arrives as its own text line.
            if not text or BULLET_RE.match(text):
                continue
            size = max(span["size"] for span in line["spans"])
            lines.append(TextLine(text, raw, fitz.Rect(line["bbox"]), size))
    return lines


def page_plates(page: fitz.Page) -> list[dict]:
    plates = []
    # `xrefs=True` costs ~18s a page and we never need the xref: plates are
    # rendered from the page region, not pulled from the image object.
    for info in page.get_image_info():
        rect = fitz.Rect(info["bbox"])
        is_banner = rect.y0 < BANNER_MAX_Y and rect.width > BANNER_MIN_WIDTH
        too_small = rect.width < MIN_PLATE_SIDE or rect.height < MIN_PLATE_SIDE
        if is_banner or too_small:
            continue
        plates.append({"rect": rect})
    plates.sort(key=lambda p: (round(p["rect"].y0), p["rect"].x0))
    return plates


def page_leaders(page: fitz.Page, lines: list[TextLine]) -> list[Leader]:
    """Turn polylines into oriented leaders: tail at the label, head on the anatomy."""
    leaders = []
    for points in chain_polylines(collect_segments(page)):
        if polyline_length(points) < MIN_LEADER_LENGTH:
            continue
        first, last = points[0], points[-1]
        if _quantise(first) == _quantise(last):
            continue  # closed shape: a dashed region outline, not a leader
        near_first = min((_distance_to_rect(first, l.bbox) for l in lines), default=1e9)
        near_last = min((_distance_to_rect(last, l.bbox) for l in lines), default=1e9)
        tail, head, gap = (
            (first, last, near_first) if near_first <= near_last else (last, first, near_last)
        )
        if gap > MAX_TAIL_GAP:
            continue  # no label within reach; probably a rule or a pointer arrow
        leaders.append(Leader(head=head, tail=tail, length=polyline_length(points)))
    return leaders


def heading_size(lines: list[TextLine]) -> float:
    """The size this page sets label headings in.

    The largest non-title size, not the most common one: on the base-of-skull
    pages the 9pt bullets outnumber the 10pt headings they hang from, so a modal
    reading picks exactly the wrong type.
    """
    sizes = [l.size for l in lines if not l.is_title]
    return max(sizes) if sizes else 10.0


def heading_index(lines: list[TextLine]) -> dict[int, int]:
    """For every bullet line, the heading it hangs from.

    A leader onto 'Lâmina cribiforme' passes nearer to the '• N. olfatório (I)'
    beneath it than to the heading itself, so distance alone anchors on the
    bullet. Bullets belong to their heading, so we promote before matching and
    let `collect_detail` pick the bullets back up as study notes.
    """
    heading = heading_size(lines)
    order = sorted(range(len(lines)), key=lambda i: lines[i].bbox.y0)
    promote: dict[int, int] = {}
    for position, index in enumerate(order):
        line = lines[index]
        if line.is_title or line.size >= heading - SIZE_TOLERANCE:
            continue
        bottom = line.bbox.y0
        for above in reversed(order[:position]):
            other = lines[above]
            if other.is_title:
                continue
            if other.bbox.x1 < line.bbox.x0 - 24 or other.bbox.x0 > line.bbox.x1 + 24:
                continue
            if not 0 <= bottom - other.bbox.y1 <= DETAIL_MAX_GAP:
                break
            if other.size >= heading - SIZE_TOLERANCE:
                promote[index] = promote.get(above, above)
                break
            bottom = other.bbox.y0  # another bullet; keep walking up the list
    return promote


def assign_anchors(leaders: list[Leader], lines: list[TextLine]) -> dict[int, int]:
    """Match each leader to the one text line it points out of.

    Resolved globally, closest pair first, with both sides consumed on a match.
    Two labels stacked in the same column each own a leader, and a purely local
    'nearest line' rule lets the same line answer for both.

    """
    promote = heading_index(lines)
    pairs = sorted(
        (_distance_to_rect(leader.tail, line.bbox), li, promote.get(ti, ti))
        for li, leader in enumerate(leaders)
        for ti, line in enumerate(lines)
        if not line.is_title
        if _distance_to_rect(leader.tail, line.bbox) <= MAX_TAIL_GAP
    )
    anchor_of: dict[int, int] = {}
    used: set[int] = set()
    for _, li, ti in pairs:
        if li in anchor_of or ti in used:
            continue
        anchor_of[li] = ti
        used.add(ti)
    return anchor_of


def grow_label(anchor: TextLine, lines: list[TextLine], reserved: set[int]) -> str:
    """Absorb the stacked continuation lines of a wrapped label.

    'M. tensor da' / 'fáscia lata' arrive as two lines; only the first carries a
    leader, so the rest are pulled in by vertical adjacency and overlap. Lines
    reserved as some other leader's anchor are off limits -- without that,
    'Tubérculo da costela' sitting above 'Colo da costela' eats its neighbour.
    """
    block = [anchor]
    anchor.claimed = True
    changed = True
    while changed:
        changed = False
        top = min(l.bbox.y0 for l in block)
        bottom = max(l.bbox.y1 for l in block)
        left = min(l.bbox.x0 for l in block)
        right = max(l.bbox.x1 for l in block)
        for index, line in enumerate(lines):
            if line.claimed or line.is_title or index in reserved:
                continue
            if abs(line.size - anchor.size) > SIZE_TOLERANCE:
                continue  # a smaller line under a heading is its bullet list
            overlap = min(right, line.bbox.x1) - max(left, line.bbox.x0)
            if overlap <= 2.0:
                continue
            below = 0 <= line.bbox.y0 - bottom <= LINE_MERGE_GAP
            above = 0 <= top - line.bbox.y1 <= LINE_MERGE_GAP
            if below or above:
                line.claimed = True
                block.append(line)
                changed = True
    block.sort(key=lambda l: l.bbox.y0)
    return join_lines(block), block


def join_lines(block: list[TextLine]) -> str:
    """Rejoin a wrapped label, restoring only the spaces the PDF actually holds.

    Narrow label boxes make LibreOffice wrap mid-word -- "Incisura Costal II"
    comes through as "Incisur" / "a" / "Costal " / "II", so joining every line
    with a space yields "Incisur a Costal II".

    A space usually survives a real word break, but not always: "Nervo Cutâneo"
    / "Lateral do Antebraço" has none. The two are told apart by what follows --
    a wrap that split a word continues in lower case, a new word does not.
    """
    parts: list[str] = []
    for index, line in enumerate(block):
        if index:
            spaced = block[index - 1].raw.endswith(" ") or line.raw.startswith(" ")
            if spaced or not line.text[:1].islower():
                parts.append(" ")
        parts.append(line.text)
    return normalise_term("".join(parts))


def collect_detail(block: list[TextLine], lines: list[TextLine], reserved: set[int]) -> list[str]:
    """Pick up the smaller-type bullet list that hangs under a heading.

    'Fissura orbital superior' is the structure the leader points at; the nerves
    threaded through it are study material, not part of its name.
    """
    size = block[0].size
    bottom = max(l.bbox.y1 for l in block)
    left = min(l.bbox.x0 for l in block)
    right = max(l.bbox.x1 for l in block)
    detail = []
    for index, line in enumerate(lines):
        if line.claimed or line.is_title or index in reserved:
            continue
        if line.size >= size - SIZE_TOLERANCE:
            continue
        if line.bbox.x1 < left - 12 or line.bbox.x0 > right + 12:
            continue
        if not 0 <= line.bbox.y0 - bottom <= DETAIL_MAX_GAP * (len(detail) + 1):
            continue
        line.claimed = True
        detail.append(normalise_term(line.text))
        bottom = line.bbox.y1
    return detail


def normalise_term(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    # `join_lines` only restores spaces the PDF holds, which leaves punctuation
    # that wrapped without one: "Parte escamosa;Osso temporal".
    text = re.sub(r"([;,:])(?=\S)", r"\1 ", text)
    text = re.sub(r"(?<=[^\s(])\(", " (", text)
    return text.rstrip(".,;:")


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def system_for(book_page: int) -> tuple[str, str]:
    for key, label, lo, hi in SYSTEMS:
        if lo <= book_page <= hi:
            return key, label
    return "outros", "Outros"


# ------------------------------------------------------------------- the build


def extract_page(page: fitz.Page, page_no: int) -> list[Plate]:
    lines = page_text_lines(page)
    plates_raw = page_plates(page)
    if not plates_raw:
        return []

    plates = [
        Plate(page=page_no, index=i, rect=p["rect"]) for i, p in enumerate(plates_raw)
    ]

    leaders = page_leaders(page, lines)
    anchor_of = assign_anchors(leaders, lines)
    reserved = set(anchor_of.values())

    for li, leader in enumerate(leaders):
        if li not in anchor_of:
            continue
        anchor = lines[anchor_of[li]]
        term, block = grow_label(anchor, lines, reserved - {anchor_of[li]})
        if not term:
            continue
        detail = collect_detail(block, lines, reserved - {anchor_of[li]})
        plate = min(plates, key=lambda p: _distance_to_rect(leader.head, p.rect))
        rect = plate.rect
        plate.markers.append(
            {
                "term": term,
                "slug": slugify(term),
                # normalised to the plate, so the UI is resolution independent
                "x": round((leader.head.x - rect.x0) / rect.width, 5),
                "y": round((leader.head.y - rect.y0) / rect.height, 5),
                "outside": not rect.contains(leader.head),
                **({"detail": detail} if detail else {}),
                **({"suspect": True} if looks_truncated(term) else {}),
            }
        )

    # Whatever text no leader claimed is the title or a caption.
    title = next((l.text for l in lines if l.is_title), "")
    leftovers = [l for l in lines if not l.claimed and not l.is_title]
    for plate in plates:
        below = [
            l
            for l in leftovers
            if l.bbox.y0 >= plate.rect.y1 - 6
            and l.bbox.x1 > plate.rect.x0 - 60
            and l.bbox.x0 < plate.rect.x1 + 60
        ]
        if below:
            best = min(below, key=lambda l: l.bbox.y0 - plate.rect.y1)
            plate.caption = normalise_term(best.text)
            leftovers.remove(best)

    for plate in plates:
        plate.title = title  # type: ignore[attr-defined]
    return plates


# `q <matrix> cm /ImNN Do Q` -- one painted photograph, and nothing else. Text
# lives in BT/ET and leader lines in stroked paths, so neither survives the cut.
IMAGE_DRAW_RE = re.compile(
    rb"q\s+[-\d.]+\s+[-\d.]+\s+[-\d.]+\s+[-\d.]+\s+[-\d.]+\s+[-\d.]+"
    rb"\s+cm\s*/Im[A-Za-z0-9_.]*\s+Do\s*Q"
)


def strip_labels(doc: fitz.Document, page: fitz.Page) -> fitz.Page:
    """Rewrite the page down to its photographs alone.

    The atlas prints every answer beside the structure it names, so a plate
    rendered straight from the page ships with its own answer key -- and the
    leader line points at the marker for good measure. Dropping everything but
    the image draws leaves each photograph in exactly the geometry the markers
    were measured in, with the labels gone.

    The document is never saved, so this only affects rendering in this process.
    """
    streams = page.get_contents()
    if not streams:
        return page
    kept = b"\n".join(m.group(0) for m in IMAGE_DRAW_RE.finditer(page.read_contents()))
    background = f"1 1 1 rg 0 0 {page.rect.width:.3f} {page.rect.height:.3f} re f\n"
    doc.update_stream(streams[0], background.encode() + kept)
    for extra in streams[1:]:
        doc.update_stream(extra, b" ")
    return doc.reload_page(page)


def export_image(page: fitz.Page, plate: Plate, out_dir: Path, skip: bool) -> str:
    """Render the plate's region of a label-stripped page."""
    name = f"p{plate.page:03d}-{plate.index}.webp"
    if skip:
        return name  # --no-images: keep the name so an existing export stays valid
    scale = IMAGE_LONG_EDGE / max(plate.rect.width, plate.rect.height)
    pix = page.get_pixmap(clip=plate.rect, matrix=fitz.Matrix(scale, scale), alpha=False)
    pix.pil_save(out_dir / name, format="WEBP", quality=IMAGE_QUALITY, method=4)
    return name


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--pages", default="", help="1-based PDF range, e.g. 8-40")
    ap.add_argument("--min-markers", type=int, default=3)
    ap.add_argument("--no-images", action="store_true")
    args = ap.parse_args()

    out = Path(args.out)
    img_dir = out / "plates"
    img_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(args.pdf)
    if args.pages:
        lo, _, hi = args.pages.partition("-")
        pages = range(int(lo) - 1, int(hi or lo))
    else:
        pages = range(doc.page_count)

    records, stats = [], Counter()
    for i in pages:
        page = doc[i]
        page_no = i + 1
        plates = extract_page(page, page_no)
        stats["plates_seen"] += len(plates)
        keep = [p for p in plates if len(p.markers) >= args.min_markers]
        stats["plates_dropped_thin"] += len(plates) - len(keep)
        # Text must be read before it is stripped, so this happens last.
        if keep and not args.no_images:
            page = strip_labels(doc, page)

        for plate in keep:
            # A term repeated on one plate (bilateral structures) keeps only its
            # first point -- the quiz must have a single correct answer.
            seen, markers = set(), []
            for m in plate.markers:
                if m["slug"] in seen:
                    stats["markers_dropped_dupe"] += 1
                    continue
                seen.add(m["slug"])
                markers.append(m)
            key, label = system_for(page_no - PAGE_OFFSET)
            image = export_image(page, plate, img_dir, args.no_images)
            records.append(
                {
                    "id": f"p{plate.page:03d}-{plate.index}",
                    "page": plate.page,
                    "system": key,
                    "systemLabel": label,
                    "region": getattr(plate, "title", ""),
                    "caption": plate.caption,
                    "image": image,
                    "width": round(plate.rect.width, 2),
                    "height": round(plate.rect.height, 2),
                    "markers": markers,
                }
            )
            stats["plates_kept"] += 1
            stats["markers_kept"] += len(markers)

    (out / "plates.json").write_text(
        json.dumps({"plates": records}, ensure_ascii=False, indent=1), encoding="utf-8"
    )
    print(json.dumps(dict(stats), indent=2))
    print(f"terms: {len({m['slug'] for r in records for m in r['markers']})} distinct")


if __name__ == "__main__":
    main()
