import { test } from "node:test"
import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { prepareCharacteristicRelease } from "../tools/prepare-characteristic-release.mjs"
import { adaptCharacteristicRelease } from "../src/lib/characteristic-bank.ts"

const hash = (value) => createHash("sha256").update(value).digest("hex")
test("the shipped bank is exactly the independently reviewed 192-story subset across all eleven groups", () => {
  const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url))
  const release = JSON.parse(read("content/releases/caracteres.v1.json"))
  const expected = prepareCharacteristicRelease(read("content/drafts/caracteres.json"), read("docs/reviews/caracteres-v2.json"), { sourceRegistry: JSON.parse(read("content/sources.json")) })
  const sorted = (bank) => ({ ...bank, stories: [...bank.stories].sort((a, b) => a.id.localeCompare(b.id)) })
  assert.deepEqual(sorted(release), sorted(expected))
  const adapted = adaptCharacteristicRelease(release)
  assert.equal(adapted.length, 192)
  assert.equal(new Set(adapted.map((story) => story.groupId)).size, 11)
  assert.equal(release.coverage.withheld.length, 28)
  for (const story of adapted) {
    assert.ok(story.provenance && story.sourceLabel)
    assert.ok(!release.coverage.withheld.some((item) => item.id === story.id))
    assert.deepEqual(story.missing, story.fields.filter((label) => release.stories.find((item) => item.id === story.id).answer.fieldIds.includes(story.fieldKeys[label])))
  }
  assert.ok(adapted.some((story) => story.missing.length === 0))
  assert.ok(adapted.some((story) => story.missing.length === 1))
  assert.ok(adapted.some((story) => story.missing.length > 1))
})
function fixture() {
  const source = { documentId: "lecture", page: 1, locator: "Teste" }
  const draft = { schemaVersion: 1, topic: "caracteres", sourceDocuments: [{ id: "lecture", filename: "lecture.pdf", pages: 1 }], generation: { model: "fixture", promptVersion: "test" }, review: { status: "draft" }, evidencePolicy: { id: "missing-context-v2" }, groups: [{ id: "group", label: "Grupo", source, fields: [{ id: "field", label: "Campo" }] }], stories: ["a", "b"].map((id) => ({ id, groupId: "group", text: `Registro ${id}.`, source, generation: { model: "fixture", promptVersion: "test" }, review: { status: "draft" }, evidence: [{ fieldId: "field", status: "omitted", quote: null, start: null, end: null, rationale: "Sem informação." }], missingFieldIds: ["field"], incompleteFieldIds: [], unknownFieldIds: [], missingContextFieldIds: ["field"], answer: { policy: "missing-context-v2", fieldIds: ["field"], noneMissing: false, exclusiveNoneLabel: "Nenhum dado ausente" } })) }
  const bytes = Buffer.from(JSON.stringify(draft))
  const review = { reviewId: "review-v2", status: "completed-independent-review", draftSha256: hash(bytes), stories: draft.stories.map((story, index) => ({ id: story.id, textSha256: hash(story.text), disposition: index ? "needs-revision" : "model-reviewed", prototypeEligible: !index, hold: !!index, answerFieldIds: index ? null : ["field"], reason: "Test fixture." })) }
  return { bytes, review }
}

test("prototype release includes only explicit reviewed eligibility and preserves held records in coverage", () => {
  const { bytes, review } = fixture()
  const release = prepareCharacteristicRelease(bytes, Buffer.from(JSON.stringify(review)))
  assert.deepEqual(release.stories.map((story) => story.id), ["a"])
  assert.equal(release.coverage.withheld[0].id, "b")
  assert.equal(release.release.clinicalApproval, false)
  assert.equal(adaptCharacteristicRelease(release).length, 1)
})

test("partial reports, changed inputs, unreviewed text, incomplete coverage, and altered keys fail closed", () => {
  const { bytes, review } = fixture()
  const prepare = (value) => prepareCharacteristicRelease(bytes, Buffer.from(JSON.stringify(value)))
  assert.throws(() => prepare({ ...review, status: "partial-independent-review" }), /completed independent/)
  assert.throws(() => prepare({ ...review, draftSha256: "stale" }), /fingerprint/)
  assert.throws(() => prepare({ ...review, stories: review.stories.slice(1) }), /every draft story/)
  review.stories[0].textSha256 = "stale"
  assert.throws(() => prepare(review), /text fingerprint/)
  review.stories[0].textSha256 = hash("Registro a."); review.stories[0].answerFieldIds = []
  assert.throws(() => prepare(review), /answer differs/)
})
