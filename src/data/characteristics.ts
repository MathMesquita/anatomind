import type { CharacteristicStory } from "../lib/characteristic-bank.ts"
import { adaptCharacteristicRelease } from "../lib/characteristic-bank.ts"
import release from "../../content/releases/caracteres.v1.json" with { type: "json" }

const fields = ["Localização", "Irradiação", "Qualidade/caráter", "Intensidade", "Duração", "Evolução", "Relação com funções orgânicas", "Fatores desencadeantes/agravantes", "Fatores atenuantes", "Manifestações concomitantes"]

// Preserve the old examples for regression tests, not the active content bank.
export const starterCharacteristicStories: CharacteristicStory[] = [
  { text: "Paciente relata dor lombar em aperto, intensidade 6/10, iniciada há três dias e que aumentou desde então. Nega relação com urinar ou evacuar.\n\nA dor piora ao caminhar e melhora com repouso. Nega febre ou outros sintomas associados.", missing: ["Irradiação"], context: "A história não informa se a dor se espalha. Negações explicitamente documentadas são informações presentes." },
  { text: "Paciente relata dor abdominal em cólica, 5/10, há dois dias, sem irradiação e estável desde o início. Informa que não percebe relação com refeições, urina ou evacuação.\n\nA dor piora com movimento e melhora com repouso. Nega outros sintomas associados.", missing: [], context: "O registro aborda todos os campos deste roteiro, incluindo a ausência de irradiação e de sintomas associados." },
  { text: "Paciente relata dor lombar em aperto há dois dias, que vem aumentando desde o início. Não percebe relação com refeições, urina ou evacuação.\n\nA dor piora ao caminhar e melhora com repouso. Nega outros sintomas associados.", missing: ["Irradiação", "Intensidade"], context: "O registro não informa a intensidade nem se a dor se espalha." },
].map((story, index) => ({ ...story, id: `prototype-v1:${index}`, groupId: "dor", groupLabel: "Dor", fields, fieldKeys: Object.fromEntries(fields.map((field) => [field, field])) }))

export const characteristicStories = adaptCharacteristicRelease(release)
export const characteristicCatalog = { stories: characteristicStories.length, groups: new Set(characteristicStories.map((story) => story.groupId)).size, reviewedPrototype: true }
