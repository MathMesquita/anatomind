import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft, Loader2 } from "lucide-react"

import Anamnese from "@/components/Anamnese"
import BodyRegions from "@/components/BodyRegions"
import { HomeScreen } from "@/components/HomeScreen"
import { ResultsScreen } from "@/components/ResultsScreen"
import { RoundScreen } from "@/components/RoundScreen"
import { SubjectsScreen, type Subject } from "@/components/SubjectsScreen"
import { Button } from "@/components/ui/button"
import { buildDecks, loadPlates, type Deck, type Plate } from "@/lib/atlas"
import { buildRound, refreshQuestionOptions, scoreFor, type Answer, type Mode, type Question } from "@/lib/round"

type Stage = "home" | "round" | "results"

interface RoundState {
  id: string
  deck: Deck
  questions: Question[]
  index: number
  answers: Answer[]
  score: number
  streak: number
}

type Progress = Record<string, { rounds: number; points: number }>
const PROGRESS_KEY = "anatomind.progress.v1"
const DEBUG_KEY = "anatomind.debug.v1"

function readProgress(): Progress {
  try {
    const value = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}")
    if (!value || typeof value !== "object" || Array.isArray(value)) return {}
    return Object.fromEntries(Object.entries(value).filter((entry): entry is [string, { rounds: number; points: number }] => {
      const item = entry[1]
      return !!item && typeof item === "object" && "rounds" in item && "points" in item && Number.isSafeInteger(item.rounds) && Number(item.rounds) >= 0 && typeof item.points === "number" && Number.isFinite(item.points)
    }))
  } catch { return {} }
}

function readDebug() {
  try { return localStorage.getItem(DEBUG_KEY) === "true" } catch { return false }
}

export default function App() {
  const [subject, setSubject] = useState<Subject | null>(null)
  const [progress, setProgress] = useState<Progress>(readProgress)
  const [debugEnabled, setDebugEnabled] = useState(readDebug)
  const [debugNotice, setDebugNotice] = useState("")
  const taps = useRef(0)
  const recordedRound = useRef<string | null>(null)
  const [plates, setPlates] = useState<Plate[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<Mode>("choice")
  const [stage, setStage] = useState<Stage>("home")
  const [round, setRound] = useState<RoundState | null>(null)

  useEffect(() => {
    loadPlates().then(setPlates).catch((e: Error) => setError(e.message))
  }, [])

  const decks = useMemo(() => (plates ? buildDecks(plates) : []), [plates])

  const recordCompletion = useCallback((key: string, score: number) => {
    setProgress((current) => {
      const previous = current[key] || { rounds: 0, points: 0 }
      const next = { ...current, [key]: { rounds: previous.rounds + 1, points: previous.points + score } }
      return next
    })
  }, [])

  useEffect(() => {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)) } catch { /* Progress stays available in memory when storage is unavailable. */ }
  }, [progress])

  useEffect(() => {
    if (subject !== "anatomia" || stage !== "results" || !round || recordedRound.current === round.id) return
    recordedRound.current = round.id
    recordCompletion(`anatomia:${mode}`, round.score)
  }, [stage, round, subject, mode, recordCompletion])

  useEffect(() => {
    if (!debugNotice) return
    const timeout = window.setTimeout(() => setDebugNotice(""), 3000)
    return () => window.clearTimeout(timeout)
  }, [debugNotice])

  const tapLogo = () => {
    taps.current += 1
    if (taps.current < 20) return
    taps.current = 0
    const next = !debugEnabled
    setDebugEnabled(next)
    setDebugNotice(next ? "Modo de depuração ativado." : "Modo de depuração desativado.")
    try { localStorage.setItem(DEBUG_KEY, String(next)) } catch { /* Remains active for this session. */ }
  }

  const home = () => { setStage("home"); setRound(null); setSubject(null) }

  const start = (deck: Deck) => {
    setRound({
      id: `${Date.now()}-${Math.random()}`,
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
      if (!current || current.answers.length > current.index) return current
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
    const nextIndex = round.index + 1
    const nextQuestion = refreshQuestionOptions(round.questions[nextIndex], round.deck)
    setRound((current) => (current ? { ...current, index: nextIndex, questions: current.questions.map((question, i) => i === nextIndex ? nextQuestion : question) } : current))
  }

  if (!subject) {
    return <main><SubjectsScreen onSelect={setSubject} onLogoTap={tapLogo} debugEnabled={debugEnabled} progress={progress} />{debugNotice && <div role="status" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-foreground px-4 py-3 text-sm text-background shadow-lg">{debugNotice}</div>}</main>
  }

  if (subject === "propedeutica") return <main><BodyRegions onBack={home} debugEnabled={debugEnabled} onComplete={(activity, score) => recordCompletion(`propedeutica:${activity}`, score)} /></main>
  if (subject === "anamnese") return <main><Anamnese onBack={home} debugEnabled={debugEnabled} onComplete={(activity, score) => recordCompletion(`anamnese:${activity}`, score)} /></main>

  if (error) {
    return (
      <main className="grid min-h-dvh place-items-center px-6 text-center">
        <div>
          <p className="font-medium">{error}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Rode <code className="rounded bg-muted px-1.5 py-0.5">npm run atlas</code> para
            gerar as pranchas a partir do PDF.
          </p>
          <Button variant="outline" className="mt-4" onClick={home}>Voltar às disciplinas</Button>
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
          key={`${round.id}:${round.index}`}
          question={round.questions[round.index]}
          index={round.index}
          total={round.questions.length}
          score={round.score}
          streak={round.streak}
          mode={mode}
          debugEnabled={debugEnabled}
          presentationId={`${round.id}:${round.index}`}
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
      <div className="mx-auto w-full max-w-2xl px-4 pt-4"><Button variant="ghost" size="sm" onClick={home}><ArrowLeft className="size-4" /> Disciplinas</Button></div>
      <HomeScreen decks={decks} mode={mode} onModeChange={setMode} onStart={start} />
    </main>
  )
}
