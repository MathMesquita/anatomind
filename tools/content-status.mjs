import { readFileSync, existsSync } from "node:fs"
import { createHash } from "node:crypto"
import path from "node:path"
import { pathToFileURL } from "node:url"

/** Coverage is computed from records, never from a generator's cached claims. */
export function summarizeContent(bank) {
  const items = bank.stories ?? bank.questions ?? bank.diseases ?? []
  const result = {
    topic: bank.topic,
    items: items.length,
    declaredModelReviewedItems: items.filter((item) => item.review?.status === "model-reviewed").length,
    declaredReviewDisposition: bank.review?.releaseDisposition ?? bank.review?.status ?? "not-recorded",
    independentRepairReview: bank.review?.independentOfRepairsAndAdditions ?? "not-recorded",
    clinicalApproval: false,
    playableRelease: bank.release?.id ?? null,
  }
  if (bank.topic === "caracteres") {
    result.groups = bank.groups.map((group) => {
      const actual = items.filter((story) => story.groupId === group.id).length
      return { id: group.id, actual, target: 20, remaining: Math.max(0, 20 - actual) }
    })
  } else if (bank.topic === "interrogatorio") {
    result.contexts = bank.contexts.length
    result.originalDescriptions = bank.contexts.filter((context) => typeof context.originalDescription === "string" && context.originalDescription.trim()).length
    result.contextsAtTarget = bank.contexts.filter((context) => items.filter((story) => story.contextId === context.id).length >= 10).length
    // Keep the gross source inventory visible even when an editor excludes a context.
    result.grossTarget = bank.contexts.length * 10
    result.grossRemaining = bank.contexts.reduce((sum, context) => sum + Math.max(0, 10 - items.filter((story) => story.contextId === context.id).length), 0)
    result.editorialEligibility = bank.contexts.reduce((counts, context) => {
      const status = context.storyEligibility?.status ?? "not-recorded"
      counts[status] = (counts[status] ?? 0) + 1
      return counts
    }, {})
  } else if (bank.topic === "antecedentes") {
    result.groups = bank.groups.map((group) => {
      const actual = items.filter((disease) => disease.memberships?.some((membership) => membership.groupId === group.id)).length
      return { id: group.id, actual, target: 20, remaining: Math.max(0, 20 - actual) }
    })
    result.memberships = items.reduce((sum, disease) => sum + (disease.memberships?.length ?? 0), 0)
  } else if (bank.topic === "regioes") {
    result.legendRegions = bank.regions.length
    result.answerRegions = new Set(items.map((question) => question.answerRegionId)).size
    result.unavailableRegions = bank.regions.filter((region) => !items.some((question) => question.answerRegionId === region.id)).map((region) => region.id)
  }
  return result
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  for (const file of ["content/drafts/antecedentes.json", "content/drafts/caracteres.json", "content/drafts/interrogatorio.json", "content/drafts/regioes.json", "content/releases/regioes.v1.json"]) {
    if (!existsSync(file)) continue
    const bytes = readFileSync(file)
    console.log(JSON.stringify({ file, sha256: createHash("sha256").update(bytes).digest("hex"), ...summarizeContent(JSON.parse(bytes)) }, null, 2))
  }
}
