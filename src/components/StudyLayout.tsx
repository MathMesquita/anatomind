import type { ReactNode } from "react"
import { ArrowLeft, Bug, X } from "lucide-react"
import { Dialog } from "radix-ui"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function StudyPage({ children, footer, className }: { children: ReactNode; footer?: ReactNode; className?: string }) {
  return <div className={cn("study-page mx-auto w-full max-w-2xl px-6 pt-5", footer && "study-page-with-footer", className)}>
    {children}
    {footer && <div className="study-footer" data-testid="study-footer"><div className="mx-auto flex w-full max-w-2xl items-center gap-2.5 px-6">{footer}</div></div>}
  </div>
}

export function StudyFooter({ label, onClick, disabled = false, debug, secondary }: {
  label: string; onClick: () => void; disabled?: boolean; debug?: ReactNode; secondary?: ReactNode
}) {
  return <>{secondary}<Button type="button" onClick={onClick} disabled={disabled} className="h-12 min-w-0 flex-1 rounded-[10px] text-[15px] font-semibold">{label}</Button>{debug}</>
}

export function StudyHeader({ onBack, label, trailing }: { onBack: () => void; label: string; trailing?: ReactNode }) {
  return <header className="mb-6 flex items-center justify-between gap-3">
    <button type="button" onClick={onBack} className="flex min-h-11 min-w-0 items-center gap-2 text-left text-xs font-bold uppercase tracking-[.08em] text-primary"><ArrowLeft className="size-4 shrink-0" /><span>{label}</span></button>
    {trailing && <div className="shrink-0 text-sm font-medium tabular-nums">{trailing}</div>}
  </header>
}

export function QuestionDebug({ children }: { children: ReactNode }) {
  return <Dialog.Root>
    <Dialog.Trigger asChild><Button type="button" variant="outline" size="icon" className="size-12 shrink-0 rounded-[10px] border-[#B9C9BA] text-primary" aria-label="Inspecionar contexto da questão"><Bug className="size-[22px]" /></Button></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
      <Dialog.Content className="fixed inset-x-4 top-1/2 z-50 mx-auto max-h-[85dvh] max-w-xl -translate-y-1/2 overflow-y-auto rounded-2xl bg-background p-6 shadow-xl focus:outline-none">
        <div className="mb-2 flex items-start justify-between gap-4"><Dialog.Title className="text-xl font-semibold">Contexto da questão</Dialog.Title><Dialog.Close asChild><Button type="button" variant="ghost" size="icon" aria-label="Fechar contexto"><X className="size-5" /></Button></Dialog.Close></div>
        <Dialog.Description className="mb-5 text-sm leading-6 text-muted-foreground">Fontes, respostas aceitas e informações de revisão.</Dialog.Description>
        <div className="space-y-4 text-sm leading-6">{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}

export function FeedbackCard({ label, title, children, correct = true }: { label: string; title?: string; children?: ReactNode; correct?: boolean }) {
  return <section className={cn("rounded-xl p-[18px]", correct ? "bg-secondary" : "bg-[#F1E9E4]")} aria-live="polite">
    <p className={cn("text-xs font-bold uppercase tracking-[.06em]", correct ? "text-primary" : "text-[#86594C]")}>{label}</p>
    {title && <h2 className="mt-2 text-lg font-semibold">{title}</h2>}
    {children && <div className="mt-2 text-sm leading-6 text-muted-foreground">{children}</div>}
  </section>
}
