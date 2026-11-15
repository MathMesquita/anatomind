import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronRight, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StudyPage, StudyHeader, StudyFooter, QuestionDebug, FeedbackCard } from "@/components/StudyLayout"
import { Progress } from "@/components/ui/progress"
import { NONE, NO_SUBGROUP, scoreInterview, scoreSelections } from "@/lib/anamnese"
import { alternativeId, chooseOptions, chooseQuestions, newPresentationId, recordExposure, shuffle } from "@/lib/sampling"
import { sampleDiseaseOptions } from "@/lib/disease-round"
import { characteristicStories as stories, characteristicCatalog } from "@/data/characteristics"
import { interviewQuestions as interviews, interviewCatalog, interviewTerms, interviewSubgroups as subgroups, interviewGroups as mainGroups } from "@/data/interviews"

type Props = { onBack: () => void; debugEnabled: boolean; onComplete?: (activity: string, score: number) => void }
type Mode = "library" | "antecedentes" | "caracteres" | "interrogatorio"
// Existing prototype references are declarations, not verified clinical provenance.
const distractors = ["Glaucoma", "Miopia", "Catarata", "Infarto", "TOC", "Depressão", "Ansiedade", "Epilepsia", "Enxaqueca", "AVE", "Diabetes", "Artrose", "Artrite reumatoide", "Osteoporose", "Pedra na vesícula", "Nefrolitíase"]
const groups = [
  { name: "Doenças respiratórias", answers: ["Pneumonia", "DPOC", "Asma", "Bronquite"], source: "Antecedentes Pessoais Patológicos, p. 1" },
  { name: "Doenças oculares", answers: ["Glaucoma", "Miopia", "Catarata"], source: "Antecedentes Pessoais Patológicos, p. 1" },
]
const eyeDistractors = ["Asma", "DPOC", "Bronquite", "Pneumonia", "Rinite", "TOC", "Depressão", "Ansiedade", "Epilepsia", "Enxaqueca", "AVE", "Diabetes", "Artrose", "Artrite reumatoide", "Osteoporose", "Nefrolitíase", "Pedra na vesícula"]


const activities = [
  ["antecedentes", "Antecedentes pessoais", "Identifique doenças por grupo"],
  ["caracteres", "Caracteres dos sintomas", "Encontre informações ausentes"],
  ["interrogatorio", "Interrogatório complementar", "Da fala do paciente ao termo técnico"],
] as const
const signed = (value: number) => `${value > 0 ? "+" : ""}${value}`

