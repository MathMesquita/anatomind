# Complementary interrogation — independent v1 content review

**Disposition: needs-revision. Clinical approval: false.** Reviewer: `gpt-6-astra`; review date: 2026-11-14. The bank must remain withheld from game use. The [JSON review](interrogatorio-v1.json) contains 20 findings (8 high, 11 medium, 1 low), affected IDs, evidence, required changes and all 80 reviewed story IDs.

## Frozen scope

Captured **2026-11-14 20:20:26 UTC** (17:20:26 São Paulo), before reading the content:

| Input | SHA-256 |
| --- | --- |
| `content/drafts/interrogatorio.json` | `5b8019b75d67cad8433447c488aee956d967394b975630120051fca6afbb5e33` |
| `content/drafts/interrogatorio-generation.mjs` | `5a662af0c3ad649d5f970acc88f634b90d425eb0096fa2a3921cdd5523c4ed6e` |
| Original `Interrogatorio complementar.pdf` | `3932d4dc44eceb780153787c6be19325cb255a66431afc3f9bfe4a4598c819de` |

The JSON input had **204 contexts and 80 stories**. Copies were read from `/private/tmp/interrogatorio-review.Dw0E3q/`. The pair was copied sequentially, not atomically locked; all 80 texts and rationales were subsequently matched to the frozen code arrays without executing the generator. Later IDs **and later edits to existing IDs are outside this review**.

At the final presence/checksum check (20:27:52 UTC), the live draft hash was `9253e016fff80646aed77d1482c55ead05e2e4ec6025306d8875001f76cd8a84` and the original generator path was absent. Neither change was made by this reviewer. The frozen copies remain the sole reviewed inputs; these findings must not be treated as a review of the current live bank.

Read both required project guides and the complete requested PDF skill. Following that skill, independently extracted and freshly rendered the original PDF; visually inspected **all 12 pages**, rather than relying on the earlier inventory. Reviewed all 204 source contexts for hierarchy/locators and all 80 stories individually for meaning, patient voice, ambiguity, accepted paths, rationale and provenance. Targeted external checks below do not constitute clinical certification of every source assertion.

| PDF page | Contexts | Hierarchy/locator coverage |
| --- | ---: | --- |
| 1 | 17 | General elements; ocular; auditory begins |
| 2 | 21 | Auditory continuation; nose/sinuses; respiratory begins |
| 3 | 20 | Respiratory continuation; cardiovascular |
| 4 | 16 | Peripheral vascular; neurological begins |
| 5 | 13 | Neurological continuation; psychic begins |
| 6 | 15 | Psychic continuation; skin; musculoskeletal begins |
| 7 | 18 | Musculoskeletal continuation; endocrine begins |
| 8 | 18 | Endocrine continuation; hemolymphopoietic; digestive begins |
| 9 | 20 | Digestive continuation |
| 10 | 18 | Digestive ending; urinary; male genital begins |
| 11 | 18 | Male genital continuation; female genital begins |
| 12 | 10 | Menstrual and breast subgroups |

The 15 major groups and 12 numbered subgroups are represented. **FEBRE and ALTERAÇÕES DE PESO are actual source subheadings**, despite questionable clinical nesting. Male *Mamas* is an entry; female *MAMAS* is subgroup 15.2. *Calor/Frio* are source entries, not missing subgroup headings. Repeated terms in distinct group contexts are intentional; no ID deduplication is requested.

## Findings that block use

