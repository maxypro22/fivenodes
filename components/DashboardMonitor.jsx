"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Headset } from "lucide-react";

// Compact "ops dashboard" mockup for Launch & Ongoing Support — an uptime
// ring, two SLA stat tiles, and a task list that draws in on mount, then
// keeps cycling which task is "active" forever (same rotating-highlight
// mechanic as WorkflowScan) so the card stays in motion like its siblings.
// Fixed white/black card matching WorkflowScan and DashboardIntegration.
// Each task cycles through its own little sequence of percentages over time
// (locale-independent — only the label needs translating), so the bars keep
// moving instead of settling once after the initial draw-in.
const TASK_KEYS = ["tuning", "report", "review"];
const PCT_SEQUENCES = {
  tuning: [82, 90, 96, 88],
  report: [55, 68, 74, 60],
  review: [100, 100, 100, 100], // already complete — stays put
};
const LABELS_BY_LOCALE = {
  en: { tuning: "Performance Tuning", report: "Monthly Report", review: "Account Review" },
  ar: { tuning: "ضبط الأداء", report: "التقرير الشهري", review: "مراجعة الحساب" },
};

const STATS_BY_LOCALE = {
  en: [
    { Icon: Clock, label: "Avg Response", value: "1.2h" },
    { Icon: Headset, label: "Active Tickets", value: "3" },
  ],
  ar: [
    { Icon: Clock, label: "متوسط الاستجابة", value: "1.2س" },
    { Icon: Headset, label: "تذاكر نشطة", value: "3" },
  ],
};

const UPTIME_LABEL = { en: "Uptime", ar: "التشغيل" };

const R = 42;
const CIRCUMFERENCE = 2 * Math.PI * R;
const INTERVAL = 2200;

export default function DashboardMonitor({ locale = "en" }) {
  const labels = LABELS_BY_LOCALE[locale] || LABELS_BY_LOCALE.en;
  const stats = STATS_BY_LOCALE[locale] || STATS_BY_LOCALE.en;
  const uptimeLabel = UPTIME_LABEL[locale] || UPTIME_LABEL.en;
  const [drawn, setDrawn] = useState(false);
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  const tasks = TASK_KEYS.map((key) => ({
    key,
    label: labels[key],
    pct: PCT_SEQUENCES[key][tick % PCT_SEQUENCES[key].length],
  }));

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % TASK_KEYS.length);
      setTick((t) => t + 1);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl bg-white dark:bg-black border border-line overflow-hidden p-4 flex flex-col gap-3">
      <div className="flex gap-3 flex-1 min-h-0">
        {/* uptime ring */}
        <div className="shrink-0 w-[104px] h-[104px] relative grid place-items-center">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r={R} fill="none" stroke="currentColor" strokeWidth="8" className="text-line" />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              stroke="currentColor"
              className="text-primary transition-all duration-[1400ms] ease-out"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={drawn ? CIRCUMFERENCE * 0.01 : CIRCUMFERENCE}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-heading font-extrabold text-[20px] text-ink leading-none">99%</span>
            <span className="text-[9px] text-muted-2 mt-1">{uptimeLabel}</span>
          </div>
        </div>

        {/* SLA stat tiles */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          {stats.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex-1 rounded-lg border border-line bg-bg dark:bg-[#0c0c10] px-3 py-2 flex items-center gap-2.5 min-w-0"
            >
              <span className="shrink-0 w-7 h-7 rounded-md bg-primary-soft text-primary grid place-items-center">
                <Icon size={14} strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <div className="font-heading font-bold text-[15px] text-ink leading-none">{value}</div>
                <div className="text-[9.5px] text-muted-2 mt-1 truncate">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ongoing task list — highlight cycles forever, same mechanic as WorkflowScan */}
      <div className="flex flex-col gap-2 shrink-0">
        {tasks.map(({ label, pct }, i) => {
          const isDone = pct >= 100;
          const isActive = i === active;
          return (
            <div key={label} className="flex items-center gap-2.5">
              {isDone ? (
                <CheckCircle2 size={13} strokeWidth={2.2} className="shrink-0 text-[#4ade80]" />
              ) : isActive ? (
                <span className="relative flex w-[13px] h-[13px] shrink-0">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70" />
                  <span className="relative w-[13px] h-[13px] rounded-full border-2 border-primary" />
                </span>
              ) : (
                <span className="shrink-0 w-[13px] h-[13px] rounded-full border-2 border-line" />
              )}
              <span
                className={`text-[11px] w-[108px] truncate shrink-0 transition-colors duration-300 ${
                  isActive ? "text-ink font-semibold" : "text-ink-2 font-medium"
                }`}
              >
                {label}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-[1200ms] ease-out ${
                    isDone ? "bg-[#4ade80]" : isActive ? "bg-primary" : "bg-primary/40"
                  }`}
                  style={{ width: drawn ? `${pct}%` : "0%", transitionDelay: `${200 + i * 150}ms` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
