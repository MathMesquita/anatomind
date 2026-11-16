import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FeedbackCard, QuestionDebug, StudyFooter, StudyHeader, StudyPage } from "@/components/StudyLayout"
import { RegionDiagram } from "@/components/RegionDiagram"
import { CountdownRing } from "@/components/CountdownRing"
import { OPTIONS_MS, useCountdown } from "@/lib/countdown"
import { regionCoverage, regionQuestions, regionSource, regionViews, type RegionQuestion } from "@/data/regions"
import { alternativeId, chooseOptions, getExposure, newPresentationId, recordExposure } from "@/lib/sampling"
import { buildRegionRound } from "@/lib/region-round"

type Props = { onBack: () => void; debugEnabled: boolean; onComplete?: (activity: string, score: number) => void }
const headView = (view: RegionQuestion["view"]) => view === "face" || view === "occipital"
const createRound = () => buildRegionRound(regionQuestions)
// Stored as the pick when the clock runs out before any option is tapped.
const TIMEOUT = "Sem resposta"

export default function BodyRegions({ onBack, debugEnabled, onComplete }: Props) {
  const [phase, setPhase] = useState<"library" | "round" | "results">("library")
  const [questions, setQuestions] = useState<RegionQuestion[]>(createRound)
  const [roundId, setRoundId] = useState(newPresentationId)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  // Options stay hidden until the player asks, then the clock runs.
  const [open, setOpen] = useState(false)
  const [answers, setAnswers] = useState<{ question: RegionQuestion; picked: string }[]>([])
  const selected = useRef(false)
  const completionSent = useRef(false)
  const question = questions[index]
  const options = useMemo(() => {
    const candidates = regionQuestions.filter((q) => headView(q.view) === headView(question.view)).flatMap((q) => q.options)
    return chooseOptions([question.answer], candidates, (text) => alternativeId("propedeutica", text), 4)
  }, [question, roundId])
  const settled = picked !== null
  const correct = picked === question.answer
  const timedOut = picked === TIMEOUT
  const score = answers.filter((item) => item.picked === item.question.answer).length * 10

  const start = () => {
    setQuestions(createRound()); setRoundId(newPresentationId()); setIndex(0); setPicked(null); setOpen(false); setAnswers([]); setPhase("round"); selected.current = false; completionSent.current = false
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    if (phase !== "round") return
    recordExposure([`propedeutica:region:${question.regionId}`, `propedeutica:question:${question.id}`], [], `${roundId}:${question.id}:question`)
  }, [phase, question, roundId])
  useEffect(() => {
    if (phase !== "round" || !open) return
    recordExposure([], options.map((text) => alternativeId("propedeutica", text)), `${roundId}:${question.id}:options`)
  }, [phase, question, roundId, options, open])
  const choose = (value: string) => {
    if (selected.current) return
    selected.current = true
    setPicked(value)
    setAnswers((current) => [...current, { question, picked: value }])
    window.scrollTo(0, 0)
  }
  const timer = useCountdown(phase === "round" && open && !settled ? `${roundId}:${question.id}` : null, OPTIONS_MS, () => choose(TIMEOUT))
  const next = () => {
    if (!settled) return
    if (index + 1 === questions.length) {
      setPhase("results")
      if (!completionSent.current) { completionSent.current = true; onComplete?.("regioes", score) }
    } else { setIndex(index + 1); setPicked(null); setOpen(false); selected.current = false }
    window.scrollTo(0, 0)
  }
  const debug = settled && debugEnabled ? <QuestionDebug key={question.id}>
    <div><h3 className="font-semibold">Questão e resposta</h3><p>{question.id} · número {question.number} · {question.answer}</p><p>Sua escolha: {picked}</p></div>
    <div><h3 className="font-semibold">Fonte</h3><p>{regionSource.document} · página {regionSource.page}</p><p>{regionViews[question.view].title}</p></div>
    <div><h3 className="font-semibold">Registro da fonte</h3><p>{question.bankId} · {question.source.locator}</p><p>Rótulo original: {question.sourceLabel}</p></div>
    <div><h3 className="font-semibold">Preparação da imagem</h3><p>{regionSource.provenance}</p><p>Ponto na vista: {question.x}%, {question.y}%.</p></div>
    <div><h3 className="font-semibold">Revisão</h3><p>{regionSource.review}</p></div>
    <div><h3 className="font-semibold">Checagem deste alvo</h3><p>{question.review.model} · {question.review.date} · confiança: {question.review.confidence}</p><p>{question.review.visualCheck}</p><details className="mt-2"><summary>Evidência em pixels da imagem original</summary><pre className="mt-2 whitespace-pre-wrap text-xs">{JSON.stringify(question.review.pixelEvidence, null, 2)}</pre></details></div>
    <div><h3 className="font-semibold">Cobertura e proveniência</h3><p>{regionCoverage.questions} alvos · {regionCoverage.answerRegions}/{regionCoverage.legendRegions} regiões. Geração: {regionCoverage.generation.model} · {regionCoverage.generation.promptVersion}. Versão congelada: {regionCoverage.release.id}.</p><p>Sem alvo utilizável: {regionCoverage.unavailableRegions.map((region) => `${region.number} — ${region.label}`).join("; ")}.</p><details className="mt-2"><summary>Exclusões e problemas da fonte</summary><pre className="mt-2 whitespace-pre-wrap text-xs">{JSON.stringify({ exclusions: regionCoverage.excludedTargets, sourceDefects: regionCoverage.sourceDefects }, null, 2)}</pre></details></div>
    <div><h3 className="font-semibold">Sorteio e exposição</h3><p>Questões inéditas primeiro; depois, prioridade ponderada por menor frequência e maior tempo desde a última exibição. Posições das respostas embaralhadas.</p><p>Exibições deste alvo neste aparelho: {getExposure().questions[`propedeutica:question:${question.id}`]?.count ?? 0}.</p><p>{options.map((text) => `${text}: ${getExposure().alternatives[alternativeId("propedeutica", text)]?.count ?? 0}`).join("; ")}</p></div>
  </QuestionDebug> : undefined

  if (phase === "library") return <StudyPage>
    <StudyHeader onBack={onBack} label="Disciplinas" />
    <p className="mb-2 text-xs font-bold uppercase tracking-[.08em] text-primary">Propedêutica médica</p>
    <h1 className="text-[30px] font-bold leading-9 tracking-tight">Observe e reconheça.</h1>
    <p className="mt-3 text-[15px] leading-6 text-muted-foreground">Pratique a identificação de regiões usando as ilustrações numeradas da aula.</p>
    <button type="button" onClick={start} className="mt-8 flex min-h-24 w-full items-center gap-4 border-y py-5 text-left hover:bg-secondary/30"><span className="flex-1"><span className="block text-lg font-semibold">Regiões da superfície corporal</span><span className="mt-1 block text-sm text-muted-foreground">Cinco vistas · 10 questões por rodada</span></span><ChevronRight className="size-5 text-primary" /></button>
    <p className="mt-6 text-xs leading-5 text-muted-foreground">{regionCoverage.questions} alvos conferidos por modelo · {regionCoverage.answerRegions} de {regionCoverage.legendRegions} regiões da legenda. Alvos ausentes ou ilegíveis ficam de fora. Fonte: Divisão da superfície corporal. Revisão docente pendente.</p>
  </StudyPage>

  if (phase === "results") return <StudyPage footer={<StudyFooter label="Jogar novamente" onClick={start} secondary={<Button variant="outline" className="h-12 rounded-[10px]" onClick={() => setPhase("library")}>Biblioteca</Button>} />}>
    <StudyHeader onBack={() => setPhase("library")} label="Propedêutica" />
    <p className="text-xs font-bold uppercase tracking-[.08em] text-primary">Rodada concluída</p>
    <h1 className="mt-3 text-3xl font-bold">{score} pontos</h1>
    <p className="mt-2 text-sm text-muted-foreground">{score / 10} de {questions.length} regiões identificadas.</p>
    <div className="mt-6 space-y-3">{answers.map((item) => <FeedbackCard key={item.question.id} correct={item.picked === item.question.answer} label={`NÚMERO ${item.question.number} · ${item.picked === item.question.answer ? "ACERTOU" : "PARA REVISAR"}`} title={item.question.answer}>{item.picked !== item.question.answer && `Sua escolha: ${item.picked}`}</FeedbackCard>)}</div>
  </StudyPage>

  return <StudyPage footer={settled ? <StudyFooter label={index + 1 === questions.length ? "Ver resultado" : "Próxima questão"} onClick={next} debug={debug} /> : open ? undefined : <StudyFooter label="Ver opções" onClick={() => setOpen(true)} />}>
    <StudyHeader onBack={() => setPhase("library")} label={settled ? "Propedêutica · feedback" : "Propedêutica médica"} trailing={`${score} pts`} />
    {!settled && <><Progress value={index / questions.length * 100} className="mb-2 h-1" /><p className="mb-4 text-xs text-muted-foreground">{index + 1} de {questions.length}</p></>}
    <h1 className="text-[25px] font-bold leading-[30px] tracking-tight">{settled ? correct ? "Resposta correta!" : timedOut ? "Tempo esgotado!" : "Quase lá!" : `Qual região corresponde ao número ${question.number}?`}</h1>
    <p className="mb-5 mt-2 text-sm leading-5 text-muted-foreground">{settled ? `Confira a região indicada pelo número ${question.number}.` : open ? "Escolha uma resposta antes que o tempo acabe." : "Observe a ilustração e pense na resposta. As opções ficam visíveis por 10 segundos."}</p>
    <RegionDiagram key={question.id} question={question} />
    {settled ? <div className="mt-4"><FeedbackCard correct={correct} label={correct ? "✓ Acertou · +10 pontos" : timedOut ? "Tempo esgotado" : `Sua resposta · ${picked}`} title={question.answer}><p>{correct ? "" : "Resposta correta · "}Número {question.number} · {regionViews[question.view].title.toLowerCase()}.</p></FeedbackCard></div> : open && <CountdownRing key={question.id} seconds={timer.seconds} total={OPTIONS_MS / 1000} paused={timer.paused}><div className="mt-4 grid gap-2" role="group" aria-label="Opções de resposta">{options.map((option) => <button key={option} type="button" onClick={() => { if (!timer.settle()) choose(option) }} className="flex min-h-12 items-center gap-3 rounded-[10px] border bg-card px-4 py-3 text-left text-[15px] transition hover:border-primary hover:bg-secondary/30"><span aria-hidden="true" className="size-3 shrink-0 rounded-full border border-primary" /><span>{option}</span></button>)}</div></CountdownRing>}
  </StudyPage>
}
