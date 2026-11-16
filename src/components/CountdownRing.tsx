import { useEffect, useRef, type ReactNode } from "react"

/**
 * Round timer shown above the answer options (its children): the ring drains while the seconds
 * count down in the middle. On mount it scrolls the options into view, since the clock is already running.
 */
export function CountdownRing({ seconds, total, paused, children }: { seconds: number; total: number; paused: boolean; children?: ReactNode }) {
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => { box.current?.scrollIntoView({ block: "nearest", behavior: "smooth" }) }, [])
  return <div ref={box} className="scroll-mb-28 scroll-mt-4">
    <div className="mt-4 flex flex-col items-center gap-1" role="timer" aria-label={`Tempo restante: ${seconds} segundos`}>
      <div className="relative size-16">
        <svg viewBox="0 0 64 64" className="size-16 -rotate-90" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="none" strokeWidth="5" className="stroke-secondary" />
          <circle cx="32" cy="32" r="28" fill="none" strokeWidth="5" strokeLinecap="round" pathLength={100} strokeDasharray={100}
            className={`countdown-ring ${seconds <= 3 ? "stroke-[#86594C]" : "stroke-primary"}`}
            style={{ animationDuration: `${total}s`, animationPlayState: paused ? "paused" : "running" }} />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-xl font-bold tabular-nums">{seconds}</span>
      </div>
      {paused && <span className="text-xs font-bold uppercase tracking-[.08em] text-primary">Pausado</span>}
    </div>
    {children}
  </div>
}
