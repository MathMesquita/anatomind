import { test } from "node:test"
import assert from "node:assert/strict"
import { adaptInterviewRelease } from "../src/lib/interview-bank.ts"
import { NO_SUBGROUP, scoreInterview } from "../src/lib/anamnese.ts"
import { starterInterviews, interviewQuestions, interviewReleases, interviewCatalog, getInterviewCatalog } from "../src/data/interviews.ts"
import { addExposure, emptyExposure, prioritize } from "../src/lib/sampling.ts"

function fixture() {
  const contexts = [
    { id: "positional", term: "Ortopneia", group: "Cardiovascular", subgroup: null },
    { id: "breathing", term: "Dispneia", group: "Respiratório", subgroup: "Respiração" },
    { id: "other", term: "Ortopneia", group: "Outro aparelho", subgroup: "Outro contexto" },
  ].map((context, index) => ({ ...context, originalDescription: "Descrição arquivística potencialmente imprecisa.", source: { documentId: "lecture", page: index + 1, locator: context.id }, sourceCautions: ["Não equivale a etiologia."], review: { status: "draft" } }))
  const text = "Fico sem ar deitada e melhora ao sentar."
  const evidence = (context) => ({ contextId: context.id, quote: text, focusQuote: "sem ar deitada", source: context.source, sourceQuote: "Descrição arquivística", rationale: "Fala sustenta conceito no contexto documentado.", referenceIds: [], definitionBasis: "source-description" })
  const decision = { id: "case-1", contextId: "positional", reviewStatus: "completed", disposition: "model-reviewed", hold: false, reviewedText: text, textSha256: "fixture", storyObjectSha256: "fixture", acceptedContextIds: ["positional", "breathing"], alternativeContextIds: [], supportedAcceptedPaths: contexts.slice(0, 2).map((context) => ({ contextId: context.id, evidenceQuote: "sem ar deitada", verdict: "supported-for-source-based-term-matching", definitionBasis: "source-description" })) }
  return {
    topic: "interrogatorio", release: { id: "fixture-v1", prototype: true, clinicalApproval: false }, review: { status: "model-reviewed", reviewer: "preserved" },
    sourceDocuments: [{ id: "lecture", filename: "lecture.pdf", pages: 3 }], generation: { model: "fixture", prompt: "preserved" },
    answerPolicy: { mode: "all-source-supported-coherent-paths" }, clinicalReferences: [], contexts,
    stories: [{ id: "case-1", contextId: "positional", text, rationale: "A falta de ar aparece ao deitar e melhora ao sentar.", source: contexts[0].source, acceptedContextIds: ["positional", "breathing"], alternativeContextIds: [], acceptedPathEvidence: contexts.slice(0, 2).map(evidence), alternativePathEvidence: [], generation: { declaredModel: "fixture", actualModel: "unknown" }, repairHistory: ["preserved"], review: { status: "model-reviewed", clinicalApproval: false, independentReview: { decision } } }],
  }
}

test("all supported terms and coherent pairs survive without forcing a single organizing path", () => {
  const bank = fixture(), [question] = adaptInterviewRelease(bank)
  assert.equal(question.id, "case-1")
  assert.equal(question.term, "Ortopneia")
  assert.deepEqual(question.acceptedTerms, ["Dispneia"])
  assert.equal(question.subgroup, NO_SUBGROUP)
  assert.deepEqual(question.paths, [{ subgroup: NO_SUBGROUP, group: "Cardiovascular" }, { subgroup: "Respiração", group: "Respiratório" }])
  const terms = [question.term, ...question.acceptedTerms]
  assert.equal(scoreInterview(["Dispneia", "Respiração", "Respiratório"], terms, question.paths), 30)
  assert.equal(scoreInterview(["Ortopneia", NO_SUBGROUP, "Cardiovascular"], terms, question.paths), 30)
  assert.equal(scoreInterview(["Dispneia", "Respiração", "Cardiovascular"], terms, question.paths), 15)
  assert.equal(question.sourceLabel, "lecture.pdf · página 1")
  assert.match(question.contextExplanation, /posição impressa no PDF/)
  assert.ok(question.contextExplanation.startsWith(`${bank.stories[0].rationale} Grupo e subgrupo`))
  assert.ok(!question.contextExplanation.includes(bank.contexts[0].originalDescription))
  assert.deepEqual(question.provenance.storyRecord.repairHistory, ["preserved"])
  assert.deepEqual(question.provenance.context.sourceCautions, ["Não equivale a etiologia."])
  assert.deepEqual(question.provenance.generation, bank.generation)
  assert.equal(adaptInterviewRelease(bank).length, 1, "inventory entries never become extra questions")
})

