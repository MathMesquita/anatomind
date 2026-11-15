import { NO_SUBGROUP, type InterviewPath } from "./anamnese.ts"

export type { InterviewPath } from "./anamnese.ts"
export interface InterviewQuestion {
  id: string
  story: string
  term: string
  subgroup: string
  group: string
  page: number
  acceptedTerms?: string[]
  paths: InterviewPath[]
  alternatives?: string[]
  sourceLabel?: string
  contextExplanation?: string
  provenance?: unknown
}

interface Background { [key: string]: unknown }
interface SourceRef extends Background { documentId: string; page: number; locator: string }
export interface InterviewContext extends Background {
  id: string; term: string; group: string; subgroup: string | null
  originalDescription: string; source: SourceRef
  sourceHierarchy?: { term: string; group: string; subgroup: string | null }
  teachingDefinition?: { text: string; referenceIds: string[] }
}
interface PathEvidence extends Background {
  contextId: string; quote: string; focusQuote?: string; sourceQuote: string
  source: SourceRef; rationale: string; referenceIds: string[]
  definitionBasis: string; teachingDefinitionQuote?: string
}
export interface InterviewDecision extends Background {
  id: string; contextId: string; reviewStatus: string; disposition: string; hold: boolean
  reviewedText: string; textSha256: string; storyObjectSha256: string
  acceptedContextIds: string[]; alternativeContextIds: string[]
  supportedAcceptedPaths: { contextId: string; evidenceQuote: string; verdict: string; definitionBasis: string }[]
}
export interface InterviewStory extends Background {
  id: string; contextId: string; text: string; source: SourceRef; generation: unknown
  acceptedContextIds: string[]; alternativeContextIds: string[]
  acceptedPathEvidence: PathEvidence[]; alternativePathEvidence: PathEvidence[]
  review: { status: string; clinicalApproval?: boolean; independentReview?: { decision: InterviewDecision }; [key: string]: unknown }
}
export interface InterviewBank extends Background {
  topic: string
  sourceDocuments: (Background & { id: string; filename: string; pages: number })[]
  contexts: InterviewContext[]; stories: InterviewStory[]
  clinicalReferences: (Background & { id: string })[]
  answerPolicy: { mode: string; [key: string]: unknown }
  generation: unknown
  review: { status: string; [key: string]: unknown }
}
export interface InterviewRelease extends InterviewBank {
  release: { id: string; prototype: boolean; clinicalApproval: boolean; [key: string]: unknown }
}

const nonempty = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0
const normalized = (text: string) => text.replace(/\s+/g, " ").trim()
const contains = (text: string, quote: string) => nonempty(quote) && normalized(text).includes(normalized(quote))
// Explicit aliases used by independently reviewed supplemental batches; all still
// require literal PDF evidence and references resolving in clinicalReferences.
const definitionClass = (basis: string) => {
  if (["source-description", "source-description-with-verified-terminology", "source-description-with-institutional-terminology-caution"].includes(basis)) return "literal-source"
  if (basis === "source-with-separate-evidence-checked-teaching-definition") return "separate-teaching-definition"
  return undefined
}
const fail = (id: string, message: string): never => { throw new Error(`${id}: ${message}`) }
export const sameInterviewIds = (left: string[], right: string[]) => Array.isArray(left) && Array.isArray(right) && new Set(left).size === left.length && new Set(right).size === right.length && left.length === right.length && left.every((id) => right.includes(id))
const unique = <T extends { id: string }>(items: T[], label: string) => {
  if (!Array.isArray(items) || items.some((item) => !item || !nonempty(item.id)) || new Set(items.map((item) => item.id)).size !== items.length) fail(label, "duplicate or invalid IDs")
  return new Map(items.map((item) => [item.id, item]))
}

