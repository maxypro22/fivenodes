"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

// Reads the class the inline bootstrap script (see layout.jsx) already
// applied to <html> before paint, so there's no flash of the wrong theme.
export default function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  if (dark === null) {
    return <span className={`w-9 h-9 shrink-0 ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-9 h-9 grid place-items-center rounded-full text-ink-2 hover:text-primary hover:bg-bg transition-all duration-200 shrink-0 ${className}`}
    >
      {dark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
    </button>
  );
}
