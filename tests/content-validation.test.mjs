import { test } from "node:test"
import assert from "node:assert/strict"
import { validateContent } from "../tools/validate-content.mjs"

const provenance = { model: "fixture", promptVersion: "test-v1" }
const source = { documentId: "lecture", page: 1, locator: "DOR, checklist" }
const base = () => ({ schemaVersion: 1, topic: "caracteres", sourceDocuments: [{ id: "lecture", filename: "lecture.pdf", pages: 3 }], generation: provenance, review: { status: "draft" } })
const fixture = () => ({
  ...base(),
  groups: [{ id: "dor", label: "Dor", source, fields: [{ id: "local", label: "Localização" }, { id: "intensity", label: "Intensidade" }] }],
  stories: [{ id: "dor-001", groupId: "dor", text: "Paciente relata dor lombar.", missingFieldIds: ["intensity"], evidence: [{ fieldId: "local", quote: "dor lombar", rationale: "Local explicitamente registrado." }, { fieldId: "intensity", quote: null, rationale: "Nenhuma intensidade foi registrada." }], source, generation: provenance, review: { status: "draft" } }],
})

test("content coverage shortfalls are explicit, never mistaken for clinical approval", () => {
  const result = validateContent(fixture())
  assert.equal(result.structuralPass, true)
  assert.equal(result.clinicalApproval, false)
  assert.equal(result.counts.stories, 1)
  assert.equal(result.counts.targetStories, 20)
  assert.ok(result.warnings.includes("dor: 1/20 stories"))
})

test("evidence must quote the actual story and agree with every missing field", () => {
  const bank = fixture()
  bank.stories[0].missingFieldIds = []
  bank.stories[0].evidence[0].quote = "dor abdominal"
  const result = validateContent(bank)
  assert.equal(result.structuralPass, false)
  assert.ok(result.errors.some((message) => message.includes("quote not in story")))
  assert.ok(result.errors.some((message) => message.includes("missing set disagrees")))
})

test("invalid page references and duplicate stories cannot pass", () => {
  const bank = fixture()
  bank.stories.push({ ...bank.stories[0], id: "dor-002", source: { ...source, page: 4 } })
  const result = validateContent(bank)
  assert.ok(result.errors.some((message) => message.includes("duplicate story text")))
  assert.ok(result.errors.some((message) => message.includes("invalid source page")))
})

test("source metadata must match the fingerprinted original-PDF registry", () => {
  const sourceRegistry = { documents: [{ filename: "lecture.pdf", pages: 3 }] }
  const bank = fixture()
  assert.equal(validateContent(bank, { sourceRegistry }).structuralPass, true)
  bank.sourceDocuments[0].pages = 4
  assert.ok(validateContent(bank, { sourceRegistry }).errors.some((message) => message.includes("differs from original PDF")))
})

test("diseases may have multiple consistent, evidence-linked group memberships", () => {
  const bank = {
    ...base(), topic: "antecedentes",
    groups: ["a", "b"].map((id) => ({ id, label: id, source, diseaseIds: ["shared"] })),
    diseases: [{ id: "shared", label: "Fixture only", memberships: ["a", "b"].map((groupId) => ({ groupId, rationale: "Fixture association", evidence: [{ url: "https://example.org/reference", title: "Test fixture", locator: "Section" }] })) }],
  }
  assert.equal(validateContent(bank).structuralPass, true)
  bank.groups[1].diseaseIds = []
  assert.equal(validateContent(bank).structuralPass, false)
})

test("interview alternatives must be source-defined and distinct from accepted paths", () => {
  const bank = {
    ...base(), topic: "interrogatorio",
    contexts: [{ id: "a", term: "Term", group: "Group", subgroup: null, originalDescription: "Description", source }],
    stories: [{ id: "a-001", contextId: "a", text: "Fictional statement.", acceptedContextIds: ["a"], alternativeContextIds: ["a", "unknown"], rationale: "Fixture", source, generation: provenance, review: { status: "draft" } }],
  }
  const result = validateContent(bank)
  assert.ok(result.errors.some((message) => message.includes("unknown pathway")))
  assert.ok(result.errors.some((message) => message.includes("pathways overlap")))
})
