import LazyVideo from "./LazyVideo";
import { PROCESS } from "./data";

const ACCENT = "#3857e9";

const META = [
  { sub: "Audit • Workflows • ROI", video: "/process-1-2.mp4" },
  { sub: "Configure • Train • Integrate", video: "/process-2.mp4" },
  { sub: "Deploy • Monitor • Optimize", video: "/process-3-3.mp4" },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 bg-bg border-y border-line-soft">
      {/* soft glass backdrop tints */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-[#3857e9]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-1/4 w-96 h-96 rounded-full bg-[#3857e9]/[.07] blur-3xl" />

      <div className="wrap relative">
        <div className="text-center max-w-[640px] mx-auto">
          <span className="eyebrow reveal inline-flex justify-center">How it works</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
            From strategy to launch in three steps
          </h2>
          <p className="reveal d2 text-muted text-base mt-[14px] mx-auto">
            We map your workflows, build and integrate your AI agents, then launch with dedicated
            ongoing support.
          </p>
        </div>

        {/* Connector tree (desktop) with animated flow into cards */}
        <div className="reveal d1 hidden lg:block relative h-[104px] mt-14 -mb-4">
          <svg viewBox="0 0 1200 104" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" fill="none">
            {/* static tree */}
            <path
              d="M600 4 V22 M200 22 H1000 M200 22 V100 M600 22 V100 M1000 22 V100"
              stroke="rgba(56,87,233,.22)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* animated pulses — all #3857e9 */}
            <path d="M600 22 H200 V100" pathLength="100" strokeDasharray="14 100" className="beam" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" style={{ animationDelay: "0s", filter: `drop-shadow(0 0 5px ${ACCENT})` }} />
            <path d="M600 22 V100" pathLength="100" strokeDasharray="14 100" className="beam" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" style={{ animationDelay: ".55s", filter: `drop-shadow(0 0 5px ${ACCENT})` }} />
            <path d="M600 22 H1000 V100" pathLength="100" strokeDasharray="14 100" className="beam" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" style={{ animationDelay: "1.1s", filter: `drop-shadow(0 0 5px ${ACCENT})` }} />
          </svg>
          {/* parent node */}
          <span className="absolute left-1/2 -translate-x-1/2 top-0 w-2.5 h-2.5 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 12px ${ACCENT}` }} />
          {/* glowing junction dots at each card top */}
          {["16.66%", "50%", "83.34%"].map((l, i) => (
            <span
              key={i}
              className="absolute -translate-x-1/2 w-2.5 h-2.5 rounded-full bottom-0"
              style={{ left: l, background: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }}
            />
          ))}
        </div>

        {/* Cards — white glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-12 lg:mt-0">
          {PROCESS.map((s, i) => {
            const { sub, video } = META[i];
            return (
              <div
                key={s.n}
                className={`reveal d${i + 1} group relative overflow-hidden rounded-[22px] border border-black/[.06] bg-white/70 backdrop-blur-xl shadow-[0_24px_55px_-26px_rgba(16,22,41,.3)] transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-[#3857e9]/30 hover:shadow-[0_30px_60px_-24px_rgba(56,87,233,.28)]`}
              >
                {/* top half: video */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <LazyVideo src={video} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {/* fade into the card body */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/95 to-transparent" />
                  {/* color accent line */}
                  <div className="absolute inset-x-0 bottom-0 h-[3px]" style={{ background: ACCENT, boxShadow: `0 0 12px ${ACCENT}` }} />
                </div>

                {/* bottom half: content */}
                <div className="relative p-7">
                  <div className="text-[11px] font-bold tracking-[.16em] mb-2" style={{ color: ACCENT }}>
                    {s.n}
                  </div>
                  <h4 className="font-heading font-bold text-[17px] uppercase tracking-[.04em] text-ink">
                    {s.t}
                  </h4>
                  <p className="text-[13px] text-muted-2 mt-1.5">{sub}</p>
                  <p className="text-sm text-muted mt-3 leading-[1.6]">{s.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
