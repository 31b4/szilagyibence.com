import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        stroke: "rgb(var(--stroke-rgb) / <alpha-value>)"
      },
      fontFamily: {
        body: ["var(--font-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
