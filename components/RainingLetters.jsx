"use client";

import { useEffect, useState } from "react";

/**
 * Falling character rain behind the hero, ported from fivenodes.ai.
 *
 * Characters fall from -10vh to 110vh on their own duration and delay. A small
 * rotating subset is "active" — heavier weight, darker, faintly glowing — which
 * is what makes the field read as data rather than static noise.
 *
 * Positions are generated after mount so the server and client markup can never
 * disagree (Math.random during render is a hydration mismatch).
 */

const POOL = "0123456789";
const ACTIVE_EVERY = 1200; // ms between active-character reshuffles

export default function RainingLetters({ charCount = 180, className = "", children }) {
  const [chars, setChars] = useState([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setChars(
      Array.from({ length: charCount }, () => ({
        char: POOL[Math.floor(Math.random() * POOL.length)],
        x: Math.random() * 100,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * -20,
        active: Math.random() < 0.06,
      }))
    );

    const id = setInterval(() => setTick((t) => t + 1), ACTIVE_EVERY);
    return () => clearInterval(id);
  }, [charCount]);

  // reshuffle which characters are highlighted, and swap their glyphs
  useEffect(() => {
    if (!tick) return;
    setChars((prev) =>
      prev.map((c) =>
        Math.random() < 0.08
          ? { ...c, active: !c.active, char: POOL[Math.floor(Math.random() * POOL.length)] }
          : c
      )
    );
  }, [tick]);

  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {chars.map((c, i) => (
          <span
            key={i}
            className="hero-rain-char absolute select-none pointer-events-none"
            style={{
              left: `${c.x}%`,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              color: c.active ? "rgb(var(--ink) / .35)" : "rgb(var(--ink) / .10)",
              textShadow: c.active ? "0 0 6px rgb(var(--ink) / .08)" : "none",
              opacity: c.active ? 1 : 0.6,
              fontSize: "1.5rem",
              fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              fontWeight: c.active ? 700 : 300,
              lineHeight: 1,
              willChange: "transform",
            }}
          >
            {c.char}
          </span>
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
