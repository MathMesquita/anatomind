import bank from "../../content/releases/regioes.v1.json" with { type: "json" }

export type RegionView = "anterior" | "posterior" | "lateral" | "face" | "occipital"

export const regionViews = {
  lateral: { image: "body-surface.jpg", width: 945, height: 553, left: 0, top: 0, cropWidth: 140, cropHeight: 553, title: "Corpo · vista lateral" },
  anterior: { image: "body-surface.jpg", width: 945, height: 553, left: 140, top: 0, cropWidth: 390, cropHeight: 553, title: "Corpo · vista anterior" },
  posterior: { image: "body-surface.jpg", width: 945, height: 553, left: 560, top: 0, cropWidth: 385, cropHeight: 553, title: "Corpo · vista posterior" },
  face: { image: "head-surface.jpg", width: 793, height: 409, left: 0, top: 0, cropWidth: 392, cropHeight: 409, title: "Cabeça · vista anterior" },
  occipital: { image: "head-surface.jpg", width: 793, height: 409, left: 392, top: 0, cropWidth: 401, cropHeight: 409, title: "Cabeça · vista posterior" },
} as const

export interface RegionQuestion {
  id: string
  bankId: string
  regionId: string
  view: RegionView
  number: number
  answer: string
  /** Marker in coordinates of the visible crop, with a small offset from the printed numeral. */
  x: number
  y: number
  options: string[]
  sourceLabel: string
  source: (typeof bank.questions)[number]["source"]
  review: (typeof bank.questions)[number]["review"]
}

const regionsById = new Map(bank.regions.map((region) => [region.id, region]))
function displayLabel(id: string): string {
  const region = regionsById.get(id)
  if (!region) throw new Error(`Região desconhecida no banco revisado: ${id}`)
  const label = region.label
  if (/^(Dorso|Palma|Planta|Epigástrio|Hipocôndrio)/.test(label)) return label
  return `Região ${label[0].toLocaleLowerCase("pt-BR")}${label.slice(1)}`
}

// Explicit frozen prototype release, never the mutable generation drafts.
export const regionQuestions: RegionQuestion[] = bank.questions.filter((item) => item.review.status === "model-reviewed").map((item) => {
  if (!(item.view in regionViews)) throw new Error(`Vista desconhecida: ${item.view}`)
  return {
    id: `superficie-${item.view}-${item.number}`, bankId: item.id, regionId: item.answerRegionId,
    view: item.view as RegionView, number: item.number, answer: displayLabel(item.answerRegionId),
    x: item.marker.x, y: item.marker.y, options: item.optionRegionIds.map(displayLabel),
    sourceLabel: regionsById.get(item.answerRegionId)!.label, source: item.source, review: item.review,
  }
})

export const regionCoverage = {
  questions: regionQuestions.length,
  answerRegions: new Set(regionQuestions.map((q) => q.regionId)).size,
  legendRegions: bank.regions.length,
  unavailableRegions: bank.regions.filter((region) => !regionQuestions.some((question) => question.regionId === region.id)),
  excludedTargets: bank.coverage.pendingQuestionTargets,
  sourceDefects: bank.coverage.sourceDefects,
  generation: bank.generation,
  release: bank.release,
}

export const regionSource = {
  document: "DIVISÃO DA SUPERFÍCIE CORPORAL - 3ºSEMESTRE.pdf",
  page: 1,
  provenance: "Imagens originais extraídas sem alteração. Janelas de exibição separam as cinco vistas. O ponto é uma sobreposição, posicionada junto ao número impresso.",
  review: "71 alvos e 55 rótulos conferidos em revisão independente em 14/11/2026 (gpt-6.1-sol). O banco cobre 50 regiões; alvos contraditórios ou ilegíveis foram excluídos. Cinco regiões da legenda permanecem sem alvo utilizável. Protótipo com revisão por modelo; revisão docente/clínica não registrada.",
}
