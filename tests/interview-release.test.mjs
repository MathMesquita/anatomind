import { test } from "node:test"
import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFileSync, readdirSync } from "node:fs"
import { prepareInterviewBatch } from "../tools/prepare-interview-batch.mjs"
import { prepareInterviewRelease, buildInterviewReleasePatch, checkFrozenInterviewRelease } from "../tools/prepare-interview-release.mjs"
import { adaptInterviewRelease } from "../src/lib/interview-bank.ts"

const hash = (value) => createHash("sha256").update(value).digest("hex")
function fixture() {
  const source = { documentId: "lecture", page: 1, locator: "Grupo > Termo" }
  const context = { id: "context", term: "Termo", group: "Grupo", subgroup: null, originalDescription: "Descrição arquivística.", source, sourceHierarchy: { term: "Termo", group: "Grupo", subgroup: null }, sourceCautions: ["Não usar como regra clínica."], storyEligibility: { status: "eligible-draft" } }
  const draft = {
    schemaVersion: 1, topic: "interrogatorio", sourceDocuments: [{ id: "lecture", filename: "lecture.pdf", pages: 1 }],
    generation: { model: "fixture", promptVersion: "test", executionIdentity: "unknown" }, review: { status: "draft" },
    answerPolicy: { mode: "all-source-supported-coherent-paths" }, coverage: { contexts: 1, stories: 2 },
    contexts: [context], clinicalReferences: [{ id: "ref", title: "Preserved unused reference" }],
    stories: ["a", "b"].map((id) => ({ id, contextId: "context", text: `Relato ${id}.`, source, generation: { model: "fixture", promptVersion: "test" }, review: { status: "draft" }, acceptedContextIds: ["context"], alternativeContextIds: [], acceptedPathEvidence: [{ contextId: "context", quote: `Relato ${id}.`, sourceQuote: "Descrição arquivística.", source, rationale: "Conceito documentado.", referenceIds: [], definitionBasis: "source-description" }], alternativePathEvidence: [], repairHistory: [{ priorText: "preserved" }] })),
  }
  const bytes = Buffer.from(JSON.stringify(draft))
  const report = {
    reviewId: "fixture-v2", status: "complete-independent-model-review", clinicalApproval: false, releaseAuthorized: false,
    input: { sha256: hash(bytes), byteLength: bytes.length },
    hashMethods: { draft: "SHA256 of exact raw reviewed file bytes", text: "SHA256 of UTF-8 story.text", storyObject: "SHA256 of UTF-8 JSON.stringify(parsed story); supplemental, not raw byte slice" },
    counts: { stories: 2, read: 2, semanticallyReviewed: 2, pendingReview: 0, modelReviewed: 1, hold: 1, needsRevision: 1, excluded: 0 },
    reviewedStoryIds: ["a", "b"], modelReviewedStoryIds: ["a"], heldStoryIds: ["b"],
    contextInventory: [context], futureAdapterContract: { reviewedDraftSha256: hash(bytes), candidateIds: ["a"], heldIds: ["b"] },
    reviewer: { requestedModelLiteral: "fixture", executionIdentity: "unknown" }, batchAssessments: [{ id: "B1", criteria: "Preserved criteria" }],
    items: draft.stories.map((story, index) => ({ id: story.id, contextId: story.contextId, reviewStatus: "completed", disposition: index ? "needs-revision" : "model-reviewed", hold: !!index, holdReasons: index ? ["fixture finding"] : [], reviewedText: story.text, textSha256: hash(story.text), storyObjectSha256: hash(JSON.stringify(story)), acceptedContextIds: ["context"], alternativeContextIds: [], supportedAcceptedPaths: [{ contextId: "context", evidenceQuote: story.text, verdict: "supported-for-source-based-term-matching", definitionBasis: "source-description" }], clinicalApproval: false })),
  }
  return { draft, bytes, report }
}
const prepare = (bytes, report) => prepareInterviewRelease(bytes, Buffer.from(JSON.stringify(report)))

