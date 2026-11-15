import type { RegionQuestion } from "../data/regions.ts"
import { getExposure, prioritize, type ExposureHistory } from "./sampling.ts"

/** Balance regions first, then their views, so multi-view regions don't crowd out single-view ones. */
export function buildRegionRound(pool: readonly RegionQuestion[], limit = 10, history: ExposureHistory = getExposure(), random: () => number = Math.random): RegionQuestion[] {
  const concepts = new Map<string, RegionQuestion[]>()
  for (const question of pool) {
    const views = concepts.get(question.regionId) ?? []
    views.push(question); concepts.set(question.regionId, views)
  }
  // Earlier prototypes recorded targets but not region concepts. Derive their
  // exposure too, so an update cannot make already-seen starter regions "new".
  const questions = { ...history.questions }
  for (const [id, views] of concepts) {
    const key = `propedeutica:region:${id}`
    const exposures = views.flatMap((question) => history.questions[`propedeutica:question:${question.id}`] ?? [])
    if (!exposures.length) continue
    questions[key] = {
      count: Math.max(questions[key]?.count ?? 0, exposures.reduce((sum, exposure) => sum + exposure.count, 0)),
      lastSeen: Math.max(questions[key]?.lastSeen ?? 0, ...exposures.map((exposure) => exposure.lastSeen)),
    }
  }
  return prioritize([...concepts.entries()], ([id]) => `propedeutica:region:${id}`, { ...history, questions }, "questions", random).slice(0, limit)
    .map(([, views]) => prioritize(views, (q) => `propedeutica:question:${q.id}`, history, "questions", random)[0])
}
