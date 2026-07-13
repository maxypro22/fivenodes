"use client";

import { useState, useEffect, useRef } from "react";
import { SOLUTIONS } from "./data";
import SolutionCard from "./SolutionCard";

const AUTOPLAY = 3500; // ms per card

export default function SolutionsCards({ items = SOLUTIONS }) {
  const [index, setIndex] = useState(0);
  const n = items.length;
  const timer = useRef(null);

  const startTimer = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % n), AUTOPLAY);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + n) % n);
    startTimer();
  };
  const next = () => {
    setIndex((i) => (i + 1) % n);
    startTimer();
  };

  const Arrow = ({ dir, onClick }) => (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className="w-12 h-12 rounded-full border-2 border-line bg-white grid place-items-center text-ink-2 shadow-[0_6px_16px_-8px_rgba(16,22,41,.35)] transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_10px_22px_-8px_rgba(37,99,235,.5)] active:scale-95"
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-[26px] mt-12">
        {items.map((m, i) => (
          <div key={m.t} className={`reveal d${(i % 3) + 1} h-full`}>
            <SolutionCard m={m} index={i} />
          </div>
        ))}
      </div>

      {/* Mobile carousel — one card + arrows */}
      <div className="md:hidden mt-12">
        <div key={index} className="[animation:fadeSlide_.4s_ease]">
          <SolutionCard m={items[index]} index={index} />
        </div>

        <div className="flex items-center justify-center gap-5 mt-8">
          <Arrow dir="left" onClick={prev} />
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  startTimer();
                }}
                aria-label={`Go to card ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-line"
                }`}
              />
            ))}
          </div>
          <Arrow dir="right" onClick={next} />
        </div>

        <div className="text-center text-xs text-muted-2 mt-3">
          {index + 1} / {n}
        </div>
      </div>
    </>
  );
}
