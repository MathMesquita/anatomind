import { useEffect, useRef, useState } from "react"
import { ChevronRight, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StudyPage, StudyHeader, StudyFooter, QuestionDebug, FeedbackCard } from "@/components/StudyLayout"
import { Progress } from "@/components/ui/progress"
import { NONE, NO_SUBGROUP, scoreInterview, scoreSelections, type InterviewPath } from "@/lib/anamnese"

type Props = { onBack: () => void; debugEnabled: boolean; onComplete?: (activity: string, score: number) => void }
type Mode = "library" | "antecedentes" | "caracteres" | "interrogatorio"
type Story = { text: string; missing: string[]; context: string }
type Interview = { story: string; term: string; subgroup: string; group: string; page: number; alternatives?: string[]; acceptedTerms?: string[]; paths?: InterviewPath[] }
const shuffle = <T,>(items: T[]): T[] => {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]] }
  return result
}

// Existing prototype references are declarations, not verified clinical provenance.
const distractors = ["Glaucoma", "Miopia", "Catarata", "Infarto", "TOC", "Depressão", "Ansiedade", "Epilepsia", "Enxaqueca", "AVE", "Diabetes", "Artrose", "Artrite reumatoide", "Osteoporose", "Pedra na vesícula", "Nefrolitíase"]
const groups = [
  { name: "Doenças respiratórias", answers: ["Pneumonia", "DPOC", "Asma", "Bronquite"], source: "Antecedentes Pessoais Patológicos, p. 1" },
  { name: "Doenças oculares", answers: ["Glaucoma", "Miopia", "Catarata"], source: "Antecedentes Pessoais Patológicos, p. 1" },
]
const eyeDistractors = ["Asma", "DPOC", "Bronquite", "Pneumonia", "Rinite", "TOC", "Depressão", "Ansiedade", "Epilepsia", "Enxaqueca", "AVE", "Diabetes", "Artrose", "Artrite reumatoide", "Osteoporose", "Nefrolitíase", "Pedra na vesícula"]
const characteristics = ["Localização", "Irradiação", "Qualidade/caráter", "Intensidade", "Duração", "Evolução", "Relação com funções orgânicas", "Fatores desencadeantes/agravantes", "Fatores atenuantes", "Manifestações concomitantes"]
const stories: Story[] = [
  { text: "Paciente relata dor lombar em aperto, intensidade 6/10, iniciada há três dias e que aumentou desde então. Nega relação com urinar ou evacuar.\n\nA dor piora ao caminhar e melhora com repouso. Nega febre ou outros sintomas associados.", missing: ["Irradiação"], context: "A história não informa se a dor se espalha. Negações explicitamente documentadas são informações presentes." },
  { text: "Paciente relata dor abdominal em cólica, 5/10, há dois dias, sem irradiação e estável desde o início. Informa que não percebe relação com refeições, urina ou evacuação.\n\nA dor piora com movimento e melhora com repouso. Nega outros sintomas associados.", missing: [], context: "O registro aborda todos os campos deste roteiro, incluindo a ausência de irradiação e de sintomas associados." },
  { text: "Paciente relata dor lombar em aperto há dois dias, que vem aumentando desde o início. Não percebe relação com refeições, urina ou evacuação.\n\nA dor piora ao caminhar e melhora com repouso. Nega outros sintomas associados.", missing: ["Irradiação", "Intensidade"], context: "O registro não informa a intensidade nem se a dor se espalha." },
]
const interviews: Interview[] = [
  { story: "Vejo dois objetos onde existe apenas um.", term: "Diplopia", subgroup: "Aparelho ocular", group: "Órgãos dos sentidos", page: 1 },
  { story: "Escuto um apito no ouvido mesmo quando está tudo silencioso.", term: "Zumbidos", subgroup: "Aparelho auditivo", group: "Órgãos dos sentidos", page: 2 },
  { story: "Meu nariz escorre e tenho coriza.", term: "Rinorreia", subgroup: "Nariz e seios paranasais", group: "Órgãos dos sentidos", page: 2 },
  { story: "Fico com falta de ar quando me deito e preciso me sentar para respirar melhor.", term: "Ortopneia", subgroup: NO_SUBGROUP, group: "Aparelho cardiovascular", page: 3 },
]
const subgroups = ["Aparelho ocular", "Aparelho auditivo", "Nariz e seios paranasais", "Distúrbios da consciência"]
const mainGroups = ["Órgãos dos sentidos", "Aparelho cardiovascular", "Aparelho respiratório", "Aparelho digestório"]


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
    <p role="note" className="mt-6 text-xs leading-5 text-muted-foreground">Biblioteca inicial: 2 grupos de doenças, 3 histórias de dor e 4 exemplos de interrogatório. Casos demonstrativos; revisão clínica e editorial não registrada.</p>
  </StudyPage>
}
function AnamneseRound({ mode, onBack, debugEnabled, onComplete, onRestart }: Props & { mode: Exclude<Mode, "library">; onRestart: () => void }) {
  const length = mode === "antecedentes" ? groups.length : mode === "caracteres" ? stories.length : interviews.length
  const [order] = useState(() => shuffle(Array.from({ length }, (_, i) => i)))
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
  const [roundOptions] = useState(() => order.map((item) => {
    if (mode === "antecedentes") return [shuffle([...groups[item].answers, ...(item === 0 ? distractors : eyeDistractors)])]
    if (mode === "caracteres") return [shuffle([...characteristics, NONE])]
    const q = interviews[item]
    const acceptedPaths = q.paths ?? [{ subgroup: q.subgroup, group: q.group }]
    const names = [...new Set([...acceptedPaths.map((p) => p.subgroup), ...(q.alternatives ?? []), ...subgroups])].filter((s) => s !== NO_SUBGROUP).slice(0, 3)
    return [
      shuffle([...new Set([q.term, ...(q.acceptedTerms ?? []), ...interviews.map((i) => i.term)])].slice(0, 4)),
      shuffle([...names, NO_SUBGROUP]),
      shuffle([...new Set([q.group, ...acceptedPaths.map((p) => p.group), ...mainGroups])].slice(0, 4)),
    ]
  }))
  const options = roundOptions[index][stage]
  const expected = mode === "antecedentes" ? group.answers : mode === "caracteres" ? story.missing.length ? story.missing : [NONE] : []

  const record = (points: number) => {
    answeredRef.current = true
    scoreRef.current += points
    setDelta(points); setScore(scoreRef.current); setAnswered(true)
    window.scrollTo({ top: 0, behavior: "instant" })
  }
  const grade = (timeout = false) => {
    if (answeredRef.current) return
    setTimedOut(timeout)
    record(scoreSelections(picksRef.current, mode === "antecedentes" ? group.answers : story.missing))
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
    <p><strong>Referência declarada no protótipo:</strong> {mode === "antecedentes" ? group.source : mode === "caracteres" ? "Caracteres propedêuticos dos principais sintomas, p. 1" : `Interrogatório complementar, p. ${interview.page}`}. Documento original, edição, autoria, URL e conferência da página: não disponíveis neste componente.</p>
    <p><strong>Enunciado:</strong> {mode === "antecedentes" ? group.name : mode === "caracteres" ? story.text : interview.story}</p>
    <p><strong>Respostas aceitas:</strong> {mode === "interrogatorio" ? terms.join(", ") : expected.join(", ")}</p>
    {mode === "interrogatorio" && <><p><strong>Caminhos aceitos:</strong> {paths.map((p) => `${p.subgroup} → ${p.group}`).join("; ")}</p><p><strong>Subgrupos em outro contexto (+5):</strong> {interview.alternatives?.join(", ") || "Nenhum registrado neste exemplo."}</p></>}
    <p><strong>Sua resposta:</strong> {(mode === "interrogatorio" ? stageAnswers : selected).join(" → ") || "Em branco"} · {signed(delta)} pontos{timedOut ? " · tempo esgotado" : ""}.</p>
    <p><strong>Opções e ordem:</strong> {roundOptions[index].map((items) => items.join(" / ")).join(" → ")}</p>
    <p><strong>Critério:</strong> {mode === "interrogatorio" ? "+10 por etapa aceita; −5 por etapa incorreta; +5 somente para subgrupo alternativo registrado. O grupo considera os caminhos compatíveis com o subgrupo aceito." : "+10 por seleção correta; −5 por incorreta; 0 por omissão. Em branco = não respondida. Nenhum dado ausente é exclusivo."}</p>
    <p><strong>Proveniência:</strong> exemplos demonstrativos já presentes no componente. Modelo, prompt, data de geração, responsável e revisão clínica/editorial: não registrados. A referência declarada não comprova validação do cenário.</p>
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
    {finished ? <><h1 className="text-3xl font-bold tracking-tight">Rodada concluída</h1><p className="mt-3 text-lg">{score} pontos</p><p className="mt-2 text-sm text-muted-foreground">Você percorreu todos os exemplos desta atividade.</p></>
    : answered ? <div className="space-y-3">
      <h1 className="text-[28px] font-bold tracking-tight">{mode !== "interrogatorio" && !selected.length ? "Não respondida" : `${signed(delta)} pontos`}</h1>
      <p className="text-[15px] leading-6 text-muted-foreground">{timedOut ? "Tempo esgotado. Consideramos a seleção feita até o limite." : mode === "interrogatorio" ? "Veja como o contexto orienta a classificação." : "Confira sua seleção e o que ficou faltando."}</p>
      {mode === "interrogatorio" ? <>
        {["Termo técnico", "Subgrupo", "Grupo"].map((label, i) => <FeedbackCard key={label} label={`${label} · ${signed(stageScores[i])}`} correct={stageScores[i] > 0} title={stageAnswers[i]}>
          {stageScores[i] === 5 ? <p>Sua escolha está registrada como associação possível em outro contexto, por isso recebe +5. Neste exemplo, o caminho esperado é {paths.map((p) => `${p.subgroup} → ${p.group}`).join(" ou ")}.</p> : stageScores[i] < 0 ? <p>Resposta aceita: {i === 0 ? terms.join(" ou ") : i === 1 ? [...new Set(paths.map((p) => p.subgroup))].join(" ou ") : (() => { const matching = paths.filter((p) => p.subgroup === stageAnswers[1]); return [...new Set((matching.length ? matching : paths).map((p) => p.group))].join(" ou ") })()}.</p> : <p>Resposta aceita neste roteiro.</p>}
        </FeedbackCard>)}
        <p className="text-xs leading-5 text-muted-foreground">Classificação do roteiro demonstrativo; não estabelece diagnóstico. +10 por etapa aceita, −5 por incorreta; +5 para associação alternativa registrada.</p>
      </> : <>
        <FeedbackCard label="Selecionadas corretamente · +10 cada" title={selected.filter((s) => expected.includes(s)).join(", ") || "Nenhuma"} />
        <FeedbackCard label="Selecionadas incorretamente · −5 cada" correct={false} title={selected.filter((s) => !expected.includes(s)).join(", ") || "Nenhuma"} />
        <FeedbackCard label="Não selecionadas · 0 pontos" title={expected.filter((s) => !selected.includes(s)).join(", ") || "Nenhuma"} />
        {mode === "caracteres" && <><p className="text-sm leading-6 text-muted-foreground">{story.context}</p><h2 className="pt-2 font-semibold">Releia a história</h2><p className="whitespace-pre-line rounded-xl bg-card p-4 text-[15px] leading-7">{story.text}</p></>}
      </>}
    </div> : <>
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
