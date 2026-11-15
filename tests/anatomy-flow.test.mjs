import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import vm from "node:vm"
import ts from "typescript"

// Keep the existing anatomy modes covered while sharing the new study layout.
function mount(mode) {
  const values = [], answers = []
  const effects = []
  let cursor = 0, tree, advances = 0
  const jsx = (type, props) => ({ type, props: props ?? {} })
  const module = { exports: {} }
  const source = ts.transpileModule(readFileSync(new URL("../src/components/RoundScreen.tsx", import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText
  vm.runInNewContext(source, {
    module, exports: module.exports, window: { scrollTo() {} },
    require(name) {
      if (name === "react/jsx-runtime") return { jsx, jsxs: jsx }
      if (name === "react") return {
        useState(initial) {
          const i = cursor++
          if (!(i in values)) values[i] = initial
          return [values[i], (value) => { values[i] = value }]
        },
        useRef(initial) { return values[cursor++] ??= { current: initial } },
        useEffect(fn, deps) {
          const i = cursor++, previous = values[i]
          if (!previous || deps.some((dep, j) => !Object.is(dep, previous[j]))) { values[i] = deps; effects.push(fn) }
        },
      }
      if (name === "@/lib/sampling") return { recordExposure() {}, alternativeId: (scope, text) => `${scope}:${text}` }
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
  return {
    answers, advances: () => advances,
    find: (type) => nodes().filter((node) => node.type === type), text,
    click(node) { node.props.onClick(); render() },
  }
}

test("anatomy choice grades and advances only once even with a retained handler", () => {
  const app = mount("choice")
  const choice = app.find("button").find((node) => app.text(node) === "Tíbia")
  assert.equal(app.find("QuestionDebug").length, 0)
  app.click(choice); app.click(choice)
  assert.deepEqual(app.answers, [[true, "Tíbia"]])
  assert.equal(app.find("QuestionDebug").length, 1)
  const next = app.find("StudyFooter")[0]
  app.click(next); app.click(next)
  assert.equal(app.advances(), 1)
})

test("flashcard reveal does not score; self-grading cannot double-count", () => {
  const app = mount("flashcard")
  assert.equal(app.find("StudyFooter")[0].props.label, "Revelar resposta")
  app.click(app.find("StudyFooter")[0])
  assert.equal(app.answers.length, 0)
  assert.equal(app.find("QuestionDebug").length, 1)
  const correct = app.find("Button").find((node) => app.text(node).includes("Acertei"))
  app.click(correct); app.click(correct)
  assert.deepEqual(app.answers, [[true]])
  assert.equal(app.advances(), 1)
})
