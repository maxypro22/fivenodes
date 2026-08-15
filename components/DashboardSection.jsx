import { CircleCheck } from "lucide-react";
import Tilt3D from "./Tilt3D";

const POINTS = [
  "Real-time AI analytics",
  "Smart workflow monitoring",
  "Predictive insights & reports",
  "Custom dashboard controls",
  "Seamless tool integrations",
];

export default function DashboardSection({
  eyebrow = "AI Powered Dashboard",
  titleLead = "One Dashboard.",
  titleAccent = "Unlimited",
  titleTail = "Possibilities.",
  desc = "Monitor performance, track metrics, and manage your entire AI ecosystem from a single intelligent workspace.",
  points = POINTS,
  imageAlt = "Five Nodes AI dashboard showing total users, AI requests, success rate, performance overview and system health",
}) {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-line-soft overflow-hidden">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] items-center gap-12 lg:gap-16">
        {/* ---------- Copy ---------- */}
        <div>
          <span className="eyebrow reveal text-[11px] tracking-[.16em]">{eyebrow}</span>

          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(30px,4.4vw,52px)] leading-[1.05] tracking-[-.02em] mt-4">
            <span className="text-ink">{titleLead}</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-[#a78bfa] bg-clip-text text-transparent">
              {titleAccent}
            </span>{" "}
            <span className="text-ink">{titleTail}</span>
          </h2>

          <p className="reveal d2 text-muted text-base md:text-lg mt-5 max-w-[520px] leading-[1.6]">
            {desc}
          </p>

          <ul className="reveal d3 mt-8 flex flex-col gap-[18px]">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CircleCheck
                  size={22}
                  strokeWidth={1.8}
                  className="shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-ink-2 text-[15px] md:text-[17px]">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Dashboard shot ---------- */}
        <div className="reveal d2 relative">
          {/* soft glow behind the frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 rounded-[40px] bg-gradient-to-tr from-primary/20 via-[#a78bfa]/10 to-transparent blur-2xl"
          />
          <Tilt3D>
            <div className="relative rounded-[20px] md:rounded-[26px] p-[6px] md:p-[10px] bg-[#0b1020] border border-white/10 shadow-[0_40px_90px_-40px_rgba(8,11,22,.7)]">
              <div className="relative rounded-[14px] md:rounded-[18px] overflow-hidden bg-[#f7f8fb]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/dashboard-preview.jpg"
                  alt={imageAlt}
                  width={1800}
                  height={1005}
                  className="block w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Tilt3D>
        </div>
      </div>
    </section>
  );
}