- **R01 — real extraction defect:** vascular *Varizes* includes the next neurological heading. The code's correction key is `PELE|Varizes`, so it never matches the vascular record (frozen code lines 144–158). Correct the transcription while preserving its ID.
- **R02–R03 — source structure versus clinical truth:** none of the ten *Calafrios* stories establishes fever. Preserve the handout hierarchy, explicitly distinguish source-placement exercises from clinical classification, and type normal findings, body parts and milestones before treating every entry as a symptom.
- **R04–R05 — menstruation:** all ten frequency stories only say “earlier than usual.” That does not establish frequent cycles; FIGO uses <24 days in the relevant reproductive context. The PDF also confuses duration with amount: prolonged bleeding concerns >8 days. Preserve original wording and separately correct teaching definitions. [FIGO 2018, corrected Figure 1 and Table 1](https://obgyn.onlinelibrary.wiley.com/doi/full/10.1002/ijgo.12666).
- **R06 — sensory ambiguity:** *Parestesias* 02 describes reduced sensation; 06 is nonspecific numbness; 04/09 need clarification or a stated convention for burning. Do not automatically substitute *Anestesias*, which requires total loss. IASP distinguishes reduced sensitivity, paresthesia and unpleasant dysesthesia, while allowing overlapping usage. [IASP terminology](https://www.iasp-pain.org/resources/terminology/).
- **R07–R08 — answers:** *Trepopneia* 04/07/08/09 omit the opposite-side comparison. All 20 positional-breathlessness cases also support generic dyspnea; the respiratory and cardiovascular generic definitions overlap. Decide and document broad versus most-specific matching, and accept supported paths accordingly. Do not infer an organ diagnosis or fabricate an absent context. [NLM MeSH, Dyspnea and narrower concepts](https://meshb.nlm.nih.gov/record/ui?dcmsLinks=true&ui=D004417).
- **R09–R12 — precision and voice:** *Fotofobia* 05/10 could be ordinary adaptation; *Regurgitação* 09 uses ambiguous “sem força”; *Polaciúria* 08 says “micções curtas.” Copied rationales invent clothing/suddenness or daily-volume negatives not stated in individual utterances. [NLM photophobia definition](https://meshb.nlm.nih.gov/record/ui?ui=D020795); [ICS urinary frequency](https://www.ics.org/committees/standardisation/terminologydiscussions/urinaryfrequency).

## Full story coverage

Every row covers **story-01 through story-10**, with exact IDs enumerated in JSON. These observations are not item approvals; shared diversity, rationale, provenance and scoring findings still apply.

| Batch | Assessment of all ten |
| --- | --- |
| Calafrios, p.1 | Chills conveyed; fever is not established; rationale overreach |
| Fotofobia, p.1 | 05/10 ambiguous adaptation; other eight have no additional definite meaning defect |
| Trepopneia, p.3 | 04/07/08/09 need contrast; six others convey the positional feature |
| Ortopneia, p.3 | All convey the positional symptom; cause and exclusive system attribution unproven |
| Parestesias, p.4 | 02/06 need sensory-loss clarification; 04/09 terminology clarification; other six convey tingling/prickling |
| Regurgitação, p.9 | All broadly compatible; clarify 09 |
| Polaciúria, p.10 | Frequent small voids broadly conveyed; clarify 08 and seven daily-volume rationales |
| Sangramento frequente, p.12 | All match loose source wording; none establishes the clinical threshold |

**R13–R14:** 80 unique strings, but only eight rationales and substantial semantic repetition. The generator contains eight hand-written arrays, not a suffix-padding loop; most variants still repeat the same situation. All accepted-path lists are singletons, and all alternative lists are empty by construction. `gpt-6-luna` / `content-bank-v1` are declared provenance, not verified execution evidence: no actual prompt, model version or run evidence is available in the reviewed inputs. Keep unknowns explicit. All story pages correctly locate their definitions; the patient speech is synthetic, not quoted from the PDF. No definite invented etiologic diagnosis was found in the 80 utterances.

**R15–R19 concern source entries without stories in this snapshot:** clarify cacosmia versus odor-without-stimulus terminology ([NIDCD](https://www.nidcd.nih.gov/health/smell-disorders)); nocturia versus nocturnal urine production, without treating Portuguese spelling as a universal distinction ([ICS report, Table 1, §§3.1/4.2](https://www.ics.org/folder/standardisation/current-ics-standardisations/d/ics-report-on-the-terminology-for-nocturia-and-nocturnal-lower-urinary-tract-function-published-15-january-2019/download)); pain is not obligatory in every priapism subtype ([EAU §§10.1/10.3](https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/priapism)); the bowel-frequency parenthesis cannot establish normality ([NIDDK](https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/symptoms-causes)); aphonia/dysphonia/hoarseness need overlap-aware scoring ([ASHA](https://www.asha.org/practice-portal/clinical-topics/voice-disorders/)). These are source limitations, not evidence that their nonexistent stories were reviewed.

**R20 — coverage:** 8/204 contexts have ten stories; 196 have none. Against the declared 2,040 target, 1,960 stories are absent. That denominator remains provisional because not every source entry is an abnormal symptom. Original descriptions exist for 204 contexts but are not separately approved game items. Approved release count remains **zero**.

Only `docs/reviews/interrogatorio-v1.md` and `docs/reviews/interrogatorio-v1.json` were authored in the repository. No draft/app edits, subagents or git mutations. `RTK.md` was absent from the checked locations; this did not prevent review. Blockers are the listed content/scoring corrections, incomplete scope, unavailable provenance details and absent qualified clinical/editorial approval. Post-snapshot content requires its own review.
