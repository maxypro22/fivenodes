/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  future: {
    // hover styles only apply on devices that actually support hover (no sticky-hover on touch)
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens resolve through CSS variables (globals.css :root / html.dark)
        // so every bg-*/text-*/border-* utility using these names re-themes for
        // free — Tailwind's opacity modifiers (e.g. bg-primary/30) still work
        // because of the <alpha-value> placeholder.
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
          soft: "rgb(var(--primary-soft) / <alpha-value>)",
        },
        badge: "rgb(var(--badge) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          2: "rgb(var(--ink-2) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          2: "rgb(var(--muted-2) / <alpha-value>)",
        },
        line: {
          DEFAULT: "rgb(var(--line) / <alpha-value>)",
          soft: "rgb(var(--line-soft) / <alpha-value>)",
        },
        wa: { 1: "#25d366", 2: "#128c3e" },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,22,41,.04)",
        hover: "0 20px 40px -12px rgba(37,99,235,.28)",
        button: "0 10px 24px -8px rgba(37,99,235,.5)",
        soft: "0 12px 30px -14px rgba(16,22,41,.18)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};
