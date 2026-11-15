import { test } from "node:test"
import assert from "node:assert/strict"
import { regionCoverage, regionQuestions, regionViews } from "../src/data/regions.ts"
import { buildRegionRound } from "../src/lib/region-round.ts"
import { emptyExposure } from "../src/lib/sampling.ts"

const rng = (seed = 321) => () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296 }

test("the frozen region release contains 71 reviewed targets and 50 distinct answer regions", () => {
  assert.equal(regionQuestions.length, 71)
  assert.equal(new Set(regionQuestions.map((q) => q.id)).size, 71)
  assert.equal(regionCoverage.answerRegions, 50)
  assert.equal(regionCoverage.legendRegions, 55)
  assert.deepEqual(regionCoverage.unavailableRegions.map((r) => r.number), [15, 28, 29, 35, 55])
  for (const question of regionQuestions) {
    assert.equal(question.review.status, "model-reviewed")
    assert.equal(question.options.length, 4)
    assert.equal(new Set(question.options).size, 4)
    assert.ok(question.options.includes(question.answer))
    assert.equal(question.source.page, 1)
    assert.ok(question.source.locator)
  }
})

test("every marker round-trips to its reviewed original-image pixel evidence", () => {
  for (const q of regionQuestions) {
    const crop = regionViews[q.view], evidence = q.review.pixelEvidence
    assert.ok(q.x >= 0 && q.x <= 100 && q.y >= 0 && q.y <= 100)
    assert.equal(evidence.crop.image, crop.image)
    assert.equal(evidence.crop.left, crop.left)
    assert.equal(evidence.crop.width, crop.cropWidth)
    const x = crop.left + q.x / 100 * crop.cropWidth, y = crop.top + q.y / 100 * crop.cropHeight
    assert.ok(Math.abs(x - evidence.marker.x) < .02, q.id)
    assert.ok(Math.abs(y - evidence.marker.y) < .02, q.id)
    assert.ok(Math.hypot(x - evidence.numeralAnchor.x, y - evidence.numeralAnchor.y) < 25, `${q.id}: marker too far from numeral`)
  }
})

test("source errors and unreadable or nonexistent numerals cannot enter a round", () => {
  for (const key of ["lateral:39", "lateral:41", "lateral:26", "anterior:15", "posterior:16", "posterior:17"]) {
    assert.ok(!regionQuestions.some((q) => `${q.view}:${q.number}` === key), key)
  }
  for (const number of [28, 29, 35, 55]) assert.ok(!regionQuestions.some((q) => q.number === number))
  const starters = { "anterior:25": [52, 38], "lateral:24": [43, 40], "posterior:31": [41, 33], "face:6": [50, 55], "occipital:3": [56, 47] }
  for (const [key, coordinates] of Object.entries(starters)) {
    const q = regionQuestions.find((q) => `${q.view}:${q.number}` === key)
    assert.deepEqual([q.x, q.y], coordinates)
  }
})

test("all 71 verified targets can be sampled, with 10 different regions per round", () => {
  const random = rng(), sampled = new Set()
  for (let i = 0; i < 500; i++) {
    const round = buildRegionRound(regionQuestions, 10, emptyExposure(), random)
    assert.equal(round.length, 10)
    assert.equal(new Set(round.map((q) => q.regionId)).size, 10)
    round.forEach((q) => sampled.add(q.id))
  }
  assert.equal(sampled.size, 71)
})

test("coverage favors an unseen region and an unseen view of that region", () => {
  const id = "regiao-18", views = regionQuestions.filter((q) => q.regionId === id)
  assert.ok(views.length > 1)
  const questions = Object.fromEntries([...new Set(regionQuestions.map((q) => q.regionId))].filter((region) => region !== id).map((region) => [`propedeutica:region:${region}`, { count: 1, lastSeen: 1 }]))
  questions[`propedeutica:question:${views[0].id}`] = { count: 1, lastSeen: 1 }
  const history = { ...emptyExposure(), sequence: 1, questions }
  const round = buildRegionRound(regionQuestions, 10, history, rng())
  assert.equal(round[0].regionId, id)
  assert.notEqual(round[0].id, views[0].id)
})
