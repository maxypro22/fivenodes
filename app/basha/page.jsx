import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  BASHA_AWAY,
  BASHA_CAPABILITIES,
  BASHA_CALL_POINTS,
  BASHA_DIALOGUE,
  BASHA_STEPS,
  BASHA_IS,
  BASHA_ISNT,
  BASHA_STATS,
} from "@/components/content";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "Basha: The AI Manager Your Team Can Call | Five Nodes",
  description:
    "Basha is an AI-powered intelligent manager that watches your business 24/7. It reads every WhatsApp, Instagram, and voice conversation, scores your team, flags problems early, and briefs you out loud when you call. Like an executive assistant who has read everything. Bilingual Arabic and English, built for Qatar.",
  path: "/basha",
  ogTitle: "Basha: The AI Intelligent Manager",
  ogDescription:
    "Basha is an AI-powered intelligent manager that watches your business 24/7. It reads every WhatsApp, Instagram, and voice conversation, scores your team, flags problems early, and briefs you out loud when you call. Bilingual Arabic and English, built for Qatar.",
});

export default function BashaPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-surface pt-16 pb-14">
        <div className="wrap relative z-[1] text-center max-w-[820px] mx-auto">
          <span className="eyebrow reveal inline-flex justify-center">Always watching · never sleeps</span>
          <div className="reveal d1 font-heading font-extrabold text-[clamp(30px,4.6vw,52px)] tracking-[-.02em] mt-4">
            <span className="text-primary">Basha</span> <span className="text-ink">باشا</span>
          </div>
          <h1 className="reveal d1 font-serif font-normal text-[clamp(28px,4vw,46px)] tracking-[-.01em] leading-[1.08] text-ink mt-2">
            The Intelligent Manager you can call.
          </h1>
          <p className="reveal d2 text-muted text-base md:text-lg mt-5 mx-auto max-w-[660px] leading-[1.65]">
            Basha watches your business while you're away: while you sleep, while you're in
            meetings, while the office is closed. It reads every conversation and measures your
            team. Then, whenever you want the picture, you just call. Like an executive assistant
            who has read everything and can brief you in seconds.
          </p>
          <div className="reveal d2 mt-7">
            <Link href="/book-demo" className="btn btn-primary px-[22px] py-[13px]">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      {/* 2. While you're away */}
      <section className="py-20 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center max-w-[720px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">While you're away</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3 leading-[1.15]">
              Your business doesn't stop when you do. Now neither does your oversight.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4 mx-auto">
              Every hour you're not looking is an hour something can go wrong. Basha covers the
              gaps, so the moments you miss don't cost you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mt-12">
            {BASHA_AWAY.map((a, i) => (
              <div key={a.t} className={`reveal d${(i % 4) + 1} bg-bg border border-line rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}>
                <div className="text-3xl">{a.e}</div>
                <h3 className="font-heading font-bold text-[17px] text-ink mt-4">{a.t}</h3>
                <p className="text-sm text-muted mt-2 leading-[1.6]">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Basha does */}
      <section className="py-24">
        <div className="wrap">
          <div className="max-w-[660px]">
            <span className="eyebrow reveal">What Basha does</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              The manager who reads every single conversation.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4">
              Basha does the watching no human manager has time for: every channel, every message,
              around the clock.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-11">
            {BASHA_CAPABILITIES.map((c, i) => (
              <div
                key={c.t}
                className={`reveal d${(i % 3) + 1} bg-surface border border-line rounded-[20px] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold grid place-items-center">
                  {String(i + 1).padStart(2, "0")}
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
              Your brief is one call away.
            </h2>
            <p className="reveal d2 text-muted text-base leading-[1.7] mt-4 max-w-[480px]">
              Basha is a voice agent. Call it the way you'd call your executive assistant and get a
              straight answer about your business in seconds. It has read every conversation, so it
              always knows.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {BASHA_CALL_POINTS.map((p, i) => (
                <li key={i} className={`reveal d${(i % 3) + 1} flex items-start gap-3 text-[15px] text-ink-2`}>
                  <span className="w-5 h-5 rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          {/* dialogue card */}
          <div className="reveal d1 bg-bg border border-line rounded-[22px] p-6 shadow-card">
            <div className="flex items-center gap-3 pb-4 border-b border-line-soft">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#4f46e5] text-white grid place-items-center font-heading font-extrabold">B</span>
              <div>
                <div className="font-heading font-bold text-sm text-ink">Basha</div>
                <div className="flex items-center gap-1.5 text-[12px] text-muted-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> On a call · live
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {BASHA_DIALOGUE.map((d, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="self-end max-w-[80%] bg-primary text-on-primary rounded-2xl rounded-br-sm px-4 py-2.5 text-sm">
                    {d.q}
                  </div>
                  <div className="self-start max-w-[85%] bg-surface border border-line rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-ink-2">
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
              <div key={s.n} className="reveal d1 bg-surface border border-line rounded-[20px] p-7 shadow-card">
                <div className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold grid place-items-center">
                  {s.n}
                </div>
                <h4 className="font-heading font-bold text-lg mt-5 text-ink">{s.t}</h4>
                <p className="text-sm text-muted mt-2 leading-[1.6]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Make no mistake */}
      <section className="py-24 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center max-w-[680px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">Make no mistake</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              A manager you call. Not a chatbot.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4 mx-auto">
              Basha speaks to you, never to your customers. It's your assistant, not their agent.
              That's the whole point.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-12 max-w-[880px] mx-auto">
            <div className="reveal d1 bg-bg border border-line rounded-[20px] p-7">
              <h3 className="font-heading font-bold text-lg text-ink mb-4">What Basha is</h3>
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
              <h3 className="font-heading font-bold text-lg text-ink mb-4">What Basha isn't</h3>
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
              <div key={l} className={`reveal d${(i % 4) + 1} bg-surface border border-line rounded-[16px] p-5 text-center shadow-card`}>
                <div className="font-heading font-extrabold text-[22px] text-primary">{n}</div>
                <div className="text-[11px] text-muted mt-1 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <CTASection
        title="Give your business a manager you can call, any time."
        text="See Basha read your conversations, score your team, and brief you out loud like the best assistant you've ever hired. Book a 30-minute call. No pitch, just a live look."
        primary={["Book a call", "/book-demo"]}
        secondary={["Contact us", "/contact"]}
      />
    </main>
  );
}
