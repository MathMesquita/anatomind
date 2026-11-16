import { useEffect, useRef, useState } from "react"

/** Answer options stay on screen this long after the player asks to see them. */
export const OPTIONS_MS = 10_000

/**
 * Counts visible-tab time while `runKey` is set and starts over whenever it changes.
 * `settle()` checks the clock right now and returns true when time is already up,
 * so a late tap cannot slip in between two ticks.
 */
export function useCountdown(runKey: string | null, durationMs: number, onExpire: () => void) {
  const [shown, setShown] = useState({ key: runKey, seconds: Math.ceil(durationMs / 1000), paused: false })
  const expire = useRef(onExpire)
  const check = useRef<() => boolean>(() => false)
  useEffect(() => { expire.current = onExpire }, [onExpire])
  useEffect(() => {
    if (runKey === null) return
    let remaining = durationMs, done = false
    let since: number | null = document.hidden ? null : performance.now()
    const tick = () => {
      if (done) return true
      const now = performance.now()
      if (since !== null) remaining = Math.max(0, remaining - (now - since))
      since = document.hidden ? null : now
      const seconds = Math.ceil(remaining / 1000), paused = document.hidden
      setShown((current) => current.key === runKey && current.seconds === seconds && current.paused === paused ? current : { key: runKey, seconds, paused })
      if (remaining > 0) return false
      done = true
      expire.current()
      return true
    }
    check.current = tick
    document.addEventListener("visibilitychange", tick)
    const timer = window.setInterval(tick, 100)
    return () => {
      done = true
      check.current = () => false
      window.clearInterval(timer)
      document.removeEventListener("visibilitychange", tick)
    }
  }, [runKey, durationMs])
  const live = shown.key === runKey ? shown : { seconds: Math.ceil(durationMs / 1000), paused: false }
  return { seconds: live.seconds, paused: live.paused, settle: () => check.current() }
}
