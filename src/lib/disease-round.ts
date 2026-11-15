import { alternativeId, chooseOptions, getExposure, prioritize, type ExposureHistory } from "./sampling.ts"

/** Inputs must be reviewed memberships/distractors, not an unverified absence of membership. */
export function sampleDiseaseOptions(positiveLabels: readonly string[], negativeLabels: readonly string[], scope: string, history: ExposureHistory = getExposure(), random: () => number = Math.random): { options: string[]; accepted: string[] } | null {
  const id = (label: string) => alternativeId(scope, label)
  const positives = [...new Map(positiveLabels.map((label) => [id(label), label])).values()]
  const positiveIds = new Set(positives.map(id))
  // A medically valid member must never become a negative, even if it wasn't drawn as a positive.
  const negatives = [...new Map(negativeLabels.filter((label) => !positiveIds.has(id(label))).map((label) => [id(label), label])).values()]
  const minimum = Math.max(2, 20 - negatives.length)
  const maximum = Math.min(5, positives.length)
  if (minimum > maximum) return null
  const count = minimum + Math.floor(Math.max(0, Math.min(1 - Number.EPSILON, random())) * (maximum - minimum + 1))
  const accepted = prioritize(positives, id, history, "alternatives", random).slice(0, count)
  return { options: chooseOptions(accepted, negatives, id, 20, history, random), accepted }
}
