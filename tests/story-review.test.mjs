import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { createHash } from "node:crypto"

// This verifies the archived review's integrity, not its medical conclusions.
const review = JSON.parse(readFileSync(new URL("../docs/reviews/caracteres-v1.json", import.meta.url), "utf8"))

test("the archived independent story review accounts for every story and decision", () => {
  assert.equal(review.stories.length, 220)
  assert.equal(new Set(review.stories.map((story) => story.id)).size, 220)
  assert.deepEqual(new Set(review.reviewedStoryIds), new Set(review.stories.map((story) => story.id)))
  assert.equal(review.stories.reduce((sum, story) => sum + story.checklist.length, 0), 1800)
  assert.equal(review.stories.filter((story) => story.disposition === "model-reviewed").length, 160)
  assert.equal(review.stories.filter((story) => story.disposition === "needs-revision").length, 60)
  assert.equal(review.stories.filter((story) => story.hold).length, 42)
  for (const story of review.stories) {
    assert.equal(createHash("sha256").update(story.text).digest("hex"), story.textSha256, story.id)
    assert.equal(story.clinicalApproval, false)
    assert.equal(story.releaseApproved, false)
    if (story.hold) {
      assert.notEqual(story.disposition, "model-reviewed")
      assert.equal(story.correctedMissingFieldSuggestion.answerFieldIds, null)
    }
    for (const field of story.checklist) {
      const span = field.reviewEvidence
      if (span?.quote) assert.equal(story.text.slice(span.start, span.end), span.quote, `${story.id}:${field.fieldId}`)
    }
  }
})
