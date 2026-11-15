import type { RegionQuestion } from "../data/regions.ts"
import { getExposure, prioritize, type ExposureHistory } from "./sampling.ts"

/** Balance regions first, then their views, so multi-view regions don't crowd out single-view ones. */
export function buildRegionRound(pool: readonly RegionQuestion[], limit = 10, history: ExposureHistory = getExposure(), random: () => number = Math.random): RegionQuestion[] {
  const concepts = new Map<string, RegionQuestion[]>()
  for (const question of pool) {
    const views = concepts.get(question.regionId) ?? []
    views.push(question); concepts.set(question.regionId, views)
  }
  return prioritize([...concepts.entries()], ([id]) => `propedeutica:region:${id}`, history, "questions", random).slice(0, limit)
    .map(([, views]) => prioritize(views, (q) => `propedeutica:question:${q.id}`, history, "questions", random)[0])
}
