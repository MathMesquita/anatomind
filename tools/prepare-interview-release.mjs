import { createHash } from "node:crypto"
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { sameInterviewIds, validateInterviewBank, validateInterviewDecision } from "../src/lib/interview-bank.ts"

const hash = (value) => createHash("sha256").update(value).digest("hex")
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b)
const hashMethods = {
  draft: "SHA256 of exact raw reviewed file bytes",
  text: "SHA256 of UTF-8 story.text",
  storyObject: "SHA256 of UTF-8 JSON.stringify(parsed story); supplemental, not raw byte slice",
}
const requireIds = (left, right, label) => {
  if (!sameInterviewIds(left, right)) throw new Error(`${label}: must account for every ID exactly once`)
}

/** Pure preparation of this independent-review contract. Never writes or activates content. */
export function prepareInterviewRelease(draftBytes, reviewBytes, { releaseId = "interrogatorio-v1", reviewFile = "docs/reviews/interrogatorio-v2.json", sourceRegistry } = {}) {
  const draft = JSON.parse(draftBytes), report = JSON.parse(reviewBytes)
  if (draft.topic !== "interrogatorio" || report.status !== "complete-independent-model-review") throw new Error("A complete independent interview model review is required")
  const draftSha256 = hash(draftBytes), reportSha256 = hash(reviewBytes)
  if (report.input?.sha256 !== draftSha256 || report.input?.byteLength !== Buffer.byteLength(draftBytes)) throw new Error("Reviewed draft byte fingerprint differs from current input")
  for (const key of Object.keys(hashMethods)) if (report.hashMethods?.[key] !== hashMethods[key]) throw new Error("Unsupported report hashMethods")
  if (!releaseId || report.clinicalApproval !== false) throw new Error("Explicit prototype identity and non-clinical review required")
  validateInterviewBank(draft)
  if (!Array.isArray(report.items) || !Array.isArray(report.contextInventory)) throw new Error("Complete item and context review inventory required")
  const ids = draft.stories.map((story) => story.id)
  requireIds(report.items.map((item) => item.id), ids, "Review items")
  requireIds(report.reviewedStoryIds, ids, "Reviewed stories")
  requireIds(report.contextInventory.map((item) => item.id), draft.contexts.map((item) => item.id), "Context inventory")
  const reviewedContexts = new Map(report.contextInventory.map((item) => [item.id, item]))
  for (const context of draft.contexts) {
    const reviewed = reviewedContexts.get(context.id)
    for (const key of ["term", "group", "subgroup", "originalDescription", "source", "sourceHierarchy"]) {
      if (!equal(context[key], reviewed[key])) throw new Error(`${context.id}: reviewed source context differs (${key})`)
    }
  }
  if (sourceRegistry) for (const document of draft.sourceDocuments) {
    const verified = sourceRegistry.documents?.find((item) => item.filename.normalize("NFC") === document.filename.normalize("NFC"))
    if (!verified || verified.pages !== document.pages || (verified.sha256 && verified.sha256 !== document.sha256)) throw new Error(`${document.id}: source registry differs`)
  }
  const byId = new Map(report.items.map((item) => [item.id, item]))
  const stories = [], withheld = []
  for (const story of draft.stories) {
    const decision = byId.get(story.id)
    validateInterviewDecision(story, decision)
    if (decision.textSha256 !== hash(story.text)) throw new Error(`${story.id}: text fingerprint differs`)
    if (decision.storyObjectSha256 !== hash(JSON.stringify(story))) throw new Error(`${story.id}: story object fingerprint differs`)
    if (!["model-reviewed", "needs-revision", "excluded"].includes(decision.disposition) || typeof decision.hold !== "boolean") throw new Error(`${story.id}: incomplete disposition/hold`)
    if (decision.disposition !== "model-reviewed" || decision.hold) {
      withheld.push({ id: story.id, contextId: story.contextId, disposition: decision.disposition, hold: decision.hold, decision })
      continue
    }
    if (decision.candidatesForAdjudication?.length || decision.missingOrIncorrectEvidence?.length) throw new Error(`${story.id}: unresolved adjudication cannot enter prototype`)
    stories.push({ ...story, review: { status: "model-reviewed", clinicalReview: "not-recorded", clinicalApproval: false, priorDraftState: story.review, independentReview: { report: reviewFile, reportSha256, reviewId: report.reviewId, reviewer: report.reviewer, decision } } })
  }
  if (!stories.length) throw new Error("No nonheld model-reviewed stories")
  const selected = stories.map((story) => story.id), held = withheld.filter((item) => item.hold).map((item) => item.id)
  requireIds(report.modelReviewedStoryIds, selected, "Model-reviewed selection")
  requireIds(report.heldStoryIds, held, "Held selection")
  requireIds(report.futureAdapterContract?.candidateIds, selected, "Contract candidates")
  requireIds(report.futureAdapterContract?.heldIds, held, "Contract holds")
  if (report.futureAdapterContract?.reviewedDraftSha256 !== draftSha256) throw new Error("Contract draft fingerprint differs")
  const counts = report.counts
  const expected = { stories: ids.length, read: ids.length, semanticallyReviewed: ids.length, pendingReview: 0, modelReviewed: stories.length, hold: held.length, needsRevision: withheld.filter((item) => item.disposition === "needs-revision").length, excluded: withheld.filter((item) => item.disposition === "excluded").length }
  for (const [key, value] of Object.entries(expected)) if (counts?.[key] !== value) throw new Error(`Incomplete/inconsistent review counts: ${key}`)
  // Full report is bound by reportSha256 + file path; do not duplicate its
  // inventory, candidate lists and story texts into the release header.
  const reportMetadata = Object.fromEntries(["reviewId", "status", "completedAt", "reviewer", "counts", "hashMethods"].map((key) => [key, report[key]]))
  const contextCoverage = draft.contexts.map((context) => ({
    contextId: context.id, target: 10,
    authored: draft.stories.filter((story) => story.contextId === context.id).length,
    actual: stories.filter((story) => story.contextId === context.id).length,
    withheld: withheld.filter((story) => story.contextId === context.id).length,
  }))
  return {
    ...draft,
    review: { status: "model-reviewed", clinicalReview: "not-recorded", clinicalApproval: false, priorDraftState: draft.review, independentReport: reviewFile, reportSha256, reviewedDraftSha256: draftSha256, reportMetadata },
    release: { id: releaseId, prototype: true, clinicalApproval: false, sourceDraftSha256: draftSha256, reviewFile, reviewSha256: reportSha256, notice: "Protótipo revisado por modelo. Aprovação docente/clínica não registrada; não estabelece diagnóstico ou conduta." },
    // All original contexts and references survive unchanged for audit. They do not generate questions.
    contexts: draft.contexts, stories,
    sourceArchive: { descriptions: "archive-only-pending-separate-review", clinicalApproval: false, automaticallyPlayable: false, sourceDescriptionQuestions: 0 },
    coverage: { input: draft.coverage, reviewedTotal: ids.length, actualTotal: stories.length, clinicallyApprovedTotal: 0, contexts: contextCoverage, withheld },
    integration: { ready: true, scope: "model-reviewed-prototype-only", clinicalApproval: false, sourceDraftsImported: false, sourceDescriptionsPlayable: false },
  }
}

