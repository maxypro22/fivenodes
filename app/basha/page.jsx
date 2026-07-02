import Link from "next/link";
import { Moon, Users, Plane, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import {
  BASHA_AWAY,
  BASHA_CAPABILITIES,
  BASHA_DIALOGUE,
  BASHA_STEPS,
  BASHA_IS,
  BASHA_ISNT,
  BASHA_STATS,
} from "@/components/content";

export const metadata = {
  title: "Basha AI — The Intelligent Manager You Can Call | Five Nodes",
  description:
    "Basha watches your business while you're away — an AI manager that reads every conversation across WhatsApp, Instagram, voice and chat, 24/7, in Arabic and English. Call it for a brief.",
};

const AWAY_ICONS = [Moon, Users, Plane, Clock];

export default function BashaPage() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHeader eyebrow="Basha AI" title="Basha باشا">
        The Intelligent Manager you can call. Basha watches your business while you're away — while
        you sleep, while you're in meetings, while the office is closed.
      </PageHeader>
      <div className="reveal d2 flex justify-center -mt-2 pb-4">
        <Link href="/contact" className="btn btn-primary px-[22px] py-[13px]">
          Book a call
        </Link>
      </div>

      {/* 2. While you're away */}
      <section className="py-20 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center max-w-[640px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">While you're away</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3">
              Your business doesn't stop when you do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mt-12">
            {BASHA_AWAY.map((a, i) => {
              const Icon = AWAY_ICONS[i];
              return (
                <div key={a.t} className={`reveal d${(i % 4) + 1} bg-bg border border-line rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}>
                  <div className="w-12 h-12 rounded-[14px] bg-primary-soft text-primary grid place-items-center">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading font-bold text-[17px] text-ink mt-5">{a.t}</h3>
                  <p className="text-sm text-muted mt-2 leading-[1.6]">{a.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Capabilities */}
      <section className="py-24">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">What Basha Does</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              The manager who reads every single conversation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-11">
            {BASHA_CAPABILITIES.map((c, i) => (
              <div
                key={c.t}
                className={`reveal d${(i % 3) + 1} bg-white border border-line rounded-[20px] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-[18px] mt-5 text-ink">{c.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Just call Basha */}
      <section className="py-24 bg-surface border-y border-line-soft">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow reveal">Just call Basha</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Your brief is one call away
            </h2>
            <p className="reveal d2 text-muted text-base leading-[1.7] mt-4 max-w-[460px]">
              Basha is a voice agent. Call it the way you'd call your executive assistant and get a
              straight answer about your business in seconds.
            </p>
          </div>
          {/* sample dialogue */}
          <div className="reveal d1 bg-bg border border-line rounded-[22px] p-6 shadow-card">
            <div className="flex flex-col gap-4">
              {BASHA_DIALOGUE.map((d, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="self-end max-w-[80%] bg-primary text-white rounded-2xl rounded-br-sm px-4 py-2.5 text-sm">
                    {d.q}
                  </div>
                  <div className="self-start max-w-[85%] bg-white border border-line rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-ink-2">
                    {d.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-24">
        <div className="wrap">
          <div className="text-center max-w-[620px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">How it works</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Live in days. Watching from day one.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-12">
            {BASHA_STEPS.map((s) => (
              <div key={s.n} className="reveal d1 bg-white border border-line rounded-[20px] p-7 shadow-card">
                <div className="font-heading font-extrabold text-2xl text-primary/30">{s.n}</div>
                <h4 className="font-heading font-bold text-lg mt-2 text-ink">{s.t}</h4>
                <p className="text-sm text-muted mt-2 leading-[1.6]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. A manager you call, not a chatbot */}
      <section className="py-24 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center max-w-[640px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">Make no mistake</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              A manager you call. Not a chatbot.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-12 max-w-[880px] mx-auto">
            <div className="reveal d1 bg-bg border border-line rounded-[20px] p-7">
              <h3 className="font-heading font-bold text-lg text-ink mb-4">What Basha IS</h3>
              <ul className="flex flex-col gap-3">
                {BASHA_IS.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-ink-2">
                    <span className="w-5 h-5 rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal d2 bg-bg border border-line rounded-[20px] p-7">
              <h3 className="font-heading font-bold text-lg text-ink mb-4">What Basha ISN'T</h3>
              <ul className="flex flex-col gap-3">
                {BASHA_ISNT.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-muted">
                    <span className="w-5 h-5 rounded-full bg-[#fdecec] text-[#dc2626] grid place-items-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] mt-10 max-w-[760px] mx-auto">
            {BASHA_STATS.map(([n, l], i) => (
              <div key={l} className={`reveal d${(i % 4) + 1} bg-white border border-line rounded-[16px] p-5 text-center shadow-card`}>
                <div className="font-heading font-extrabold text-[22px] text-primary">{n}</div>
                <div className="text-[11px] text-muted mt-1 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <CTASection
        title="Put Basha to work"
        text="Give your business a manager you can call, any time. See Basha read your conversations, score your team, and brief you out loud like the best assistant you've ever hired. Book a 30-minute call. No pitch, just a live look."
        primary={["Book a call", "/contact"]}
        secondary={["Contact us", "/contact"]}
      />
    </main>
  );
}
