# Web implementation checkpoint

The web PWA implements the approved study flows from [Paper](https://app.paper.design/file/01M7D824B4FVRW3KMPJ2JFP15J/p-2-0). Flutter expansion is deferred. This checkpoint distinguishes working behavior from remaining content production.

## Implemented

- Three peer disciplines with activity libraries and separate device-local progress.
- Existing anatomy choice and flashcard modes, with shared feedback and result actions.
- Five separate views of the original numbered body/head images, red markers beside the target numbers, zoom/pan, four options, correct/incorrect feedback, and round results. Source image files are unchanged; the views are display windows.
- Disease rounds with 20 options, hidden correct-answer counts, submit-once feedback, +10/−5/0 scoring, and negative totals.
- Symptom stories with variable omission counts, explicit exclusive “Nenhum dado ausente,” hidden text during recall, 20 seconds of active time, background pause, current-selection timeout submission, and restored text in feedback.
- Three-stage interrogation with four options at every stage, “Não tem sub-grupo” always present, feedback only after all stages, coherent accepted pathways, and +5 support for recorded alternative-context subgroups.
- Persistent debug mode toggled by 20 home-logo taps. Feedback-only inspection does not change scoring or progress. Missing provenance is identified rather than fabricated.
- Fixed bottom actions across reading, timed answers, staged answers, feedback, flashcard grading, and results. Content reserves scrolling space; the footer includes the device safe area.
- Full production precache of the atlas, region images, application assets, and icons.

## Verification

On 2026-11-14, `npm test` passed 12 tests; `npm run lint`, `npm run build`, and `git diff --check` passed. Tests exercise grading, exclusive-none/blank behavior, omission evidence, timer fractions/background pause/cleanup, all starter interrogation paths, completion guards, and anatomy double-action guards.

Browser checks at 390 × 844 confirmed fixed footer geometry during long selections and feedback, hidden/restored stories, staged interrogation, debug unlocking/inspection, anatomy choice, and flashcard grading. The footer bottom matched the viewport bottom at 844 px. Desktop feedback was also checked at 1280 × 720.

The production preview installed its service worker, then its server was stopped. The same browser successfully reloaded the application, completed all five region views using cached images, persisted a 50-point result across another reload, and opened a previously unvisited atlas photograph. This is an origin-unavailable check, not a physical-device airplane-mode test.

## Content still to produce

The region bank has five questions; Anamnese has two disease groups, three pain stories, and four interrogation examples. These counts are disclosed in the libraries. The larger targets remain pending:

- Up to 20 reviewed diseases per source group, with verified overlapping memberships and distractors.
- Initially 20 stories per symptom-characteristic group, eventually 100+.
- Ten patient-voice stories per technical term in each distinct group context, plus the original description where permitted.
- Complete per-item source locators, evidence spans, contextual explanations, and generation/review records. Some prototype metadata remains unavailable.

Use [the content-generation guide](educational-content-generation.md) for expansion. Second-pass model checks are not qualified clinical approval. Complete clinical/editorial review and verify redistribution rights before educational publication.

## Handoff

Run `npm run dev` for the local web preview. No deployment is part of this checkpoint. Existing Flutter files and unrelated work remain untouched.

## Subsequent updates

The prototype was uploaded in commit `1aebc72`, and its GitHub Pages deployment succeeded. [Exposure-aware randomness](randomness.md) now tracks displayed questions and alternatives separately from scores. Content generation and independent review are underway under `content/`, `docs/research/`, and `docs/reviews/`; those draft banks are not automatically loaded by the application.