/** Validate both metadata and records before emitting an append patch or checking the final file. */
export function checkFrozenInterviewRelease(existing, computed, { allowPartial = false } = {}) {
  const sort = (bank) => ({ ...bank, stories: [...bank.stories].sort((a, b) => a.id.localeCompare(b.id)) })
  if (!Array.isArray(existing.stories) || new Set(existing.stories.map((item) => item.id)).size !== existing.stories.length) throw new Error("Frozen release has duplicate/invalid stories")
  const expected = new Map(computed.stories.map((story) => [story.id, story]))
  if (!equal({ ...existing, stories: [] }, { ...computed, stories: [] }) || existing.stories.some((story) => !equal(story, expected.get(story.id)))) throw new Error("Frozen release differs from computed reviewed selection")
  if (!allowPartial && !equal(sort(existing), sort(computed))) throw new Error("Frozen release is incomplete or differs from reviewed selection")
}

/** Return apply_patch text only; a caller decides whether/when to apply it. Group is an authoring context. */
export function buildInterviewReleasePatch(computed, { releasePath = "content/releases/interrogatorio.v1.json", contextId, existingBytes } = {}) {
  const target = path.resolve(releasePath)
  if (!contextId) {
    if (existingBytes !== undefined) throw new Error("Release already exists; do not overwrite a frozen release")
    const header = `{\n${Object.entries({ ...computed, stories: [] }).map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)}`).join(",\n")}\n}`
    return ["*** Begin Patch", `*** Add File: ${target}`, ...header.split("\n").map((line) => `+${line}`), "*** End Patch", ""].join("\n")
  }
  if (!computed.contexts.some((context) => context.id === contextId)) throw new Error("Unknown interview context/group")
  const existing = JSON.parse(existingBytes)
  checkFrozenInterviewRelease(existing, computed, { allowPartial: true })
  const additions = computed.stories.filter((story) => story.contextId === contextId && !existing.stories.some((item) => item.id === story.id))
  if (!additions.length) return ""
  if (additions.length > 10) throw new Error("Context patch exceeds ten-story bound")
  const tail = existing.stories.length ? `    ${JSON.stringify(existing.stories.at(-1))}` : null
  const before = tail ? `${tail}\n  ],` : '  "stories": [],'
  const after = `${tail ? `${tail},` : '  "stories": ['}\n${additions.map((story) => `    ${JSON.stringify(story)}`).join(",\n")}\n  ],`
  if (!String(existingBytes).includes(before)) throw new Error("Release story block differs from expected compact formatting")
  return ["*** Begin Patch", `*** Update File: ${target}`, "@@", ...before.split("\n").map((line) => `-${line}`), ...after.split("\n").map((line) => `+${line}`), "*** End Patch", ""].join("\n")
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const args = process.argv.slice(2)
  if (args.some((arg) => !["--patch-header", "--check"].includes(arg) && !/^--patch-(context|group)=.+$/.test(arg)) || args.length > 1) throw new Error("Use one of --patch-header, --patch-context=ID, --patch-group=ID, --check")
  const releasePath = "content/releases/interrogatorio.v1.json"
  const computed = prepareInterviewRelease(readFileSync("content/drafts/interrogatorio.json"), readFileSync("docs/reviews/interrogatorio-v2.json"), { sourceRegistry: JSON.parse(readFileSync("content/sources.json", "utf8")) })
  const contextId = args.find((arg) => /^--patch-(context|group)=/.test(arg))?.split("=")[1]
  if (args.includes("--patch-header") || contextId) {
    process.stdout.write(buildInterviewReleasePatch(computed, { releasePath, contextId, existingBytes: existsSync(releasePath) ? readFileSync(releasePath) : undefined }))
  } else {
    if (args.includes("--check")) checkFrozenInterviewRelease(JSON.parse(readFileSync(releasePath)), computed)
    console.log(JSON.stringify({ stories: computed.stories.length, contexts: computed.contexts.length, authoredContexts: computed.coverage.contexts.filter((context) => context.actual > 0).length, withheld: computed.coverage.withheld.length, sourceDescriptionQuestions: 0, clinicalApproval: false }))
  }
}
