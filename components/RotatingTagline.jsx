"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Secure Data.",
  "24/7 AI Availability.",
  "Smart Automation.",
  "Seamless Integration.",
  "Cost-Effective Solutions.",
  "Intelligent Follow-ups.",
  "Enterprise Security.",
];

export default function RotatingTagline() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % PHRASES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="reveal d1 h-[24px] mb-2 overflow-hidden" aria-live="polite">
      <span
        key={i}
        className="inline-block font-heading font-bold text-primary text-[clamp(12.5px,1.05vw,14px)] tracking-[.01em] animate-[fadeSlide_.5s_ease]"
      >
        {PHRASES[i]}
      </span>
    </div>
  );
}