/** Structural source/evidence checks shared by the preparer and browser adapter; not clinical validation. */
export function validateInterviewBank(bank: InterviewBank): void {
  if (bank.topic !== "interrogatorio" || bank.answerPolicy?.mode !== "all-source-supported-coherent-paths") fail("bank", "unsupported interview policy")
  const contexts = unique(bank.contexts, "contexts"), documents = unique(bank.sourceDocuments, "documents")
  const references = unique(bank.clinicalReferences, "clinicalReferences")
  unique(bank.stories, "stories")
  if (!contexts.size || !documents.size) fail("bank", "empty source inventory")
  const source = (ref: SourceRef, id: string) => {
    const document = documents.get(ref?.documentId)
    if (!document || !nonempty(document.filename) || !Number.isInteger(document.pages) || !Number.isInteger(ref?.page) || ref.page < 1 || ref.page > document.pages || !nonempty(ref.locator)) fail(id, "invalid source")
  }
  const sameSource = (a: SourceRef, b: SourceRef) => a?.documentId === b.documentId && a?.page === b.page && a?.locator === b.locator
  for (const context of contexts.values()) {
    source(context.source, context.id)
    if (!nonempty(context.term) || !nonempty(context.group) || !(context.subgroup === null || nonempty(context.subgroup)) || !nonempty(context.originalDescription)) fail(context.id, "invalid hierarchy or original description")
    const hierarchy = context.sourceHierarchy
    if (hierarchy && (hierarchy.term !== context.term || hierarchy.group !== context.group || hierarchy.subgroup !== context.subgroup)) fail(context.id, "hierarchy differs from source placement")
    for (const id of context.teachingDefinition?.referenceIds ?? []) if (!references.has(id)) fail(context.id, "unknown teaching reference")
  }
  for (const story of bank.stories) {
    const context = contexts.get(story.contextId)
    if (!context || !nonempty(story.text) || story.text.split(/\n\s*\n/).length > 2) fail(story.id, "unknown context or invalid story")
    source(story.source, story.id)
    if (!sameSource(story.source, context!.source)) fail(story.id, "story source differs from authoring context")
    const accepted = story.acceptedContextIds, partial = story.alternativeContextIds
    if (!sameInterviewIds(accepted, accepted) || !sameInterviewIds(partial, partial) || !accepted.includes(story.contextId) || partial.some((id) => accepted.includes(id))) fail(story.id, "invalid accepted/partial paths")
    for (const [ids, evidence] of [[accepted, story.acceptedPathEvidence], [partial, story.alternativePathEvidence]] as const) {
      if (!Array.isArray(evidence) || !sameInterviewIds(evidence.map((entry) => entry.contextId), ids)) fail(story.id, "evidence must cover every path exactly once")
      for (const entry of evidence) {
        const target = contexts.get(entry.contextId)
        if (!target) fail(story.id, `unknown path ${entry.contextId}`)
        if (!contains(story.text, entry.quote) || (entry.focusQuote !== undefined && !contains(entry.quote, entry.focusQuote)) || !contains(target!.originalDescription, entry.sourceQuote) || !nonempty(entry.rationale) || !sameSource(entry.source, target!.source)) fail(story.id, "unsupported path evidence/source")
        if (!Array.isArray(entry.referenceIds) || entry.referenceIds.some((id) => !references.has(id))) fail(story.id, "unknown evidence reference")
        if (entry.definitionBasis === "source-with-separate-evidence-checked-teaching-definition") {
          const teaching = target!.teachingDefinition
          if (!teaching || !contains(teaching.text, entry.teachingDefinitionQuote!) || !teaching.referenceIds.length || !teaching.referenceIds.every((id) => entry.referenceIds.includes(id))) fail(story.id, "unsupported teaching definition")
        } else if (definitionClass(entry.definitionBasis) !== "literal-source") fail(story.id, "unknown definition basis")
      }
    }
    const acceptedContexts = accepted.map((id) => contexts.get(id)!)
    for (const id of partial) {
      const target = contexts.get(id)!
      // The current +5 API represents only a different subgroup of an accepted concept.
      // Equally supported paths belong in acceptedContextIds, never here.
      if (!acceptedContexts.some((item) => item.term === target.term) || acceptedContexts.some((item) => item.subgroup === target.subgroup)) fail(story.id, "partial path must be the same concept in another subgroup")
    }
  }
}

