import { test } from "node:test"
import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { validateInterviewBatches } from "../tools/validate-interview-batches.mjs"

function fixture() {
  const source = { documentId: "source", page: 1, locator: "Contexto A" }
  const generation = { model: "test-fixture", promptVersion: "test" }
  const base = { schemaVersion: 1, topic: "interrogatorio", sourceDocuments: [{ id: "source", filename: "fixture.pdf", pages: 1 }], generation, review: { status: "draft" }, contexts: [{ id: "a", term: "Termo", group: "Grupo", subgroup: null, originalDescription: "Descrição da fonte.", source, storyEligibility: { status: "eligible-draft" } }], stories: [] }
  const bytes = Buffer.from(JSON.stringify(base))
  const batch = { schemaVersion: 1, topic: "interrogatorio", baseSha256: createHash("sha256").update(bytes).digest("hex"), assignedContextIds: ["a"], generation, review: { status: "draft" }, stories: Array.from({ length: 10 }, (_, index) => {
    const text = `Descrição fictícia ${index}.`
    return { id: `a-${index}`, contextId: "a", text, acceptedContextIds: ["a"], alternativeContextIds: [], rationale: "Exemplo de teste.", source, generation, review: { status: "draft" }, acceptedPathEvidence: [{ contextId: "a", quote: text, sourceQuote: "Descrição da fonte.", source, referenceIds: [] }], alternativePathEvidence: [] }
  }) }
  return { bytes, batch }
}

test("complete draft batches validate without changing the reviewed base", () => {
  const { bytes, batch } = fixture(), before = Buffer.from(bytes)
  const result = validateInterviewBatches(bytes, [batch])
  assert.deepEqual(result.errors, [])
  assert.equal(result.addedStories, 10)
  assert.equal(result.clinicalApproval, false)
  assert.equal(result.appIntegration, false)
  assert.equal(result.complete, true)
  assert.deepEqual(bytes, before)
})

test("stale bases, incomplete sets, and overlapping assignments are rejected", () => {
  const { bytes, batch } = fixture()
  assert.ok(validateInterviewBatches(bytes, [{ ...batch, baseSha256: "stale" }]).errors.some((message) => message.includes("fingerprint")))
  assert.ok(validateInterviewBatches(bytes, [{ ...batch, stories: batch.stories.slice(1) }]).errors.some((message) => message.includes("exactly 10")))
  assert.ok(validateInterviewBatches(bytes, [batch, batch]).errors.some((message) => message.includes("assigned more than once")))
})

test("fabricated source evidence, missing paths, unknown references, and approval claims fail", () => {
  const { bytes, batch } = fixture()
  batch.stories[0].acceptedPathEvidence[0].sourceQuote = "Inventado"
  batch.stories[1].acceptedPathEvidence = []
  batch.stories[2].acceptedPathEvidence[0].referenceIds = ["unknown"]
  batch.stories[3].review.clinicalApproval = true
  const errors = validateInterviewBatches(bytes, [batch]).errors
  for (const phrase of ["source quote", "every path", "unknown reference", "draft-only gate"]) assert.ok(errors.some((message) => message.includes(phrase)), phrase)
})

test("partial checkpoints report incomplete coverage without relaxing evidence checks", () => {
  const { bytes, batch } = fixture()
  batch.stories = batch.stories.slice(0, 5)
  const result = validateInterviewBatches(bytes, [batch], undefined, { allowPartial: true })
  assert.equal(result.structuralPass, true)
  assert.equal(result.complete, false)
  assert.equal(result.addedStories, 5)
  assert.ok(result.warnings.some((message) => message.includes("incomplete context")))
  batch.stories[0].acceptedPathEvidence[0].quote = "Fabricated quote"
  assert.equal(validateInterviewBatches(bytes, [batch], undefined, { allowPartial: true }).structuralPass, false)
})
