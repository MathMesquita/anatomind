import { readFileSync } from "node:fs"
import vm from "node:vm"
import ts from "typescript"

/** Loads the real countdown hook against a test's fake React, clock, timers and tab visibility. */
export function loadCountdown(react, globals) {
  const module = { exports: {} }
  const source = ts.transpileModule(readFileSync(new URL("../src/lib/countdown.ts", import.meta.url), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
  vm.runInNewContext(source, {
    module, exports: module.exports, ...globals,
    require(name) {
      if (name === "react") return react
      throw new Error(`unexpected import: ${name}`)
    },
  })
  return module.exports
}
