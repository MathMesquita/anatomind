import { useEffect, useMemo, useState } from "react"
import { Loader2 } from "lucide-react"

import { HomeScreen } from "@/components/HomeScreen"
import { ResultsScreen } from "@/components/ResultsScreen"
import { RoundScreen } from "@/components/RoundScreen"
import { buildDecks, loadPlates, type Deck, type Plate } from "@/lib/atlas"
import { buildRound, scoreFor, type Answer, type Mode, type Question } from "@/lib/round"

type Stage = "home" | "round" | "results"

interface RoundState {
  deck: Deck
  questions: Question[]
  index: number
  answers: Answer[]
  score: number
  streak: number
}

export default function App() {
  const [plates, setPlates] = useState<Plate[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<Mode>("choice")
  const [stage, setStage] = useState<Stage>("home")
  const [round, setRound] = useState<RoundState | null>(null)

  useEffect(() => {
    loadPlates().then(setPlates).catch((e: Error) => setError(e.message))
  }, [])

  const decks = useMemo(() => (plates ? buildDecks(plates) : []), [plates])

  const start = (deck: Deck) => {
    setRound({
      deck,
      questions: buildRound(deck),
      index: 0,
      answers: [],
      score: 0,
      streak: 0,
    })
    setStage("round")
  }

  const answer = (correct: boolean, picked?: string) => {
    setRound((current) => {
      if (!current) return current
      return {
        ...current,
        streak: correct ? current.streak + 1 : 0,
        score: current.score + (correct ? scoreFor(current.streak) : 0),
        answers: [
          ...current.answers,
          { question: current.questions[current.index], correct, picked },
        ],
      }
    })
  }

  /**
   * Decide the stage outside the updater, but advance the index inside it.
   *
   * Changing stage is a side effect and updaters are re-run during render, so
   * it cannot live in one. The index still must, because flashcard mode grades
   * and advances in a single tick -- a plain object here would overwrite the
   * answer `answer()` has only just queued.
   */
  const next = () => {
    if (!round) return
    if (round.index + 1 >= round.questions.length) {
      setStage("results")
      return
    }
    setRound((current) => (current ? { ...current, index: current.index + 1 } : current))
  }

  if (error) {
    return (
      <main className="grid min-h-dvh place-items-center px-6 text-center">
        <div>
          <p className="font-medium">{error}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Rode <code className="rounded bg-muted px-1.5 py-0.5">npm run atlas</code> para
            gerar as pranchas a partir do PDF.
          </p>
        </div>
      </main>
    )
  }

  if (!plates) {
    return (
      <main className="grid min-h-dvh place-items-center">
        <Loader2 className="size-7 animate-spin text-muted-foreground" />
      </main>
    )
  }

  if (stage === "round" && round) {
    return (
      <main>
        <RoundScreen
          question={round.questions[round.index]}
          index={round.index}
          total={round.questions.length}
          score={round.score}
          streak={round.streak}
          mode={mode}
          onAnswer={answer}
          onNext={next}
          onQuit={() => setStage("home")}
        />
      </main>
    )
  }

  if (stage === "results" && round) {
    return (
      <main>
        <ResultsScreen
          answers={round.answers}
          score={round.score}
          deckLabel={round.deck.label}
          onRestart={() => start(round.deck)}
          onHome={() => setStage("home")}
        />
      </main>
    )
  }

  return (
    <main>
      <HomeScreen decks={decks} mode={mode} onModeChange={setMode} onStart={start} />
    </main>
  )
}
