"use client";

import { useState } from "react";
import {
  PhoneCall,
  MessagesSquare,
  Radar,
  CalendarCheck,
  Workflow,
  ChartNoAxesCombined,
  BrainCircuit,
  BellRing,
} from "lucide-react";

/* One icon per solution, in the order the cards are listed. The Arabic page
   passes its own translated array in the same order, so both locales match.
   An item can override this by carrying its own `Icon`. */
const SOLUTION_ICONS = [
  PhoneCall, // AI Voice Solutions
  MessagesSquare, // AI Chat & Messaging
  Radar, // Omnichannel Monitoring
  CalendarCheck, // Smart Booking
  Workflow, // Workflow Automation
  ChartNoAxesCombined, // Data & Intelligence
  BrainCircuit, // AI Customer Memory
  BellRing, // Smart Notifications
];

export default function SolutionCard({ m, index }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const Icon = m.Icon || SOLUTION_ICONS[index % SOLUTION_ICONS.length];

  return (
    <div className={`group relative h-full ${open ? "z-30" : "z-0 hover:z-30"}`}>
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
        className={`relative z-10 flex h-full flex-col cursor-pointer select-none bg-surface border rounded-[24px] px-7 pt-8 pb-7 shadow-card text-center transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-hover hover:border-primary/70 ${
          open ? "border-primary/70 -translate-y-1 shadow-hover" : "border-line"
        }`}
      >
        {/* glossy sheen */}
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-b from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-1 flex-col">
          <div
            className={`mx-auto w-14 h-14 rounded-[16px] grid place-items-center transition-all duration-300 ease-smooth group-hover:bg-gradient-to-br group-hover:from-[#2563eb] group-hover:to-[#4f46e5] group-hover:text-white group-hover:shadow-[0_12px_26px_-8px_rgba(37,99,235,.7)] group-hover:scale-105 dark:group-hover:from-primary dark:group-hover:to-primary-dark dark:group-hover:text-on-primary dark:group-hover:shadow-[0_12px_26px_-8px_rgba(189,167,254,.5)] ${
              open
                ? "bg-gradient-to-br from-[#2563eb] to-[#4f46e5] text-white shadow-[0_12px_26px_-8px_rgba(37,99,235,.7)] scale-105 dark:from-primary dark:to-primary-dark dark:text-on-primary dark:shadow-[0_12px_26px_-8px_rgba(189,167,254,.5)]"
                : "bg-primary-soft text-badge"
            }`}
          >
            <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 className="font-heading font-bold text-[20px] text-ink mt-5">{m.t}</h3>
          <p className="text-sm text-muted mt-2 leading-[1.55] max-w-[260px] mx-auto">{m.tag}</p>

          {/* chevron indicator */}
          <div className="mt-auto pt-6 flex justify-center">
            <span
              className={`w-11 h-11 rounded-full bg-surface border-2 grid place-items-center shadow-[0_6px_16px_-8px_rgba(16,22,41,.4)] transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_10px_22px_-8px_rgba(37,99,235,.55)] dark:group-hover:shadow-[0_10px_22px_-8px_rgba(189,167,254,.4)] ${
                open
                  ? "border-primary text-primary shadow-[0_10px_22px_-8px_rgba(37,99,235,.55)] dark:shadow-[0_10px_22px_-8px_rgba(189,167,254,.4)]"
                  : "border-line text-ink-2"
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
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#2563eb] to-[#4f46e5] dark:from-primary dark:to-primary-dark p-2.5 shadow-[0_28px_60px_-20px_rgba(37,99,235,.7)] dark:shadow-[0_28px_60px_-20px_rgba(189,167,254,.4)]">
          <div className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full bg-white/15 blur-2xl" />
          {m.f.map((f, idx) => (
            <div
              key={f}
              className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-white dark:text-on-primary text-[14px] font-medium transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:translate-x-0 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
              style={{ transitionDelay: `${120 + idx * 75}ms` }}
            >
              <span className="grid place-items-center w-5 h-5 rounded-full bg-white/20 shrink-0">
                <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 text-white dark:text-on-primary">
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
