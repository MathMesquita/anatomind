import { Trophy } from "lucide-react"

import { PLATE_URL } from "@/lib/atlas"
import type { Answer } from "@/lib/round"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StudyFooter, StudyHeader, StudyPage } from "@/components/StudyLayout"

interface ResultsScreenProps {
  answers: Answer[]
  score: number
  deckLabel: string
  onRestart: () => void
  onHome: () => void
}

export function ResultsScreen({
  answers,
  score,
  deckLabel,
  onRestart,
  onHome,
}: ResultsScreenProps) {
  const hits = answers.filter((a) => a.correct).length
  const missed = answers.filter((a) => !a.correct)
  const accuracy = answers.length ? Math.round((hits / answers.length) * 100) : 0

  return (
    <StudyPage footer={<StudyFooter label="Outra rodada" onClick={onRestart} secondary={<Button variant="outline" className="h-12 rounded-[10px]" onClick={onHome}>Sistemas</Button>} />}>
      <StudyHeader onBack={onHome} label="Anatomia · resultado" />
      <div className="mb-6 text-center">
        <Trophy className="mx-auto mb-3 size-10 text-primary" />
        <h1 className="text-2xl font-semibold tracking-tight">
          {hits} de {answers.length}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {deckLabel} · {accuracy}% de acerto · {score} pontos
        </p>
      </div>

      {missed.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Para revisar
          </h2>
          <div className="grid gap-2">
            {missed.map(({ question, picked }) => (
              <Card
                key={question.plate.id + question.marker.slug}
                className="flex-row items-center gap-3 overflow-hidden p-0"
              >
                <img
                  src={PLATE_URL(question.plate.image)}
                  alt=""
                  className="size-16 shrink-0 object-cover"
                />
                <div className="min-w-0 py-2 pr-3 text-sm">
                  <div className="truncate font-medium">{question.marker.term}</div>
                  {picked && (
                    <div className="truncate text-xs text-muted-foreground">
                      você marcou {picked}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </StudyPage>
  )
}
