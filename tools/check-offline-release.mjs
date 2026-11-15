import { readFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"

// Keep in step with OFFLINE_CHUNK_BUDGET in vite.config.ts.
const BUDGET = 8 * 1024 * 1024
const assets = readdirSync("dist/assets").filter((file) => file.endsWith(".js"))
const worker = readFileSync("dist/sw.js", "utf8")
for (const file of assets) {
  const bytes = statSync(path.join("dist/assets", file)).size
  if (bytes > BUDGET) throw new Error(`${file}: exceeds the offline-precache size budget (${bytes} bytes)`)
  if (!worker.includes(`assets/${file}`)) throw new Error(`${file}: not included in installed offline cache`)
}
console.log(JSON.stringify({ offlineJavaScriptChunks: assets.length, allPrecached: true, maximumChunkBytes: Math.max(...assets.map((file) => statSync(path.join("dist/assets", file)).size)) }))
