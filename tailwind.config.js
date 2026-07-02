/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: { DEFAULT: "#2563eb", dark: "#1d4ed8", soft: "#e9edfd" },
        badge: "#3d5afe",
        bg: "#f6f7fb",
        surface: "#ffffff",
        ink: { DEFAULT: "#0f1629", 2: "#1c2434" },
        muted: { DEFAULT: "#64748b", 2: "#8a94a6" },
        line: { DEFAULT: "#e6e8f0", soft: "#eef0f6" },
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