test("only evidence-backed same-concept other subgroups can earn +5", () => {
  const bank = fixture(), story = bank.stories[0], decision = story.review.independentReview.decision
  story.alternativeContextIds = ["other"]; decision.alternativeContextIds = ["other"]
  story.alternativePathEvidence = [{ ...story.acceptedPathEvidence[0], contextId: "other", source: bank.contexts[2].source }]
  const [question] = adaptInterviewRelease(bank)
  assert.deepEqual(question.alternatives, ["Outro contexto"])
  assert.equal(scoreInterview([question.term, "Outro contexto", "Cardiovascular"], [question.term], question.paths, question.alternatives), 25)
  story.alternativePathEvidence = []
  assert.throws(() => adaptInterviewRelease(bank), /evidence/)
  story.alternativePathEvidence = [{ ...story.acceptedPathEvidence[0], contextId: "other", source: bank.contexts[2].source }]
  bank.contexts[2].term = "Causa presumida"
  assert.throws(() => adaptInterviewRelease(bank), /same concept/)
  bank.contexts[2].term = "Ortopneia"; bank.contexts[2].subgroup = null
  assert.throws(() => adaptInterviewRelease(bank), /another subgroup/)
})

test("adapter rejects holds, unreviewed items, duplicate IDs, unknown paths and bad evidence", () => {
  const cases = [
    [(b) => { b.release.prototype = false }, /prototype/],
    [(b) => { b.release.clinicalApproval = true }, /prototype/],
    [(b) => { b.stories[0].review.status = "draft" }, /unreviewed/],
    [(b) => { b.stories[0].review.independentReview.decision.hold = true }, /held/],
    [(b) => { b.stories[0].review.independentReview.decision.reviewStatus = "pending" }, /incomplete/],
    [(b) => { b.stories.push(b.stories[0]) }, /duplicate/],
    [(b) => { b.contexts.push(b.contexts[0]) }, /duplicate/],
    [(b) => { b.stories[0].acceptedContextIds.push("unknown") }, /evidence|path/],
    [(b) => { b.stories[0].acceptedPathEvidence[0].quote = "invented" }, /evidence/],
    [(b) => { b.stories[0].acceptedPathEvidence[0].sourceQuote = "invented" }, /evidence/],
    [(b) => { b.stories[0].acceptedPathEvidence[0].source.page = 3 }, /source/],
    [(b) => { b.stories[0].acceptedPathEvidence[0].referenceIds = ["unknown"] }, /reference/],
    [(b) => { b.stories[0].acceptedPathEvidence[0].definitionBasis = "inferred-etiology" }, /definition/],
    [(b) => { b.stories[0].review.independentReview.decision.supportedAcceptedPaths.pop() }, /supported paths/],
  ]
  for (const [mutate, expected] of cases) {
    const bank = JSON.parse(JSON.stringify(fixture()))
    mutate(bank)
    assert.throws(() => adaptInterviewRelease(bank), expected)
  }
})

test("Calafrios uses the printed FEBRE heading with an explicit non-diagnostic warning", () => {
  const bank = fixture(), context = bank.contexts[0]
  context.term = "Calafrios"; context.group = "ELEMENTOS GERAIS"; context.subgroup = "FEBRE:"
  const [question] = adaptInterviewRelease(bank)
  assert.equal(question.subgroup, "FEBRE:")
  assert.match(question.contextExplanation, /não comprovam febre clínica/)
})

