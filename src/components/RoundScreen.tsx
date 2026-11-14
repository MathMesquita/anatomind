import { useRef, useState } from "react"
import { Check, Eye, Flame, X } from "lucide-react"
import { PlateView } from "@/components/PlateView"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FeedbackCard, QuestionDebug, StudyFooter, StudyHeader, StudyPage } from "@/components/StudyLayout"
import type { Mode, Question } from "@/lib/round"

interface RoundScreenProps {
  question: Question
  index: number
  total: number
  score: number
  streak: number
  mode: Mode
  debugEnabled?: boolean
  onAnswer: (correct: boolean, picked?: string) => void
  onNext: () => void
  onQuit: () => void
}

export function RoundScreen(props: RoundScreenProps) {
  const { question, index, total, score, streak, mode } = props
  const [picked, setPicked] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const submitted = useRef(false)
  const advanced = useRef(false)
  const answer = question.marker.term
  const settled = picked !== null || revealed
  const choose = (option: string) => {
    if (submitted.current) return
    submitted.current = true
    setPicked(option)
    props.onAnswer(option === answer, option)
    window.scrollTo(0, 0)
  }
  const advance = () => {
    if (advanced.current) return
    advanced.current = true
    props.onNext(); window.scrollTo(0, 0)
  }
  const grade = (correct: boolean) => {
    if (submitted.current) return
    submitted.current = true
    props.onAnswer(correct)
    advance()
  }
  const debug = settled && props.debugEnabled ? <QuestionDebug key={`${question.plate.id}-${question.marker.slug}`}>
    <div><h3 className="font-semibold">Questão e resposta</h3><p>{question.plate.id} · {question.marker.slug}</p><p>Resposta: {answer}</p><p>Sua escolha: {picked ?? "Autoavaliação de flashcard"}</p><p>Opções: {question.options.join("; ")}</p></div>
    <div><h3 className="font-semibold">Fonte</h3><p>Atlas Fotográfico de Anatomia Humana · página {question.plate.page}</p><p>{question.plate.caption || question.plate.region}</p></div>
    <div><h3 className="font-semibold">Posição normalizada</h3><p>{question.marker.x.toFixed(3)}, {question.marker.y.toFixed(3)}</p><p>{question.marker.detail?.join("; ") || "Detalhes adicionais não registrados."}</p></div>
    <div><h3 className="font-semibold">Revisão</h3><p>Marcadores sinalizados como suspeitos ou fora da fotografia são excluídos. Revisão docente e proveniência adicional não registradas.</p></div>
  </QuestionDebug> : undefined
  const footer = mode === "flashcard" ? revealed ? <>
    <Button variant="outline" className="h-12 flex-1 rounded-[10px]" onClick={() => grade(false)}><X className="size-4" /> Errei</Button>
    <Button className="h-12 flex-1 rounded-[10px]" onClick={() => grade(true)}><Check className="size-4" /> Acertei</Button>{debug}
  </> : <StudyFooter label="Revelar resposta" onClick={() => setRevealed(true)} /> : picked !== null ? <StudyFooter label={index + 1 === total ? "Ver resultado" : "Próxima questão"} onClick={advance} debug={debug} /> : undefined

  return <StudyPage footer={footer}>
    <StudyHeader onBack={props.onQuit} label={settled ? "Anatomia · feedback" : "Anatomia"} trailing={<span className="flex items-center gap-3">{streak >= 2 && <span className="flex items-center gap-1 text-primary"><Flame className="size-4" />{streak}</span>}{score} pts</span>} />
    <Progress value={(index + (settled ? 1 : 0)) / total * 100} className="mb-2 h-1" />
    <p className="mb-4 text-xs text-muted-foreground">{index + 1} de {total}</p>
    <h1 className="mb-4 text-[25px] font-bold leading-[30px] tracking-tight">{picked !== null ? picked === answer ? "Resposta correta!" : "Quase lá!" : mode === "choice" ? "Qual estrutura está marcada?" : "Que estrutura é essa?"}</h1>
    <PlateView plate={question.plate} marker={question.marker} settled={settled} maxHeight="38dvh" />
    {settled ? <div className="mt-4"><FeedbackCard correct={picked === null || picked === answer} label={mode === "flashcard" ? "Resposta revelada" : picked === answer ? "✓ Acertou" : `Sua resposta · ${picked}`} title={answer}>
      {question.marker.detail && <ul className="space-y-1">{question.marker.detail.map((item) => <li key={item}>{item}</li>)}</ul>}
      {mode === "flashcard" && <p>Avalie sua resposta para continuar.</p>}
    </FeedbackCard></div> : mode === "choice" ? <div className="mt-4 grid gap-2" role="group" aria-label="Opções de resposta">{question.options.map((option) => <button key={option} type="button" onClick={() => choose(option)} className="flex min-h-12 items-center gap-3 rounded-[10px] border bg-card px-4 py-3 text-left text-[15px] transition hover:border-primary hover:bg-secondary/30"><span className="size-3 shrink-0 rounded-full border border-primary" aria-hidden="true" />{option}</button>)}</div> : <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Eye className="size-4" /> Responda mentalmente antes de revelar.</p>}
  </StudyPage>
}
