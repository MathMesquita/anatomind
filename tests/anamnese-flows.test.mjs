import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { createRequire } from "node:module"
import vm from "node:vm"
import ts from "typescript"
import * as scoring from "../src/lib/anamnese.ts"
import * as sampling from "../src/lib/sampling.ts"
import { sampleDiseaseOptions } from "../src/lib/disease-round.ts"
import { starterCharacteristicStories as starterStories } from "../src/data/characteristics.ts"

// Exercise the component's own handlers/effects with a deterministic hook host.
// Layout primitives are opaque: fixed positioning remains StudyLayout's contract.
const require = createRequire(import.meta.url)
function mount({ storyBank = starterStories } = {}) {
  let scope, cursor, tree, now = 0, dirty = false
  const scopes = new Map(), listeners = new Set(), timers = new Set(), completions = []
  const exposure = sampling.createExposureStore(null)
  const document = { hidden: false, addEventListener: (_, fn) => listeners.add(fn), removeEventListener: (_, fn) => listeners.delete(fn) }
  const hooks = {
    useState(initial) {
      const slot = cursor++, owner = scope
      if (!(slot in owner.values)) owner.values[slot] = typeof initial === "function" ? initial() : initial
      return [owner.values[slot], (value) => { owner.values[slot] = typeof value === "function" ? value(owner.values[slot]) : value; dirty = true }]
    },
    useRef(initial) {
      const slot = cursor++
      return scope.values[slot] ??= { current: initial }
    },
    useMemo(fn, deps) {
      const slot = cursor++, previous = scope.values[slot]
      if (!previous || deps.some((dep, i) => !Object.is(dep, previous.deps[i]))) scope.values[slot] = { deps, value: fn() }
      return scope.values[slot].value
    },
    useEffect(fn, deps) {
      const slot = cursor++, previous = scope.effects[slot]
      if (!previous || deps.some((dep, i) => !Object.is(dep, previous.deps[i]))) {
        previous?.cleanup?.()
        scope.effects[slot] = { deps, fn, pending: true }
      }
    },
  }
  const jsx = (type, props, key) => ({ type, props: props ?? {}, key })
  const module = { exports: {} }
  const source = ts.transpileModule(readFileSync(new URL("../src/components/Anamnese.tsx", import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText
  vm.runInNewContext(source, {
    module, exports: module.exports, document, performance: { now: () => now },
    window: { setInterval: (fn) => { timers.add(fn); return fn }, clearInterval: (fn) => timers.delete(fn), scrollTo() {} },
    require(name) {
      if (name === "react") return hooks
      if (name === "react/jsx-runtime") return { jsx, jsxs: jsx }
      if (name === "@/lib/anamnese") return scoring
      if (name === "@/data/characteristics") return { characteristicStories: storyBank, characteristicCatalog: { stories: storyBank.length, groups: new Set(storyBank.map((story) => story.groupId)).size, reviewedPrototype: false } }
      if (name === "@/lib/disease-round") return { sampleDiseaseOptions: (positive, negative, scope) => sampleDiseaseOptions(positive, negative, scope, exposure.read()) }
      if (name === "@/lib/sampling") return {
        ...sampling,
        recordExposure: exposure.record,
        chooseQuestions: (items, id, limit = items.length) => sampling.prioritize(items, id, exposure.read(), "questions").slice(0, limit),
        chooseOptions: (required, candidates, id, limit) => sampling.chooseOptions(required, candidates, id, limit, exposure.read()),
      }
      if (name === "lucide-react") return { ChevronRight: "icon", Clock3: "icon" }
      if (name.endsWith("/button")) return { Button: "button" }
      if (name.endsWith("/progress")) return { Progress: "progress" }
      if (name.endsWith("/StudyLayout")) return Object.fromEntries(["StudyPage", "StudyHeader", "StudyFooter", "QuestionDebug", "FeedbackCard"].map((name) => [name, name]))
      return require(name)
    },
  })
  function evaluate(node, seen) {
    if (!node || typeof node !== "object") return node
    if (Array.isArray(node)) return node.map((child) => evaluate(child, seen))
    if (typeof node.type === "function") {
      const id = node.type.name + (node.key ?? "")
      seen.add(id)
      scope = scopes.get(id) ?? { values: [], effects: [] }
      scopes.set(id, scope); cursor = 0
      return evaluate(node.type(node.props), seen)
    }
    return { ...node, props: Object.fromEntries(Object.entries(node.props).map(([key, value]) => [key, key === "children" || key === "footer" || key === "debug" || key === "secondary" ? evaluate(value, seen) : value])) }
  }
  function render() {
    let count = 0
    do {
      assert.ok(count++ < 20, "render loop")
      dirty = false
      const seen = new Set()
      tree = evaluate(jsx(module.exports.default, { onBack() {}, debugEnabled: true, onComplete: (...args) => completions.push(args) }), seen)
      for (const [id, owner] of scopes) {
        if (!seen.has(id)) { owner.effects.forEach((effect) => effect?.cleanup?.()); scopes.delete(id); continue }
        owner.effects.forEach((effect) => { if (effect?.pending) { effect.pending = false; effect.cleanup = effect.fn() } })
      }
    } while (dirty)
  }
  const nodes = () => {
    const result = []
    const visit = (node) => {
      if (Array.isArray(node)) return node.forEach(visit)
      if (!node || typeof node !== "object") return
      if (node.type) result.push(node)
      for (const key of ["children", "footer", "debug", "secondary"]) visit(node.props?.[key])
    }
    visit(tree); return result
  }
  const text = (node) => Array.isArray(node) ? node.map(text).join("") : node && typeof node === "object" ? text(node.props?.children) : node == null ? "" : String(node)
  const find = (type) => nodes().filter((node) => node.type === type)
  const click = (node) => { assert.ok(node, "click target exists"); assert.ok(!node.props.disabled, "click target enabled"); node.props.onClick(); render() }
  render()
  return {
    find, text, completions, click, exposure: exposure.read,
    start(title) { click(find("button").find((node) => text(node).includes(title))) },
    footer() { return find("StudyFooter")[0] },
    choices() { return find("button").filter((node) => "aria-pressed" in node.props) },
    advance(ms) { now += ms; for (const fn of timers) fn(); render() },
    hide(hidden) { document.hidden = hidden; for (const fn of listeners) fn(); render() },
    back() { find("StudyHeader")[0].props.onBack(); render() },
  }
}

test("disease rounds have 20 choices, grade once, finish once, and restart cleanly", () => {
  const app = mount()
  app.start("Antecedentes pessoais")
  for (let i = 0; i < 2; i++) {
    assert.equal(app.choices().length, 20)
    const submit = app.footer()
    app.click(submit)
    app.click(submit) // retained handler cannot grade twice
    assert.equal(app.find("FeedbackCard").length, 3)
    assert.equal(app.find("QuestionDebug").length, 1)
    const next = app.footer()
    app.click(next)
    app.click(next) // retained handler cannot skip a question or finish twice
  }
  assert.equal(app.completions.length, 1)
  assert.equal(app.completions[0][1], 0)
  app.click(app.footer())
  assert.equal(app.choices().length, 20)
  assert.equal(app.find("QuestionDebug").length, 0)
})

test("abandoned story rounds prioritize unshown stories and do not count hidden checklists", () => {
  const app = mount()
  app.start("Caracteres dos sintomas")
  const first = app.find("p").map(app.text).find((value) => value.startsWith("Paciente relata"))
  assert.equal(Object.keys(app.exposure().questions).length, 1)
  assert.equal(Object.keys(app.exposure().alternatives).length, 0)
  app.back()
  app.start("Caracteres dos sintomas")
  const second = app.find("p").map(app.text).find((value) => value.startsWith("Paciente relata"))
  assert.notEqual(second, first)
  app.click(app.footer())
  assert.equal(Object.keys(app.exposure().alternatives).length, 11)
})

test("disease positive choices award 70 points across both starter groups", () => {
  const app = mount()
  app.start("Antecedentes pessoais")
  for (let i = 0; i < 2; i++) {
    const respiratory = app.text(app.find("h1")[0]).includes("respiratórias")
    if (respiratory) assert.ok(!app.choices().some((node) => app.text(node).endsWith("Rinite")), "rhinitis must not be a respiratory distractor")
    const answers = respiratory ? ["Pneumonia", "DPOC", "Asma", "Bronquite"] : ["Glaucoma", "Miopia", "Catarata"]
    for (const answer of answers) app.click(app.choices().find((node) => app.text(node).endsWith(answer)))
    app.click(app.footer())
    app.click(app.footer())
  }
  assert.equal(app.completions[0][1], 70)
})

test("interview requires Continue at each of three four-option stages and survives every question", () => {
  const app = mount()
  app.start("Interrogatório complementar")
  for (let question = 0; question < 4; question++) {
    for (let stage = 0; stage < 3; stage++) {
      assert.equal(app.choices().length, 4)
      if (stage === 1) assert.ok(app.choices().some((node) => app.text(node).includes(scoring.NO_SUBGROUP)))
      assert.equal(app.footer().props.disabled, true)
      app.click(app.choices()[0])
      assert.equal(app.find("FeedbackCard").length, 0)
      const proceed = app.footer()
      app.click(proceed)
      app.click(proceed)
    }
    assert.equal(app.find("FeedbackCard").length, 3)
    app.click(app.footer())
  }
  assert.equal(app.completions.length, 1)
})

test("interview feedback and total agree for all accepted starter paths", () => {
  const app = mount()
  app.start("Interrogatório complementar")
  const paths = [
    ["dois objetos", "Diplopia", "Aparelho ocular", "Órgãos dos sentidos"],
    ["apito", "Zumbidos", "Aparelho auditivo", "Órgãos dos sentidos"],
    ["nariz", "Rinorreia", "Nariz e seios paranasais", "Órgãos dos sentidos"],
    ["falta de ar", "Ortopneia", scoring.NO_SUBGROUP, "Aparelho cardiovascular"],
  ]
  for (let i = 0; i < 4; i++) {
    const story = app.text(app.find("blockquote")[0])
    const path = paths.find(([cue]) => story.includes(cue))
    for (const answer of path.slice(1)) {
      app.click(app.choices().find((node) => app.text(node).endsWith(answer)))
      app.click(app.footer())
    }
    for (const card of app.find("FeedbackCard")) assert.ok(card.props.label.endsWith("+10"))
    app.click(app.footer())
  }
  assert.equal(app.completions[0][1], 120)
})

test("story clock preserves fractional active time, pauses hidden, grades current picks, and cleans up", () => {
  const app = mount()
  app.start("Caracteres dos sintomas")
  assert.equal(app.choices().length, 0)
  app.click(app.footer())
  const none = app.choices().find((node) => app.text(node).includes(scoring.NONE))
  app.click(none)
  assert.equal(app.choices().filter((node) => node.props["aria-pressed"]).length, 1)
  app.click(app.choices().find((node) => !app.text(node).includes(scoring.NONE)))
  assert.equal(app.choices().filter((node) => node.props["aria-pressed"]).length, 1)
  assert.equal(app.choices().find((node) => app.text(node).includes(scoring.NONE)).props["aria-pressed"], false)
  app.advance(750)
  app.hide(true)
  app.advance(60_000)
  assert.equal(app.find("FeedbackCard").length, 0)
  app.hide(false)
  app.advance(19_249)
  assert.equal(app.find("FeedbackCard").length, 0)
  app.advance(1)
  assert.equal(app.find("FeedbackCard").length, 3)
  assert.ok(app.find("QuestionDebug").length)
  app.click(app.footer())
  assert.equal(app.choices().length, 0)
  app.advance(50_000)
  assert.equal(app.find("FeedbackCard").length, 0)
  app.back()
  app.advance(50_000)
  assert.equal(app.completions.length, 0)
})

test("all story questions finish with correct missing fields and explicit NONE", () => {
  const app = mount()
  app.start("Caracteres dos sintomas")
  for (let i = 0; i < 3; i++) {
    const story = app.find("p").map(app.text).find((value) => value.startsWith("Paciente relata"))
    const answers = story.includes("abdominal") ? [scoring.NONE] : story.includes("6/10") ? ["Irradiação"] : ["Irradiação", "Intensidade"]
    app.click(app.footer())
    assert.ok(!app.find("p").some((node) => app.text(node).startsWith("Paciente relata")))
    for (const answer of answers) app.click(app.choices().find((node) => app.text(node).endsWith(answer)))
    const submit = app.footer()
    app.click(submit)
    app.advance(25_000)
    app.click(submit)
    app.click(app.footer())
  }
  assert.equal(app.completions.length, 1)
  assert.equal(app.completions[0][1], 40)
})

test("second-pass pain review covers all ten fields and pins exact omission sets", () => {
  const app = mount()
  app.start("Caracteres dos sintomas")
  const reviewed = new Set()
  const fields = ["Localização", "Irradiação", "Qualidade/caráter", "Intensidade", "Duração", "Evolução", "Relação com funções orgânicas", "Fatores desencadeantes/agravantes", "Fatores atenuantes", "Manifestações concomitantes"]
  for (let i = 0; i < 3; i++) {
    const text = app.find("p").map(app.text).find((value) => value.startsWith("Paciente relata"))
    const id = text.includes("abdominal") ? 2 : text.includes("6/10") ? 1 : 3
    reviewed.add(id)
    // Independent editorial evidence spans in checklist order. Null means silence;
    // explicitly documented negatives count as present rather than omitted.
    const evidence = id === 1 ? [
      "dor lombar", null, "em aperto", "intensidade 6/10", "há três dias",
      "aumentou desde então", "Nega relação com urinar ou evacuar",
      "piora ao caminhar", "melhora com repouso", "Nega febre ou outros sintomas associados",
    ] : id === 2 ? [
      "dor abdominal", "sem irradiação", "em cólica", "5/10", "há dois dias",
      "estável desde o início", "não percebe relação com refeições, urina ou evacuação",
      "piora com movimento", "melhora com repouso", "Nega outros sintomas associados",
    ] : [
      "dor lombar", null, "em aperto", null, "há dois dias",
      "vem aumentando desde o início", "Não percebe relação com refeições, urina ou evacuação",
      "piora ao caminhar", "melhora com repouso", "Nega outros sintomas associados",
    ]
    assert.equal(evidence.length, fields.length)
    evidence.forEach((span, field) => { if (span !== null) assert.ok(text.includes(span), `story ${id}: evidence for ${fields[field]}`) })
    const missing = fields.filter((_, field) => evidence[field] === null)
    assert.deepEqual(missing, id === 1 ? ["Irradiação"] : id === 2 ? [] : ["Irradiação", "Intensidade"])
    app.click(app.footer()) // hide story
    app.click(app.footer()) // submit blank to inspect stored accepted answers
    const accepted = app.find("p").map(app.text).find((value) => value.startsWith("Respostas aceitas:"))
    assert.equal(accepted, `Respostas aceitas: ${missing.length ? missing.join(", ") : scoring.NONE}`)
    app.click(app.footer())
  }
  assert.equal(reviewed.size, 3)
})

test("symptom rounds use each group's own full checklist and stop at ten stories", () => {
  const storyBank = Array.from({ length: 15 }, (_, index) => ({
    id: `fixture-${index}`, groupId: index % 2 ? "group-a" : "group-b", groupLabel: `Grupo ${index % 2 ? "A" : "B"}`,
    text: `História de teste ${index}.`, fields: index % 2 ? ["Campo A", "Campo B"] : ["Campo C", "Campo D", "Campo E"],
    fieldKeys: { "Campo A": "a", "Campo B": "b", "Campo C": "c", "Campo D": "d", "Campo E": "e" },
    missing: [], context: "Todos os campos deste exemplo estão presentes.", provenance: { fixture: true }, sourceLabel: "Fonte de teste, página 2",
  }))
  const app = mount({ storyBank })
  app.start("Caracteres dos sintomas")
  const seen = new Set()
  for (let index = 0; index < 10; index++) {
    const text = app.find("p").map(app.text).find((value) => value.startsWith("História de teste"))
    const story = storyBank.find((story) => story.text === text)
    assert.ok(story)
    assert.ok(!seen.has(story.id)); seen.add(story.id)
    app.click(app.footer())
    assert.equal(app.choices().length, story.fields.length + 1)
    for (const field of story.fields) assert.ok(app.choices().some((choice) => app.text(choice).endsWith(field)))
    app.click(app.choices().find((choice) => app.text(choice).endsWith(scoring.NONE)))
    app.click(app.footer())
    assert.ok(app.find("p").some((paragraph) => /Referência da versão congelada:\s*Fonte de teste/.test(app.text(paragraph))))
    app.click(app.footer())
  }
  assert.equal(seen.size, 10)
  assert.deepEqual(app.completions, [["caracteres", 100]])
  assert.equal(Object.keys(app.exposure().questions).length, 10, "queued unshown stories must stay unseen")
})
