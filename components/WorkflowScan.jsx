"use client";

import { useEffect, useState } from "react";
import { ClipboardList, Route, Sparkles, Target, TrendingUp, Check } from "lucide-react";

// Icon components can't cross the server->client prop boundary (app/ar/page.jsx
// exports metadata, so it must stay a Server Component) — both language
// variants live here instead, picked by a plain string prop.
const STEPS_BY_LOCALE = {
  en: [
    { Icon: ClipboardList, label: "Business & Workflow Audit" },
    { Icon: Route, label: "Map Customer Touchpoints" },
    { Icon: Sparkles, label: "Identify AI Opportunities" },
    { Icon: Target, label: "Define Agent Scope" },
    { Icon: TrendingUp, label: "Set ROI Benchmarks" },
  ],
  ar: [
    { Icon: ClipboardList, label: "تدقيق الأعمال وسير العمل" },
    { Icon: Route, label: "تحديد نقاط تواصل العملاء" },
    { Icon: Sparkles, label: "تحديد فرص الذكاء الاصطناعي" },
    { Icon: Target, label: "تحديد نطاق الوكيل" },
    { Icon: TrendingUp, label: "وضع مؤشرات العائد" },
  ],
};

const INTERVAL = 2100;

// Animated "workflow automation" mockup — one step lights up solid and gets a
// checkmark, then the highlight auto-advances down the list on a timer.
// Solid white card in light mode, solid black in dark mode — no edge mask,
// since fading the card's own edges let the page background bleed through
// and looked like a broken gradient. The active pill reuses the
// primary/text-on-primary tokens so its accent still follows the site's
// light/dark toggle (blue vs. lavender).
export default function WorkflowScan({ locale = "en" }) {
  const steps = STEPS_BY_LOCALE[locale] || STEPS_BY_LOCALE.en;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center gap-2.5 px-5 py-6 rounded-2xl bg-white dark:bg-black border border-line">
      {steps.map(({ Icon, label }, i) => {
        const isActive = i === active;
        const isPast = i < active;
        return (
          <div key={label} className="flex items-center gap-2.5">
            <div
              className={`flex-1 flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 transition-all duration-500 ease-out ${
                isActive
                  ? "bg-primary border-primary shadow-[0_8px_20px_-6px_rgba(37,99,235,.4)] dark:shadow-[0_8px_20px_-6px_rgba(189,167,254,.4)]"
                  : isPast
                    ? "border-[#e9ecf3] dark:border-[#1c1a22] opacity-40"
                    : "border-[#e2e6ef] dark:border-[#242230] opacity-100"
              }`}
            >
              <Icon size={15} strokeWidth={1.8} className={isActive ? "text-on-primary" : "text-[#8b93a7] dark:text-[#918da3]"} />
              <span
                className={`text-[12.5px] font-medium leading-tight ${
                  isActive ? "text-on-primary" : "text-[#3d4457] dark:text-[#dcd9e6]"
                }`}
              >
                {label}
              </span>
            </div>
            <span
              className={`shrink-0 grid place-items-center w-7 h-7 rounded-full border-2 border-primary text-primary transition-all duration-500 ease-out ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            >
              <Check size={13} strokeWidth={3} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
