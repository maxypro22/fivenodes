"use client";

import { useEffect, useState } from "react";

/**
 * Falling character rain behind the hero.
 *
 * Values below are the production ones from fivenodes.ai, taken from the live
 * bundle rather than eyeballed: the character pool, the 10–30s fall duration,
 * the negative start delay that makes the field look already-running on load,
 * the 1.5% "active" rate, and the exact colours and opacities.
 *
 * Positions are generated after mount — Math.random during render is a
 * hydration mismatch — and regenerated on resize, as production does.
 */

// Production pool: code punctuation, then A–Z and 0–9.
const POOL = "{ } [ ] ( ) < > / ; : = + - * % & | ! ? _ => // /* */ # { } [ ] ( ) < > ; : = { } [ ] => // # & | ! ? _ + - * < > / ;"
  .split(" ")
  .concat("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9".split(" "));

const MOBILE_BP = 768;

export default function RainingLetters({ charCount = 200, className = "", children }) {
  const [chars, setChars] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const build = () => {
      const mobile = window.innerWidth <= MOBILE_BP;
      setIsMobile(mobile);
      const n = mobile ? Math.round(0.48 * charCount) : charCount;
      const out = [];
      for (let i = 0; i < n; i++) {
        out.push({
          char: POOL[Math.floor(Math.random() * POOL.length)],
          x: 100 * Math.random(),
          duration: 10 + 20 * Math.random(),
          delay: -(30 * Math.random()),
          isActive: Math.random() < 0.015,
        });
      }
      setChars(out);
    };

    build();
    window.addEventListener("resize", build);
    return () => window.removeEventListener("resize", build);
  }, [charCount]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {chars.map((c, i) => (
          <span
            key={i}
            className={`hero-rain-char absolute select-none pointer-events-none ${
              c.isActive ? "hero-rain-active" : "hero-rain-idle"
            }`}
            style={{
              left: `${c.x}%`,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              opacity: c.isActive ? (isMobile ? 0.8 : 1) : isMobile ? 0.48 : 0.6,
              fontSize: "1.5rem",
              fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              fontWeight: c.isActive ? 700 : 300,
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
