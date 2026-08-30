# AnatoMind

A quiz PWA for human anatomy, built on the *Atlas Fotográfico de Anatomia Humana*
of UFRJ Campus Macaé. A photograph appears with one structure marked; you name it.

> **Prototype.** Built to settle how the app should play before the full thing is
> written. The open questions are tracked on the [wayfinder map](https://github.com/MathMesquita/anatomind/issues/1).

## How the corpus is built

The atlas is a LibreOffice Impress export, which turns out to matter a great deal.
Every page is a slide holding photographs, text labels, and a thin **leader line**
joining each label to the structure it names. All of that survives as vector data,
so the corpus needs no OCR and no hand annotation:

1. Chain the stroked path segments into polylines — the leader lines.
2. Decide which end of each leader touches text (the *tail*) and which lands on the
   anatomy (the *head*).
3. Grow the tail's text line into a full label, rejoining words the slide wrapped.
4. Store the head in the photograph's own normalised coordinates.
5. Strip the page down to its image draws and render the plate — otherwise every
   picture ships with its own answer key printed beside it.

Current yield: **361 plates, 3535 markers, 1768 distinct terms** across 9 systems.
About 2.8% of markers are flagged `suspect` and excluded from play, leaving 3387
playable structures over 338 plates — see
[#7](https://github.com/MathMesquita/anatomind/issues/7).

```bash
# put the source PDF at tools/atlas.pdf first (it is not committed)
npm run atlas           # -> public/atlas/plates.json + public/atlas/plates/*.webp
npm run atlas:verify    # draw the computed markers back onto the plates and look
```

`atlas:verify` renders each plate **with** the atlas's own labels and leader lines
still on it, so a marker can be checked against the line that produced it. It is
the only honest test of the extraction: a mis-assigned leader yields perfectly
well-formed JSON pointing at the wrong structure.

## Running it

```bash
npm install
npm run dev
```

Requires Python 3 with `pymupdf` and `pillow` for the extractor.

## Stack

Vite · React · TypeScript · Tailwind v4 · shadcn/ui · vite-plugin-pwa

## Source

*Atlas Fotográfico de Anatomia Humana*, org. Vivian de Oliveira Sousa Corrêa,
UFRJ Campus Macaé. The PDF and the extracted photographs are **not** committed;
redistribution is an open question ([#4](https://github.com/MathMesquita/anatomind/issues/4)).
