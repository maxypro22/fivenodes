import Link from "next/link";
import CountUp from "./CountUp";
import RotatingTagline from "./RotatingTagline";
import Integrations from "./Integrations";

function Stat({ lbl, children }) {
  return (
    <div>
      <div className="font-heading font-extrabold text-[clamp(22px,2.4vw,28px)] text-ink">{children}</div>
      <div className="text-xs text-muted-2 mt-1">{lbl}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-10 pb-8 md:pt-14 md:pb-10">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1.02fr_1fr] items-center gap-12 lg:gap-14">
        {/* ---------- Copy ---------- */}
        <div>
          <span className="eyebrow reveal text-[11px] tracking-[.16em]">AI Company in Qatar</span>
          <h1 className="reveal d1 font-heading font-extrabold text-[clamp(29px,3.5vw,44px)] leading-[1.12] tracking-[-.028em] mt-4 mb-3">
            <span className="text-ink">Bilingual WhatsApp &amp;</span>
            <br />
            <span className="text-primary">Voice Agents</span>{" "}
            <span className="text-[#9aa7c7]">for Businesses</span>
          </h1>
          <RotatingTagline />
          <p className="reveal d1 font-heading font-semibold text-ink-2 text-[clamp(14px,1.15vw,16px)] leading-[1.5] tracking-[-.01em] mb-3 max-w-[460px]">
            Bilingual AI agents that book, message and automate operations in Qatar.
          </p>
          <p className="reveal d2 text-[13.5px] text-muted max-w-[450px] leading-[1.7]">
            Five Nodes is an AI company in Qatar. We build bilingual AI agents — AI voice agents,
            WhatsApp AI agents, and AI automation — that run inside your real operations in Arabic
            and English, 24/7.
          </p>
          <div className="reveal d3 flex gap-[14px] mt-7 mb-[22px] flex-wrap">
            <Link href="/contact" className="btn btn-primary px-[22px] py-[13px]">
              Book a Free Consultation
            </Link>
            <Link href="/services" className="btn btn-ghost px-[22px] py-[13px]">
              View Services
            </Link>
          </div>
          <div className="reveal d3 flex items-center gap-[10px] text-[13px] text-muted">
            <span className="bg-surface border border-line rounded-full px-[10px] py-1 font-bold text-ink flex items-center gap-[6px]">
              <span className="text-[#f5a623]">★</span> 4.8
            </span>
            <span>Customer rating · 10K+ calls handled</span>
          </div>
        </div>

        {/* ---------- Video ---------- */}
        <div className="reveal d2 relative">
          <div className="relative rounded-[26px] md:rounded-[34px] p-[1px] bg-gradient-to-br from-white/90 via-white/30 to-primary/25 shadow-[0_40px_90px_-40px_rgba(16,22,41,.55)]">
            <div className="relative rounded-[25px] md:rounded-[33px] overflow-hidden bg-[#0b1020] aspect-[16/13] sm:aspect-[16/11] lg:aspect-[5/4]">
              <video
                className="absolute inset-0 w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
              >
                <source src="/hero-robot.mp4" type="video/mp4" />
              </video>

              {/* cinematic grade: vignette + bottom fade for chip legibility */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070b16]/70 via-transparent to-[#070b16]/20" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_18px_rgba(7,11,22,.45)]" />
              {/* inner hairline */}
              <div className="absolute inset-0 pointer-events-none rounded-[25px] md:rounded-[33px] ring-1 ring-inset ring-white/12" />

              {/* live chip */}
              <div dir="ltr" className="absolute left-4 top-4 md:left-5 md:top-5 flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[11px] md:text-xs font-semibold text-white">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-[#4ade80] animate-ping opacity-75" />
                  <span className="relative w-2 h-2 rounded-full bg-[#4ade80]" />
                </span>
                Live agents · Arabic &amp; English
              </div>

              {/* bottom caption */}
              <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5 flex items-end justify-between gap-3">
                <p className="text-white font-heading font-semibold text-[13px] md:text-[15px] leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,.6)]">
                  Voice · WhatsApp · Automation
                  <span className="block text-white/70 font-body font-normal text-[11px] md:text-xs mt-0.5">
                    Working inside your real operations
                  </span>
                </p>
                <span className="hidden sm:inline-flex shrink-0 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white">
                  24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Integrations marquee ---------- */}
      <div className="reveal d3 wrap mt-10 md:mt-12">
        <Integrations />
      </div>

      {/* ---------- Stat bar ---------- */}
      <div className="wrap mt-10 md:mt-12">
        <div className="reveal d4 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 pt-8 border-t border-line">
          <Stat lbl="Booking efficiency">
            <CountUp value={93} suffix="%" />
          </Stat>
          <Stat lbl="Uptime">
            <CountUp value={99.9} suffix="%" decimals={1} />
          </Stat>
          <Stat lbl="Calls handled">
            <CountUp value={10} suffix="K+" />
          </Stat>
          <Stat lbl="Customer Rating">
            <CountUp value={4.8} decimals={1} />
          </Stat>
        </div>
      </div>
    </section>
  );
}
