import { useRef, useState, type PointerEvent } from "react"
import { Maximize2, Minus, Plus, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { regionViews, type RegionQuestion } from "@/data/regions"

const limit = (value: number, lower: number, upper: number) => Math.min(upper, Math.max(lower, value))

export function RegionDiagram({ question }: { question: RegionQuestion }) {
  const crop = regionViews[question.view]
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const pinch = useRef<number | null>(null)
  const frame = useRef<HTMLDivElement>(null)

  const changeZoom = (value: number) => {
    const next = limit(value, 1, 3)
    setZoom(next)
    if (next === 1) setPan({ x: 0, y: 0 })
  }
  const pointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target instanceof Element && event.target.closest("button")) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    event.currentTarget.setPointerCapture(event.pointerId)
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      pinch.current = Math.hypot(a.x - b.x, a.y - b.y)
    }
  }
  const pointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const previous = pointers.current.get(event.pointerId)
    if (!previous) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      const distance = Math.hypot(a.x - b.x, a.y - b.y)
      if (pinch.current && pinch.current > 0) changeZoom(zoom * distance / pinch.current)
      pinch.current = distance
    } else if (zoom > 1 && frame.current) {
      const bounds = frame.current.getBoundingClientRect()
      setPan((current) => ({
        x: limit(current.x + event.clientX - previous.x, -bounds.width * (zoom - 1), bounds.width * (zoom - 1)),
        y: limit(current.y + event.clientY - previous.y, -bounds.height * (zoom - 1), bounds.height * (zoom - 1)),
      }))
    }
  }
  const pointerUp = (event: PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId)
    pinch.current = null
  }

  return <figure className="relative -mx-6 bg-white px-6 py-3" aria-label={crop.title}>
    <div ref={frame} className="relative mx-auto overflow-hidden" style={{ width: `min(100%, ${crop.cropWidth / crop.cropHeight * 300}px, ${crop.cropWidth / crop.cropHeight * 38}dvh)`, aspectRatio: `${crop.cropWidth} / ${crop.cropHeight}`, touchAction: "none", cursor: zoom > 1 ? "grab" : "default" }} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp}>
      <div className="absolute inset-0" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transformOrigin: `${question.x}% ${question.y}%` }}>
        <img src={`${import.meta.env.BASE_URL}regions/${crop.image}`} alt={`Diagrama original numerado — ${crop.title.toLowerCase()}`} draggable={false} className="pointer-events-none absolute max-w-none select-none" style={{ width: `${crop.width / crop.cropWidth * 100}%`, height: `${crop.height / crop.cropHeight * 100}%`, left: `${-crop.left / crop.cropWidth * 100}%`, top: `${-crop.top / crop.cropHeight * 100}%` }} />
        <span role="img" aria-label={`Ponto ao lado do número ${question.number}`} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-white bg-[#D94040]" style={{ left: `${question.x}%`, top: `${question.y}%`, width: `${9 / zoom}px`, height: `${9 / zoom}px`, borderWidth: `${2 / zoom}px` }} />
      </div>
    </div>
    <div className="absolute right-3 top-3 flex gap-1 rounded-lg border bg-white/95 p-1 text-primary shadow-sm">
      <Button type="button" variant="ghost" size="icon-sm" disabled={zoom <= 1} onClick={() => changeZoom(zoom - .5)} aria-label="Diminuir imagem"><Minus /></Button>
      <Button type="button" variant="ghost" size="icon-sm" disabled={zoom >= 3} onClick={() => changeZoom(zoom + .5)} aria-label="Ampliar imagem"><Plus /></Button>
      {zoom > 1 && <Button type="button" variant="ghost" size="icon-sm" onClick={() => { changeZoom(1); setPan({ x: 0, y: 0 }) }} aria-label="Restaurar imagem"><RotateCcw /></Button>}
    </div>
    <figcaption className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><Maximize2 className="size-3" />{crop.title} · {Math.round(zoom * 100)}%{zoom > 1 && " · arraste para explorar"}</figcaption>
  </figure>
}
