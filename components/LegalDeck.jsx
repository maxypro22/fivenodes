"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 5000; // ms per section (longer than Features — legal text needs reading time)

export default function LegalDeck({ sections }) {
  const [index, setIndex] = useState(0);
  const n = sections.length;
  const timer = useRef(null);

  const startTimer = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % n), DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goto = (i) => {
    setIndex(((i % n) + n) % n);
    startTimer();
  };

  const s = sections[index];

  return (
    <div className="pt-2">
      {/* stacked deck */}
      <div className="relative">
        {/* ghost layers behind */}
        <div className="absolute inset-0 z-0 rounded-[22px] bg-[#eef0f5] border border-line -translate-y-4 scale-[.94] origin-top" />
        <div className="absolute inset-0 z-[1] rounded-[22px] bg-white border border-line -translate-y-2 scale-[.97] origin-top" />

        {/* front card */}
        <div
          key={index}
          className="relative z-10 bg-white border border-line rounded-[22px] p-6 shadow-soft [animation:fadeSlide_.4s_ease]"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center min-w-9 h-9 px-2 rounded-[10px] bg-primary-soft text-primary font-heading font-extrabold text-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="font-heading font-bold text-[17px] text-ink leading-tight">{s.title}</h2>
          </div>
          <div className="max-h-[52vh] overflow-y-auto pr-1 flex flex-col gap-3">{s.body}</div>
        </div>
      </div>

      {/* controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => goto(index - 1)}
          aria-label="Previous section"
          className="w-11 h-11 shrink-0 rounded-full border-2 border-line bg-white grid place-items-center text-ink-2 shadow-[0_6px_16px_-8px_rgba(16,22,41,.35)] transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center flex-wrap justify-center gap-1.5 max-w-[190px]">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => goto(i)}
              aria-label={`Go to section ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2.5 bg-line"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goto(index + 1)}
          aria-label="Next section"
          className="w-11 h-11 shrink-0 rounded-full border-2 border-line bg-white grid place-items-center text-ink-2 shadow-[0_6px_16px_-8px_rgba(16,22,41,.35)] transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="text-center text-xs text-muted-2 mt-3">
        {index + 1} / {n}
      </div>
    </div>
  );
}
