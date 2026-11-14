import { test } from "node:test"
import assert from "node:assert/strict"
import { NONE, NO_SUBGROUP, scoreSelections, scoreInterview } from "../src/lib/anamnese.ts"

test("missing selections score zero and wrong choices can make a round negative", () => {
  assert.equal(scoreSelections([], ["A"]), 0)
  assert.equal(scoreSelections(["A"], ["A", "B"]), 10)
  assert.equal(scoreSelections(["A", "C"], ["A", "B"]), 5)
  assert.equal(scoreSelections(["C", "D"], ["A"]), -10)
})

test("the none option is explicit and distinct from an unanswered question", () => {
  assert.equal(scoreSelections([NONE], []), 10)
  assert.equal(scoreSelections([], []), 0)
  assert.equal(scoreSelections([NONE], ["A"]), -5)
})

test("interview scoring accepts complete paths and avoids mixed paths", () => {
  const paths = [{ subgroup: "Auditivo", group: "Sentidos" }, { subgroup: NO_SUBGROUP, group: "Neurológico" }]
  assert.equal(scoreInterview(["Vertigem", "Auditivo", "Sentidos"], ["Vertigem"], paths), 30)
  assert.equal(scoreInterview(["Vertigem", NO_SUBGROUP, "Neurológico"], ["Vertigem"], paths), 30)
  assert.equal(scoreInterview(["Vertigem", "Auditivo", "Neurológico"], ["Vertigem"], paths), 15)
  assert.equal(scoreInterview(["Vertigem", "Outro", "Sentidos"], ["Vertigem"], paths, ["Outro"]), 25)
})