/** Compare all reviewed answer mappings, not just the editorial authoring context. */
export function validateInterviewDecision(story: InterviewStory, decision: InterviewDecision): void {
  if (decision.id !== story.id || decision.contextId !== story.contextId || decision.reviewStatus !== "completed" || decision.reviewedText !== story.text) fail(story.id, "incomplete review or reviewed text differs")
  if (!sameInterviewIds(decision.acceptedContextIds, story.acceptedContextIds) || !sameInterviewIds(decision.alternativeContextIds, story.alternativeContextIds)) fail(story.id, "reviewed answer differs")
  if (!Array.isArray(decision.supportedAcceptedPaths) || !sameInterviewIds(decision.supportedAcceptedPaths.map((entry) => entry.contextId), story.acceptedContextIds)) fail(story.id, "reviewed supported paths differ")
  for (const entry of decision.supportedAcceptedPaths) {
    const evidence = story.acceptedPathEvidence.find((item) => item.contextId === entry.contextId)!
    if (entry.verdict !== "supported-for-source-based-term-matching" || !contains(evidence.quote, entry.evidenceQuote) || !definitionClass(entry.definitionBasis) || definitionClass(entry.definitionBasis) !== definitionClass(evidence.definitionBasis)) fail(story.id, "review path is not supported by evidence")
  }
}

/** Only authored, explicitly reviewed release stories become questions. Source definitions stay archival. */
export function adaptInterviewRelease(bank: InterviewRelease): InterviewQuestion[] {
  if (!bank.release?.id || bank.release.prototype !== true || bank.release.clinicalApproval !== false || bank.review?.status !== "model-reviewed") fail("bank", "explicit model-reviewed prototype release required")
  validateInterviewBank(bank)
  if (!bank.stories.length) fail("bank", "empty release")
  const contexts = new Map(bank.contexts.map((context) => [context.id, context]))
  return bank.stories.map((story) => {
    const decision = story.review?.independentReview?.decision
    if (story.review?.status !== "model-reviewed" || story.review.clinicalApproval !== false || !decision || decision.disposition !== "model-reviewed" || decision.hold !== false) fail(story.id, "unreviewed or held story")
    if ((Array.isArray(decision!.candidatesForAdjudication) && decision!.candidatesForAdjudication.length) || (Array.isArray(decision!.missingOrIncorrectEvidence) && decision!.missingOrIncorrectEvidence.length)) fail(story.id, "unresolved review findings")
    validateInterviewDecision(story, decision!)
    const context = contexts.get(story.contextId)!
    const accepted = story.acceptedContextIds.map((id) => contexts.get(id)!)
    const partial = story.alternativeContextIds.map((id) => contexts.get(id)!)
    const terms = [...new Set(accepted.map((item) => item.term))]
    const paths = accepted.map((item) => ({ subgroup: item.subgroup ?? NO_SUBGROUP, group: item.group }))
      .filter((item, index, all) => all.findIndex((other) => other.group === item.group && other.subgroup === item.subgroup) === index)
    const document = bank.sourceDocuments.find((item) => item.id === story.source.documentId)!
    const fever = accepted.some((item) => item.term === "Calafrios")
    const rationale = nonempty(story.rationale) ? `${story.rationale.trim()} ` : ""
    return {
      id: story.id, story: story.text, term: context.term, subgroup: context.subgroup ?? NO_SUBGROUP, group: context.group, page: story.source.page,
      acceptedTerms: terms.filter((term) => term !== context.term), paths,
      alternatives: [...new Set(partial.map((item) => item.subgroup ?? NO_SUBGROUP))],
      sourceLabel: `${document.filename} · página ${story.source.page}`,
      contextExplanation: `${rationale}Grupo e subgrupo indicam a posição impressa no PDF, sem estabelecer etiologia ou órgão doente.${fever ? " Calafrios na rubrica FEBRE não comprovam febre clínica ou temperatura elevada." : ""} Revisão por modelo; aprovação clínica não registrada.`,
      provenance: { release: bank.release, sourceDocuments: bank.sourceDocuments, generation: bank.generation, review: bank.review, answerPolicy: bank.answerPolicy, context, acceptedContexts: accepted, alternativeContexts: partial, clinicalReferences: bank.clinicalReferences, storyRecord: story },
    }
  })
}
