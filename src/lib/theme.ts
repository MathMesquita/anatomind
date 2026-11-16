export type Theme = "light" | "dark"

const THEME_KEY = "anatomind.theme.v1"
/** Browser bar colour per theme; matches --background in index.css. */
const BAR: Record<Theme, string> = { light: "#f5f3ee", dark: "#151815" }

/** The saved choice. Light until the student picks dark. */
export function loadTheme(): Theme {
  try { return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light" } catch { return "light" }
}

/** Paints the page in the theme and remembers it on this device. */
export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", BAR[theme])
  try { localStorage.setItem(THEME_KEY, theme) } catch { /* The theme still holds for this visit. */ }
}
