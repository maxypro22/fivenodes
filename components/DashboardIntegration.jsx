import { Database, MessageCircle, Calendar, Users, Zap, BarChart3 } from "lucide-react";

// Six integration nodes wired into a live dashboard mock — replaces the old
// stock "AI Voice Agents use cases" graphic for the Custom Build &
// Integration step. 400x300 viewBox matches the card's 16:12 aspect exactly,
// so the beam paths never stretch or distort.
const NODES = [
  { Icon: Database, x: 12, y: 22, label: "Database" },
  { Icon: MessageCircle, x: 12, y: 50, label: "WhatsApp" },
  { Icon: Calendar, x: 12, y: 78, label: "Calendar" },
  { Icon: Users, x: 88, y: 22, label: "CRM" },
  { Icon: Zap, x: 88, y: 50, label: "API" },
  { Icon: BarChart3, x: 88, y: 78, label: "Analytics" },
];

const BEAMS = [
  "M48,66 C90,66 100,100 116,100",
  "M48,150 L116,150",
  "M48,234 C90,234 100,200 116,200",
  "M352,66 C310,66 300,100 284,100",
  "M352,150 L284,150",
  "M352,234 C310,234 300,200 284,200",
];

const BARS = [46, 72, 34, 88, 58];

const LABEL = { en: "Live Sync", ar: "مزامنة حية" };

export default function DashboardIntegration({ locale = "en" }) {
  return (
    <div className="relative w-full h-full rounded-2xl bg-white dark:bg-black border border-line overflow-hidden">
      {/* faint grid backdrop */}
      <div
        className="absolute inset-0 opacity-[.5] dark:opacity-[.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.05) 1px,transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* animated beams flowing from each integration into the dashboard */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full text-primary"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {BEAMS.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="currentColor" strokeOpacity=".15" strokeWidth="1.5" />
            <path
              d={d}
              pathLength="100"
              strokeDasharray="10 100"
              className="beam"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: `${i * 0.35}s`, filter: "drop-shadow(0 0 3px currentColor)" }}
            />
          </g>
        ))}
      </svg>

      {/* outer integration nodes */}
      {NODES.map(({ Icon, x, y, label }, i) => (
        <div
          key={label}
          title={label}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white dark:bg-[#0c0c10] border border-line grid place-items-center text-ink-2 shadow-[0_6px_14px_-8px_rgba(16,22,41,.35)]"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <Icon size={16} strokeWidth={1.8} />
        </div>
      ))}

      {/* center — live dashboard mock */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[42%] h-[58%] rounded-xl bg-white dark:bg-[#0c0c10] border border-line shadow-[0_18px_44px_-18px_rgba(16,22,41,.4)] p-3 flex flex-col">
        <div className="flex items-center gap-1.5 mb-2.5 shrink-0">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-primary" />
          </span>
          <span className="text-[9px] font-heading font-bold uppercase tracking-[.08em] text-muted-2">
            {LABEL[locale] || LABEL.en}
          </span>
        </div>
        <div className="flex-1 flex items-end gap-1.5">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-primary/80 bar-pulse"
              style={{ height: `${h}%`, animationDelay: `${i * 0.22}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
