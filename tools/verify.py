"""Draw the extracted markers onto the exported plates so they can be eyeballed.

Marker geometry is the one part of the pipeline that can be confidently wrong:
a leader mis-assigned to the neighbouring label, or a crop applied without
moving the points with it, produces perfectly well-formed JSON pointing at the
wrong place. The only honest check is to look.

This draws on the WebP files the app actually serves, so it tests the whole
chain -- leader matching, cropping and recentring together.

Usage:  python tools/verify.py --data public/atlas --out .verify [--ids p008-0]
"""

from __future__ import annotations

import argparse
import json
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


def font(size: int) -> ImageFont.ImageFont:
    for path in (
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def render(plate: dict, plates_dir: Path, out_dir: Path) -> Path:
    image = Image.open(plates_dir / plate["image"]).convert("RGB")
    draw = ImageDraw.Draw(image)
    label_font = font(max(13, image.width // 60))
    radius = max(5, image.width // 130)

    for number, marker in enumerate(plate["markers"], 1):
        x, y = marker["x"] * image.width, marker["y"] * image.height
        fill = (255, 170, 0) if marker.get("suspect") else (230, 15, 40)
        draw.ellipse(
            (x - radius, y - radius, x + radius, y + radius),
            fill=fill,
            outline=(255, 255, 255),
            width=2,
        )
        draw.text(
            (x + radius + 4, y - radius),
            f"{number}. {marker['term']}",
            font=label_font,
            fill=fill,
            stroke_width=3,
            stroke_fill=(255, 255, 255),
        )

    path = out_dir / f"{plate['id']}.png"
    image.save(path)
    return path


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--ids", default="")
    ap.add_argument("--sample", type=int, default=0, help="render N random plates")
    ap.add_argument("--seed", type=int, default=1)
    args = ap.parse_args()

    data = Path(args.data)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    plates = json.loads((data / "plates.json").read_text())["plates"]
    wanted = set(filter(None, args.ids.split(",")))
    if wanted:
        chosen = [p for p in plates if p["id"] in wanted]
    elif args.sample:
        chosen = random.Random(args.seed).sample(plates, min(args.sample, len(plates)))
    else:
        chosen = plates

    for plate in chosen:
        print(render(plate, data / "plates", out))


if __name__ == "__main__":
    main()
