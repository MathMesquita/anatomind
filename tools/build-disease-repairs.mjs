import { createHash } from "node:crypto"
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const DRAFT = "content/drafts/antecedentes.json", REVIEWS = "content/reviews", OUT = "content/batches/antecedentes-repairs-001.json", TEXT_EDITS = "content/batches/antecedentes-repairs-001-text-edits.json"
const REVISION = "antecedentes-review-repairs-001", DATE = "2026-11-15"
const hash = (value) => createHash("sha256").update(value).digest("hex")
const check = (condition, message) => { if (!condition) throw new Error(message) }

// Fixes the reviews ask for that a pair-by-pair comparison cannot see (read from each record's revisionReason).
const REGISTER_UNRESOLVED = { "cancer-de-testiculo": "endocrinologicas", "carcinoma-epitelial-ovario": "endocrinologicas" }
const CORRECT_POSITIVE = { "sindrome-tunel-carpo": "neurologicas" }
// The review holds this record's only positive link, which comes from the lecture PDF itself. Only the teacher can settle it.
const DEFERRED_TO_TEACHER = { dislipidemia: "cardiovasculares" }

// Review reports talk about the draft ("não declarado no rascunho"). A record's own rationale must not.
const REVIEW_TALK = /rascunho|não declarad|neste lote|relatório|vínculo aceito|promoção a positivo|distrator|revisor|lotes anteriores/i
const SENTENCE_END = /(?<=(?:[\p{L}\d]{3}|[)”"\]])[.!?][”"]?)\s+(?=[\p{Lu}“"(\d])/u

/** Keeps the factual clauses of a review reason; drops the clauses that only describe the review itself. */
export function cleanReason(text) {
  const dropped = []
  const sentences = text.trim().split(SENTENCE_END).flatMap((sentence) => {
    const clauses = sentence.replace(/\.$/, "").split(/;\s+/).flatMap((clause) => {
      if (!REVIEW_TALK.test(clause)) return [clause]
      const colon = clause.indexOf(": ")
      if (colon > 0 && REVIEW_TALK.test(clause.slice(0, colon)) && !REVIEW_TALK.test(clause.slice(colon + 2))) return [clause.slice(colon + 2)]
      dropped.push(clause)
      return []
    })
    if (!clauses.length) return []
    const joined = clauses.join("; ")
    const capitalized = joined[0].toLocaleUpperCase("pt-BR") + joined.slice(1)
    return [/[.!?][”"]?$/.test(capitalized) ? capitalized : `${capitalized}.`]
  })
  return { text: sentences.join(" "), dropped }
}

/**
 * Applies the fixes proposed by the independent disease reviews to copies of the reviewed records.
 * The base draft and the reviews are never changed. Held pairs stay held: no record becomes game-ready here.
 */
export function buildDiseaseRepairs(draftBytes, reviewFiles, textEdits = { edits: [] }) {
  const draft = JSON.parse(draftBytes), draftSha = hash(draftBytes)
  const groupOrder = draft.groups.map((group) => group.id)
  const groupEdits = new Map(groupOrder.map((id) => [id, { add: [], remove: [] }]))
  const diseases = [], reviewSources = [], deferredToTeacher = [], droppedClauses = []
  const counts = { addedConditional: 0, demotedPositiveToConditional: 0, withdrewPositiveToUnresolved: 0, addedPositive: 0, registeredUnresolved: 0, correctedPositive: 0 }
  const pendingReview = { status: "draft", date: DATE, revisionId: REVISION, independentReview: "pending-for-this-repair", clinicalReview: "not-performed-in-this-pass", clinicalApproval: false, curricularApproval: false, disposition: "draft-withheld" }

  for (const { path: file, bytes } of reviewFiles) {
    const report = JSON.parse(bytes), reportSha = hash(bytes)
    check(report.input?.sourceFileSha256 === draftSha, `${file}: review was not made against this draft`)
    const sources = new Map(report.sources.map((source) => [source.id, source]))
    const repaired = []
    for (const record of report.records) {
      if (record.disposition !== "needs-revision") continue
      const before = draft.diseases[record.arrayIndex]
      check(before?.id === record.diseaseId && record.recordObjectSha256 === hash(JSON.stringify(before)), `${file}/${record.diseaseId}: reviewed record differs from the draft`)
      if (DEFERRED_TO_TEACHER[before.id]) {
        const verdict = record.groupReviews.find((item) => item.groupId === DEFERRED_TO_TEACHER[before.id])
        check(verdict?.membershipStatus === "held" && before.memberships.length === 1, `${before.id}: deferral no longer matches the review`)
        deferredToTeacher.push({ diseaseId: before.id, groupId: verdict.groupId, reviewReport: file, reason: "Único vínculo positivo do registro, vindo da inclusão no PDF da disciplina; a revisão o reteve e pede decisão explícita do docente. Registro mantido sem alteração." })
        continue
      }
      const disease = structuredClone(before), changes = []
      const evidenceFor = (verdict) => {
        const ids = [...new Set(verdict.sourceIds ?? [])], own = ids.filter((id) => !id.startsWith("SCOPE-"))
        const evidence = (own.length ? own : ids).map((id) => {
          const source = sources.get(id)
          check(source && /^https?:\/\//.test(source.url) && source.title && source.locator, `${file}/${before.id}×${verdict.groupId}: unusable source ${id}`)
          return { url: source.url, title: `${source.title} — ${source.institution}`, locator: source.locator, observedSupport: source.observedSupport, accessedAt: source.accessedAt, verification: source.verification, reviewSourceId: source.id }
        })
        check(evidence.length, `${file}/${before.id}×${verdict.groupId}: no evidence`)
        return evidence
      }
      const rationaleFor = (verdict, fallback) => {
        const cleaned = cleanReason(verdict.reason)
        for (const clause of cleaned.dropped) droppedClauses.push(`${before.id}×${verdict.groupId}: ${clause}`)
        check(cleaned.text || fallback, `${file}/${before.id}×${verdict.groupId}: no rationale left`)
        return cleaned.text || fallback
      }
      const take = (list, groupId) => {
        const index = list.findIndex((item) => item.groupId === groupId)
        return index < 0 ? null : list.splice(index, 1)[0]
      }
      const blocked = { usableAsUnqualifiedPositive: false, usableAsVerifiedDistractor: false }

      for (const verdict of record.groupReviews) {
        const groupId = verdict.groupId, status = verdict.membershipStatus
        const positive = disease.memberships.find((item) => item.groupId === groupId)
        const conditional = (disease.conditionalMemberships ?? []).find((item) => item.groupId === groupId)
        check(!conditional || status === "conditional", `${before.id}×${groupId}: review rejects a declared conditional; not handled`)
        check(!positive || status !== "not-accepted-for-named-diagnosis", `${before.id}×${groupId}: review rejects a declared positive; not handled`)
        if (status === "conditional" && !conditional) {
          check(typeof verdict.requires === "string" && verdict.requires.trim(), `${before.id}×${groupId}: condition missing`)
          const entry = { groupId, requires: verdict.requires, evidence: evidenceFor(verdict), rationale: rationaleFor(verdict, verdict.requires), countsTowardCoverage: false, ...blocked, review: pendingReview, addedInRevision: REVISION }
          if (positive) {
            const previous = take(disease.memberships, groupId)
            entry.demotedFromPositive = { rationale: previous.rationale, evidence: previous.evidence }
            groupEdits.get(groupId).remove.push(before.id)
            changes.push({ type: "demoted-positive-to-conditional", groupId }); counts.demotedPositiveToConditional++
          } else { changes.push({ type: "added-conditional-membership", groupId }); counts.addedConditional++ }
          ;(disease.conditionalMemberships ??= []).push(entry)
        } else if (status === "held" && positive) {
          const previous = take(disease.memberships, groupId)
          ;(disease.unresolvedMemberships ??= []).push({ groupId, status: "pending-curricular-decision", reason: rationaleFor(verdict), evidence: evidenceFor(verdict), withdrawnPositive: { rationale: previous.rationale, evidence: previous.evidence }, ...blocked, review: pendingReview, addedInRevision: REVISION })
          groupEdits.get(groupId).remove.push(before.id)
          changes.push({ type: "withdrew-positive-to-unresolved", groupId }); counts.withdrewPositiveToUnresolved++
        } else if (status === "held" && REGISTER_UNRESOLVED[before.id] === groupId) {
          ;(disease.unresolvedMemberships ??= []).push({ groupId, status: "pending-curricular-decision", reason: rationaleFor(verdict), evidence: evidenceFor(verdict), ...blocked, review: pendingReview, addedInRevision: REVISION })
          changes.push({ type: "registered-unresolved-pair", groupId }); counts.registeredUnresolved++
        } else if (status === "accepted" && !positive) {
          disease.memberships.push({ groupId, evidence: evidenceFor(verdict), rationale: rationaleFor(verdict), classificationBasis: verdict.classificationBasis, verification: { status: "source-read-in-cited-independent-review", report: file, clinicalApproval: false, curricularApproval: false }, review: pendingReview, addedInRevision: REVISION })
          groupEdits.get(groupId).add.push(before.id)
          changes.push({ type: "added-positive-membership", groupId }); counts.addedPositive++
        } else if (status === "accepted" && CORRECT_POSITIVE[before.id] === groupId) {
          positive.replacedInRevision = { revisionId: REVISION, rationale: positive.rationale, evidence: positive.evidence }
          positive.rationale = rationaleFor(verdict)
          positive.evidence = evidenceFor(verdict)
          changes.push({ type: "corrected-positive-rationale-and-evidence", groupId }); counts.correctedPositive++
        }
      }
      check(changes.length, `${file}/${before.id}: review asks for a revision this tool does not know how to apply`)
      check(disease.memberships.length, `${before.id}: repair would leave no positive membership`)

      const positiveIds = disease.memberships.map((item) => item.groupId), conditionalIds = (disease.conditionalMemberships ?? []).map((item) => item.groupId)
      const settled = new Set([...positiveIds, ...conditionalIds])
      const unresolvedIds = [...new Set([...before.membershipAudit.unresolvedGroupIds, ...(disease.unresolvedMemberships ?? []).map((item) => item.groupId)])].filter((id) => !settled.has(id))
      const listed = new Set([...settled, ...unresolvedIds])
      check(positiveIds.length + conditionalIds.length + unresolvedIds.length === listed.size, `${before.id}: a group appears in two membership lists`)
      disease.membershipAudit = { ...before.membershipAudit, date: DATE, positiveGroupIds: positiveIds, conditionalGroupIds: conditionalIds, unresolvedGroupIds: unresolvedIds, notEstablishedGroupIds: groupOrder.filter((id) => !listed.has(id)), independentReview: false }
      disease.review = pendingReview
      disease.generationHistory = [...(before.generationHistory ?? []), { model: "claude-fable-5-2", promptVersion: "antecedentes-review-repairs-v1", date: DATE, scope: "editorial-repair-applying-independent-review-proposals", revisionId: REVISION }]
      disease.repair = { revisionId: REVISION, previousRecordSha256: record.recordObjectSha256, reviewReport: file, reviewReportSha256: reportSha, changes }
      diseases.push(disease)
      repaired.push(before.id)
    }
    if (repaired.length) reviewSources.push({ path: file, sha256: reportSha, diseaseIds: repaired })
  }

  // Trims found by the independent check of the repaired text: wording that said more than the cited sources show.
  for (const edit of textEdits.edits) {
    const disease = diseases.find((item) => item.id === edit.diseaseId)
    const added = (item) => item.groupId === edit.groupId && (item.addedInRevision === REVISION || item.replacedInRevision)
    const target = disease && [...(disease.conditionalMemberships ?? []), ...(disease.unresolvedMemberships ?? []), ...disease.memberships].find(added)
    const key = edit.field === "requires" ? "requires" : target && ("rationale" in target ? "rationale" : "reason")
    check(target && typeof target[key] === "string" && target[key].split(edit.find).length === 2, `text edit does not match: ${edit.diseaseId}×${edit.groupId} "${edit.find.slice(0, 50)}"`)
    target[key] = target[key].replace(edit.find, () => edit.replace)
    check(target[key].trim().length > 20 && /[.!?”"]$/.test(target[key]), `text edit broke the text: ${edit.diseaseId}×${edit.groupId}`)
    target.textTrimmedAfterIndependentCheck = true
  }
  counts.textEdits = textEdits.edits.length

  const groupMembershipChanges = draft.groups.flatMap((group) => {
    const { add, remove } = groupEdits.get(group.id)
    if (!add.length && !remove.length) return []
    check(remove.every((id) => group.diseaseIds.includes(id)) && add.every((id) => !group.diseaseIds.includes(id)), `${group.id}: group list disagrees with the records`)
    return [{ groupId: group.id, addDiseaseIds: add, removeDiseaseIds: remove, positiveCountBefore: group.diseaseIds.length, positiveCountAfter: group.diseaseIds.length + add.length - remove.length }]
  })
  const batch = {
    schemaVersion: 1,
    topic: "antecedentes",
    batchId: REVISION,
    baseDraftPath: DRAFT,
    baseDraftSha256: draftSha,
    baseDraftByteLength: draftBytes.length,
    reviewSources,
    previousRecordHashMethod: "sha256(JSON.stringify(baseDraft.diseases[arrayIndex]))",
    assignedDiseaseIds: diseases.map((disease) => disease.id),
    scope: "Aplica somente as correções propostas nos relatórios de revisão independente (pares que bloqueiam). O rascunho-base e os relatórios não são alterados.",
    limits: "Pares retidos continuam retidos e dependem de decisão docente; pela regra estrita de elegibilidade, nenhum registro fica utilizável no app só com este lote. Nenhum par não positivo vale como distrator.",
    generation: { model: "claude-fable-5-2", promptVersion: "antecedentes-review-repairs-v1", date: DATE, authorship: "editorial-repair", method: "Aplicação mecânica das propostas dos relatórios por tools/build-disease-repairs.mjs; justificativas derivadas do texto da revisão, sem leitura nova de fontes." },
    review: { status: "draft", clinicalReview: "not-recorded", independentReview: "pending", clinicalApproval: false, curricularApproval: false },
    counts: { repairedRecords: diseases.length, deferredToTeacher: deferredToTeacher.length, ...counts },
    deferredToTeacher,
    textEdits: { path: TEXT_EDITS, basis: textEdits.basis ?? null, applied: textEdits.edits.length },
    groupMembershipChanges,
    diseases,
  }
  return { batch, droppedClauses }
}

/** The base draft with the repaired records and group lists swapped in. Used to run the normal content checks. */
export function applyDiseaseRepairs(draft, batch) {
  const repaired = new Map(batch.diseases.map((disease) => [disease.id, disease]))
  const edits = new Map(batch.groupMembershipChanges.map((change) => [change.groupId, change]))
  return {
    ...draft,
    diseases: draft.diseases.map((disease) => repaired.get(disease.id) ?? disease),
    groups: draft.groups.map((group) => {
      const change = edits.get(group.id)
      return change ? { ...group, diseaseIds: [...group.diseaseIds.filter((id) => !change.removeDiseaseIds.includes(id)), ...change.addDiseaseIds] } : group
    }),
  }
}

export function buildDiseaseRepairsFromFiles() {
  const files = readdirSync(REVIEWS).filter((name) => /^antecedentes-batch-\d{3}\.json$/.test(name)).sort()
  return buildDiseaseRepairs(readFileSync(DRAFT), files.map((name) => ({ path: `${REVIEWS}/${name}`, bytes: readFileSync(`${REVIEWS}/${name}`) })), existsSync(TEXT_EDITS) ? JSON.parse(readFileSync(TEXT_EDITS, "utf8")) : undefined)
}

/** One compact record per line, like the frozen releases. */
export function serializeDiseaseRepairs(batch) {
  const serialized = `${JSON.stringify({ ...batch, diseases: [] }, null, 2).replace(/"diseases": \[\]\n\}$/, `"diseases": [\n${batch.diseases.map((disease) => `    ${JSON.stringify(disease)}`).join(",\n")}\n  ]\n}`)}\n`
  check(JSON.stringify(JSON.parse(serialized)) === JSON.stringify(batch), "Serialization changed the batch")
  return serialized
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const { batch, droppedClauses } = buildDiseaseRepairsFromFiles(), serialized = serializeDiseaseRepairs(batch)
  if (process.argv.includes("--dropped")) for (const clause of droppedClauses) console.log(clause)
  if (process.argv.includes("--write")) writeFileSync(OUT, serialized)
  else if (process.argv.includes("--check")) check(existsSync(OUT) && readFileSync(OUT, "utf8") === serialized, "Saved repairs batch differs from the review proposals")
  console.log(JSON.stringify({ batch: batch.batchId, ...batch.counts, groups: batch.groupMembershipChanges.map((change) => `${change.groupId} ${change.positiveCountBefore}->${change.positiveCountAfter}`), droppedClauses: droppedClauses.length }))
}
