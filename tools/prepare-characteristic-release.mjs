import { createHash } from "node:crypto"
import { readFileSync, existsSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { validateContent } from "./validate-content.mjs"

const hash = (value) => createHash("sha256").update(value).digest("hex")
const sameSet = (left, right) => Array.isArray(left) && left.length === new Set(left).size && left.length === right.length && left.every((id) => right.includes(id))

/** Prepare a model-reviewed prototype subset, not a clinical/publication approval. No file writes. */
export function prepareCharacteristicRelease(draftBytes, reviewBytes, { releaseId = "caracteres-v1", reviewFile = "docs/reviews/caracteres-v2.json", sourceRegistry } = {}) {
  const draft = JSON.parse(draftBytes), review = JSON.parse(reviewBytes)
  if (draft.topic !== "caracteres" || review.status !== "completed-independent-review") throw new Error("A completed independent symptom review is required")
  if (review.draftSha256 !== hash(draftBytes)) throw new Error("Reviewed draft fingerprint differs from current input")
  const records = review.stories
  if (!Array.isArray(records) || !sameSet(records.map((item) => item.id), draft.stories.map((item) => item.id))) throw new Error("Review must account for every draft story exactly once")
  const byId = new Map(records.map((item) => [item.id, item]))
  const stories = [], withheld = []
  for (const story of draft.stories) {
    const decision = byId.get(story.id)
    if (decision.textSha256 !== hash(story.text)) throw new Error(`${story.id}: reviewed text fingerprint differs`)
    if (decision.disposition !== "model-reviewed" || decision.hold || decision.prototypeEligible !== true) {
      withheld.push({ id: story.id, groupId: story.groupId, disposition: decision.disposition, hold: decision.hold, reason: decision.reason ?? "No prototype eligibility recorded" })
      continue
    }
    if (!story.answer || !sameSet(decision.answerFieldIds, story.answer.fieldIds)) throw new Error(`${story.id}: reviewed answer differs from draft`)
    stories.push({ ...story, review: { status: "model-reviewed", clinicalReview: "not-recorded", clinicalApproval: false, independentReview: { report: reviewFile, reportSha256: hash(reviewBytes), reviewId: review.reviewId, provenance: review.provenance ?? { model: "unknown" }, decision }, priorDraftState: story.review } })
  }
  if (!stories.length) throw new Error("No prototype-eligible stories")
  const result = {
    ...draft,
    review: { status: "model-reviewed", clinicalReview: "not-recorded", clinicalApproval: false, independentReport: reviewFile, reportSha256: hash(reviewBytes), reviewedDraftSha256: hash(draftBytes) },
    release: { id: releaseId, prototype: true, clinicalApproval: false, sourceDraftSha256: hash(draftBytes), reviewFile, reviewSha256: hash(reviewBytes), notice: "Protótipo com revisão por modelo; revisão docente/clínica não registrada. Não estabelece diagnóstico ou conduta." },
    stories,
    coverage: { targetTotal: draft.groups.length * 20, actualTotal: stories.length, clinicallyApprovedTotal: 0, groups: draft.groups.map((group) => ({ groupId: group.id, actual: stories.filter((story) => story.groupId === group.id).length, target: 20 })), withheld },
    integration: { ready: true, scope: "model-reviewed-prototype-only", clinicalApproval: false, sourceDraftsImported: false },
  }
  const validation = validateContent(result, { sourceRegistry })
  if (validation.errors.length) throw new Error(validation.errors.join("\n"))
  return result
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const releasePath = "content/releases/caracteres.v1.json"
  const result = prepareCharacteristicRelease(readFileSync("content/drafts/caracteres.json"), readFileSync("docs/reviews/caracteres-v2.json"), { sourceRegistry: JSON.parse(readFileSync("content/sources.json", "utf8")) })
  const patchGroup = process.argv.find((arg) => arg.startsWith("--patch-group="))?.split("=")[1]
  if (process.argv.includes("--patch-header")) {
    if (existsSync(releasePath)) throw new Error("Release already exists; do not overwrite a frozen release")
    const header = JSON.stringify({ ...result, stories: [] }, null, 2)
    process.stdout.write(["*** Begin Patch", `*** Add File: /Users/math/pessoal/anatomind/${releasePath}`, ...header.split("\n").map((line) => `+${line}`), "*** End Patch", ""].join("\n"))
  } else if (patchGroup) {
    const existing = JSON.parse(readFileSync(releasePath, "utf8"))
    if (existing.release.sourceDraftSha256 !== result.release.sourceDraftSha256 || existing.release.reviewSha256 !== result.release.reviewSha256) throw new Error("Frozen release inputs changed")
    const additions = result.stories.filter((story) => story.groupId === patchGroup && !existing.stories.some((item) => item.id === story.id))
    if (!result.groups.some((group) => group.id === patchGroup)) throw new Error("Unknown symptom group")
    if (additions.length) {
      // Keep one compact record per line to make group-sized patches bounded.
      const tail = existing.stories.length ? `    ${JSON.stringify(existing.stories.at(-1))}` : null
      const before = tail ? `${tail}\n  ],` : '  "stories": [],'
      const after = `${tail ? `${tail},` : '  "stories": ['}\n${additions.map((story) => `    ${JSON.stringify(story)}`).join(",\n")}\n  ],`
      const raw = readFileSync(releasePath, "utf8")
      if (!raw.includes(before)) throw new Error("Release story block differs from expected formatting")
      process.stdout.write(["*** Begin Patch", `*** Update File: /Users/math/pessoal/anatomind/${releasePath}`, "@@", ...before.split("\n").map((line) => `-${line}`), ...after.split("\n").map((line) => `+${line}`), "*** End Patch", ""].join("\n"))
    }
  } else if (process.argv.includes("--check")) {
    const existing = JSON.parse(readFileSync(releasePath, "utf8"))
    const sort = (bank) => ({ ...bank, stories: [...bank.stories].sort((a, b) => a.id.localeCompare(b.id)) })
    if (JSON.stringify(sort(existing)) !== JSON.stringify(sort(result))) throw new Error("Frozen release differs from reviewed selection")
    console.log(JSON.stringify({ stories: result.stories.length, groups: result.coverage.groups, withheld: result.coverage.withheld.length, clinicalApproval: false }))
  } else console.log(JSON.stringify({ stories: result.stories.length, groups: result.coverage.groups, withheld: result.coverage.withheld.length, clinicalApproval: false }))
}
