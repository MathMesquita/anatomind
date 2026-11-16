import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import vm from "node:vm"
import ts from "typescript"
import { loadCountdown } from "./countdown-host.mjs"

// Keep the existing anatomy modes covered while sharing the new study layout.
function mount(mode) {
  const values = [], answers = [], shown = []
  const effects = [], timers = new Set()
  let cursor = 0, tree, advances = 0, now = 0
  const jsx = (type, props) => ({ type, props: props ?? {} })
  const module = { exports: {} }
  const source = ts.transpileModule(readFileSync(new URL("../src/components/RoundScreen.tsx", import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const react = {
    useState(initial) {
      const i = cursor++
      if (!(i in values)) values[i] = initial
      return [values[i], (value) => { values[i] = typeof value === "function" ? value(values[i]) : value }]
    },
    useRef(initial) { return values[cursor++] ??= { current: initial } },
    useEffect(fn, deps) {
      const i = cursor++, previous = values[i]
      if (previous && !deps.some((dep, j) => !Object.is(dep, previous.deps[j]))) return
      const slot = values[i] = { deps, cleanup: previous?.cleanup }
      effects.push(() => { slot.cleanup?.(); slot.cleanup = fn() })
    },
  }
  // The real countdown hook runs on this fake clock and these fake timers.
  const globals = {
    document: { hidden: false, addEventListener() {}, removeEventListener() {} },
    performance: { now: () => now },
    window: { scrollTo() {}, setInterval: (fn) => { timers.add(fn); return fn }, clearInterval: (fn) => timers.delete(fn) },
  }
  const countdown = loadCountdown(react, globals)
  vm.runInNewContext(source, {
    module, exports: module.exports, ...globals,
    require(name) {
      if (name === "react/jsx-runtime") return { jsx, jsxs: jsx }
      if (name === "react") return react
      if (name === "@/lib/countdown") return countdown
      if (name === "@/lib/sampling") return {
        recordExposure(_questions, alternatives) { shown.push(...alternatives) },
        alternativeId: (scope, text) => `${scope}:${text}`,
      }
      return new Proxy({}, { get: (_, key) => key })
    },
  })
  const props = {
    mode, index: 0, total: 2, score: 0, streak: 0, debugEnabled: true, presentationId: "round-1:0",
    question: { plate: { id: "plate-1", page: 1 }, marker: { term: "Tíbia", slug: "tibia", x: .5, y: .5 }, options: ["Tíbia", "Fêmur", "Rádio", "Ulna"] },
    onAnswer: (...args) => answers.push(args), onNext: () => { advances++ }, onQuit() {},
  }
  function render() { cursor = 0; tree = module.exports.RoundScreen(props); while (effects.length) effects.shift()() }
  function nodes() {
    const found = []
    function visit(node) {
      if (Array.isArray(node)) return node.forEach(visit)
      if (!node || typeof node !== "object") return
      if (node.type) found.push(node)
      for (const key of ["children", "footer", "debug"]) visit(node.props?.[key])
    }
    visit(tree); return found
  }
  const text = (node) => Array.isArray(node) ? node.map(text).join("") : node && typeof node === "object" ? text(node.props?.children) : node == null ? "" : String(node)
  render()
  const find = (type) => nodes().filter((node) => node.type === type)
  return {
    answers, shown, advances: () => advances, find, text,
    option: (name) => find("button").find((node) => text(node) === name),
    click(node) { node.props.onClick(); render() },
    /** Moves the clock and lets the timers fire. */
    advance(ms) { now += ms; for (const fn of timers) fn(); render() },
    /** Moves the clock only, as if no timer tick had run yet. */
    wait(ms) { now += ms },
  }
}

test("anatomy choice hides the options until asked, then grades and advances only once", () => {
  const app = mount("choice")
  assert.equal(app.option("Tíbia"), undefined)
  assert.deepEqual(app.shown, [], "hidden options do not count as shown")
  assert.equal(app.find("CountdownRing").length, 0)
  assert.equal(app.find("StudyFooter")[0].props.label, "Ver opções")
  app.click(app.find("StudyFooter")[0])
  assert.equal(app.shown.length, 4)
  assert.equal(app.find("StudyFooter").length, 0)
  assert.equal(app.find("CountdownRing")[0].props.seconds, 10)
  const choice = app.option("Tíbia")
  assert.equal(app.find("QuestionDebug").length, 0)
  app.advance(4_000)
  app.click(choice); app.click(choice)
  app.advance(60_000) // an answered question no longer times out
  assert.deepEqual(app.answers, [[true, "Tíbia"]])
  assert.equal(app.find("QuestionDebug").length, 1)
  const next = app.find("StudyFooter")[0]
  app.click(next); app.click(next)
  assert.equal(app.advances(), 1)
})

test("anatomy choice counts ten seconds without an answer as a miss, once", () => {
  const app = mount("choice")
  app.click(app.find("StudyFooter")[0])
  const choice = app.option("Tíbia")
  app.advance(9_999)
  assert.equal(app.find("CountdownRing")[0].props.seconds, 1)
  assert.deepEqual(app.answers, [])
  app.advance(1)
  assert.deepEqual(app.answers, [[false]])
  assert.equal(app.text(app.find("h1")[0]), "Tempo esgotado!")
  assert.equal(app.option("Tíbia"), undefined)
  app.click(choice) // retained handler cannot answer after the time is up
  app.advance(60_000)
  assert.deepEqual(app.answers, [[false]])
  const next = app.find("StudyFooter")[0]
  app.click(next); app.click(next)
  assert.equal(app.advances(), 1)
})

test("anatomy choice refuses a tap that lands after the limit but before the next tick", () => {
  const app = mount("choice")
  app.click(app.find("StudyFooter")[0])
  const choice = app.option("Tíbia")
  app.wait(10_000)
  app.click(choice)
  assert.deepEqual(app.answers, [[false]])
  assert.equal(app.text(app.find("h1")[0]), "Tempo esgotado!")
})

test("flashcard reveal does not score; self-grading cannot double-count", () => {
  const app = mount("flashcard")
  assert.equal(app.find("StudyFooter")[0].props.label, "Revelar resposta")
  app.click(app.find("StudyFooter")[0])
  assert.equal(app.answers.length, 0)
  assert.equal(app.find("QuestionDebug").length, 1)
  assert.equal(app.find("CountdownRing").length, 0)
  const correct = app.find("Button").find((node) => app.text(node).includes("Acertei"))
  app.click(correct); app.click(correct)
  assert.deepEqual(app.answers, [[true]])
  assert.equal(app.advances(), 1)
})
