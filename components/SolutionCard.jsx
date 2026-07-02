"use client";

import { useState } from "react";

export default function SolutionCard({ m, index }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <div className={`group relative ${open ? "z-30" : "z-0 hover:z-30"}`}>
      {/* Top card — hover (desktop) or tap (phone) to reveal */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className={`relative z-10 cursor-pointer select-none bg-white border rounded-[24px] px-7 pt-8 pb-7 shadow-card text-center transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-hover hover:border-primary/70 ${
          open ? "border-primary/70 -translate-y-1 shadow-hover" : "border-line"
        }`}
      >
        {/* glossy sheen */}
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-b from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div
            className={`mx-auto w-14 h-14 rounded-[16px] font-heading font-extrabold text-lg grid place-items-center transition-all duration-300 ease-smooth group-hover:bg-gradient-to-br group-hover:from-[#2563eb] group-hover:to-[#4f46e5] group-hover:text-white group-hover:shadow-[0_12px_26px_-8px_rgba(37,99,235,.7)] group-hover:scale-105 ${
              open
                ? "bg-gradient-to-br from-[#2563eb] to-[#4f46e5] text-white shadow-[0_12px_26px_-8px_rgba(37,99,235,.7)] scale-105"
                : "bg-primary-soft text-badge"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-heading font-bold text-[20px] text-ink mt-5">{m.t}</h3>
          <p className="text-sm text-muted mt-2 leading-[1.55] max-w-[260px] mx-auto">{m.tag}</p>

          {/* chevron indicator */}
          <div className="mt-6 flex justify-center">
            <span
              className={`w-11 h-11 rounded-full bg-white border-2 grid place-items-center shadow-[0_6px_16px_-8px_rgba(16,22,41,.4)] transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_10px_22px_-8px_rgba(37,99,235,.55)] ${
                open ? "border-primary text-primary shadow-[0_10px_22px_-8px_rgba(37,99,235,.55)]" : "border-line text-ink-2"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`w-4 h-4 transition-transform duration-500 group-hover:rotate-180 ${open ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Expanding detail card */}
      <div
        className={`absolute left-0 right-0 top-full z-20 pt-3 transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-3 scale-[.97] pointer-events-none"
        }`}
      >
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#2563eb] to-[#4f46e5] p-2.5 shadow-[0_28px_60px_-20px_rgba(37,99,235,.7)]">
          <div className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full bg-white/15 blur-2xl" />
          {m.f.map((f, idx) => (
            <div
              key={f}
              className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-white text-[14px] font-medium transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:translate-x-0 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
              style={{ transitionDelay: `${120 + idx * 75}ms` }}
            >
              <span className="grid place-items-center w-5 h-5 rounded-full bg-white/20 shrink-0">
                <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 text-white">
                  <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
