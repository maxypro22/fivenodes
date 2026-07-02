import Link from "next/link";
import IntegrationHub from "./IntegrationHub";
import CountUp from "./CountUp";

function Stat({ lbl, children }) {
  return (
    <div>
      <div className="font-heading font-extrabold text-[26px] text-ink">{children}</div>
      <div className="text-xs text-muted-2 mt-0.5">{lbl}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 pb-20">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Readability scrims — keep dark hero text crisp over the video */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-bg via-bg/92 to-bg/45" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-bg via-transparent to-bg/50" />
      <div className="absolute right-[-10%] top-[-20%] w-[70%] h-[120%] z-0 pointer-events-none bg-[radial-gradient(closest-side,rgba(96,165,250,.28),rgba(96,165,250,0)_70%)] blur-[10px]" />

      <div className="wrap relative z-[1] grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] items-center gap-10">
        <div>
          <span className="eyebrow reveal">AI Company in Qatar</span>
          <h1 className="reveal d1 font-serif font-normal text-[clamp(38px,5vw,62px)] leading-[1.05] tracking-[-.01em] mt-5 mb-4">
            <span className="text-ink">Bilingual WhatsApp &amp;</span>
            <br />
            <span className="text-primary">Voice Agents</span>{" "}
            <span className="text-[#9aa7c7]">for Businesses</span>
          </h1>
          <p className="reveal d1 font-heading font-semibold text-ink-2 text-[clamp(16px,1.7vw,21px)] leading-snug mb-[18px] max-w-[500px]">
            Bilingual AI agents that book, message and automate operations in Qatar.
          </p>
          <p className="reveal d2 text-base text-muted max-w-[490px] leading-[1.65]">
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
            <span className="bg-white border border-line rounded-full px-[10px] py-1 font-bold text-ink flex items-center gap-[6px]">
              <span className="text-[#f5a623]">★</span> 4.8
            </span>
            <span>Customer rating · 10K+ calls handled</span>
          </div>
          <div className="reveal d4 flex gap-10 mt-[38px] flex-wrap">
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

        <IntegrationHub />
      </div>
    </section>
  );
}
