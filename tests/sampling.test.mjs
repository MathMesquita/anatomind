import { test } from "node:test"
import assert from "node:assert/strict"
import { emptyExposure, parseExposure, prioritize, chooseOptions, addExposure, createExposureStore } from "../src/lib/sampling.ts"

const identity = (id) => id
const rng = (seed = 123) => () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296 }

test("unseen questions precede every seen question without duplicates", () => {
  const history = addExposure(emptyExposure(), ["A"], [])
  assert.deepEqual(prioritize(["A", "B", "B"], identity, history, "questions", () => .5), ["B", "A"])
})

test("less-shown and less-recent questions gain probability, but repeats remain possible", () => {
  const history = { ...emptyExposure(), sequence: 100, questions: { frequent: { count: 10, lastSeen: 100 }, rare: { count: 1, lastSeen: 100 }, old: { count: 1, lastSeen: 20 } } }
  const random = rng(), wins = { frequent: 0, rare: 0, old: 0 }
  for (let i = 0; i < 20_000; i++) wins[prioritize(Object.keys(wins), identity, history, "questions", random)[0]]++
  assert.ok(wins.old > wins.rare * 3)
  assert.ok(wins.rare > wins.frequent * 3)
  assert.ok(wins.frequent > 0)
})

test("required answers remain included and unseen eligible alternatives are preferred", () => {
  const history = addExposure(emptyExposure(), [], ["correct", "seen"])
  for (let seed = 1; seed <= 20; seed++) {
    const options = chooseOptions(["correct"], ["correct", "seen", "new-a", "new-b", "new-c"], identity, 4, history, rng(seed))
    assert.equal(options.length, 4)
    assert.equal(new Set(options).size, 4)
    assert.ok(options.includes("correct"))
    assert.ok(!options.includes("seen"))
  }
})

test("the correct answer can occupy every position; novelty never exposes its position", () => {
  const positions = new Set(), random = rng()
  for (let i = 0; i < 100; i++) positions.add(chooseOptions(["correct"], ["A", "B", "C"], identity, 4, emptyExposure(), random).indexOf("correct"))
  assert.equal(positions.size, 4)
})

test("question planning does not count as an exposure; actual presentations persist exactly once", () => {
  let raw = null
  const storage = { getItem: () => raw, setItem: (_, value) => { raw = value } }, store = createExposureStore(storage)
  prioritize(["A", "B"], identity, store.read(), "questions")
  assert.deepEqual(store.read(), emptyExposure())
  store.record(["A"], ["X", "X"], "round-1:question-1")
  store.record(["A"], ["X"], "round-1:question-1")
  assert.equal(store.read().questions.A.count, 1)
  assert.equal(store.read().alternatives.X.count, 1)
  const restarted = createExposureStore(storage)
  assert.equal(restarted.read().questions.A.count, 1)
  assert.equal(restarted.read().questions.B, undefined)
})

test("corrupt or unavailable storage cannot break study", () => {
  assert.deepEqual(parseExposure("not JSON"), emptyExposure())
  const store = createExposureStore({ getItem() { throw new Error("blocked") }, setItem() { throw new Error("full") } })
  store.record(["A"], [], "one")
  assert.equal(store.read().questions.A.count, 1)
  const history = parseExposure(JSON.stringify({ version: 1, sequence: 4, questions: { bad: { count: -1, lastSeen: 4 }, future: { count: 2, lastSeen: 9 } }, alternatives: [] }))
  assert.deepEqual(history.questions, {})
})