test("known literal-source terminology aliases interoperate while retaining quote/source/reference checks", () => {
  const bank = fixture(), story = bank.stories[0]
  story.acceptedPathEvidence[0].definitionBasis = "source-description-with-verified-terminology"
  story.review.independentReview.decision.supportedAcceptedPaths[0].definitionBasis = "source-description-with-institutional-terminology-caution"
  assert.equal(adaptInterviewRelease(bank).length, 1)
  story.acceptedPathEvidence[0].referenceIds = ["unknown"]
  assert.throws(() => adaptInterviewRelease(bank), /reference/)
  story.acceptedPathEvidence[0].referenceIds = []
  story.acceptedPathEvidence[0].sourceQuote = "invented"
  assert.throws(() => adaptInterviewRelease(bank), /evidence/)
  story.acceptedPathEvidence[0].sourceQuote = "Descrição arquivística"
  story.review.independentReview.decision.supportedAcceptedPaths[0].definitionBasis = "unreviewed-alias"
  assert.throws(() => adaptInterviewRelease(bank), /not supported/)
})

test("starter demonstrations stay exact; the active bank is the frozen reviewed releases", () => {
  assert.deepEqual(starterInterviews.map(({ term, story, page }) => [term, story, page]), [
    ["Diplopia", "Vejo dois objetos onde existe apenas um.", 1],
    ["Zumbidos", "Escuto um apito no ouvido mesmo quando está tudo silencioso.", 2],
    ["Rinorreia", "Meu nariz escorre e tenho coriza.", 2],
    ["Ortopneia", "Fico com falta de ar quando me deito e preciso me sentar para respirar melhor.", 3],
  ])
  const starter = getInterviewCatalog(starterInterviews)
  assert.deepEqual(starter.subgroups, ["Aparelho ocular", "Aparelho auditivo", "Nariz e seios paranasais", "Distúrbios da consciência"])
  assert.deepEqual(starter.groups, ["Órgãos dos sentidos", "Aparelho cardiovascular", "Aparelho respiratório", "Aparelho digestório"])
  assert.equal(starter.terms.length, 4)
  assert.equal(starter.reviewedPrototype, false)
  assert.equal(interviewCatalog.noSubgroup, NO_SUBGROUP)
  const bank = fixture(), questions = adaptInterviewRelease(bank), catalog = getInterviewCatalog(questions, bank.contexts)
  assert.deepEqual(catalog.terms, ["Ortopneia", "Dispneia"])
  assert.ok(catalog.subgroups.includes("Outro contexto"))
  assert.ok(catalog.groups.includes("Outro aparelho"))
  assert.ok(!catalog.groups.includes("Aparelho digestório"), "fallback labels are replaced by supplied source inventory")
  assert.equal(catalog.stories, 1)
})

test("active interview bank holds only frozen reviewed stories, each once, none withheld", () => {
  const [main, ...batches] = interviewReleases
  assert.equal(main.stories.length, 321)
  assert.equal(main.coverage.withheld.length, 19)
  assert.equal(interviewQuestions.length, 321 + batches.reduce((sum, batch) => sum + batch.stories.length, 0))
  const ids = interviewQuestions.map((question) => question.id)
  assert.equal(new Set(ids).size, ids.length)
  const withheld = new Set(interviewReleases.flatMap((bank) => bank.coverage.withheld.map((item) => item.id)))
  assert.ok(ids.every((id) => !withheld.has(id)))
  assert.ok(interviewReleases.every((bank) => bank.release.prototype === true && bank.release.clinicalApproval === false))
  assert.ok(interviewQuestions.every((question) => question.provenance !== undefined && !starterInterviews.includes(question)))
  assert.equal(interviewCatalog.reviewedPrototype, true)
  assert.equal(interviewCatalog.stories, interviewQuestions.length)
})

test("replaying a ten-question interview round does not repeat the previous round", () => {
  let history = emptyExposure(), previous = new Set()
  for (let round = 0; round < 20; round++) {
    const picked = prioritize(interviewQuestions, (question) => question.id, history, "questions").slice(0, 10)
    assert.equal(picked.filter((question) => previous.has(question.id)).length, 0, `round ${round}`)
    for (const question of picked) history = addExposure(history, [question.id], [])
    previous = new Set(picked.map((question) => question.id))
  }
})
