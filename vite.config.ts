import path from "node:path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa"

// Pages serves the repo under /anatomind/, and dev and preview run there too:
// a base that only applies to builds means `vite preview` serves the built
// files from the wrong root, and every dev/prod path difference is a bug
// waiting to happen. `import.meta.env.BASE_URL` carries it into runtime paths,
// so nothing else in the app has to know.
const BASE = "/anatomind/"
// Keep in step with tools/check-offline-release.mjs.
const OFFLINE_CHUNK_BUDGET = 8 * 1024 * 1024

export default defineConfig(() => ({
  base: BASE,
  build: {
    rolldownOptions: {
      output: {
        // Pure JSON banks get independent offline-cached chunks, so one new
        // five-item release does not invalidate every other subject's content.
        // https://rolldown.rs/reference/OutputOptions.codeSplitting
        codeSplitting: { groups: [
          { name: "content-caracteres", test: /content\/releases\/caracteres\./ },
          { name: "content-interrogatorio", test: /content\/releases\/interrogatorio\./ },
          { name: "content-interrogatorio-lotes", test: /content\/releases\/interrogatorio-batch-/ },
          { name: "content-regioes", test: /content\/releases\/regioes\./ },
        ] },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icon-192.png", "icon-512.png"],
      manifest: {
        name: "AnatoMind",
        short_name: "AnatoMind",
        description: "Atividades de anatomia, propedêutica médica e anamnese",
        lang: "pt-BR",
        theme_color: "#46634e",
        background_color: "#f5f3ee",
        display: "standalone",
        id: BASE,
        start_url: BASE,
        scope: BASE,
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        // The complete corpus is cached at installation for offline study.
        // A successful service-worker installation is required before going offline.
        // Reviewed banks are large JSON (about 180 kB gzipped); the default 2 MiB
        // limit would silently drop them from the offline cache.
        maximumFileSizeToCacheInBytes: OFFLINE_CHUNK_BUDGET,
        globPatterns: ["**/*.{js,css,html,svg,woff2}", "atlas/plates.json", "atlas/plates/*.webp", "regions/*.{jpg,jpeg,png,webp}"],
      },
    }),
  ],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
}))
