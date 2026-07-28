"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="bg-surface border border-line rounded-[16px] overflow-hidden transition-colors hover:border-primary/40"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-[16px] text-ink">{it.q}</span>
              <span
                className={`shrink-0 w-7 h-7 rounded-full bg-primary-soft text-primary grid place-items-center transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-smooth ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] text-muted leading-[1.7]">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