test("preparation selects only explicit completed nonheld decisions; preserves archive and provenance", () => {
  const { bytes, draft, report } = fixture()
  const result = prepare(bytes, report)
  assert.deepEqual(result.stories.map((story) => story.id), ["a"])
  assert.equal(result.release.id, "interrogatorio-v1")
  assert.equal(result.release.prototype, true)
  assert.equal(result.release.clinicalApproval, false)
  assert.equal(result.review.reportSha256, hash(Buffer.from(JSON.stringify(report))))
  assert.deepEqual(result.contexts, draft.contexts)
  assert.deepEqual(result.clinicalReferences, draft.clinicalReferences)
  assert.deepEqual(result.stories[0].repairHistory, draft.stories[0].repairHistory)
  assert.deepEqual(result.stories[0].review.priorDraftState, draft.stories[0].review)
  assert.deepEqual(Object.keys(result.review.reportMetadata), ["reviewId", "status", "completedAt", "reviewer", "counts", "hashMethods"])
  assert.deepEqual(result.review.reportMetadata.counts, report.counts)
  assert.equal(result.review.reportMetadata.batchAssessments, undefined)
  assert.equal(result.coverage.withheld[0].id, "b")
  assert.equal(result.sourceArchive.automaticallyPlayable, false)
  assert.equal(result.sourceArchive.sourceDescriptionQuestions, 0)
  assert.equal(adaptInterviewRelease(result).length, 1)
  assert.deepEqual(prepare(bytes, report), result, "deterministic without time or external reads")
})

test("incomplete, stale, duplicate and inconsistent review artifacts fail closed", () => {
  const cases = [
    [(r) => { r.status = "partial-independent-review" }, /complete independent/],
    [(r) => { r.input.sha256 = "stale" }, /fingerprint/],
    [(r) => { r.input.byteLength++ }, /fingerprint/],
    [(r) => { r.items.pop() }, /every ID/],
    [(r) => { r.items[1] = r.items[0] }, /every ID/],
    [(r) => { r.items[0].reviewStatus = "pending" }, /incomplete review/],
    [(r) => { r.items[0].reviewedText = "edited" }, /reviewed text/],
    [(r) => { r.items[0].textSha256 = "stale" }, /text fingerprint/],
    [(r) => { r.items[0].storyObjectSha256 = "stale" }, /object fingerprint/],
    [(r) => { r.items[0].acceptedContextIds = [] }, /answer differs/],
    [(r) => { r.items[0].supportedAcceptedPaths = [] }, /supported paths/],
    [(r) => { r.items[0].supportedAcceptedPaths[0].evidenceQuote = "invented" }, /not supported/],
    [(r) => { r.contextInventory[0].group = "Wrong" }, /source context differs/],
    [(r) => { r.counts.pendingReview = 1 }, /counts/],
    [(r) => { r.futureAdapterContract.candidateIds.push("b") }, /Contract candidates/],
    [(r) => { r.items[0].hold = true }, /No nonheld/],
    [(r) => { r.items[0].candidatesForAdjudication = [{ contextId: "other" }] }, /unresolved/],
    [(r) => { r.hashMethods.storyObject = "canonical-json" }, /hashMethods/],
  ]
  for (const [mutate, expected] of cases) {
    const { bytes, report } = fixture()
    mutate(report)
    assert.throws(() => prepare(bytes, report), expected)
  }
  const { bytes, report } = fixture()
  assert.throws(() => prepare(Buffer.concat([bytes, Buffer.from("\n")]), report), /fingerprint/)
})

test("unknown paths and unsupported partial evidence are rejected even under refreshed whole-bank hash", () => {
  for (const mutate of [
    (draft) => { draft.stories[0].acceptedContextIds.push("unknown") },
    (draft) => { draft.stories[0].acceptedPathEvidence[0].source.locator = "wrong" },
    (draft) => { draft.stories[0].alternativeContextIds = ["context"] },
    (draft) => { draft.stories[0].acceptedPathEvidence[0].quote = "invented" },
  ]) {
    const { draft, report } = fixture()
    // JSON round trip detaches shared source objects to exercise a single changed mapping.
    const changed = structuredClone(JSON.parse(JSON.stringify(draft)))
    mutate(changed)
    const bytes = Buffer.from(JSON.stringify(changed))
    report.input = { sha256: hash(bytes), byteLength: bytes.length }
    assert.throws(() => prepare(bytes, report), /path|evidence|source/)
  }
})

