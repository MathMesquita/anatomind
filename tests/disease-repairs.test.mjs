import { test } from "node:test"
import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { applyDiseaseRepairs, buildDiseaseRepairsFromFiles, cleanReason, serializeDiseaseRepairs } from "../tools/build-disease-repairs.mjs"
import { validateContent } from "../tools/validate-content.mjs"

const draftBytes = readFileSync("content/drafts/antecedentes.json")
const draft = JSON.parse(draftBytes)
const saved = readFileSync("content/batches/antecedentes-repairs-001.json", "utf8")
const batch = JSON.parse(saved)
const sha = (value) => createHash("sha256").update(value).digest("hex")

test("saved disease repairs are exactly what the independent reviews propose", () => {
  assert.equal(serializeDiseaseRepairs(buildDiseaseRepairsFromFiles().batch), saved)
  assert.equal(batch.baseDraftSha256, sha(draftBytes))
  for (const source of batch.reviewSources) assert.equal(sha(readFileSync(source.path)), source.sha256)
})

test("repaired disease records keep the bank structurally valid", () => {
  const result = validateContent(applyDiseaseRepairs(draft, batch))
  assert.deepEqual(result.errors, [])
  assert.equal(result.structuralPass, true)
})

test("each repaired record is bound to its reviewed version and sorts all 14 groups once", () => {
  const groupIds = draft.groups.map((group) => group.id).sort()
  const byId = new Map(draft.diseases.map((disease) => [disease.id, disease]))
  assert.equal(new Set(batch.assignedDiseaseIds).size, batch.diseases.length)
  for (const disease of batch.diseases) {
    assert.equal(disease.repair.previousRecordSha256, sha(JSON.stringify(byId.get(disease.id))))
    assert.ok(disease.repair.changes.length > 0)
    const audit = disease.membershipAudit
    assert.deepEqual([...audit.positiveGroupIds, ...audit.conditionalGroupIds, ...audit.unresolvedGroupIds, ...audit.notEstablishedGroupIds].sort(), groupIds, disease.id)
    assert.deepEqual(audit.positiveGroupIds, disease.memberships.map((item) => item.groupId))
    assert.equal(audit.negativeMembershipsValidated, false)
  }
})

test("repairs never approve content, never create distractors and never touch the teacher-only case", () => {
  assert.equal(batch.review.clinicalApproval, false)
  assert.equal(batch.review.independentReview, "pending")
  for (const disease of batch.diseases) {
    assert.equal(disease.review.clinicalApproval, false)
    for (const item of [...(disease.conditionalMemberships ?? []), ...(disease.unresolvedMemberships ?? [])]) {
      if (item.addedInRevision !== batch.batchId) continue
      assert.equal(item.usableAsUnqualifiedPositive, false)
      assert.equal(item.usableAsVerifiedDistractor, false)
      assert.ok(item.evidence.length > 0 && item.evidence.every((source) => /^https?:\/\//.test(source.url)))
    }
  }
  assert.deepEqual(batch.deferredToTeacher.map((item) => item.diseaseId), ["dislipidemia"])
  assert.ok(!batch.assignedDiseaseIds.includes("dislipidemia"))
})

test("review-only wording is removed from a rationale and the facts are kept", () => {
  assert.deepEqual(cleanReason("Vínculo não declarado no rascunho. O NIAMS cita uveíte; nunca usar como distrator."), { text: "O NIAMS cita uveíte.", dropped: ["Vínculo não declarado no rascunho", "nunca usar como distrator"] })
  assert.equal(cleanReason("Sobreposição não declarada no rascunho: o MeSH situa a doença em dois ramos.").text, "O MeSH situa a doença em dois ramos.")
  assert.equal(cleanReason("A CID-10 usa G56.0 (cap. VI). O NIAMS confirma.").text, "A CID-10 usa G56.0 (cap. VI). O NIAMS confirma.")
})
