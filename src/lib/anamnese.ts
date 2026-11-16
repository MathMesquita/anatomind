export const NONE = "Nenhum dado ausente"
export const NO_SUBGROUP = "Não tem sub-grupo"

/** Missing answers are not penalized; an empty selection is unanswered. */
export function scoreSelections(picks: string[], expected: string[]): number {
  if (picks.length === 0) return 0
  if (picks.includes(NONE)) return expected.length === 0 ? 10 : -5
  return picks.reduce((total, pick) => total + (expected.includes(pick) ? 10 : -5), 0)
}

export interface InterviewPath { subgroup: string; group: string }

/**
 * Points for each stage (term, subgroup, group). Source-supported pathways are scored as pairs;
 * unrelated answers never form a valid pair. A blank pick (time ran out) is unanswered: 0 points.
 */
export function scoreInterviewStages(
  picks: string[], terms: string[], paths: InterviewPath[], partialSubgroups: string[] = [],
): number[] {
  const [term, subgroup, group] = picks
  const matchingPaths = paths.filter((path) => path.subgroup === subgroup)
  const candidatePaths = matchingPaths.length ? matchingPaths : paths
  return [
    !term ? 0 : terms.includes(term) ? 10 : -5,
    !subgroup ? 0 : matchingPaths.length ? 10 : partialSubgroups.includes(subgroup) ? 5 : -5,
    !group ? 0 : candidatePaths.some((path) => path.group === group) ? 10 : -5,
  ]
}

export function scoreInterview(
  picks: string[], terms: string[], paths: InterviewPath[], partialSubgroups: string[] = [],
): number {
  return scoreInterviewStages(picks, terms, paths, partialSubgroups).reduce((total, points) => total + points, 0)
}
