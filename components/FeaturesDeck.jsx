"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1800; // ms per card

export default function FeaturesDeck({ items }) {
  const [index, setIndex] = useState(0);
  const n = items.length;
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
    setIndex(i);
    startTimer();
  };

  const f = items[index];
  // Accept either an icon component (`Icon`) from client callers, or a
  // pre-rendered icon node (`icon`) passed across the RSC boundary.
  const iconNode = f.icon ?? (f.Icon ? <f.Icon size={22} strokeWidth={1.8} /> : null);

  return (
    <div className="pt-4">
      {/* stacked deck */}
      <div className="relative">
        {/* ghost layers behind */}
        <div className="absolute inset-0 z-0 rounded-[22px] bg-[#eef0f5] border border-line -translate-y-4 scale-[.90] origin-top" />
        <div className="absolute inset-0 z-[1] rounded-[22px] bg-white border border-line -translate-y-2 scale-[.95] origin-top" />

        {/* front card */}
        <div key={index} className="relative z-10 bg-white border border-line rounded-[22px] p-7 shadow-soft [animation:fadeSlide_.4s_ease]">
          <div className="w-12 h-12 rounded-[14px] bg-primary-soft text-primary grid place-items-center">
            {iconNode}
          </div>
          <h3 className="font-heading font-bold text-[19px] text-ink mt-5">{f.t}</h3>
          <p className="text-sm text-muted mt-2 leading-[1.6]">{f.d}</p>
        </div>
      </div>

      {/* segmented control */}
      <div className="flex items-center justify-center flex-wrap gap-1.5 mt-7">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goto(i)}
            aria-label={`Show feature ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-primary" : "w-4 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
