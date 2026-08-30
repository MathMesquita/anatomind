import { useState } from "react"
import { ArrowRight, Check, Eye, Flame, X } from "lucide-react"

import { PlateView } from "@/components/PlateView"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Mode, Question } from "@/lib/round"
import { cn } from "@/lib/utils"

interface RoundScreenProps {
  question: Question
  index: number
  total: number
  score: number
  streak: number
  mode: Mode
  onAnswer: (correct: boolean, picked?: string) => void
  onNext: () => void
  onQuit: () => void
}

export function RoundScreen(props: RoundScreenProps) {
  const { question, index, total, score, streak, mode } = props
  const [picked, setPicked] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  const settled = picked !== null || revealed
  const answer = question.marker.term

  const choose = (option: string) => {
    if (picked) return
    setPicked(option)
    props.onAnswer(option === answer, option)
  }

  const advance = () => {
    setPicked(null)
    setRevealed(false)
    props.onNext()
  }

  const grade = (correct: boolean) => {
    props.onAnswer(correct)
    setPicked(null)
    setRevealed(false)
    props.onNext()
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-4 py-4">
      <header className="mb-3">
        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={props.onQuit}
            className="-ml-2 text-muted-foreground"
          >
            Sair
          </Button>
          <div className="flex items-center gap-3">
            {streak >= 2 && (
              <span className="flex items-center gap-1 font-medium text-primary">
                <Flame className="size-4" /> {streak}
              </span>
            )}
            <span className="tabular-nums font-medium">{score} pts</span>
          </div>
        </div>
        <Progress value={((index + (settled ? 1 : 0)) / total) * 100} className="h-1.5" />
        <p className="mt-1.5 text-xs text-muted-foreground tabular-nums">
          {index + 1} de {total}
        </p>
      </header>

      <PlateView
        plate={question.plate}
        marker={question.marker}
        settled={settled}
        maxHeight={mode === "choice" ? "40dvh" : "56dvh"}
      />

      <p className="mt-4 mb-3 text-sm font-medium">
        {mode === "choice"
          ? "Qual estrutura está marcada?"
          : "Que estrutura é essa? Responda mentalmente."}
      </p>

      {mode === "choice" ? (
        <div className="grid gap-2">
          {question.options.map((option) => {
            const isAnswer = option === answer
            const isPicked = option === picked
            return (
              <button
                key={option}
                type="button"
                onClick={() => choose(option)}
                disabled={picked !== null}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-xl border px-4 py-3",
                  "text-left text-sm transition active:scale-[0.995]",
                  !picked && "hover:border-primary/50 hover:bg-accent/40",
                  picked && isAnswer && "border-correct bg-correct/12 text-foreground",
                  picked && isPicked && !isAnswer && "border-wrong bg-wrong/12",
                  picked && !isAnswer && !isPicked && "opacity-50",
                )}
              >
                <span className="min-w-0">{option}</span>
                {picked && isAnswer && <Check className="size-4 shrink-0 text-correct" />}
                {picked && isPicked && !isAnswer && (
                  <X className="size-4 shrink-0 text-wrong" />
                )}
              </button>
            )
          })}
        </div>
      ) : (
        <div className="grid gap-3">
          {revealed ? (
            <>
              <div className="rounded-xl border bg-card px-4 py-3">
                <div className="font-medium">{answer}</div>
                {question.marker.detail && (
                  <ul className="mt-1.5 space-y-0.5 text-xs text-muted-foreground">
                    {question.marker.detail.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={() => grade(false)}>
                  <X className="size-4" /> Errei
                </Button>
                <Button onClick={() => grade(true)}>
                  <Check className="size-4" /> Acertei
                </Button>
              </div>
            </>
          ) : (
            <Button size="lg" onClick={() => setRevealed(true)}>
              <Eye className="size-4" /> Revelar
            </Button>
          )}
        </div>
      )}

      {mode === "choice" && picked && (
        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border bg-card px-4 py-3">
          <div className="min-w-0 text-sm">
            <span
              className={cn(
                "font-medium",
                picked === answer ? "text-correct" : "text-wrong",
              )}
            >
              {picked === answer ? "Correto" : "Era"}
            </span>
            {picked !== answer && <span className="ml-1.5">{answer}</span>}
          </div>
          <Button size="sm" onClick={advance} className="shrink-0">
            {index + 1 === total ? "Ver resultado" : "Próxima"}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
