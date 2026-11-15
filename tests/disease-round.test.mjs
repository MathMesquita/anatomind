import { test } from "node:test"
import assert from "node:assert/strict"
import { sampleDiseaseOptions } from "../src/lib/disease-round.ts"
import { addExposure, alternativeId, emptyExposure } from "../src/lib/sampling.ts"

const rng = (seed = 111) => () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296 }
const positive = Array.from({ length: 20 }, (_, i) => `Positive ${i}`)
const negative = Array.from({ length: 30 }, (_, i) => `Negative ${i}`)

test("a larger reviewed bank yields 20 distinct options with a variable hidden 2–5 positives", () => {
  const counts = new Set(), sets = new Set(), random = rng()
  for (let i = 0; i < 100; i++) {
    const round = sampleDiseaseOptions(positive, negative, "diseases", emptyExposure(), random)
    assert.ok(round)
    assert.equal(round.options.length, 20)
    assert.equal(new Set(round.options).size, 20)
    assert.ok(round.accepted.length >= 2 && round.accepted.length <= 5)
    assert.deepEqual(round.options.filter((label) => positive.includes(label)).sort(), [...round.accepted].sort())
    counts.add(round.accepted.length); sets.add([...round.options].sort().join("|"))
  }
  assert.equal(counts.size, 4)
  assert.ok(sets.size > 90)
})

test("overlapping membership cannot turn an undrawn positive into a negative", () => {
  const round = sampleDiseaseOptions(positive, [...negative, ...positive], "diseases", emptyExposure(), rng())
  assert.deepEqual(round.options.filter((label) => positive.includes(label)).sort(), [...round.accepted].sort())
})

test("novelty also selects the less-exposed positive diseases and distractors", () => {
  const history = addExposure(emptyExposure(), [], [alternativeId("diseases", "Positive 0"), alternativeId("diseases", "Negative 0")])
  const round = sampleDiseaseOptions(positive, negative, "diseases", history, rng())
  assert.ok(!round.options.includes("Positive 0"))
  assert.ok(!round.options.includes("Negative 0"))
})

test("insufficient reviewed positives or negatives withholds the round", () => {
  assert.equal(sampleDiseaseOptions(["One"], negative, "diseases"), null)
  assert.equal(sampleDiseaseOptions(positive, ["Only negative"], "diseases"), null)
  assert.equal(sampleDiseaseOptions(["A", "B"], [...negative.slice(0, 17), "A"], "diseases"), null)
})
