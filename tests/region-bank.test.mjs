import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { createHash } from "node:crypto"
import { regionCoverage, regionQuestions, regionViews } from "../src/data/regions.ts"
import { buildRegionRound } from "../src/lib/region-round.ts"
import { createExposureStore, emptyExposure } from "../src/lib/sampling.ts"

const rng = (seed = 321) => () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296 }

test("original region images and every released coordinate match the independent audit", () => {
  const review = JSON.parse(readFileSync(new URL("../docs/reviews/regioes-v1.json", import.meta.url), "utf8"))
  for (const asset of review.input.images.filter((asset) => asset.path.startsWith("public/"))) {
    const bytes = readFileSync(new URL(`../${asset.path}`, import.meta.url))
    assert.equal(createHash("sha256").update(bytes).digest("hex"), asset.sha256, asset.path)
  }
  assert.equal(review.items.filter((item) => item.action !== "excluded").length, regionQuestions.length)
  for (const question of regionQuestions) {
    const item = review.items.find((item) => item.id === question.bankId)
    assert.ok(item, question.bankId)
    assert.notEqual(item.action, "excluded")
    assert.equal(item.answerRegionId, question.regionId)
    assert.equal(item.view, question.view)
    assert.equal(item.number, question.number)
    assert.deepEqual(item.newMarker, { x: question.x, y: question.y })
    assert.deepEqual(item.numeralAnchorPixel, question.review.pixelEvidence.numeralAnchor)
  }
})

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
  const history = { ...emptyExposure(), sequence: 1, questions }
  const round = buildRegionRound(regionQuestions, 10, history, rng())
  assert.equal(round[0].regionId, id)
  questions[`propedeutica:question:${views[0].id}`] = { count: 1, lastSeen: 1 }
  assert.notEqual(buildRegionRound(views, 1, history, rng())[0].id, views[0].id)
})

test("five completed rounds cover every region before a repeat and eventually show every view", () => {
  const exposure = createExposureStore(null), random = rng(81), first = new Set(), targets = new Set()
  for (let roundIndex = 0; roundIndex < 100; roundIndex++) {
    const round = buildRegionRound(regionQuestions, 10, exposure.read(), random)
    for (const question of round) {
      if (roundIndex < 5) { assert.ok(!first.has(question.regionId)); first.add(question.regionId) }
      targets.add(question.id)
      exposure.record([`propedeutica:region:${question.regionId}`, `propedeutica:question:${question.id}`], [], `coverage:${roundIndex}:${question.id}`)
    }
  }
  assert.equal(first.size, 50)
  assert.equal(targets.size, 71)
})

test("legacy target-only history cannot make previously seen starter regions look unseen", () => {
  const old = regionQuestions.find((question) => question.id === "superficie-anterior-25")
  const history = { ...emptyExposure(), sequence: 1, questions: { [`propedeutica:question:${old.id}`]: { count: 1, lastSeen: 1 } } }
  const round = buildRegionRound(regionQuestions, 50, history, rng())
  assert.equal(round.at(-1).regionId, old.regionId)
  assert.equal(round.filter((question) => question.regionId === old.regionId).length, 1)
  assert.equal(history.questions[`propedeutica:region:${old.regionId}`], undefined, "sampling must not mutate stored history")
})
