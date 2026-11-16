import { test } from "node:test"
import assert from "node:assert/strict"
import { applyTheme, loadTheme } from "../src/lib/theme.ts"

function host({ broken = false } = {}) {
  const stored = new Map(), classes = new Set(), meta = { content: "#f5f3ee" }
  const set = (name, value) => Object.defineProperty(globalThis, name, { value, configurable: true, writable: true })
  set("localStorage", {
    getItem: (key) => { if (broken) throw new Error("blocked"); return stored.get(key) ?? null },
    setItem: (key, value) => { if (broken) throw new Error("blocked"); stored.set(key, value) },
  })
  set("document", {
    documentElement: { classList: { toggle: (name, on) => { if (on) classes.add(name); else classes.delete(name) } } },
    querySelector: () => ({ setAttribute: (_name, value) => { meta.content = value } }),
  })
  return { classes, meta }
}

test("theme starts light, and a chosen theme is painted and remembered", () => {
  const page = host()
  assert.equal(loadTheme(), "light")
  applyTheme("dark")
  assert.ok(page.classes.has("dark"))
  assert.notEqual(page.meta.content, "#f5f3ee")
  assert.equal(loadTheme(), "dark")
  applyTheme("light")
  assert.ok(!page.classes.has("dark"))
  assert.equal(page.meta.content, "#f5f3ee")
  assert.equal(loadTheme(), "light")
})

test("theme still switches when storage is blocked", () => {
  const page = host({ broken: true })
  assert.equal(loadTheme(), "light")
  applyTheme("dark")
  assert.ok(page.classes.has("dark"))
})
