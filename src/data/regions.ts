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
  view: RegionView
  number: number
  answer: string
  /** Marker in coordinates of the visible crop, with a small offset from the printed numeral. */
  x: number
  y: number
  options: string[]
}

export const regionQuestions: RegionQuestion[] = [
  { id: "superficie-anterior-25", view: "anterior", number: 25, answer: "Região umbilical", x: 52, y: 38, options: ["Região umbilical", "Região epigástrica", "Região inguinal", "Região esternal"] },
  { id: "superficie-lateral-24", view: "lateral", number: 24, answer: "Região lateral (flanco)", x: 43, y: 40, options: ["Região lateral (flanco)", "Região umbilical", "Região inguinal", "Região lombar"] },
  { id: "superficie-posterior-31", view: "posterior", number: 31, answer: "Região infraescapular", x: 41, y: 33, options: ["Região infraescapular", "Região escapular", "Região lombar", "Região sacral"] },
  { id: "superficie-face-6", view: "face", number: 6, answer: "Região nasal", x: 50, y: 55, options: ["Região nasal", "Região bucal", "Região frontal", "Região mentual"] },
  { id: "superficie-occipital-3", view: "occipital", number: 3, answer: "Região occipital", x: 56, y: 47, options: ["Região occipital", "Região parietal", "Região temporal", "Região frontal"] },
]

export const regionSource = {
  document: "DIVISÃO DA SUPERFÍCIE CORPORAL - 3ºSEMESTRE.pdf",
  page: 1,
  provenance: "Imagens originais extraídas sem alteração. Janelas de exibição separam as cinco vistas. O ponto é uma sobreposição, posicionada junto ao número impresso.",
  review: "Os cinco números e pontos foram conferidos visualmente nos recortes e na legenda em 14/11/2026 (gpt-6-luna; docs/research/regioes.md). Revisão docente não registrada. A atividade ainda não cobre todas as 55 regiões / 75 ocorrências visíveis.",
}
