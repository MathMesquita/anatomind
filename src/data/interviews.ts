import { NO_SUBGROUP } from "../lib/anamnese.ts"
import { adaptInterviewRelease, type InterviewContext, type InterviewQuestion, type InterviewRelease } from "../lib/interview-bank.ts"
import release from "../../content/releases/interrogatorio.v1.json" with { type: "json" }
import batch001 from "../../content/releases/interrogatorio-batch-001.json" with { type: "json" }
import batch002 from "../../content/releases/interrogatorio-batch-002.json" with { type: "json" }
import batch003 from "../../content/releases/interrogatorio-batch-003.json" with { type: "json" }
import batch004 from "../../content/releases/interrogatorio-batch-004.json" with { type: "json" }
import batch005 from "../../content/releases/interrogatorio-batch-005.json" with { type: "json" }
import batch006 from "../../content/releases/interrogatorio-batch-006.json" with { type: "json" }
import batch009 from "../../content/releases/interrogatorio-batch-009.json" with { type: "json" }
import batch010 from "../../content/releases/interrogatorio-batch-010.json" with { type: "json" }
import batch011 from "../../content/releases/interrogatorio-batch-011.json" with { type: "json" }
import batch012 from "../../content/releases/interrogatorio-batch-012.json" with { type: "json" }
import batch013 from "../../content/releases/interrogatorio-batch-013.json" with { type: "json" }
import batch014 from "../../content/releases/interrogatorio-batch-014.json" with { type: "json" }
import batch015 from "../../content/releases/interrogatorio-batch-015.json" with { type: "json" }
import batch016 from "../../content/releases/interrogatorio-batch-016.json" with { type: "json" }
import batch017 from "../../content/releases/interrogatorio-batch-017.json" with { type: "json" }
import batch018 from "../../content/releases/interrogatorio-batch-018.json" with { type: "json" }
import batch019 from "../../content/releases/interrogatorio-batch-019.json" with { type: "json" }
import batch020 from "../../content/releases/interrogatorio-batch-020.json" with { type: "json" }
import batch021 from "../../content/releases/interrogatorio-batch-021.json" with { type: "json" }
import batch022 from "../../content/releases/interrogatorio-batch-022.json" with { type: "json" }
import batch023 from "../../content/releases/interrogatorio-batch-023.json" with { type: "json" }
import batch024 from "../../content/releases/interrogatorio-batch-024.json" with { type: "json" }
import batch025 from "../../content/releases/interrogatorio-batch-025.json" with { type: "json" }

// Exact existing demonstrations. No draft or unreviewed source-description imports.
export const starterInterviews: InterviewQuestion[] = [
  { story: "Vejo dois objetos onde existe apenas um.", term: "Diplopia", subgroup: "Aparelho ocular", group: "Órgãos dos sentidos", page: 1 },
  { story: "Escuto um apito no ouvido mesmo quando está tudo silencioso.", term: "Zumbidos", subgroup: "Aparelho auditivo", group: "Órgãos dos sentidos", page: 2 },
  { story: "Meu nariz escorre e tenho coriza.", term: "Rinorreia", subgroup: "Nariz e seios paranasais", group: "Órgãos dos sentidos", page: 2 },
  { story: "Fico com falta de ar quando me deito e preciso me sentar para respirar melhor.", term: "Ortopneia", subgroup: NO_SUBGROUP, group: "Aparelho cardiovascular", page: 3 },
].map((item, index) => ({ ...item, id: `prototype-v1:${index}`, paths: [{ subgroup: item.subgroup, group: item.group }] }))

// Frozen, independently model-reviewed releases only. Add one line per new reviewed batch.
export const interviewReleases = [release, batch001, batch002, batch003, batch004, batch005, batch006, batch009, batch010, batch011, batch012, batch013, batch014, batch015, batch016, batch017, batch018, batch019, batch020, batch021, batch022, batch023, batch024, batch025] as unknown as InterviewRelease[]
export const interviewQuestions = interviewReleases.flatMap(adaptInterviewRelease)
const fallbackSubgroups = ["Aparelho ocular", "Aparelho auditivo", "Nariz e seios paranasais", "Distúrbios da consciência"]
const fallbackGroups = ["Órgãos dos sentidos", "Aparelho cardiovascular", "Aparelho respiratório", "Aparelho digestório"]

/** Inventory supplies classification labels only. Term choices always come from active questions. */
export function getInterviewCatalog(questions: InterviewQuestion[], sourceInventory: Pick<InterviewContext, "group" | "subgroup">[] = []) {
  const unique = (values: string[]) => [...new Set(values)]
  const paths = questions.flatMap((question) => question.paths)
  const hasInventory = sourceInventory.length > 0
  return {
    stories: questions.length,
    terms: unique(questions.flatMap((question) => [question.term, ...(question.acceptedTerms ?? [])])),
    subgroups: unique([...paths.map((item) => item.subgroup), ...questions.flatMap((item) => item.alternatives ?? []), ...(hasInventory ? sourceInventory.map((item) => item.subgroup ?? NO_SUBGROUP) : fallbackSubgroups)]).filter((name) => name !== NO_SUBGROUP),
    groups: unique([...paths.map((item) => item.group), ...(hasInventory ? sourceInventory.map((item) => item.group) : fallbackGroups)]),
    noSubgroup: NO_SUBGROUP,
    reviewedPrototype: questions.length > 0 && questions.every((question) => question.provenance !== undefined),
  }
}

export const interviewCatalog = getInterviewCatalog(interviewQuestions, (release as unknown as InterviewRelease).contexts)
export const interviewTerms = interviewCatalog.terms
export const interviewSubgroups = interviewCatalog.subgroups
export const interviewGroups = interviewCatalog.groups
