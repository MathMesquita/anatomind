import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { validateContent } from "./validate-content.mjs"

const normalize = (text) => typeof text === "string" ? text.replace(/\s+/g, " ").trim() : ""

/** Read-only: validate additions against one frozen base, without changing that review's input. */
export function validateInterviewBatches(baseBytes, batches, sourceRegistry) {
  const base = JSON.parse(baseBytes)
  const sha256 = createHash("sha256").update(baseBytes).digest("hex")
  const errors = [], assigned = new Set(), additions = []
  const contexts = new Map(base.contexts.map((context) => [context.id, context]))
  const existingIds = new Set(base.stories.map((story) => story.id))
  const refs = new Map((base.clinicalReferences ?? []).map((reference) => [reference.id, reference]))
  const check = (condition, message) => { if (!condition) errors.push(message) }
  check(base.topic === "interrogatorio", "Base must be an interrogation bank")
  for (const [index, batch] of batches.entries()) {
    const label = `batch ${index + 1}`
    check(batch.schemaVersion === 1 && batch.topic === "interrogatorio", `${label}: unsupported schema/topic`)
    check(batch.baseSha256 === sha256, `${label}: base fingerprint mismatch`)
    check(batch.review?.status === "draft", `${label}: additions must remain draft`)
    const contextIds = Array.isArray(batch.assignedContextIds) ? batch.assignedContextIds : []
    const stories = Array.isArray(batch.stories) ? batch.stories : []
    check(contextIds.length > 0, `${label}: no assigned contexts`)
    for (const id of contextIds) {
      const context = contexts.get(id)
      check(!assigned.has(id), `${label}: context ${id} assigned more than once`)
      assigned.add(id)
      check(context?.storyEligibility?.status === "eligible-draft", `${label}: context ${id} is not eligible`)
      check(!base.stories.some((story) => story.contextId === id), `${label}: context ${id} already has stories`)
      check(stories.filter((story) => story.contextId === id).length === 10, `${label}: context ${id} needs exactly 10 stories`)
    }
    for (const reference of batch.clinicalReferences ?? []) {
      if (refs.has(reference.id)) check(JSON.stringify(refs.get(reference.id)) === JSON.stringify(reference), `${label}: conflicting reference ${reference.id}`)
      else refs.set(reference.id, reference)
    }
    for (const story of stories) {
      check(!existingIds.has(story.id), `${label}: duplicate story ${story.id}`)
      existingIds.add(story.id)
      check(contextIds.includes(story.contextId), `${label}: unassigned context for ${story.id}`)
      check(story.review?.status === "draft" && story.review?.clinicalApproval !== true, `${story.id}: draft-only gate`)
      for (const [pathsKey, evidenceKey] of [["acceptedContextIds", "acceptedPathEvidence"], ["alternativeContextIds", "alternativePathEvidence"]]) {
        const paths = story[pathsKey] ?? [], evidence = story[evidenceKey] ?? []
        check(evidence.length === paths.length, `${story.id}: ${evidenceKey} must cover every path exactly once`)
        for (const id of paths) {
          const entries = evidence.filter((entry) => entry.contextId === id), context = contexts.get(id)
          check(entries.length === 1, `${story.id}: missing/duplicate evidence for ${id}`)
          const entry = entries[0]
          if (!entry) continue
          check(!!normalize(entry.quote) && normalize(story.text).includes(normalize(entry.quote)), `${story.id}: evidence quote is not in story`)
          check(!!normalize(entry.sourceQuote) && normalize(context?.originalDescription).includes(normalize(entry.sourceQuote)), `${story.id}: source quote is not in original context ${id}`)
          check(entry.source?.documentId === context?.source.documentId && entry.source?.page === context?.source.page, `${story.id}: evidence source differs from context ${id}`)
          for (const refId of entry.referenceIds ?? []) check(refs.has(refId), `${story.id}: unknown reference ${refId}`)
        }
      }
      additions.push(story)
    }
  }
  const validation = validateContent({ ...base, stories: [...base.stories, ...additions], clinicalReferences: [...refs.values()] }, { sourceRegistry })
  errors.push(...validation.errors)
  return { baseSha256: sha256, baseStories: base.stories.length, addedStories: additions.length, totalStories: base.stories.length + additions.length, assignedContexts: assigned.size, errors, warnings: validation.warnings, structuralPass: errors.length === 0, clinicalApproval: false, appIntegration: false }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const files = process.argv.slice(2)
  if (!files.length) { console.error("Pass one or more draft batch JSON paths."); process.exitCode = 1 }
  else {
    const result = validateInterviewBatches(readFileSync("content/drafts/interrogatorio.json"), files.map((file) => JSON.parse(readFileSync(file, "utf8"))), JSON.parse(readFileSync("content/sources.json", "utf8")))
    console.log(JSON.stringify(result, null, 2))
    if (!result.structuralPass) process.exitCode = 1
  }
}
