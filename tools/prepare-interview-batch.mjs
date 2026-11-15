import { createHash } from "node:crypto"
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { adaptInterviewRelease, sameInterviewIds, validateInterviewDecision } from "../src/lib/interview-bank.ts"

const hash = (value) => createHash("sha256").update(value).digest("hex")
const check = (condition, message) => { if (!condition) throw new Error(message) }

/** Freeze only this independently reviewed five-question slice. No file writes. */
export function prepareInterviewBatch(baseBytes, batchBytes, reportBytes, { reviewFile } = {}) {
  const base = JSON.parse(baseBytes), batch = JSON.parse(batchBytes), report = JSON.parse(reportBytes)
  check(report.status === "completed-independent-review" && report.clinicalApproval === false, "Completed independent non-clinical review required")
  check(report.input?.sha256 === hash(batchBytes) && report.input.byteLength === batchBytes.length, "Source batch fingerprint differs")
  check(batch.baseSha256 === hash(baseBytes) && report.input.baseInventory?.sha256 === hash(baseBytes), "Source inventory fingerprint differs")
  const selection = report.input.selection
  check(Number.isInteger(selection?.startIndexInclusive) && selection.startIndexInclusive >= 0 && selection.endIndexExclusive === selection.startIndexInclusive + 5, "Review must cover exactly five consecutive stories")
  const selected = batch.stories.slice(selection.startIndexInclusive, selection.endIndexExclusive)
  const ids = selected.map((story) => story.id)
  check(ids.length === 5 && report.items?.length === 5 && sameInterviewIds(ids, selection.orderedStoryIds) && sameInterviewIds(ids, report.reviewedStoryIds) && sameInterviewIds(ids, report.items.map((item) => item.id)), "Five-story coverage differs")
  check(report.counts?.stories === 5 && report.counts.read === 5 && report.counts.semanticallyReviewed === 5, "Incomplete five-story review counts")
  const contexts = new Map(base.contexts.map((context) => [context.id, context]))
  const decisions = new Map(report.items.map((item) => [item.id, item]))
  const stories = [], withheld = []
  for (const story of selected) {
    const decision = decisions.get(story.id)
    check(decision.textSha256 === hash(story.text) && decision.storyObjectSha256 === hash(JSON.stringify(story)), `${story.id}: reviewed story changed`)
    if (decision.reviewedStoryObject) check(JSON.stringify(decision.reviewedStoryObject) === JSON.stringify(story), `${story.id}: archived story differs`)
    if (decision.originalStoryBinding) {
      const binding = decision.originalStoryBinding
      // Some reports archive a base64 copy; others bind by offsets + hash only.
      const slice = batchBytes.subarray(binding.byteOffsetStart, binding.byteOffsetEndExclusive)
      const raw = binding.rawStoryBytesBase64 === undefined ? slice : Buffer.from(binding.rawStoryBytesBase64, "base64")
      check(hash(slice) === decision.rawStorySha256 && slice.equals(raw) && (decision.rawStoryByteLength === undefined || decision.rawStoryByteLength === slice.length) && JSON.stringify(JSON.parse(slice.toString("utf8"))) === JSON.stringify(story), `${story.id}: original byte binding differs`)
    }
    check(["model-reviewed", "needs-revision", "excluded"].includes(decision.disposition) && typeof decision.hold === "boolean", `${story.id}: missing disposition`)
    if (decision.disposition !== "model-reviewed" || decision.hold || decision.prototypeEligible !== true) {
      withheld.push({ id: story.id, contextId: story.contextId, disposition: decision.disposition, hold: decision.hold, reason: decision.reasoning ?? decision.holdReasons })
      continue
    }
    check(!decision.candidatesForAdjudication?.length && !decision.missingOrIncorrectEvidence?.length && !decision.blockingFindingIds?.length, `${story.id}: unresolved finding`)
    validateInterviewDecision(story, decision)
    for (const mapping of decision.supportedAcceptedPaths) {
      const context = contexts.get(mapping.contextId)
      check(context && ["term", "group", "subgroup"].every((key) => mapping[key] === undefined || mapping[key] === context[key]), `${story.id}: reviewed source hierarchy differs`)
    }
    const { reviewedStoryObject: _copy, originalStoryBinding: _raw, ...compactDecision } = decision
    stories.push({ ...story, review: { status: "model-reviewed", clinicalApproval: false, clinicalReview: "not-recorded", priorDraftState: story.review, independentReview: { report: reviewFile, reportSha256: hash(reportBytes), reviewId: report.reviewId, reviewer: report.reviewer, decision: compactDecision } } })
  }
  const passing = stories.map((story) => story.id)
  check(sameInterviewIds(passing, report.modelReviewedStoryIds) && sameInterviewIds(passing, report.prototypeEligibleStoryIds), "Prototype candidate selection differs")
  check(report.counts.modelReviewed === stories.length && report.counts.hold === withheld.filter((item) => item.hold).length, "Disposition counts differ")
  check(stories.length > 0, "No prototype-eligible stories in this batch")
  const contextIds = new Set(stories.flatMap((story) => [story.contextId, ...story.acceptedContextIds, ...story.alternativeContextIds]))
  const references = new Map()
  for (const ref of [...base.clinicalReferences, ...(batch.clinicalReferences ?? [])]) {
    if (references.has(ref.id)) check(JSON.stringify(references.get(ref.id)) === JSON.stringify(ref), `Conflicting reference ${ref.id}`)
    references.set(ref.id, ref)
  }
  const result = {
    schemaVersion: 1, topic: "interrogatorio", sourceDocuments: base.sourceDocuments,
    contexts: base.contexts.filter((context) => contextIds.has(context.id)), stories,
    answerPolicy: base.answerPolicy, clinicalReferences: [...references.values()], generation: batch.generation,
    review: { status: "model-reviewed", clinicalApproval: false, independentReport: reviewFile, reportSha256: hash(reportBytes), findings: report.findings, reviewerClinicalSources: report.reviewerClinicalSources },
    release: { id: report.reviewId, prototype: true, clinicalApproval: false, sourceBatchSha256: hash(batchBytes), sourceInventorySha256: hash(baseBytes), reviewFile, reviewSha256: hash(reportBytes), notice: "Protótipo revisado por modelo; revisão docente/clínica pendente." },
    coverage: { reviewedTotal: 5, actualTotal: stories.length, withheld },
  }
  adaptInterviewRelease(result)
  return result
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const reportFile = process.argv.find((arg) => arg.startsWith("--report="))?.slice(9)
  check(/^content\/reviews\/interrogatorio-batch-\d+\.json$/.test(reportFile ?? ""), "Specify --report=content/reviews/interrogatorio-batch-NNN.json")
  const reportBytes = readFileSync(reportFile), report = JSON.parse(reportBytes)
  check(/^content\/batches\/interrogatorio-next-\d+\.json$/.test(report.input.path), "Unexpected source batch path")
  const result = prepareInterviewBatch(readFileSync("content/drafts/interrogatorio.json"), readFileSync(report.input.path), reportBytes, { reviewFile: reportFile })
  const releasePath = `content/releases/${report.reviewId}.json`
  if (process.argv.includes("--patch")) {
    check(!existsSync(releasePath), "Frozen batch already exists")
    const json = JSON.stringify(result, null, 2)
    process.stdout.write(["*** Begin Patch", `*** Add File: ${path.resolve(releasePath)}`, ...json.split("\n").map((line) => `+${line}`), "*** End Patch", ""].join("\n"))
  } else {
    if (process.argv.includes("--check")) check(JSON.stringify(JSON.parse(readFileSync(releasePath))) === JSON.stringify(result), "Frozen batch differs from reviewed subset")
    console.log(JSON.stringify({ release: result.release.id, stories: result.stories.length, withheld: result.coverage.withheld.length, clinicalApproval: false }))
  }
}
