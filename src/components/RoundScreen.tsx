import { useEffect, useRef, useState } from "react"
import { Check, Eye, Flame, X } from "lucide-react"
import { CountdownRing } from "@/components/CountdownRing"
import { PlateView } from "@/components/PlateView"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FeedbackCard, QuestionDebug, StudyFooter, StudyHeader, StudyPage } from "@/components/StudyLayout"
import { OPTIONS_MS, useCountdown } from "@/lib/countdown"
import type { Mode, Question } from "@/lib/round"
import { alternativeId, recordExposure } from "@/lib/sampling"

interface RoundScreenProps {
  question: Question
  index: number
  total: number
  score: number
  streak: number
  mode: Mode
  debugEnabled?: boolean
  presentationId: string
  onAnswer: (correct: boolean, picked?: string) => void
  onNext: () => void
  onQuit: () => void
}

export function RoundScreen(props: RoundScreenProps) {
  const { question, index, total, score, streak, mode } = props
  const [picked, setPicked] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  // Choice mode: options stay hidden until the player asks, then the clock runs.
  const [open, setOpen] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const submitted = useRef(false)
  const advanced = useRef(false)
  const answer = question.marker.term
  const settled = picked !== null || revealed || timedOut
  useEffect(() => {
    recordExposure([`anatomia:concept:${question.marker.slug}`, `anatomia:question:${question.plate.id}:${question.marker.slug}`], [], `${props.presentationId}:question`)
  }, [props.presentationId, question])
  useEffect(() => {
    if ((mode === "choice" && open) || revealed) recordExposure([], (mode === "choice" ? question.options : [answer]).map((term) => alternativeId("anatomia", term)), `${props.presentationId}:${mode}:alternatives`)
  }, [props.presentationId, question, mode, open, revealed, answer])
  const timer = useCountdown(mode === "choice" && open && !settled ? props.presentationId : null, OPTIONS_MS, () => {
    if (submitted.current) return
    submitted.current = true
    setTimedOut(true)
    props.onAnswer(false)
    window.scrollTo(0, 0)
  })
  const choose = (option: string) => {
    if (submitted.current || timer.settle()) return
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
    <div><h3 className="font-semibold">Questão e resposta</h3><p>{question.plate.id} · {question.marker.slug}</p><p>Resposta: {answer}</p><p>Sua escolha: {picked ?? (timedOut ? "Tempo esgotado" : "Autoavaliação de flashcard")}</p><p>Opções: {question.options.join("; ")}</p></div>
    <div><h3 className="font-semibold">Fonte</h3><p>Atlas Fotográfico de Anatomia Humana · página {question.plate.page}</p><p>{question.plate.caption || question.plate.region}</p></div>
    <div><h3 className="font-semibold">Posição normalizada</h3><p>{question.marker.x.toFixed(3)}, {question.marker.y.toFixed(3)}</p><p>{question.marker.detail?.join("; ") || "Detalhes adicionais não registrados."}</p></div>
    <div><h3 className="font-semibold">Revisão</h3><p>Marcadores sinalizados como suspeitos ou fora da fotografia são excluídos. Revisão docente e proveniência adicional não registradas.</p></div>
  </QuestionDebug> : undefined
  const footer = mode === "flashcard" ? revealed ? <>
    <Button variant="outline" className="h-12 flex-1 rounded-[10px]" onClick={() => grade(false)}><X className="size-4" /> Errei</Button>
    <Button className="h-12 flex-1 rounded-[10px]" onClick={() => grade(true)}><Check className="size-4" /> Acertei</Button>{debug}
  </> : <StudyFooter label="Revelar resposta" onClick={() => setRevealed(true)} /> : settled ? <StudyFooter label={index + 1 === total ? "Ver resultado" : "Próxima questão"} onClick={advance} debug={debug} /> : open ? undefined : <StudyFooter label="Ver opções" onClick={() => setOpen(true)} />

  return <StudyPage footer={footer}>
    <StudyHeader onBack={props.onQuit} label={settled ? "Anatomia · feedback" : "Anatomia"} trailing={<span className="flex items-center gap-3">{streak >= 2 && <span className="flex items-center gap-1 text-primary"><Flame className="size-4" />{streak}</span>}{score} pts</span>} />
    <Progress value={(index + (settled ? 1 : 0)) / total * 100} className="mb-2 h-1" />
    <p className="mb-4 text-xs text-muted-foreground">{index + 1} de {total}</p>
    <h1 className="mb-4 text-[25px] font-bold leading-[30px] tracking-tight">{timedOut ? "Tempo esgotado!" : picked !== null ? picked === answer ? "Resposta correta!" : "Quase lá!" : mode === "choice" ? "Qual estrutura está marcada?" : "Que estrutura é essa?"}</h1>
    <PlateView plate={question.plate} marker={question.marker} settled={settled} maxHeight="38dvh" />
    {settled ? <div className="mt-4"><FeedbackCard correct={!timedOut && (picked === null || picked === answer)} label={mode === "flashcard" ? "Resposta revelada" : timedOut ? "Tempo esgotado" : picked === answer ? "✓ Acertou" : `Sua resposta · ${picked}`} title={answer}>
      {question.marker.detail && <ul className="space-y-1">{question.marker.detail.map((item) => <li key={item}>{item}</li>)}</ul>}
      {mode === "flashcard" && <p>Avalie sua resposta para continuar.</p>}
    </FeedbackCard></div> : mode === "choice" ? open ? <CountdownRing seconds={timer.seconds} total={OPTIONS_MS / 1000} paused={timer.paused}><div className="mt-4 grid gap-2" role="group" aria-label="Opções de resposta">{question.options.map((option) => <button key={option} type="button" onClick={() => choose(option)} className="flex min-h-12 items-center gap-3 rounded-[10px] border bg-card px-4 py-3 text-left text-[15px] transition hover:border-primary hover:bg-secondary/30"><span className="size-3 shrink-0 rounded-full border border-primary" aria-hidden="true" />{option}</button>)}</div></CountdownRing> : <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Eye className="size-4" /> Pense na resposta. As opções ficam visíveis por 10 segundos.</p> : <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Eye className="size-4" /> Responda mentalmente antes de revelar.</p>}
  </StudyPage>
}
