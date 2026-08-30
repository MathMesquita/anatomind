"""Draw the extracted markers back onto their plates so they can be eyeballed.

Marker geometry is the one part of the pipeline that can be confidently wrong:
a leader mis-assigned to the neighbouring label produces perfectly well-formed
JSON pointing at the wrong structure. The only honest check is to look.

Usage:  python tools/verify.py --data <dir> --out <dir> [--ids p008-0,p008-1]
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import fitz


def render(doc, plate, out_dir: Path, dpi_scale: float = 2.0) -> Path:
    page = doc[plate["page"] - 1]
    # Re-derive the plate rect from the stored size and the page's own images.
    rect = next(
        fitz.Rect(i["bbox"])
        for i in page.get_image_info()
        if abs(fitz.Rect(i["bbox"]).width - plate["width"]) < 0.5
        and abs(fitz.Rect(i["bbox"]).height - plate["height"]) < 0.5
    )
    pix = page.get_pixmap(clip=rect, matrix=fitz.Matrix(dpi_scale, dpi_scale), alpha=False)
    doc2 = fitz.open()
    p2 = doc2.new_page(width=pix.width, height=pix.height)
    p2.insert_image(fitz.Rect(0, 0, pix.width, pix.height), pixmap=pix)
    for n, m in enumerate(plate["markers"], 1):
        x, y = m["x"] * pix.width, m["y"] * pix.height
        p2.draw_circle((x, y), 9, color=(1, 1, 1), fill=(0.9, 0.05, 0.15), width=2)
        p2.insert_text((x + 13, y + 4), f"{n}. {m['term']}", fontsize=13,
                       color=(0.75, 0, 0.1), fontname="helv")
    path = out_dir / f"{plate['id']}.png"
    p2.get_pixmap(dpi=96).save(path)
    doc2.close()
    return path


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", default="tools/atlas.pdf")
    ap.add_argument("--data", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--ids", default="")
    args = ap.parse_args()

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    plates = json.loads(Path(args.data, "plates.json").read_text())["plates"]
    wanted = set(filter(None, args.ids.split(",")))
    doc = fitz.open(args.pdf)
    for plate in plates:
        if wanted and plate["id"] not in wanted:
            continue
        print(render(doc, plate, out))


if __name__ == "__main__":
    main()
