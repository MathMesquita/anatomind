import { readFileSync, readdirSync, existsSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

/** Structural checks only: a pass never establishes medical accuracy. */
export function validateContent(bank, { sourceRegistry } = {}) {
  const errors = [], warnings = [], counts = {}
  const check = (ok, message) => { if (!ok) errors.push(message) }
  const list = (value) => Array.isArray(value) ? value : []
  const nonempty = (value) => typeof value === "string" && value.trim().length > 0
  const unique = (items, name) => {
    const records = items.filter((item) => item && typeof item === "object" && !Array.isArray(item))
    check(records.length === items.length, `${name}: invalid record`)
    const ids = records.map((item) => item.id)
    check(ids.every(nonempty), `${name}: every record needs a stable id`)
    check(new Set(ids).size === ids.length, `${name}: duplicate ids`)
    return new Map(records.map((item) => [item.id, item]))
  }
  check(bank?.schemaVersion === 1, "schemaVersion must be 1")
  check(["antecedentes", "caracteres", "interrogatorio", "regioes"].includes(bank?.topic), "unknown topic")
  const documents = unique(list(bank?.sourceDocuments), "sourceDocuments")
  check(documents.size > 0, "sourceDocuments cannot be empty")
  for (const doc of documents.values()) {
    check(nonempty(doc.filename), `${doc.id}: source filename missing`)
    check(Number.isInteger(doc.pages) && doc.pages > 0, `${doc.id}: invalid page count`)
    if (sourceRegistry) {
      const verified = list(sourceRegistry.documents).find((entry) => entry.filename?.normalize("NFC") === doc.filename?.normalize("NFC"))
      check(!!verified, `${doc.id}: filename not in verified source registry`)
      if (verified) check(verified.pages === doc.pages, `${doc.id}: page count differs from original PDF`)
    }
  }
  const source = (ref, id) => {
    const doc = documents.get(ref?.documentId)
    check(!!doc, `${id}: unknown source document`)
    check(Number.isInteger(ref?.page) && ref.page > 0 && ref.page <= (doc?.pages ?? 0), `${id}: invalid source page`)
    check(nonempty(ref?.locator), `${id}: source locator missing`)
  }
  check(nonempty(bank?.generation?.model) && nonempty(bank?.generation?.promptVersion), "generation provenance missing")
  check(bank?.review?.status === "draft" || bank?.review?.status === "model-reviewed", "draft bank must not claim clinical approval")
  const textKeys = new Set()
  const story = (item) => {
    check(nonempty(item.text), `${item.id}: story missing`)
    const text = typeof item.text === "string" ? item.text : ""
    const key = text.toLocaleLowerCase("pt-BR").replace(/[\p{P}\p{Z}\s]+/gu, " ").trim()
    check(!textKeys.has(key), `${item.id}: duplicate story text`); textKeys.add(key)
    check(text.split(/\n\s*\n/).length <= 2, `${item.id}: more than two paragraphs`)
    source(item.source, item.id)
    check(nonempty(item.generation?.model) && nonempty(item.generation?.promptVersion), `${item.id}: generation provenance missing`)
    check(["draft", "model-reviewed", "needs-revision", "excluded"].includes(item.review?.status), `${item.id}: review state missing or unsupported`)
  }

  if (bank?.topic === "antecedentes") {
    const groups = unique(list(bank.groups), "groups"), diseases = unique(list(bank.diseases), "diseases")
    check(groups.size > 0, "disease group inventory cannot be empty")
    for (const group of groups.values()) {
      source(group.source, group.id)
      const ids = list(group.diseaseIds)
      check(new Set(ids).size === ids.length, `${group.id}: duplicate disease ids`)
      for (const id of ids) check(list(diseases.get(id)?.memberships).some((m) => m.groupId === group.id), `${group.id}: disease ${id} missing reverse membership`)
      if (ids.length < 20) warnings.push(`${group.id}: ${ids.length}/20 disease target (shortfalls may be justified)`)
    }
    for (const disease of diseases.values()) {
      check(nonempty(disease.label), `${disease.id}: label missing`)
      const memberships = list(disease.memberships)
      check(memberships.length > 0, `${disease.id}: no group memberships`)
      check(new Set(memberships.map((m) => m.groupId)).size === memberships.length, `${disease.id}: duplicate memberships`)
      for (const membership of memberships) {
        check(list(groups.get(membership.groupId)?.diseaseIds).includes(disease.id), `${disease.id}: unknown or inconsistent group ${membership.groupId}`)
        check(nonempty(membership.rationale), `${disease.id}: membership rationale missing`)
        const evidence = list(membership.evidence)
        check(evidence.length > 0, `${disease.id}: membership evidence missing`)
        for (const ref of evidence) {
          let url
          try { url = new URL(ref.url) } catch { /* Report below. */ }
          check(url?.protocol === "https:" || url?.protocol === "http:", `${disease.id}: invalid evidence URL`)
          check(nonempty(ref.title) && nonempty(ref.locator), `${disease.id}: evidence title/locator missing`)
        }
      }
    }
    Object.assign(counts, { groups: groups.size, diseases: diseases.size, memberships: [...diseases.values()].reduce((n, d) => n + list(d.memberships).length, 0) })
  }

  if (bank?.topic === "caracteres") {
    const groups = unique(list(bank.groups), "groups"), stories = unique(list(bank.stories), "stories")
    check(groups.size > 0, "symptom group inventory cannot be empty")
    for (const group of groups.values()) {
      source(group.source, group.id)
      unique(list(group.fields), `${group.id} fields`)
      check(list(group.fields).length > 0, `${group.id}: checklist empty`)
      const total = [...stories.values()].filter((s) => s.groupId === group.id).length
      if (total < 20) warnings.push(`${group.id}: ${total}/20 stories`)
    }
    for (const item of stories.values()) {
      story(item)
      const group = groups.get(item.groupId)
      check(!!group, `${item.id}: unknown group`)
      const fields = list(group?.fields).map((field) => field.id), evidence = list(item.evidence), missing = list(item.missingFieldIds)
      check(evidence.length === fields.length && new Set(evidence.map((e) => e.fieldId)).size === fields.length, `${item.id}: evidence must cover every checklist field exactly once`)
      check(new Set(missing).size === missing.length, `${item.id}: duplicate missing fields`)
      for (const field of missing) check(fields.includes(field), `${item.id}: unknown missing field ${field}`)
      for (const field of evidence) {
        check(fields.includes(field.fieldId), `${item.id}: unknown evidence field ${field.fieldId}`)
        check(nonempty(field.rationale), `${item.id}/${field.fieldId}: rationale missing`)
        check((field.quote === null) === missing.includes(field.fieldId), `${item.id}/${field.fieldId}: missing set disagrees with evidence`)
        if (field.quote !== null) check(nonempty(field.quote) && item.text?.includes(field.quote), `${item.id}/${field.fieldId}: evidence quote not in story`)
      }
      if (bank.evidencePolicy?.id === "missing-context-v2") {
        const byStatus = (status) => evidence.filter((field) => field.status === status).map((field) => field.fieldId)
        const sameSet = (left, right) => Array.isArray(left) && left.length === new Set(left).size && left.length === right.length && left.every((id) => right.includes(id))
        const omitted = byStatus("omitted"), partial = byStatus("partial"), unknown = byStatus("addressed-unknown")
        const expected = [...omitted, ...partial]
        check(sameSet(item.missingFieldIds, omitted), `${item.id}: omissions disagree with evidence status`)
        check(sameSet(item.incompleteFieldIds, partial), `${item.id}: partial fields disagree with evidence status`)
        check(sameSet(item.unknownFieldIds, unknown), `${item.id}: unknown fields disagree with evidence status`)
        check(sameSet(item.missingContextFieldIds, expected), `${item.id}: missing context must include omissions and partial fields`)
        for (const field of evidence) {
          check(["documented", "omitted", "partial", "addressed-unknown"].includes(field.status), `${item.id}/${field.fieldId}: unsupported evidence status`)
          if (field.quote === null) check(field.start === null && field.end === null, `${item.id}/${field.fieldId}: omitted evidence needs null offsets`)
          else check(Number.isInteger(field.start) && field.start >= 0 && Number.isInteger(field.end) && field.end > field.start && item.text?.slice(field.start, field.end) === field.quote, `${item.id}/${field.fieldId}: evidence offsets do not match quote`)
        }
        if (unknown.length) {
          check(item.answer === null, `${item.id}: unknown information must withhold automatic answer`)
          check(["needs-revision", "excluded"].includes(item.review?.status), `${item.id}: unknown information requires hold/revision`)
        } else {
          check(item.answer?.policy === "missing-context-v2" && sameSet(item.answer?.fieldIds, expected), `${item.id}: answer must include omitted and partial fields`)
          check(item.answer?.noneMissing === (expected.length === 0), `${item.id}: none-missing answer disagrees with checklist`)
          check(item.answer?.exclusiveNoneLabel === "Nenhum dado ausente", `${item.id}: explicit none label missing`)
        }
      }
    }
    Object.assign(counts, { groups: groups.size, stories: stories.size, targetStories: groups.size * 20 })
  }

  if (bank?.topic === "interrogatorio") {
    const contexts = unique(list(bank.contexts), "contexts"), stories = unique(list(bank.stories), "stories")
    check(contexts.size > 0, "interview context inventory cannot be empty")
    for (const context of contexts.values()) {
      source(context.source, context.id)
      check(nonempty(context.term) && nonempty(context.group) && (context.subgroup === null || nonempty(context.subgroup)), `${context.id}: invalid hierarchy`)
      check(nonempty(context.originalDescription), `${context.id}: original description missing`)
      const total = [...stories.values()].filter((s) => s.contextId === context.id).length
      if (total < 10) warnings.push(`${context.id}: ${total}/10 stories`)
    }
    for (const item of stories.values()) {
      story(item)
      check(contexts.has(item.contextId), `${item.id}: unknown context`)
      const accepted = list(item.acceptedContextIds), alternatives = list(item.alternativeContextIds)
      check(accepted.includes(item.contextId), `${item.id}: own context not accepted`)
      check(nonempty(item.rationale), `${item.id}: rationale missing`)
      check(new Set(accepted).size === accepted.length && new Set(alternatives).size === alternatives.length, `${item.id}: duplicate pathways`)
      for (const id of [...accepted, ...alternatives]) check(contexts.has(id), `${item.id}: unknown pathway ${id}`)
      for (const id of alternatives) check(!accepted.includes(id), `${item.id}: accepted and partial-credit pathways overlap`)
    }
    Object.assign(counts, { contexts: contexts.size, stories: stories.size, targetStories: contexts.size * 10, sourceDescriptions: contexts.size })
  }

  if (bank?.topic === "regioes") {
    const regions = unique(list(bank.regions), "regions"), questions = unique(list(bank.questions), "questions"), targets = new Set()
    check(regions.size > 0, "region inventory cannot be empty")
    for (const region of regions.values()) { source(region.source, region.id); check(nonempty(region.label), `${region.id}: label missing`) }
    for (const question of questions.values()) {
      source(question.source, question.id)
      check(["anterior", "posterior", "lateral", "face", "occipital"].includes(question.view), `${question.id}: unknown view`)
      const answer = regions.get(question.answerRegionId), options = list(question.optionRegionIds)
      check(answer?.number === question.number, `${question.id}: number does not match legend`)
      check(options.length === 4 && new Set(options).size === 4 && options.includes(question.answerRegionId), `${question.id}: expected four distinct options with correct answer`)
      for (const id of options) check(regions.has(id), `${question.id}: unknown option ${id}`)
      check([question.marker?.x, question.marker?.y].every((n) => Number.isFinite(n) && n >= 0 && n <= 100), `${question.id}: invalid marker percentages`)
      const key = `${question.view}:${question.number}`
      check(!targets.has(key), `${question.id}: duplicate visible target`); targets.add(key)
      check(nonempty(question.review?.visualCheck), `${question.id}: visual check missing`)
    }
    const localized = new Set([...questions.values()].map((question) => question.answerRegionId))
    for (const region of regions.values()) if (!localized.has(region.id)) warnings.push(`${region.id}: no visually localized question yet`)
    Object.assign(counts, { regions: regions.size, questions: questions.size, localizedRegions: localized.size, unlocalizedRegions: regions.size - localized.size })
  }
  return { topic: bank?.topic, counts, errors, warnings, structuralPass: errors.length === 0, clinicalApproval: false }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const directory = path.resolve("content/drafts")
  const files = process.argv.slice(2).length ? process.argv.slice(2) : existsSync(directory) ? readdirSync(directory).filter((file) => file.endsWith(".json")).map((file) => path.join(directory, file)) : []
  const sourceRegistry = existsSync("content/sources.json") ? JSON.parse(readFileSync("content/sources.json", "utf8")) : undefined
  if (!files.length) { console.error("No draft content banks found."); process.exitCode = 1 }
  for (const file of files) {
    try {
      const result = validateContent(JSON.parse(readFileSync(file, "utf8")), { sourceRegistry })
      console.log(JSON.stringify({ file, ...result }, null, 2))
      if (!result.structuralPass) process.exitCode = 1
    } catch (error) { console.error(`${file}: ${error.message}`); process.exitCode = 1 }
  }
}
