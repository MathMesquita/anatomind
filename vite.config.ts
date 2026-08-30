import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
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
        start_url: "/",
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
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
})
