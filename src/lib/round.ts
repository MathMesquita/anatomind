/** Turning the atlas corpus into a playable round. */

import type { Deck, Marker, Plate } from "@/lib/atlas"
import { alternativeId, chooseOptions, chooseQuestions, shuffle } from "./sampling.ts"

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
    const eligible = candidates.filter((candidate) => !taken.has(candidate.slug))
    for (const candidate of chooseOptions([], eligible, (item) => alternativeId("anatomia", item.term), OPTION_COUNT - 1 - options.length)) {
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

/** Re-evaluate distractor exposure when the next question actually opens. */
export const refreshQuestionOptions = (question: Question, deck: Deck): Question => ({ ...question, options: pickOptions(question.plate, question.marker, deck) })

export function buildRound(deck: Deck, length = ROUND_LENGTH): Question[] {
  const byConcept = new Map<string, { plate: Plate; marker: Marker }[]>()
  for (const plate of deck.plates) for (const marker of plate.markers) {
    const entries = byConcept.get(marker.slug) ?? []
    entries.push({ plate, marker }); byConcept.set(marker.slug, entries)
  }
  // Prefer unstudied structures, then unstudied photographs of that structure.
  return chooseQuestions([...byConcept.entries()], ([slug]) => `anatomia:concept:${slug}`, length).map(([, entries]) => {
    const { plate, marker } = chooseQuestions(entries, ({ plate, marker }) => `anatomia:question:${plate.id}:${marker.slug}`, 1)[0]
    return { plate, marker, options: pickOptions(plate, marker, deck) }
  })
}

/** Ten a hit, plus a growing bonus for an unbroken run. */
export function scoreFor(streak: number): number {
  return 10 + Math.min(streak, 5) * 2
}
