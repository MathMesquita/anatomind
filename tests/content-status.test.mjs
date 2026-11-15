import { test } from "node:test"
import assert from "node:assert/strict"
import { summarizeContent } from "../tools/content-status.mjs"

test("content status ignores stale coverage claims and never implies clinical approval", () => {
  const result = summarizeContent({ topic: "caracteres", coverage: { actualTotal: 220 }, groups: [{ id: "dor" }], stories: [{ groupId: "dor", review: { status: "model-reviewed" } }] })
  assert.equal(result.items, 1)
  assert.equal(result.declaredModelReviewedItems, 1)
  assert.equal(result.groups[0].remaining, 19)
  assert.equal(result.clinicalApproval, false)
  assert.equal(result.playableRelease, null)
})

test("excluded interrogation contexts do not silently shrink the original target", () => {
  const result = summarizeContent({ topic: "interrogatorio", contexts: [{ id: "a", originalDescription: "Fonte", storyEligibility: { status: "excluded" } }, { id: "b", originalDescription: "Fonte" }], stories: [{ contextId: "b" }] })
  assert.equal(result.grossTarget, 20)
  assert.equal(result.grossRemaining, 19)
  assert.equal(result.originalDescriptions, 2)
  assert.equal(result.contextsAtTarget, 0)
  assert.deepEqual(result.editorialEligibility, { excluded: 1, "not-recorded": 1 })
})

test("disease coverage counts many-to-many records instead of group back-reference claims", () => {
  const result = summarizeContent({ topic: "antecedentes", groups: [{ id: "a", diseaseIds: ["fake"] }, { id: "b" }], diseases: [{ memberships: [{ groupId: "a" }, { groupId: "b" }] }] })
  assert.equal(result.memberships, 2)
  assert.equal(result.groups[0].actual, 1)
  assert.equal(result.groups[1].remaining, 19)
})