test("header and bounded context patches are read-only payloads, idempotent and checked against final selection", () => {
  const { bytes, report } = fixture(), result = prepare(bytes, report)
  const headerPatch = buildInterviewReleasePatch(result)
  assert.match(headerPatch, /^\*\*\* Begin Patch\n\*\*\* Add File:/)
  const headerBytes = headerPatch.split("\n").filter((line) => line.startsWith("+")).map((line) => line.slice(1)).join("\n")
  const header = JSON.parse(headerBytes)
  assert.equal(headerBytes.split("\n").length, Object.keys(result).length + 2, "one compact line per root property")
  assert.deepEqual(header.stories, [])
  assert.throws(() => checkFrozenInterviewRelease(header, result), /incomplete/)
  const patch = buildInterviewReleasePatch(result, { contextId: "context", existingBytes: headerBytes })
  assert.equal(patch.split("\n").filter((line) => line.startsWith('+    {"id":')).length, 1)
  const block = patch.split("\n").filter((line) => line.startsWith("+")).map((line) => line.slice(1)).join("\n")
  const completed = headerBytes.replace('  "stories": [],', block)
  assert.doesNotThrow(() => checkFrozenInterviewRelease(JSON.parse(completed), result))
  assert.equal(buildInterviewReleasePatch(result, { contextId: "context", existingBytes: completed }), "")
  assert.throws(() => buildInterviewReleasePatch(result, { existingBytes: completed }), /already exists/)
  assert.throws(() => buildInterviewReleasePatch(result, { contextId: "unknown", existingBytes: completed }), /Unknown/)
  const altered = JSON.parse(completed)
  altered.stories[0].generation.model = "tampered"
  assert.throws(() => checkFrozenInterviewRelease(altered, result), /differs/)
  altered.stories = [result.stories[0], result.stories[0]]
  assert.throws(() => checkFrozenInterviewRelease(altered, result), /duplicate/)
  altered.stories = []; altered.contexts[0].originalDescription = "tampered archive"
  assert.throws(() => buildInterviewReleasePatch(result, { contextId: "context", existingBytes: JSON.stringify(altered) }), /differs/)
})

test("ten-story append bound and final checks support multiple independently appended contexts", () => {
  const { bytes, report } = fixture(), result = prepare(bytes, report)
  result.contexts.push({ ...result.contexts[0], id: "second" })
  result.stories.push({ ...result.stories[0], id: "second-story", contextId: "second" })
  const subset = { ...result, stories: [result.stories[0]] }
  assert.doesNotThrow(() => checkFrozenInterviewRelease(subset, result, { allowPartial: true }))
  // Build exactly the compact formatting produced by context patches.
  const compact = JSON.stringify({ ...result, stories: [] }, null, 2).replace('  "stories": [],', `  "stories": [\n    ${JSON.stringify(result.stories[0])}\n  ],`)
  assert.match(buildInterviewReleasePatch(result, { contextId: "second", existingBytes: compact }), /second-story/)
  assert.doesNotThrow(() => checkFrozenInterviewRelease({ ...result, stories: [...result.stories].reverse() }, result))
  result.stories = Array.from({ length: 11 }, (_, i) => ({ ...result.stories[0], id: `extra-${i}` }))
  const empty = JSON.stringify({ ...result, stories: [] }, null, 2)
  assert.throws(() => buildInterviewReleasePatch(result, { contextId: "context", existingBytes: empty }), /ten-story bound/)
})

test("frozen interview releases equal the reviewed selections recomputed from source", () => {
  const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url))
  const computed = prepareInterviewRelease(read("content/drafts/interrogatorio.json"), read("docs/reviews/interrogatorio-v2.json"), { sourceRegistry: JSON.parse(read("content/sources.json")) })
  assert.doesNotThrow(() => checkFrozenInterviewRelease(JSON.parse(read("content/releases/interrogatorio.v1.json")), computed))
  const reports = readdirSync(new URL("../content/reviews/", import.meta.url)).filter((name) => /^interrogatorio-batch-\d+\.json$/.test(name)).sort()
  assert.ok(reports.length >= 2)
  for (const name of reports) {
    const reviewFile = `content/reviews/${name}`, reportBytes = read(reviewFile), report = JSON.parse(reportBytes)
    const batch = prepareInterviewBatch(read("content/drafts/interrogatorio.json"), read(report.input.path), reportBytes, { reviewFile })
    assert.deepEqual(JSON.parse(read(`content/releases/${report.reviewId}.json`)), batch, name)
  }
})
