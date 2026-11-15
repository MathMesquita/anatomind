import { test } from "node:test"
import assert from "node:assert/strict"
import { adaptCharacteristicRelease } from "../src/lib/characteristic-bank.ts"

function fixture() {
  const source = { documentId: "lecture", page: 2, locator: "Grupo de teste" }
  return {
    release: { id: "test-v1", prototype: true, clinicalApproval: false }, review: { status: "model-reviewed" },
    sourceDocuments: [{ id: "lecture", filename: "lecture.pdf", pages: 3 }],
    groups: [{ id: "symptom", label: "Sintoma de teste", source, fields: [{ id: "location", label: "Localização" }, { id: "volume", label: "Volume (ml)", sourceLabel: "Rótulo arquivístico" }] }],
    stories: [{ id: "test-1", groupId: "symptom", text: "Local: braço. Volume pequeno.", source, generation: { model: "fixture" }, review: { status: "model-reviewed" }, answer: { policy: "missing-context-v2", fieldIds: ["volume"], noneMissing: false, exclusiveNoneLabel: "Nenhum dado ausente" }, evidence: [{ fieldId: "location", status: "documented", quote: "braço", start: 7, end: 12, rationale: "Local explícito." }, { fieldId: "volume", status: "partial", quote: "Volume pequeno", start: 14, end: 28, rationale: "Quantidade não foi medida na unidade deste roteiro." }] }],
  }
}

test("release adapter preserves group-specific checklists, partial answers and provenance", () => {
  const [story] = adaptCharacteristicRelease(fixture())
  assert.deepEqual(story.fields, ["Localização", "Volume (ml)"])
  assert.deepEqual(story.missing, ["Volume (ml)"])
  assert.equal(story.fieldKeys["Volume (ml)"], "volume")
  assert.equal(story.sourceLabel, "lecture.pdf · página 2")
  assert.ok(story.provenance)
  assert.ok(!story.fields.includes("Rótulo arquivístico"))
})

test("unreviewed, unknown, and inconsistent answer keys cannot enter the playable adapter", () => {
  const bank = fixture()
  bank.stories[0].review.status = "draft"
  assert.throws(() => adaptCharacteristicRelease(bank), /revisão/)
  bank.stories[0].review.status = "model-reviewed"
  bank.stories[0].evidence[1].status = "addressed-unknown"
  assert.throws(() => adaptCharacteristicRelease(bank), /desconhecido/)
  bank.stories[0].evidence[1].status = "partial"
  bank.stories[0].answer.fieldIds = []
  assert.throws(() => adaptCharacteristicRelease(bank), /gabarito/)
})

test("explicit none is correct only for a complete documented checklist", () => {
  const bank = fixture(), item = bank.stories[0]
  item.evidence[1].status = "documented"
  item.answer.fieldIds = []; item.answer.noneMissing = true
  assert.deepEqual(adaptCharacteristicRelease(bank)[0].missing, [])
  item.answer.noneMissing = false
  assert.throws(() => adaptCharacteristicRelease(bank), /gabarito/)
})
