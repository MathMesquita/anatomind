# Exposure-aware study selection

Question and alternative exposure is stored locally under `anatomind.exposure.v1`, independently from points, correctness, and debug mode. This is balanced coverage, not a spaced-repetition or diagnostic model.

## Selection rules

1. Unseen eligible questions come before previously displayed questions.
2. After the available unseen pool, weighted sampling without replacement favors lower display counts and older exposures. Every seen item keeps a nonzero chance within that second tier. The policy intentionally gives coverage priority rather than mixing repeats ahead of unseen items.
3. The weight is `(1 + min(presentationsSinceLastSeen, 50) / 10) / (1 + displayCount)`. A randomized exponential ordering implements the weighted draw; it is not a deterministic least-recently-used queue.
4. Correct/required choices remain present. Novelty chooses only from eligible distractors, then all option positions are shuffled independently. It must never determine the correct-answer position or override accepted medical mappings.
5. Only displayed material counts as seen. Planning a round does not mark its queued questions. Opening feedback, duplicate effects, and rerenders do not increment the same presentation twice.
6. History survives reloads when browser storage is available. Blocked/full/corrupt storage falls back safely to the current session. No history is transmitted.

## Activity-specific constraints

- Anatomy first balances structures, then photographs of the selected structure. A structure appears at most once in a round. Same-plate distractors retain priority over same-system fallback choices. Options are refreshed when advancing so earlier exposures in the round are considered.
- Body-region questions balance the available verified targets. Distractors are selected from the existing body or head family, not arbitrary unrelated subject matter. The current live prototype has only five targets; history weighting does not make the other source regions playable by itself.
- Interrogation balances the available cases and eligible stage alternatives. The correct subgroup and “Não tem sub-grupo” remain available; every stage still has four choices.
- Symptom-characteristic questions always show the entire checklist and the explicit none option. Novelty may reorder those options, never hide a required field. A checklist is recorded only after the story has been hidden.
- Disease demos currently contain exactly 20 eligible options per group. All must be displayed, so their selection cannot meaningfully vary yet; their order can. A larger reviewed bank and overlap-aware distractor selection are needed before sampling different 20-option subsets safely.

## Verification

Automated tests cover unseen-first ordering, seeded probability comparisons, nonzero repeat probability, duplicate removal, required answers, every correct-answer position, persistence, storage failures, actual-display-only counting, abandoned rounds, and atlas concept/distractor selection.

Browser verification on a 390 × 844 viewport opened and abandoned five region rounds: the first targets were 3, 31, 25, 6, and 24, with no repeat before all five had appeared. Feedback debug showed one exposure, not duplicate-effect inflation. After reload, the next target showed two exposures. The fixed action footer remained aligned with the viewport bottom at 844 px.

Review status and medical eligibility are separate gates. Draft-generation coverage must not be confused with active question coverage; the content validator reports both counts and shortfalls.
