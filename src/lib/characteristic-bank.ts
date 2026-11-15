export interface CharacteristicStory {
  id: string
  groupId: string
  groupLabel: string
  text: string
  fields: string[]
  fieldKeys: Record<string, string>
  missing: string[]
  context: string
  sourceLabel?: string
  provenance?: unknown
}

interface SourceRef { documentId: string; page: number; locator: string }
interface Field { id: string; label: string; safeUiLabel?: string; sourceLabel?: string }
interface Evidence { fieldId: string; status: string; quote: string | null; start: number | null; end: number | null; rationale: string }
export interface CharacteristicRelease {
  release: { id: string; prototype: boolean; clinicalApproval: boolean }
  review: { status: string }
  sourceDocuments: { id: string; filename: string; pages: number }[]
  groups: { id: string; label: string; source: SourceRef; fields: Field[] }[]
  stories: {
    id: string; groupId: string; text: string; source: SourceRef; generation: unknown
    answer: { policy: string; fieldIds: string[]; noneMissing: boolean; exclusiveNoneLabel: string } | null
    evidence: Evidence[]
    review: { status: string }
  }[]
}

/** Consume only an explicit frozen model-reviewed prototype, never mutable generation drafts. */
export function adaptCharacteristicRelease(bank: CharacteristicRelease): CharacteristicStory[] {
  if (!bank.release?.id || !bank.release.prototype || bank.release.clinicalApproval !== false || bank.review.status !== "model-reviewed") throw new Error("Banco de caracteres sem versão congelada de protótipo revisado.")
  const groups = new Map(bank.groups.map((group) => [group.id, group]))
  const documents = new Map(bank.sourceDocuments.map((document) => [document.id, document]))
  if (groups.size !== bank.groups.length || documents.size !== bank.sourceDocuments.length) throw new Error("Grupos ou documentos duplicados na versão de caracteres.")
  const ids = new Set<string>()
  const fail = (id: string, message: string): never => { throw new Error(`${id}: ${message}`) }
  const sameSet = (left: string[], right: string[]) => left.length === new Set(left).size && left.length === right.length && left.every((id) => right.includes(id))
  if (!bank.stories.length) throw new Error("Versão de caracteres vazia.")
  return bank.stories.map((story) => {
    if (!story.text.trim() || story.text.split(/\n\s*\n/).length > 2) fail(story.id, "história vazia ou longa demais")
    if (ids.has(story.id)) fail(story.id, "ID duplicado")
    ids.add(story.id)
    const group = groups.get(story.groupId)
    if (!group) return fail(story.id, "grupo desconhecido")
    const document = documents.get(story.source.documentId)
    if (!document || !Number.isInteger(story.source.page) || story.source.page < 1 || story.source.page > document.pages || !story.source.locator) fail(story.id, "fonte inválida")
    const answer = story.answer
    if (story.review.status !== "model-reviewed" || !answer || answer.policy !== "missing-context-v2") return fail(story.id, "revisão ou gabarito indisponível")
    const displayLabel = (field: Field) => field.safeUiLabel ?? field.label
    const fieldIds = group.fields.map((field) => field.id), labels = group.fields.map(displayLabel)
    if (!fieldIds.length || new Set(fieldIds).size !== fieldIds.length || new Set(labels).size !== labels.length) fail(story.id, "checklist inválido")
    if (!sameSet(story.evidence.map((entry) => entry.fieldId), fieldIds)) fail(story.id, "evidências não cobrem o checklist")
    for (const entry of story.evidence) {
      if (!["documented", "omitted", "partial"].includes(entry.status)) fail(story.id, "dado desconhecido ou ambíguo não pode ter correção automática")
      if (entry.status === "omitted") {
        if (entry.quote !== null || entry.start !== null || entry.end !== null) fail(story.id, "omissão com evidência inconsistente")
      } else if (entry.quote === null || !Number.isInteger(entry.start) || !Number.isInteger(entry.end) || entry.start! < 0 || entry.end! <= entry.start! || story.text.slice(entry.start!, entry.end!) !== entry.quote) fail(story.id, "trecho de evidência inválido")
    }
    const expected = story.evidence.filter((entry) => entry.status !== "documented").map((entry) => entry.fieldId)
    if (!sameSet(answer.fieldIds, expected) || answer.noneMissing !== (expected.length === 0) || answer.exclusiveNoneLabel !== "Nenhum dado ausente") fail(story.id, "gabarito não corresponde aos campos ausentes ou incompletos")
    const missing = group.fields.filter((field) => answer.fieldIds.includes(field.id)).map(displayLabel)
    return {
      id: story.id, groupId: group.id, groupLabel: group.label, text: story.text, fields: labels,
      fieldKeys: Object.fromEntries(group.fields.map((field) => [displayLabel(field), field.id])), missing,
      sourceLabel: `${document!.filename} · página ${story.source.page}`,
      context: missing.length ? `Dados ausentes ou incompletos: ${missing.join("; ")}. Uma menção parcial ainda precisa ser complementada.` : "O registro aborda todos os campos deste roteiro. Negativas explícitas contam como informação presente.",
      provenance: { release: bank.release, sourceDocument: document!.filename, source: story.source, group: { id: group.id, label: group.label, source: group.source }, checklist: group.fields, acceptedFieldIds: answer.fieldIds, evidence: story.evidence, generation: story.generation, review: story.review },
    }
  })
}
