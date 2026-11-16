import { useState } from "react"
import { BookOpen, ChevronRight, HeartPulse, MessageCircle, Moon, Sun } from "lucide-react"

import { applyTheme, loadTheme } from "@/lib/theme"

export type Subject = "anatomia" | "propedeutica" | "anamnese"

interface SubjectsScreenProps {
  onSelect: (subject: Subject) => void
  onLogoTap: () => void
  debugEnabled: boolean
  progress: Record<string, { rounds: number; points: number }>
}

const subjects = [
  { id: "anatomia", label: "Anatomia", description: "Atlas fotográfico, identificação e revisão", icon: BookOpen },
  { id: "propedeutica", label: "Propedêutica médica", description: "Regiões da superfície corporal", icon: HeartPulse },
  { id: "anamnese", label: "Anamnese", description: "Antecedentes, sintomas e escuta clínica", icon: MessageCircle },
] as const

const activityNames: Record<string, string> = {
  "anatomia:choice": "Anatomia · múltipla escolha",
  "anatomia:flashcard": "Anatomia · flashcard",
  "propedeutica:regioes": "Propedêutica · regiões corporais",
  "anamnese:antecedentes": "Anamnese · antecedentes",
  "anamnese:caracteres": "Anamnese · caracteres dos sintomas",
  "anamnese:interrogatorio": "Anamnese · interrogatório complementar",
}

export function SubjectsScreen({ onSelect, onLogoTap, debugEnabled, progress }: SubjectsScreenProps) {
  const [theme, setTheme] = useState(loadTheme)
  const dark = theme === "dark"
  function toggleTheme() {
    const next = dark ? "light" : "dark"
    applyTheme(next)
    setTheme(next)
  }
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 py-8 sm:px-8">
      <header className="mb-12 flex items-center justify-between">
        <button type="button" onClick={onLogoTap} className="text-xl font-bold tracking-tight" aria-label="AnatoMind, início">
          anatomind<span className="text-primary">.</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground max-[400px]:hidden">Seu espaço de estudo</span>
          <button type="button" onClick={toggleTheme} aria-pressed={dark} aria-label="Modo escuro" title={dark ? "Usar modo claro" : "Usar modo escuro"} className="grid size-11 place-items-center rounded-xl text-primary transition hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary">
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>
      </header>
      <section className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Aprenda um pouco por dia</p>
        <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight">O que vamos estudar?</h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">Uma disciplina por vez. Seu progresso fica salvo neste aparelho.</p>
      </section>
      <section aria-label="Disciplinas" className="border-t">
        {subjects.map(({ id, label, description, icon: Icon }) => {
          const total = Object.entries(progress).filter(([key]) => key.startsWith(`${id}:`)).reduce((sum, [, item]) => sum + item.rounds, 0)
          return (
            <button key={id} type="button" onClick={() => onSelect(id)} className="flex w-full items-center gap-4 border-b py-5 text-left transition hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-primary">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Icon className="size-5" /></span>
              <span className="min-w-0 flex-1"><span className="block font-semibold">{label}</span><span className="mt-1 block text-sm text-muted-foreground">{description}</span>{total > 0 && <span className="mt-1 block text-xs text-primary">{total} {total === 1 ? "rodada concluída" : "rodadas concluídas"}</span>}</span>
              <ChevronRight className="size-5 shrink-0 text-primary" />
            </button>
          )
        })}
      </section>
      {Object.keys(progress).length > 0 && <section className="mt-8" aria-label="Progresso por atividade">
        <h2 className="mb-3 text-sm font-semibold">Seu progresso</h2>
        <div className="space-y-2">{Object.entries(progress).map(([key, item]) => <div key={key} className="flex items-center justify-between gap-3 rounded-lg bg-card px-4 py-3 text-sm"><span>{activityNames[key] || key}</span><span className="shrink-0 text-right text-xs text-muted-foreground">{item.rounds} {item.rounds === 1 ? "rodada" : "rodadas"} · {item.points} pts</span></div>)}</div>
      </section>}
      <p className="mt-auto pt-10 text-xs leading-5 text-muted-foreground">Conteúdo de estudo • Progresso separado por atividade{debugEnabled ? " • Depuração ativada" : ""}</p>
    </div>
  )
}
