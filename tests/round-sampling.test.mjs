import { test } from "node:test"
import assert from "node:assert/strict"
import { buildRound, refreshQuestionOptions } from "../src/lib/round.ts"
import { alternativeId, getExposure, recordExposure } from "../src/lib/sampling.ts"

const marker = (slug) => ({ slug, term: slug.toUpperCase(), x: .5, y: .5 })
const plates = ["p1", "p2"].map((id) => ({ id, markers: ["a", "b", "c", "d", "e"].map(marker) }))
const deck = { system: "test", label: "Test", plates, markerCount: 10 }

test("atlas rounds deduplicate structures and prioritize unstudied concepts", () => {
  recordExposure(["anatomia:concept:a"], [], "test:seen-a")
  const questions = buildRound(deck, 4)
  assert.equal(questions.length, 4)
  assert.equal(new Set(questions.map((q) => q.marker.slug)).size, 4)
  assert.ok(questions.every((q) => q.marker.slug !== "a"))
  for (const question of questions) {
    assert.equal(question.options.length, 4)
    assert.equal(new Set(question.options).size, 4)
    assert.ok(question.options.includes(question.marker.term))
  }
  assert.equal(Object.keys(getExposure().questions).length, 1, "planning must not mark queued questions as seen")
})

test("opening the next atlas question refreshes exposure-aware same-plate distractors", () => {
  recordExposure([], [alternativeId("anatomia", "B")], "test:seen-b")
  const question = refreshQuestionOptions({ plate: plates[0], marker: plates[0].markers[0], options: [] }, deck)
  assert.ok(question.options.includes("A"))
  assert.ok(!question.options.includes("B"))
  assert.deepEqual([...question.options].sort(), ["A", "C", "D", "E"])
})
