import { useEffect, useState } from "react"
import { Loader2, Search, X } from "lucide-react"

import { PLATE_URL, type Marker, type Plate } from "@/lib/atlas"
import { cn } from "@/lib/utils"

interface PlateViewProps {
  plate: Plate
  marker: Marker
  /** Dim the marker once the answer is in, so the label can take over. */
  settled?: boolean
  /** Share of the viewport height the photograph may take. */
  maxHeight?: string
}

/**
 * The photograph with its target marked.
 *
 * Marker positions are stored as fractions of the plate, so the dot rides the
 * image at any size without a layout measurement. Zoom scales the image about
 * the marker itself, which keeps the structure under the dot on screen -- the
 * dense plates put thirty structures inside a couple of centimetres.
 */
export function PlateView({
  plate,
  marker,
  settled,
  maxHeight = "44dvh",
}: PlateViewProps) {
  const [zoomed, setZoomed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setZoomed(false)
    setLoaded(false)
  }, [plate.id, marker.slug])

  const origin = `${marker.x * 100}% ${marker.y * 100}%`
  const ratio = plate.width / plate.height

  return (
    <div className="relative overflow-hidden rounded-xl border bg-stone-100 dark:bg-stone-900">
      {/*
        The frame is sized to the photograph's own aspect ratio and capped by
        viewport height, so a portrait plate cannot push the answers off screen.
        Sizing the box rather than letterboxing inside it keeps the marker's
        percentage coordinates exact -- no measurement, no drift.
      */}
      <div
        className="relative mx-auto"
        style={{
          aspectRatio: `${plate.width} / ${plate.height}`,
          width: `min(100%, calc(${ratio.toFixed(4)} * ${maxHeight}))`,
        }}
      >
        {!loaded && (
          <div className="absolute inset-0 grid place-items-center">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        )}

        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{ transform: `scale(${zoomed ? 2.4 : 1})`, transformOrigin: origin }}
        >
          <img
            src={PLATE_URL(plate.image)}
            alt={plate.caption || plate.region || "Prancha do atlas"}
            onLoad={() => setLoaded(true)}
            className={cn(
              "size-full object-contain transition-opacity duration-300",
              loaded ? "opacity-100" : "opacity-0",
            )}
            draggable={false}
          />
          <span
            className={cn(
              "marker-dot absolute z-10 block rounded-full border-2 border-white shadow-md",
              "-translate-x-1/2 -translate-y-1/2",
              settled && "opacity-70",
            )}
            style={{
              left: `${marker.x * 100}%`,
              top: `${marker.y * 100}%`,
              background: "var(--marker)",
              // Counter-scale so the dot stays the same size on screen.
              width: `${(zoomed ? 14 / 2.4 : 14)}px`,
              height: `${(zoomed ? 14 / 2.4 : 14)}px`,
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => setZoomed((on) => !on)}
          aria-label={zoomed ? "Reduzir" : "Ampliar sobre o marcador"}
          className={cn(
            "absolute right-2 top-2 z-20 grid size-9 place-items-center rounded-lg",
            "bg-background/85 text-foreground shadow-sm backdrop-blur",
            "transition hover:bg-background active:scale-95",
          )}
        >
          {zoomed ? <X className="size-4" /> : <Search className="size-4" />}
        </button>
      </div>

      {(plate.caption || plate.region) && (
        <p className="border-t bg-background/60 px-3 py-2 text-xs text-muted-foreground">
          {[plate.region, plate.caption].filter(Boolean).join(" · ")}
        </p>
      )}
    </div>
  )
}
