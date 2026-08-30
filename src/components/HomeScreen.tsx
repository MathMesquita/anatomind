import { Brain, Layers, ListChecks } from "lucide-react"

import type { Deck } from "@/lib/atlas"
import type { Mode } from "@/lib/round"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HomeScreenProps {
  decks: Deck[]
  mode: Mode
  onModeChange: (mode: Mode) => void
  onStart: (deck: Deck) => void
}

const MODES: { id: Mode; label: string; blurb: string; icon: typeof ListChecks }[] = [
  {
    id: "choice",
    label: "Múltipla escolha",
    blurb: "Quatro opções, tiradas da mesma prancha",
    icon: ListChecks,
  },
  {
    id: "flashcard",
    label: "Flashcard",
    blurb: "Lembre, revele e avalie você mesmo",
    icon: Layers,
  },
]

export function HomeScreen({ decks, mode, onModeChange, onStart }: HomeScreenProps) {
  const total = decks.reduce((sum, deck) => sum + deck.markerCount, 0)

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      <header className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <Brain className="size-6 text-primary" />
          <h1 className="text-2xl font-semibold tracking-tight">AnatoMind</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          {total.toLocaleString("pt-BR")} estruturas em {decks.length} sistemas, extraídas do
          Atlas Fotográfico de Anatomia Humana da UFRJ&nbsp;Macaé.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-muted-foreground">Como quer estudar</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {MODES.map(({ id, label, blurb, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onModeChange(id)}
              aria-pressed={mode === id}
              className={cn(
                "rounded-xl border p-4 text-left transition",
                "hover:border-primary/50 active:scale-[0.99]",
                mode === id
                  ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                  : "bg-card",
              )}
            >
              <Icon
                className={cn(
                  "mb-2 size-5",
                  mode === id ? "text-primary" : "text-muted-foreground",
                )}
              />
              <div className="font-medium">{label}</div>
              <div className="text-xs text-muted-foreground">{blurb}</div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-medium text-muted-foreground">Escolha um sistema</h2>
        <div className="grid gap-2">
          {decks.map((deck) => (
            <Card
              key={deck.system}
              role="button"
              tabIndex={0}
              onClick={() => onStart(deck)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  onStart(deck)
                }
              }}
              className={cn(
                "flex-row items-center justify-between gap-4 px-4 py-3.5",
                "cursor-pointer transition hover:border-primary/50 hover:bg-accent/40",
                "active:scale-[0.995]",
              )}
            >
              <div className="min-w-0">
                <div className="truncate font-medium">{deck.label}</div>
                <div className="text-xs text-muted-foreground">
                  {deck.plates.length} pranchas
                </div>
              </div>
              <Badge variant="secondary" className="shrink-0 tabular-nums">
                {deck.markerCount}
              </Badge>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
