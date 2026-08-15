import Link from "next/link";
import CountUp from "./CountUp";
import RotatingTagline from "./RotatingTagline";
import Integrations from "./Integrations";
import RainingLetters from "./RainingLetters";
import ScrambleText from "./ScrambleText";

/* The word that decodes under the headline, as on the production site. */
const SCRAMBLE_WORDS = [
  "Operations",
  "Calls",
  "Support",
  "Bookings",
  "Documents",
  "Workflows",
];

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
      <RainingLetters charCount={200}>
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

          {/* decoding word, as on the production hero */}
          <div className="reveal d1 mb-3 flex items-baseline gap-2.5">
            <span className="font-heading font-extrabold text-ink text-[clamp(20px,2.2vw,28px)] leading-none">
              Automate
            </span>
            <ScrambleText
              words={SCRAMBLE_WORDS}
              className="scramble-word font-heading font-extrabold text-primary text-[clamp(20px,2.2vw,28px)] leading-none"
            />
          </div>

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

        {/* ---------- Visual slot ----------
            Intentionally empty: ScrollMediaTransfer paints the hero video over
            this box and animates it down into the VoicePlatform slot. */}
        <div
          data-transfer-slot="hero"
          className="relative aspect-[16/13] sm:aspect-[16/11] lg:aspect-[5/4]"
        />
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
      </RainingLetters>
    </section>
  );
}
