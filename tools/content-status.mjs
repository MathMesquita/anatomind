import { readFileSync, existsSync, readdirSync } from "node:fs"
import { createHash } from "node:crypto"
import path from "node:path"
import { pathToFileURL } from "node:url"

/** A review of an older snapshot must never silently approve edited content. */
export function summarizeReview(bytes, report) {
  const currentSha256 = createHash("sha256").update(bytes).digest("hex")
  const reviewedSha256 = report.draftSha256 ?? report.input?.sha256 ?? report.snapshot?.sha256 ?? null
  const matchesCurrentSnapshot = reviewedSha256 === currentSha256
  const records = [report.stories, report.items, report.diseases].find(Array.isArray) ?? []
  return {
    reviewedSha256,
    matchesCurrentSnapshot,
    reportStatus: report.status ?? report.reviewer?.status ?? "not-recorded",
    recordedItemDecisions: records.length,
    recordedDispositions: records.reduce((counts, item) => {
      const disposition = item.disposition ?? "not-recorded"
      counts[disposition] = (counts[disposition] ?? 0) + 1
      return counts
    }, {}),
    modelReviewedInMatchingSnapshot: matchesCurrentSnapshot ? records.filter((item) => item.disposition === "model-reviewed" && !item.hold).length : 0,
    clinicalApproval: false,
    note: "Snapshot matching and model review are not clinical or publication approval.",
  }
}

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
    const bank = JSON.parse(bytes)
    const recordedReviews = existsSync("docs/reviews") ? readdirSync("docs/reviews")
      .filter((name) => new RegExp(`^${bank.topic}-v\\d+\\.json$`).test(name))
      .map((name) => {
        const reviewPath = `docs/reviews/${name}`
        return { path: reviewPath, ...summarizeReview(bytes, JSON.parse(readFileSync(reviewPath, "utf8"))) }
      }) : []
    console.log(JSON.stringify({ file, sha256: createHash("sha256").update(bytes).digest("hex"), ...summarizeContent(bank), recordedReviews }, null, 2))
  }
}
