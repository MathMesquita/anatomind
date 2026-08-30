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

export default defineConfig(() => ({
  base: BASE,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "AnatoMind",
        short_name: "AnatoMind",
        description: "Quiz de anatomia humana a partir do Atlas Fotográfico UFRJ-Macaé",
        lang: "pt-BR",
        theme_color: "#0c0a09",
        background_color: "#0c0a09",
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
        // The plate corpus is far too heavy to precache -- see issue #8. The app
        // shell and the index precache; photographs are cached as they are seen.
        globPatterns: ["**/*.{js,css,html,svg,woff2}", "atlas/plates.json"],
        runtimeCaching: [
          {
            urlPattern: /\/atlas\/plates\/.*\.webp$/,
            handler: "CacheFirst",
            options: {
              cacheName: "atlas-plates",
              expiration: { maxEntries: 220, maxAgeSeconds: 60 * 60 * 24 * 60 },
            },
          },
        ],
      },
    }),
  ],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
}))
