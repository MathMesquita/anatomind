/** The quiz corpus, as produced by `tools/extract.py` from the atlas PDF. */

export interface Marker {
  term: string
  slug: string
  /** Position of the structure within the plate, 0..1 on each axis. */
  x: number
  y: number
  /** Structures listed under the term -- e.g. the nerves through a foramen. */
  detail?: string[]
  /** The extractor doubts this label; see issue #7. */
  suspect?: boolean
  /** The leader line ended outside the photograph's own rectangle. */
  outside?: boolean
}

export interface Plate {
  id: string
  page: number
  system: string
  systemLabel: string
  region: string
  caption: string
  image: string
  width: number
  height: number
  markers: Marker[]
}

export interface Deck {
  system: string
  label: string
  plates: Plate[]
  markerCount: number
}

export const PLATE_URL = (image: string) => `${import.meta.env.BASE_URL}atlas/plates/${image}`

/** A marker only becomes a question if we trust both its name and its position. */
export const isQuizzable = (marker: Marker) => !marker.suspect && !marker.outside

export async function loadPlates(): Promise<Plate[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}atlas/plates.json`)
  if (!response.ok) throw new Error(`Não foi possível carregar o atlas (${response.status})`)
  const data: { plates: Plate[] } = await response.json()
  return data.plates
    .map((plate) => ({ ...plate, markers: plate.markers.filter(isQuizzable) }))
    // A plate needs enough structures to supply its own wrong answers.
    .filter((plate) => plate.markers.length >= 4)
}

export function buildDecks(plates: Plate[]): Deck[] {
  const bySystem = new Map<string, Deck>()
  for (const plate of plates) {
    let deck = bySystem.get(plate.system)
    if (!deck) {
      deck = { system: plate.system, label: plate.systemLabel, plates: [], markerCount: 0 }
      bySystem.set(plate.system, deck)
    }
    deck.plates.push(plate)
    deck.markerCount += plate.markers.length
  }
  return [...bySystem.values()].sort((a, b) => b.markerCount - a.markerCount)
}
