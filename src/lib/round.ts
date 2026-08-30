/** Turning the atlas corpus into a playable round. */

import type { Deck, Marker, Plate } from "@/lib/atlas"

export type Mode = "choice" | "flashcard"

export interface Question {
  plate: Plate
  marker: Marker
  /** Four terms including the answer, already shuffled. */
  options: string[]
}

export interface Answer {
  question: Question
  correct: boolean
  picked?: string
}

export const ROUND_LENGTH = 10
const OPTION_COUNT = 4

function shuffle<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * Wrong answers are drawn from the same plate first, then the same system.
 *
 * A distractor from another body system is free marks -- you can rule out
 * "Cartilagem cricoidea" on a photograph of a femur without knowing any
 * anatomy. Neighbours on the same plate are what actually has to be told apart.
 */
function pickOptions(plate: Plate, marker: Marker, deck: Deck): string[] {
  const taken = new Set([marker.slug])
  const options: string[] = []

  const drawFrom = (candidates: Marker[]) => {
    for (const candidate of shuffle(candidates)) {
      if (options.length >= OPTION_COUNT - 1) return
      if (taken.has(candidate.slug)) continue
      taken.add(candidate.slug)
      options.push(candidate.term)
    }
  }

  drawFrom(plate.markers)
  if (options.length < OPTION_COUNT - 1) {
    drawFrom(deck.plates.flatMap((p) => (p.id === plate.id ? [] : p.markers)))
  }
  return shuffle([marker.term, ...options])
}

export function buildRound(deck: Deck, length = ROUND_LENGTH): Question[] {
  const pool = shuffle(
    deck.plates.flatMap((plate) => plate.markers.map((marker) => ({ plate, marker }))),
  )

  const seen = new Set<string>()
  const questions: Question[] = []
  for (const { plate, marker } of pool) {
    if (questions.length >= length) break
    // The same structure twice in one round reads as a bug, not as revision.
    if (seen.has(marker.slug)) continue
    seen.add(marker.slug)
    questions.push({ plate, marker, options: pickOptions(plate, marker, deck) })
  }
  return questions
}

/** Ten a hit, plus a growing bonus for an unbroken run. */
export function scoreFor(streak: number): number {
  return 10 + Math.min(streak, 5) * 2
}
