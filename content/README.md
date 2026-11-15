# Educational content banks

`drafts/` contains researched material and generated fictional examples. It is outside `public/` and is **not loaded by the web app**. The current deployed prototype continues to use its small demonstration bank until reviewed content is explicitly integrated.

## Production tracks

| Track | Initial target | Draft bank | Research notes |
| --- | --- | --- | --- |
| Personal medical history | Up to 20 evidence-supported diseases per source group; overlapping memberships allowed | `drafts/antecedentes.json` | `../docs/research/antecedentes.md` |
| Symptom characteristics | 20 stories per source group, with zero, one, or several omissions | `drafts/caracteres.json` | `../docs/research/caracteres.md` |
| Complementary interrogation | 10 patient-voice stories per term/group context, plus source descriptions | `drafts/interrogatorio.json` | `../docs/research/interrogatorio.md` |
| Body regions | Every reliably transcribed and visually localized source label across five views | `drafts/regioes.json` | `../docs/research/regioes.md` |

Check actual coverage rather than assuming targets have been met:

```sh
node tools/validate-content.mjs
```

The validator checks source locators, IDs, exact story evidence spans, missing-field agreement, coherent reference mappings, image-marker coordinates, duplicate text, and coverage shortfalls. It cannot verify clinical claims, source fidelity, naturalness, visual accuracy, or whether a cited page genuinely supports a claim. Its output always separates structural success from clinical approval.

## Review and integration

1. Inventory each original PDF, preserving its hierarchy and warning about unclear or questionable source material.
2. Research additions against primary/authoritative sources and record exact supporting locators.
3. Generate in separate topic-specific batches, with stable IDs, model/prompt provenance, and explicit draft status.
4. Run structural validation and a stronger independent model review. Revise or exclude problematic items; do not present draft generation as independent review.
5. Obtain qualified clinical/editorial review before educational publication. Mark missing review/provenance explicitly.
6. Integrate only the reviewed release set through an explicit app adapter; keep evidence and provenance available in feedback debug views. Recheck scoring, overlap-aware distractors, and all accepted pathways.

The detailed generation rules remain in [the content-generation guide](../docs/educational-content-generation.md). Source PDFs and patient-identifying information must not be added to the repository.
