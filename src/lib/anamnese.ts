export const NONE = "Nenhum dado ausente"
export const NO_SUBGROUP = "Não tem sub-grupo"

/** Missing answers are not penalized; an empty selection is unanswered. */
export function scoreSelections(picks: string[], expected: string[]): number {
  if (picks.length === 0) return 0
  if (picks.includes(NONE)) return expected.length === 0 ? 10 : -5
  return picks.reduce((total, pick) => total + (expected.includes(pick) ? 10 : -5), 0)
}

export interface InterviewPath { subgroup: string; group: string }

/** Score source-supported pathways as pairs; unrelated answers never form a valid pair. */
export function scoreInterview(
  picks: string[], terms: string[], paths: InterviewPath[], partialSubgroups: string[] = [],
): number {
  const [term, subgroup, group] = picks
  const termScore = terms.includes(term) ? 10 : -5
  const matchingPaths = paths.filter((path) => path.subgroup === subgroup)
  const subgroupScore = matchingPaths.length ? 10 : partialSubgroups.includes(subgroup) ? 5 : -5
  const candidatePaths = matchingPaths.length ? matchingPaths : paths
  const groupScore = candidatePaths.some((path) => path.group === group) ? 10 : -5
  return termScore + subgroupScore + groupScore
}
