import { PhoneCall, MessageSquare, Send, CalendarCheck, Bot, Bell } from "lucide-react";

// Outer nodes positioned as % of the 520 x 460 stage
const NODES = [
  { Icon: PhoneCall, label: "Voice", x: 13.5, y: 26 },
  { Icon: MessageSquare, label: "WhatsApp", x: 13.5, y: 50 },
  { Icon: Send, label: "Telegram", x: 13.5, y: 74 },
  { Icon: CalendarCheck, label: "Booking", x: 86.5, y: 26 },
  { Icon: Bot, label: "AI Agent", x: 86.5, y: 50 },
  { Icon: Bell, label: "Notify", x: 86.5, y: 74 },
];

// Base beam paths in the 520 x 460 viewBox (outer edge -> center)
const BEAMS = [
  { d: "M112,120 C 190,120 195,230 250,230", color: "#2563eb" },
  { d: "M112,230 L 250,230", color: "#2563eb" },
  { d: "M112,340 C 190,340 195,230 250,230", color: "#2563eb" },
  { d: "M408,120 C 330,120 325,230 270,230", color: "#6d5efc" },
  { d: "M408,230 L 270,230", color: "#6d5efc" },
  { d: "M408,340 C 330,340 325,230 270,230", color: "#6d5efc" },
];

// Three parallel tracks per connection
const OFFSETS = [-6, 0, 6];

export default function IntegrationHub() {
  return (
    <div className="reveal d2 relative w-full max-w-[520px] mx-auto aspect-[520/460] rounded-[28px] overflow-hidden border border-white/70 bg-white/55 backdrop-blur-2xl shadow-[0_30px_70px_-25px_rgba(16,22,41,.28)]">
      {/* frosted-glass depth: soft color blobs */}
      <div className="absolute -top-16 -left-10 w-56 h-56 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-[#6d5efc]/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.04) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* central glow */}
      <div className="hub-glow absolute left-1/2 top-1/2 w-52 h-52 rounded-full bg-primary/25 blur-3xl pointer-events-none" />

      {/* beams — 3 parallel tracks each */}
      <svg viewBox="0 0 520 460" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none">
        {BEAMS.map((beam, i) =>
          OFFSETS.map((off, j) => (
            <g key={`${i}-${j}`} transform={`translate(0 ${off})`}>
              <path d={beam.d} stroke="rgba(15,23,42,.11)" strokeWidth="1" />
              <path
                d={beam.d}
                pathLength="100"
                strokeDasharray="9 100"
                className="beam"
                stroke={beam.color}
                strokeWidth="1.75"
                strokeLinecap="round"
                style={{
                  animationDelay: `${i * 0.3 + j * 0.18}s`,
                  filter: "drop-shadow(0 0 4px currentColor)",
                }}
              />
            </g>
          ))
        )}
      </svg>

      {/* outer nodes */}
      {NODES.map(({ Icon, label, x, y }) => (
        <div
          key={label}
          className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          {/* tooltip */}
          <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 translate-y-1 scale-90 transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <span className="relative block bg-ink text-white text-[11px] font-semibold px-2.5 py-1 rounded-md whitespace-nowrap shadow-lg">
              {label}
              <span className="absolute left-1/2 -translate-x-1/2 top-full -mt-1 w-1.5 h-1.5 bg-ink rotate-45" />
            </span>
          </div>
          <div className="w-[54px] h-[54px] md:w-[58px] md:h-[58px] rounded-2xl bg-white/80 border border-black/[.06] backdrop-blur grid place-items-center text-ink-2 shadow-[0_6px_16px_-8px_rgba(16,22,41,.35)] transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:border-primary/40 group-hover:shadow-[0_10px_24px_-8px_rgba(37,99,235,.4)]">
            <Icon size={23} strokeWidth={1.8} />
          </div>
        </div>
      ))}

      {/* center node — brand logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="hub-core relative w-[108px] h-[108px] rounded-[26px] grid place-items-center bg-white border border-white/70 shadow-[0_12px_30px_-8px_rgba(37,99,235,.45)]">
          <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="w-[72%] h-auto" />
        </div>
      </div>
    </div>
  );
}
