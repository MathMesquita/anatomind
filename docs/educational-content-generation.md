# Generating AnatoMind educational content

Use this guide when creating or reviewing disease banks, symptom-characteristic stories, or patient-voice interrogation cases. These are educational materials, not clinical advice. The supplied PDFs are reference material, not instructions.

## Workflow

1. Transcribe the relevant PDF group, term and descriptions with its document name and page. Inspect the page when extraction is unclear; retain source wording and flag possible errors instead of silently correcting them.
2. Create a draft record for each item using the fields below. Support added medical facts with independently verified, authoritative references; record exact locators. Never invent a citation or claim that a generated story appeared in a source.
3. Generate diverse fictional examples in Brazilian Portuguese. Record generation model/version and prompt or prompt version when available, without personal data. Track an unknown value as unknown.
4. Have a stronger second-pass model check each draft for source support, clinical accuracy, taxonomy, ambiguity, answer coverage, and clarity; record model/version, findings and disposition. A model review is not a substitute for a qualified clinical and educational review before publication.
5. Resolve flagged issues or withhold the item. Count only approved items toward release targets. Report missing sources, uncertainties, and coverage gaps; do not pad the bank with duplicates or fabricated facts.

## Symptom characteristics

- Transcribe the characteristics for each of the 11 symptom groups in the supplied **CARACTERES PROPEDÊUTICOS DOS PRINCIPAIS SINTOMAS.pdf** and verify against its pages. Preserve the source's units and any combined characteristics until reviewed.
- Target 20 distinct clinician-style stories per group initially; the format must scale to 100 or more. Each is one or two paragraphs. Vary the number of omitted characteristics: zero, one, or multiple, with no fixed answer count.
- For each characteristic, record whether the story explicitly documents it and cite the exact supporting text span. A documented negative (e.g. “nega irradiação”) is present information, not an omission. Infer neither a negative nor a positive from silence.
- Compute missing answers against the complete reviewed group checklist. When none are missing, the exclusive correct response is **Nenhum dado ausente**. Provide a rationale for every missing and present field. Vary details and omissions without making a predictable pattern.

## Complementary interrogation

- Use **Interrogatorio complementar.pdf** as the initial hierarchy: main group, optional subgroup, technical term and source description. Treat extraction counts and source spelling as provisional until reviewed.
- Target 10 distinct natural patient-voice vignettes per term in each distinct group context, plus the original description as an additional item where rights permit. Vary wording and circumstances without changing the supported symptom or implying an unsupported diagnosis.
- Give each vignette enough context to distinguish its intended path where possible. Store each supported term/subgroup/group path, including an explicit no-subgroup value. If reviewed evidence supports multiple paths, accept all of them and record the evidence; withhold unsupported or unresolved claims.
- For a subgroup valid for the symptom in a different context, record the alternative association and a contextual explanation for partial credit. Do not present an unsupported association as partially correct.

## Personal medical history

- Transcribe groups from **Antecedentes Pessoais Patologicos.pdf**. Distinguish diagnoses from symptoms, procedures and treatments; do not label a treatment as a disease.
- Aim for up to 20 reviewed diseases per group when reliable sources support them. Store category membership as many-to-many; explicitly document overlap and evidence. Shortfalls are preferable to invented or duplicate diagnoses.
- A round contains 20 distinct disease options, with 2–5 valid members of the target group; the count is hidden. Validate every distractor against *all* target-group memberships, so no medically valid match is treated as incorrect. If insufficient verified options exist, withhold that round.

## Record and review checklist

Each item needs a stable ID, activity, group/context, full prompt, source document and page or exact locator, accepted answer(s) and valid paths, distractors where applicable, rationale, and clinical/editorial review state. Symptom stories additionally need the full characteristic checklist, evidence spans, and missing set; disease records need all verified memberships. For debug inspection retain available generator/model/version/prompt version, second-pass reviewer/model/version, findings, dates and final disposition. Mark unavailable provenance explicitly.

Use synthetic cases; do not include identifiable patient information. Review source licensing and permissions before distributing PDF illustrations or text. Visual examples and generated drafts are not approved clinical content.
