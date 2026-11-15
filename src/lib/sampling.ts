/** Balanced coverage, independent of scores or debug mode. */
export interface Exposure { count: number; lastSeen: number }
export interface ExposureHistory {
  version: 1
  sequence: number
  questions: Record<string, Exposure>
  alternatives: Record<string, Exposure>
}
export type ExposureKind = "questions" | "alternatives"
type StoragePort = Pick<Storage, "getItem" | "setItem">
const STORAGE_KEY = "anatomind.exposure.v1"
export const emptyExposure = (): ExposureHistory => ({ version: 1, sequence: 0, questions: {}, alternatives: {} })

export function parseExposure(raw: string | null): ExposureHistory {
  try {
    const value = JSON.parse(raw || "null")
    if (value?.version !== 1 || !Number.isSafeInteger(value.sequence) || value.sequence < 0) return emptyExposure()
    const clean = (entries: unknown): Record<string, Exposure> => {
      if (!entries || typeof entries !== "object" || Array.isArray(entries)) return {}
      return Object.fromEntries(Object.entries(entries).filter((entry): entry is [string, Exposure] => {
        const item = entry[1]
        return !!item && Number.isSafeInteger(item.count) && item.count > 0 && Number.isSafeInteger(item.lastSeen) && item.lastSeen >= 0 && item.lastSeen <= value.sequence
      }))
    }
    return { version: 1, sequence: value.sequence, questions: clean(value.questions), alternatives: clean(value.alternatives) }
  } catch { return emptyExposure() }
}

/** Unseen first; then weighted sampling without replacement. All seen items retain a chance. */
export function prioritize<T>(items: readonly T[], id: (item: T) => string, history: ExposureHistory, kind: ExposureKind, random: () => number = Math.random): T[] {
  const unique = [...new Map(items.map((item) => [id(item), item])).values()]
  return unique.map((item) => {
    const exposure = history[kind][id(item)]
    const age = exposure ? Math.max(0, history.sequence - exposure.lastSeen) : 0
    const weight = exposure ? (1 + Math.min(age, 50) / 10) / (1 + exposure.count) : 1
    const uniform = Math.max(Number.EPSILON, Math.min(1 - Number.EPSILON, random()))
    return { item, unseen: !exposure, priority: -Math.log(uniform) / weight }
  }).sort((a, b) => Number(b.unseen) - Number(a.unseen) || a.priority - b.priority).map(({ item }) => item)
}

export function shuffle<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.max(0, Math.min(1 - Number.EPSILON, random())) * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** Required answers stay present; novelty only selects eligible distractors, never their positions. */
export function chooseOptions<T>(required: readonly T[], candidates: readonly T[], id: (item: T) => string, limit: number, history = getExposure(), random: () => number = Math.random): T[] {
  const mandatory = [...new Map(required.map((item) => [id(item), item])).values()]
  if (mandatory.length > limit) throw new Error("Required options exceed the option limit")
  const taken = new Set(mandatory.map(id))
  const eligible = candidates.filter((item) => !taken.has(id(item)))
  const selected = prioritize(eligible, id, history, "alternatives", random).slice(0, Math.max(0, limit - mandatory.length))
  return shuffle([...mandatory, ...selected], random)
}

/** Only record what was actually displayed, not all questions planned for a round. */
export function addExposure(history: ExposureHistory, questions: readonly string[], alternatives: readonly string[]): ExposureHistory {
  const sequence = history.sequence + 1
  const update = (kind: ExposureKind, ids: readonly string[]) => {
    const next = { ...history[kind] }
    for (const id of new Set(ids)) {
      const previous = Object.hasOwn(next, id) ? next[id] : undefined
      next[id] = { count: (previous?.count ?? 0) + 1, lastSeen: sequence }
    }
    return next
  }
  return { version: 1, sequence, questions: update("questions", questions), alternatives: update("alternatives", alternatives) }
}

/** Storage failures fall back to this session; no network or score changes. */
export function createExposureStore(storage?: StoragePort | null) {
  let current = emptyExposure()
  const presentations = new Set<string>()
  try { current = parseExposure(storage?.getItem(STORAGE_KEY) ?? null) } catch { /* In-memory fallback. */ }
  return {
    read: () => current,
    record(questions: readonly string[], alternatives: readonly string[], presentationId: string) {
      if (presentations.has(presentationId) || (!questions.length && !alternatives.length)) return
      presentations.add(presentationId)
      // Only recent presentation tokens are needed to guard repeat effects.
      if (presentations.size > 5000) presentations.delete(presentations.values().next().value!)
      current = addExposure(current, questions, alternatives)
      try { storage?.setItem(STORAGE_KEY, JSON.stringify(current)) } catch { /* In-memory fallback. */ }
    },
  }
}

let store: ReturnType<typeof createExposureStore> | undefined
const getStore = () => {
  if (!store) {
    let storage: StoragePort | undefined
    try { storage = typeof localStorage !== "undefined" ? localStorage : undefined } catch { /* Private storage unavailable. */ }
    store = createExposureStore(storage)
  }
  return store
}
export const getExposure = () => getStore().read()
export const recordExposure = (questions: readonly string[], alternatives: readonly string[], presentationId: string) => getStore().record(questions, alternatives, presentationId)
export const chooseQuestions = <T,>(items: readonly T[], id: (item: T) => string, limit = items.length) => prioritize(items, id, getExposure(), "questions").slice(0, limit)
export const alternativeId = (scope: string, text: string) => `${scope}:alternative:${text.normalize("NFC").toLocaleLowerCase("pt-BR").trim()}`
export const newPresentationId = () => typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