// A keyed round owns its timers and answers. Leaving/restarting unmounts it entirely.
export default function Anamnese({ onBack, debugEnabled, onComplete }: Props) {
  const [mode, setMode] = useState<Mode>("library")
  const [run, setRun] = useState(0)
  const start = (activity: Mode) => { setRun((n) => n + 1); setMode(activity) }
  if (mode !== "library") return <AnamneseRound key={run} mode={mode} debugEnabled={debugEnabled} onComplete={onComplete} onBack={() => setMode("library")} onRestart={() => start(mode)} />
  return <StudyPage>
    <StudyHeader onBack={onBack} label="Disciplinas / Anamnese" />
    <h1 className="text-3xl font-bold tracking-tight">Pratique a escuta.</h1>
    <p className="mt-2 text-[15px] leading-6 text-muted-foreground">Três atividades para pensar como na consulta.</p>
    <div className="-mx-6 mt-6">{activities.map(([id, title, description], i) => <button key={id} type="button" onClick={() => start(id)} className="flex w-full items-center gap-3.5 border-t border-[#D8DDD5] px-6 py-5 text-left hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary">
      <span className="w-7 shrink-0 text-xs text-primary">0{i + 1}</span>
      <span className="flex-1"><span className="block text-[17px] font-bold">{title}</span><span className="mt-1 block text-[13px] text-muted-foreground">{description}</span></span><ChevronRight className="size-5 text-primary" />
    </button>)}</div>
    <p role="note" className="mt-6 text-xs leading-5 text-muted-foreground">Biblioteca: 2 grupos de doenças, {characteristicCatalog.stories} histórias em {characteristicCatalog.groups} {characteristicCatalog.groups === 1 ? "grupo" : "grupos"} de sintomas e {interviewCatalog.stories} {interviewCatalog.reviewedPrototype ? "histórias revisadas" : "exemplos"} de interrogatório. {characteristicCatalog.reviewedPrototype ? "Caracteres com revisão por modelo; revisão docente/clínica pendente." : "Casos demonstrativos; revisão clínica e editorial não registrada."}</p>
  </StudyPage>
}
function AnamneseRound({ mode, onBack, debugEnabled, onComplete, onRestart }: Props & { mode: Exclude<Mode, "library">; onRestart: () => void }) {
  const poolSize = mode === "antecedentes" ? groups.length : mode === "caracteres" ? stories.length : interviews.length
  const questionId = (item: number) => mode === "caracteres" ? `anamnese:caracteres:${stories[item].id}` : mode === "interrogatorio" ? `anamnese:interrogatorio:${interviews[item].id}` : `anamnese:${mode}:prototype-v1:${item}`
  const [order] = useState(() => chooseQuestions(Array.from({ length: poolSize }, (_, i) => i), questionId, mode === "antecedentes" ? poolSize : Math.min(10, poolSize)))
  const length = order.length
  const [presentationId] = useState(newPresentationId)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)
  const [read, setRead] = useState(false)
  const [seconds, setSeconds] = useState(20)
  const [paused, setPaused] = useState(false)
  const [stage, setStage] = useState(0)
  const [stageAnswers, setStageAnswers] = useState<string[]>([])
  const [delta, setDelta] = useState(0)
  const [timedOut, setTimedOut] = useState(false)
  const picksRef = useRef<string[]>([])
  const answeredRef = useRef(false)
  const stageRef = useRef(0)
  const scoreRef = useRef(0)
  const sent = useRef(false)
  const remaining = useRef(20_000)
  const activeSince = useRef<number | null>(null)
  const settleTimer = useRef<() => boolean>(() => false)
  const group = groups[order[index]]
  const story = stories[order[index]]
  // Other activities may grow independently of the interview bank.
  const interview = interviews[mode === "interrogatorio" ? order[index] : 0]
  const paths = interview.paths ?? [{ subgroup: interview.subgroup, group: interview.group }]
  const terms = [interview.term, ...(interview.acceptedTerms ?? [])]
  const questionOptions = useMemo(() => {
    const item = order[index]
    if (mode === "antecedentes") {
      const round = sampleDiseaseOptions(groups[item].answers, item === 0 ? distractors : eyeDistractors, "anamnese:antecedentes:0")
      if (!round) throw new Error("Banco de doenças sem opções revisadas suficientes para uma rodada.")
      return [round.options]
    }
    // Every checklist field must stay available; novelty cannot hide a missing-data answer.
    if (mode === "caracteres") return [shuffle([...stories[item].fields, NONE])]
    const q = interviews[item]
    const acceptedPaths = q.paths ?? [{ subgroup: q.subgroup, group: q.group }]
    const names = [...new Set([...acceptedPaths.map((p) => p.subgroup), ...(q.alternatives ?? []), ...subgroups])].filter((s) => s !== NO_SUBGROUP)
    return [
      chooseOptions([q.term], [...(q.acceptedTerms ?? []), ...interviewTerms], (text) => alternativeId("anamnese:interrogatorio:0", text), 4),
      chooseOptions([q.subgroup, NO_SUBGROUP], names, (text) => alternativeId("anamnese:interrogatorio:1", text), 4),
      chooseOptions([q.group], [...acceptedPaths.map((p) => p.group), ...mainGroups], (text) => alternativeId("anamnese:interrogatorio:2", text), 4),
    ]
  }, [mode, order, index])
  const options = questionOptions[stage]
  const expected = mode === "antecedentes" ? options.filter((option) => group.answers.includes(option)) : mode === "caracteres" ? story.missing.length ? story.missing : [NONE] : []

  useEffect(() => {
    if (!finished) recordExposure([questionId(order[index])], [], `${presentationId}:${index}:question`)
  }, [mode, order, index, finished, presentationId])
  useEffect(() => {
    if (!finished && !answered && !(mode === "caracteres" && !read)) {
      recordExposure([], options.map((text) => alternativeId(mode === "caracteres" && !story.id.startsWith("prototype-v1:") ? `anamnese:caracteres:${story.groupId}` : `anamnese:${mode}:${stage}`, mode === "caracteres" ? story.fieldKeys[text] ?? text : text)), `${presentationId}:${index}:options:${stage}`)
    }
  }, [mode, index, stage, options, read, answered, finished, presentationId])

  const record = (points: number) => {
    answeredRef.current = true
    scoreRef.current += points
    setDelta(points); setScore(scoreRef.current); setAnswered(true)
    window.scrollTo({ top: 0, behavior: "instant" })
  }
  const grade = (timeout = false) => {
    if (answeredRef.current) return
    setTimedOut(timeout)
    record(scoreSelections(picksRef.current, mode === "antecedentes" ? expected : story.missing))
  }

  useEffect(() => {
    if (mode !== "caracteres" || !read || answered || finished) return
    let disposed = false
    if (activeSince.current === null && !document.hidden) activeSince.current = performance.now()
    const tick = () => {
      if (disposed || answeredRef.current) return true
      const now = performance.now()
      if (activeSince.current !== null) remaining.current = Math.max(0, remaining.current - (now - activeSince.current))
      activeSince.current = document.hidden ? null : now
      setSeconds(Math.ceil(remaining.current / 1000))
      setPaused(document.hidden)
      if (remaining.current <= 0) { grade(true); return true }
      return false
    }
    settleTimer.current = tick
    const visibility = () => { tick() }
    document.addEventListener("visibilitychange", visibility)
    const timer = window.setInterval(tick, 100)
    return () => {
      disposed = true
      settleTimer.current = () => false
      activeSince.current = null
      window.clearInterval(timer)
      document.removeEventListener("visibilitychange", visibility)
    }
    // Each question installs its own clock; picks are read synchronously from refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, read, answered, finished, index])

  const toggle = (value: string) => {
    if (answeredRef.current || (mode === "caracteres" && settleTimer.current())) return
    const previous = picksRef.current
    const next = mode === "interrogatorio" ? [value] : value === NONE ? previous.includes(NONE) ? [] : [NONE]
      : previous.includes(value) ? previous.filter((s) => s !== value) : [...previous.filter((s) => s !== NONE), value]
    picksRef.current = next; setSelected(next)
  }
  const confirmStage = () => {
    if (answeredRef.current || stageRef.current !== stage || !picksRef.current.length) return
    const choices = [...stageAnswers, picksRef.current[0]]
    setStageAnswers(choices)
    picksRef.current = []; setSelected([])
    stageRef.current += 1
    window.scrollTo({ top: 0, behavior: "instant" })
    if (stage < 2) setStage(stage + 1)
    else record(scoreInterview(choices, terms, paths, interview.alternatives))
  }
  const next = () => {
    if (!answeredRef.current || sent.current) return
    answeredRef.current = false
    if (index + 1 === length) {
      sent.current = true; setFinished(true); onComplete?.(mode, scoreRef.current); return
    }
    picksRef.current = []; stageRef.current = 0; remaining.current = 20_000
    setIndex(index + 1); setSelected([]); setAnswered(false); setRead(false); setSeconds(20); setPaused(false)
    setStage(0); setStageAnswers([]); setDelta(0); setTimedOut(false)
    window.scrollTo({ top: 0, behavior: "instant" })
  }
  const stageScores = answered && mode === "interrogatorio" ? [
    terms.includes(stageAnswers[0]) ? 10 : -5,
    paths.some((p) => p.subgroup === stageAnswers[1]) ? 10 : interview.alternatives?.includes(stageAnswers[1]) ? 5 : -5,
    (() => { const matching = paths.filter((p) => p.subgroup === stageAnswers[1]); return (matching.length ? matching : paths).some((p) => p.group === stageAnswers[2]) ? 10 : -5 })(),
  ] : []
  const debug = answered && debugEnabled && !finished ? <QuestionDebug key={index}>
    <p><strong>Questão:</strong> {mode} · exemplo {order[index] + 1} · posição {index + 1}/{length}</p>
    {(mode === "caracteres" && story.provenance !== undefined) || (mode === "interrogatorio" && interview.provenance !== undefined) ? <p><strong>Referência da versão congelada:</strong> {mode === "caracteres" ? story.sourceLabel : interview.sourceLabel}. Localizador, evidências e dados de revisão disponíveis abaixo. Revisão docente/clínica pendente.</p> : <p><strong>Referência declarada no protótipo:</strong> {mode === "antecedentes" ? group.source : mode === "caracteres" ? "Caracteres propedêuticos dos principais sintomas, p. 1" : `Interrogatório complementar, p. ${interview.page}`}. Documento original, edição, autoria, URL e conferência da página: não disponíveis neste componente.</p>}
    <p><strong>Enunciado:</strong> {mode === "antecedentes" ? group.name : mode === "caracteres" ? story.text : interview.story}</p>
    {mode === "caracteres" && <><p><strong>Identificador e grupo:</strong> {story.id} · {story.groupLabel}</p>{story.provenance !== undefined && <details><summary>Fonte, evidências e revisão disponíveis</summary><p className="mt-2 text-xs">Rótulos em sourceLabel são transcrição arquivística da fonte e podem conter imprecisões; não são recomendações ou alternativas do jogo.</p><pre className="mt-2 whitespace-pre-wrap text-xs">{JSON.stringify(story.provenance, null, 2)}</pre></details>}</>}
    <p><strong>Respostas aceitas:</strong> {mode === "interrogatorio" ? terms.join(", ") : expected.join(", ")}</p>
    {mode === "interrogatorio" && <><p><strong>Identificador:</strong> {interview.id}</p><p><strong>Caminhos aceitos:</strong> {paths.map((p) => `${p.subgroup} → ${p.group}`).join("; ")}</p><p><strong>Subgrupos em outro contexto (+5):</strong> {interview.alternatives?.join(", ") || "Nenhum registrado neste exemplo."}</p>{interview.provenance !== undefined && <details><summary>Fonte, evidências e revisão disponíveis</summary><pre className="mt-2 whitespace-pre-wrap text-xs">{JSON.stringify(interview.provenance, null, 2)}</pre></details>}</>}
    <p><strong>Sua resposta:</strong> {(mode === "interrogatorio" ? stageAnswers : selected).join(" → ") || "Em branco"} · {signed(delta)} pontos{timedOut ? " · tempo esgotado" : ""}.</p>
    <p><strong>Opções e ordem:</strong> {questionOptions.map((items) => items.join(" / ")).join(" → ")}</p>
    <p><strong>Critério:</strong> {mode === "interrogatorio" ? "+10 por etapa aceita; −5 por etapa incorreta; +5 somente para subgrupo alternativo registrado. O grupo considera os caminhos compatíveis com o subgrupo aceito." : "+10 por seleção correta; −5 por incorreta; 0 por omissão. Em branco = não respondida. Nenhum dado ausente é exclusivo."}</p>
    <p><strong>Proveniência:</strong> {(mode === "caracteres" && story.provenance !== undefined) || (mode === "interrogatorio" && interview.provenance !== undefined) ? "História sintética de um protótipo revisado por modelo. Dados disponíveis preservados na inspeção acima; campos não informados permanecem desconhecidos. Isso não estabelece aprovação clínica ou diagnóstico." : "Exemplos demonstrativos já presentes no componente. Modelo, prompt, data de geração, responsável e revisão clínica/editorial: não registrados. A referência declarada não comprova validação do cenário."}</p>
  </QuestionDebug> : undefined
  const footer = finished ? <StudyFooter label="Jogar novamente" onClick={onRestart} secondary={<Button variant="outline" className="h-12 rounded-[10px]" onClick={onBack}>Biblioteca</Button>} />
    : answered ? <StudyFooter label={index + 1 === length ? "Concluir" : "Próxima questão"} onClick={next} debug={debug} />
    : mode === "caracteres" && !read ? <StudyFooter label="Terminei de ler" onClick={() => { if (!read) { activeSince.current = document.hidden ? null : performance.now(); setRead(true) } }} />
    : mode === "interrogatorio" ? <StudyFooter label="Continuar" onClick={confirmStage} disabled={!selected.length} />
    : <StudyFooter label="Confirmar resposta" onClick={() => { if (!settleTimer.current()) grade() }} />

  return <StudyPage footer={footer}>
    <StudyHeader onBack={onBack} label={`Anamnese / ${finished ? "Resultado" : mode === "antecedentes" ? "Antecedentes" : mode === "caracteres" ? "Caracteres" : "Interrogatório"}`} trailing={`${score} pts`} />
    <Progress value={finished ? 100 : ((index + (answered ? 1 : 0)) / length) * 100} className="mb-3 h-1" />
    <p className="mb-4 text-xs font-bold uppercase tracking-[.08em] text-primary">{finished ? "Rodada concluída" : `${index + 1} / ${length}${answered ? " · Feedback" : ""}`}</p>
    {finished ? <><h1 className="text-3xl font-bold tracking-tight">Rodada concluída</h1><p className="mt-3 text-lg">{score} pontos</p><p className="mt-2 text-sm text-muted-foreground">Você concluiu esta rodada de estudo.</p></>
    : answered ? <div className="space-y-3">
      <h1 className="text-[28px] font-bold tracking-tight">{mode !== "interrogatorio" && !selected.length ? "Não respondida" : `${signed(delta)} pontos`}</h1>
      <p className="text-[15px] leading-6 text-muted-foreground">{timedOut ? "Tempo esgotado. Consideramos a seleção feita até o limite." : mode === "interrogatorio" ? "Veja como o contexto orienta a classificação." : "Confira sua seleção e o que ficou faltando."}</p>
      {mode === "interrogatorio" ? <>
        {["Termo técnico", "Subgrupo", "Grupo"].map((label, i) => <FeedbackCard key={label} label={`${label} · ${signed(stageScores[i])}`} correct={stageScores[i] > 0} title={stageAnswers[i]}>
          {stageScores[i] === 5 ? <p>Sua escolha está registrada como associação possível em outro contexto, por isso recebe +5. Neste exemplo, o caminho esperado é {paths.map((p) => `${p.subgroup} → ${p.group}`).join(" ou ")}.</p> : stageScores[i] < 0 ? <p>Resposta aceita: {i === 0 ? terms.join(" ou ") : i === 1 ? [...new Set(paths.map((p) => p.subgroup))].join(" ou ") : (() => { const matching = paths.filter((p) => p.subgroup === stageAnswers[1]); return [...new Set((matching.length ? matching : paths).map((p) => p.group))].join(" ou ") })()}.</p> : <p>Resposta aceita neste roteiro.</p>}
        </FeedbackCard>)}
        <blockquote className="rounded-xl bg-card p-4 text-[15px] leading-7">“{interview.story}”</blockquote>
        {interview.contextExplanation && <p className="text-sm leading-6 text-muted-foreground">{interview.contextExplanation}</p>}
        <p className="text-xs leading-5 text-muted-foreground">Classificação segundo a posição no PDF, não um diagnóstico. +10 por etapa aceita, −5 por incorreta; +5 para associação alternativa registrada.</p>
      </> : <>
        <FeedbackCard label="Selecionadas corretamente · +10 cada" title={selected.filter((s) => expected.includes(s)).join(", ") || "Nenhuma"} />
        <FeedbackCard label="Selecionadas incorretamente · −5 cada" correct={false} title={selected.filter((s) => !expected.includes(s)).join(", ") || "Nenhuma"} />
        <FeedbackCard label="Não selecionadas · 0 pontos" title={expected.filter((s) => !selected.includes(s)).join(", ") || "Nenhuma"} />
        {mode === "caracteres" && <><p className="text-sm leading-6 text-muted-foreground">{story.context}</p><h2 className="pt-2 font-semibold">Releia a história</h2><p className="whitespace-pre-line rounded-xl bg-card p-4 text-[15px] leading-7">{story.text}</p></>}
      </>}
    </div> : <>
      {mode === "caracteres" && <p className="mb-2 text-xs font-bold uppercase tracking-[.08em] text-primary">{story.groupLabel}</p>}
      <h1 className="text-[29px] leading-tight font-bold tracking-tight">{mode === "antecedentes" ? group.name : mode === "caracteres" ? read ? "O que ficou faltando?" : "Leia a história clínica" : stage === 0 ? "Qual é o termo técnico?" : stage === 1 ? "Qual é o subgrupo?" : "Qual é o grupo principal?"}</h1>
      <p className="mt-3 text-[15px] leading-6 text-muted-foreground">{mode === "antecedentes" ? "Selecione as doenças associadas a este grupo. +10 por acerto, −5 por erro; omissões valem 0." : mode === "caracteres" ? read ? "Selecione todos os dados ausentes. +10 por acerto, −5 por erro; omissões valem 0." : "Observe os detalhes. Ao terminar, a história será ocultada e você terá 20 segundos de tempo ativo para responder." : `Etapa ${stage + 1} de 3. Escolha uma opção e continue. O feedback aparece ao final das três etapas.`}</p>
      {mode === "interrogatorio" && <blockquote className="my-5 rounded-xl bg-card p-4 text-[17px] leading-7">“{interview.story}”</blockquote>}
      {mode === "caracteres" && !read ? <p className="mt-5 whitespace-pre-line rounded-xl bg-card p-5 text-[17px] leading-8">{story.text}</p> : <>
        {mode === "caracteres" && <div className="mt-5 flex items-center justify-between text-sm font-bold text-primary"><span>HISTÓRIA OCULTA{paused ? " · Pausado" : ""}</span><span className="flex items-center gap-1 tabular-nums" role="timer" aria-label="Tempo restante"><Clock3 className="size-4" />00:{String(seconds).padStart(2, "0")}</span></div>}
        <div className={`mt-5 grid gap-2.5 ${mode === "antecedentes" ? "grid-cols-2" : ""}`} role="group" aria-label={mode === "interrogatorio" ? `Etapa ${stage + 1}` : "Selecione as respostas"}>
          {options.map((option) => <button key={option} type="button" aria-pressed={selected.includes(option)} onClick={() => toggle(option)} className={`flex min-h-12 items-center gap-3 rounded-[9px] border px-3.5 py-3 text-left text-[15px] leading-5 focus-visible:outline-2 focus-visible:outline-primary ${selected.includes(option) ? "border-primary bg-secondary" : "border-[#D8DDD5] bg-card"}`}><span aria-hidden="true" className="shrink-0 text-primary">{selected.includes(option) ? "●" : "○"}</span>{option}</button>)}
        </div>
      </>}
    </>}
  </StudyPage>
}
