import { test } from "node:test"
import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { summarizeContent, summarizeReview } from "../tools/content-status.mjs"

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

test("a changed draft cannot inherit the review of an older snapshot", () => {
  const original = Buffer.from("reviewed snapshot")
  const report = { draftSha256: createHash("sha256").update(original).digest("hex"), stories: [{ disposition: "model-reviewed", hold: false }, { disposition: "needs-revision", hold: true }] }
  assert.equal(summarizeReview(original, report).modelReviewedInMatchingSnapshot, 1)
  const stale = summarizeReview(Buffer.from("edited snapshot"), report)
  assert.equal(stale.matchesCurrentSnapshot, false)
  assert.equal(stale.modelReviewedInMatchingSnapshot, 0)
  assert.equal(stale.recordedStoryDecisions, 2, "historical review stays visible")
  assert.equal(stale.clinicalApproval, false)
})

test("missing review fingerprints and held records fail closed", () => {
  const bytes = Buffer.from("snapshot")
  assert.equal(summarizeReview(bytes, { stories: [{ disposition: "model-reviewed" }] }).modelReviewedInMatchingSnapshot, 0)
  const report = { input: { sha256: createHash("sha256").update(bytes).digest("hex") }, stories: [{ disposition: "model-reviewed", hold: true }] }
  assert.equal(summarizeReview(bytes, report).modelReviewedInMatchingSnapshot, 0)
})
