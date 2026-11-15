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
- Body-region questions balance regions first, then their verified views. The frozen prototype release contains 71 targets covering 50 of the source's 55 named regions; each round draws 10 distinct regions. Multiple views do not give a region extra weight. Distractors stay within the body or head family. Five regions without a reliably localized numeral cannot be correct targets.
- Old target-only exposure records also count toward their region's history. Updating from the five-target prototype does not reset those regions to unseen. Selection derives this information without mutating stored history or counting a planned question as displayed.
- Interrogation balances the available cases and eligible stage alternatives. The correct subgroup and “Não tem sub-grupo” remain available; every stage still has four choices.
- Symptom-characteristic questions always show the entire checklist and the explicit none option. Novelty may reorder those options, never hide a required field. A checklist is recorded only after the story has been hidden.
- Disease sampling supports 20-option subsets with a hidden, variable 2–5 positive diseases. It prefers less-exposed positives and eligible negatives, filters every known member out of the negative pool, and withholds an undersupplied round. The demos currently contain exactly 20 eligible options per group, so they still require all four respiratory or all three ocular positives to fill a round; their selection cannot meaningfully vary until the larger reviewed bank is connected. Unshown positive diseases are not listed as missed answers in feedback.

## Verification

Automated tests cover unseen-first ordering, seeded probability comparisons, nonzero repeat probability, duplicate removal, required answers, every correct-answer position, persistence, storage failures, actual-display-only counting, abandoned rounds, and atlas concept/distractor selection.

Initial browser verification on a 390 × 844 viewport opened and abandoned five starter-region rounds: the first targets were 3, 31, 25, 6, and 24, with no repeat before all five had appeared. Feedback debug showed one exposure, not duplicate-effect inflation. After reload, the next target showed two exposures.

The expanded release passed 500 seeded rounds in automated tests: all 71 targets were reachable and every round contained 10 distinct regions. A production-preview browser round on 2026-11-15 answered numbers 26, 19, 37, 10, 25, 11, 45, 18, 5, and 54 correctly for 100 points. Each question had four choices; every feedback footer ended at the 844 px viewport bottom without horizontal overflow. This is sampling and interface verification, not clinical approval.

Review status and medical eligibility are separate gates. Draft-generation coverage must not be confused with active question coverage; the content validator reports both counts and shortfalls.
