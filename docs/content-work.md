# Content work ledger

This ledger separates shipped behavior from unfinished educational production. Run `node tools/content-status.mjs` for counts recomputed from the files and `node tools/validate-content.mjs` for structural checks. Neither establishes medical accuracy or clinical approval.

## Current release work — 2026-11-15

- The symptom v2 independent review is complete: 192 of 220 stories pass for a model-reviewed prototype; 28 remain held. The passing subset is frozen in `content/releases/caracteres.v1.json` and connected to the web game across all 11 groups, with each group's full checklist, a 10-question round and feedback provenance. Clinical approval remains unrecorded.
- Interrogation v2 reviewed all 340 base stories: 321 pass and 19 need revision. Two separate generation batches have now completed another 400 drafts across 40 contexts. They pass structural checks but require independent review before integration. Combined authored coverage is 740 stories across 74 contexts; 1,180 stories remain for the 192 currently eligible contexts (1,300 against the original 204-context inventory).
- The 224-disease review is incomplete and bound to a prior snapshot. Current draft changes must be reconciled; safe negative distractors require positive evidence-supported review, not inference from missing membership.
- User-authorized incremental workflow: publish already-reviewed subsets first, then independently review **five questions per batch**, test/freeze passing items, and commit/push each completed batch immediately. Retain held records and all provenance. Do not wait for the full bank before releasing passing content.
- Flutter and unrelated native changes remain outside these web/content releases.

The sections below preserve the earlier production checkpoint; counts and review state above supersede historical statements about pending reviews and 50-story partial batches.

## Shipped prototype

- Three offline subject libraries and the agreed study/feedback flows, with fixed bottom actions.
- Persistent, actual-display-only question and alternative exposure history. Unseen eligible items are drawn first, then less-shown and less-recent items receive higher probability. Required answers and medical eligibility override novelty.
- Frozen numbered-region release: 71 verified targets, 50 answer regions, five original image windows, 10 distinct regions per round. All target coordinates are checked against the independent audit and the original image fingerprints. Five source legend regions have no usable numbered target. Review is by model, not a teacher or clinician.
- Disease-round sampling supports hidden variable 2–5 positives among 20 distinct choices, known overlapping memberships, and negative totals. The live Anamnese activities still use the explicitly labeled starter examples.

## In progress, not playable content

### Personal medical history

The 2026-11-15 saved draft contains 224 disease records, 328 recorded positive memberships, and at least 20 entries in each of the 14 source groups. This meets the gross generation target, not the reviewed release target. Some added or repaired records were checked by the same model that wrote the repair, which is not an independent second pass. Conditional memberships, unresolved cross-category associations, and curricular decisions must remain visible. Unresolved membership is not proof that a disease is a valid negative distractor.

- Finish evidence-supported coverage, allowing honest shortfalls rather than duplicate diagnoses or variants invented to reach 20.
- Independently recheck additions and repairs, including all applicable overlaps and safe negative pools.
- Freeze an explicitly reviewed prototype release, then add an app adapter and full feedback provenance; do not import mutable drafts.

### Symptom characteristics

Generation reached 220 draft stories: 20 for each of 11 source groups. This does **not** mean 220 approved or playable questions. The first independent semantic review read all 220 stories and 1,800 field decisions: 160 received model-reviewed status; 60 need revision, including 42 on hold. Corrections and their independent recheck are still required. The exact reviewed snapshot and all findings are preserved in `docs/reviews/caracteres-v1.json`. String-matching evidence and structural validation cannot decide whether a story actually documents a characteristic.

- Resolve per-story review findings and verify every complete checklist, evidence span, and missing-data set. Keep zero/one/multiple omissions and explicit none.
- All 60 editorial replacements are now saved and reproduce through the guarded generator; the 160 previously passed stories' text, keys, sources, and evidence remain unchanged. The corrected snapshot still needs independent review. Two explicitly unknown-information stories remain held without an automatic answer.
- Normalize display wording without losing the source checklist. Do not teach questionable source claims as medical facts.
- Integrate group-specific checklists, bounded rounds, source-linked explanations, and provenance into the existing hidden-story/timer flow after freezing a reviewed release.

### Complementary interrogation

The source inventory preserves 204 term/group contexts and their original descriptions. The 2026-11-15 checkpoint contains 340 stories in 34 complete ten-story context sets. The original target remains 10 patient stories per context (2,040), even when an editorial eligibility decision temporarily reduces the active target: 1,700 gross story slots remain, including excluded or held contexts. The earlier independent report covered only the initial 80 stories; it does not automatically approve later revisions or additions. A fresh independent review of the 340-story snapshot is pending.

- Generate remaining contexts in traceable batches; preserve all source descriptions and explain every exclusion or hold.
- Do not exclude a valid history milestone simply because it is normal rather than a symptom.
- Independently review each new batch for natural patient speech, semantic correctness, coherent accepted paths, alternative-context partial credit, and source-supported ambiguity.
- Integrate only the frozen reviewed set, with three four-choice stages, explicit no-subgroup, context explanations, and complete feedback debug.

Two interrupted generation batches preserve 100 additional draft stories in ten more context sets, outside the 340-story base snapshot. Each batch reached 50 of its planned 200 stories; 300 slots remain in their combined 40 assigned contexts. Their read-only partial validation passes after metadata/source-locator repairs, but they are neither complete batches nor independently reviewed. Do not merge them into the base under review or describe 440 as a reviewed/playable bank. The v2 interrogation review checkpoint covers only 60 of the base's 340 stories; 280 are still unread in that pass.

The latest workers reported a usage reset at 4:25 PM on 2026-11-15. Interrupted author/reviewer checkpoints remain saved; quota failure is not content approval. Resume the existing tasks after availability returns, rather than discard partial work or restart generation blindly.

## Release checks still required

1. Structural validation and exact source/provenance checks for the frozen set.
2. Independent model review of the actual released text and answer mappings, with unresolved findings withheld.
3. App integration and automated/browser tests for all new groups, checklists, accepted paths, distractors, scoring, progress, offline loading, and exposure history.
4. Qualified clinical/editorial review and redistribution-rights verification before representing content as approved educational material.

Flutter remains deferred. Existing native-app work is separate and is not included in these web/content commits.
