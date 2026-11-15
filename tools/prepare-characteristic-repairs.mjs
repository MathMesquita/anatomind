import { createHash } from "node:crypto"
import { readFileSync, writeFileSync, existsSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const hash = (value) => createHash("sha256").update(value).digest("hex")
const sameSet = (left, right) => Array.isArray(left) && left.length === new Set(left).size && left.length === right.length && left.every((id) => right.includes(id))
const check = (condition, message) => { if (!condition) throw new Error(message) }

/**
 * Release repaired symptom stories that passed a fresh independent review.
 * Only stories withheld from the base release may enter; checklists come from the base release. No file writes.
 */
export function prepareCharacteristicRepairs(batchBytes, reviewBytes, baseReleaseBytes, draftBytes, { reviewFile, batchFile }) {
  const batch = JSON.parse(batchBytes), review = JSON.parse(reviewBytes), base = JSON.parse(baseReleaseBytes)
  check(batch.topic === "caracteres" && review.status === "completed-independent-review" && review.clinicalApproval === false, "A completed independent repair review is required")
  check(review.input?.path === batchFile && review.input.sha256 === hash(batchBytes) && review.input.byteLength === batchBytes.length, "Reviewed batch fingerprint differs from current input")
  check(batch.baseDraftSha256 === hash(draftBytes) && base.release.sourceDraftSha256 === batch.baseDraftSha256, "Repairs were not made against the released draft")
  check(sameSet(review.stories?.map((item) => item.id), batch.stories.map((item) => item.id)), "Review must account for every repaired story exactly once")
  const decisions = new Map(review.stories.map((item) => [item.id, item]))
  const groups = new Map(base.groups.map((group) => [group.id, group]))
  const released = new Set(base.stories.map((story) => story.id)), withheldBefore = new Set(base.coverage.withheld.map((item) => item.id))
  const stories = [], withheld = []
  for (const story of batch.stories) {
    const decision = decisions.get(story.id)
    check(!released.has(story.id) && withheldBefore.has(story.id), `${story.id}: only stories withheld from the base release can be repaired`)
    check(decision.textSha256 === hash(story.text) && decision.storyObjectSha256 === hash(JSON.stringify(story)), `${story.id}: reviewed fingerprint differs`)
    const group = groups.get(story.groupId), batchGroup = batch.groups.find((item) => item.id === story.groupId)
    const checklist = (fields) => JSON.stringify(fields.map((field) => [field.id, field.safeUiLabel ?? field.label]))
    check(group && batchGroup && checklist(group.fields) === checklist(batchGroup.fields), `${story.id}: checklist differs from the base release`)
    if (decision.disposition !== "model-reviewed" || decision.hold !== false || decision.prototypeEligible !== true) {
      withheld.push({ id: story.id, groupId: story.groupId, disposition: decision.disposition, hold: decision.hold, reason: decision.reason ?? "No prototype eligibility recorded" })
      continue
    }
    check(story.answer && sameSet(decision.answerFieldIds, story.answer.fieldIds), `${story.id}: reviewed answer differs from repair`)
    stories.push({ ...story, review: { status: "model-reviewed", clinicalReview: "not-recorded", clinicalApproval: false, independentReview: { report: reviewFile, reportSha256: hash(reviewBytes), reviewId: review.reviewId, reviewer: review.reviewer ?? { model: "unknown" }, decision }, priorDraftState: story.review } })
  }
  check(stories.length, "No prototype-eligible stories")
  return {
    schemaVersion: batch.schemaVersion,
    topic: "caracteres",
    sourceDocuments: base.sourceDocuments,
    groups: base.groups.filter((group) => stories.some((story) => story.groupId === group.id)),
    review: { status: "model-reviewed", clinicalReview: "not-recorded", clinicalApproval: false, independentReport: reviewFile, reportSha256: hash(reviewBytes), reviewedBatchSha256: hash(batchBytes) },
    release: { id: review.reviewId, prototype: true, clinicalApproval: false, baseReleaseId: base.release.id, sourceBatch: batchFile, sourceBatchSha256: hash(batchBytes), sourceDraftSha256: batch.baseDraftSha256, reviewFile, reviewSha256: hash(reviewBytes), notice: base.release.notice },
    coverage: { actualTotal: stories.length, clinicallyApprovedTotal: 0, withheld },
    stories,
  }
}

export function prepareCharacteristicRepairsFromFiles(reviewFile) {
  const reviewBytes = readFileSync(reviewFile), batchFile = JSON.parse(reviewBytes).input?.path
  check(typeof batchFile === "string" && /^content\/batches\/caracteres-repairs-\d+\.json$/.test(batchFile), "Review does not name a repairs batch")
  return prepareCharacteristicRepairs(readFileSync(batchFile), reviewBytes, readFileSync("content/releases/caracteres.v1.json"), readFileSync("content/drafts/caracteres.json"), { reviewFile, batchFile })
}

/** One compact story per line, like the other frozen releases. */
export function serializeRepairsRelease(result) {
  const serialized = `${JSON.stringify({ ...result, stories: [] }, null, 2).replace(/"stories": \[\]\n\}$/, `"stories": [\n${result.stories.map((story) => `    ${JSON.stringify(story)}`).join(",\n")}\n  ]\n}`)}\n`
  check(JSON.stringify(JSON.parse(serialized)) === JSON.stringify(result), "Serialization changed the release")
  return serialized
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const reviewFile = process.argv.find((arg) => arg.startsWith("--report="))?.split("=")[1]
  check(reviewFile, "Usage: --report=content/reviews/caracteres-repairs-NNN.json [--check | --write]")
  const result = prepareCharacteristicRepairsFromFiles(reviewFile)
  const releasePath = `content/releases/${result.release.id}.json`
  const serialized = serializeRepairsRelease(result)
  if (process.argv.includes("--write")) {
    check(!existsSync(releasePath), "Release already exists; do not overwrite a frozen release")
    writeFileSync(releasePath, serialized)
  } else if (process.argv.includes("--check")) check(readFileSync(releasePath, "utf8") === serialized, "Frozen release differs from reviewed selection")
  console.log(JSON.stringify({ release: result.release.id, stories: result.stories.map((story) => story.id), withheld: result.coverage.withheld.map((item) => item.id), clinicalApproval: false }))
}
