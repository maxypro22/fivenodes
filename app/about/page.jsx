import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import {
  ABOUT_FACTS,
  ABOUT_STORY,
  ABOUT_METRICS,
  ENGINEERING_MODEL,
  BELIEFS,
  WHY,
} from "@/components/content";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "AI Company in Qatar — About Five Nodes",
  description:
    "Five Nodes is an AI company in Qatar — engineering bilingual WhatsApp AI agents, voice AI receptionists, and AI automation for businesses in Qatar.",
  path: "/about",
  ogTitle: "About Five Nodes — AI Company in Qatar",
});

export default function AboutPage() {
  return (
    <main>
      <PageHeader eyebrow="About Five Nodes" title="The AI company engineering bilingual AI agents in Qatar">
        Five Nodes is an AI company in Qatar — engineering bilingual WhatsApp AI agents, voice AI
        receptionists, and AI automation for businesses in Qatar. We design, build, and operate
        production AI systems.
      </PageHeader>

      {/* Facts */}
      <section className="pb-8">
        <div className="wrap grid grid-cols-3 gap-[14px] max-w-[560px] mx-auto">
          {ABOUT_FACTS.map(([n, l], i) => (
            <div key={l} className={`reveal d${i + 1} bg-surface border border-line rounded-[16px] p-5 text-center shadow-card`}>
              <div className="font-heading font-extrabold text-xl text-ink">{n}</div>
              <div className="text-xs text-muted mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-surface border-y border-line-soft">
        <div className="wrap max-w-[820px] mx-auto">
          <span className="eyebrow reveal">Our Story</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,40px)] tracking-[-.02em] text-ink mt-3">
            Born from a simple observation.
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            {ABOUT_STORY.map((p, i) => (
              <p key={i} className={`reveal d${(i % 3) + 1} text-[16px] text-muted leading-[1.75]`}>
                {p}
              </p>
            ))}
          </div>
          <blockquote className="reveal d1 mt-8 border-l-4 border-primary pl-6 py-1 font-heading font-bold text-[20px] text-ink italic">
            "Channels are delivery mechanisms. Intelligence is the core asset."
          </blockquote>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] mt-10">
            {ABOUT_METRICS.map(([n, l], i) => (
              <div key={l} className={`reveal d${(i % 4) + 1} bg-bg border border-line rounded-[14px] p-5 text-center`}>
                <div className="font-heading font-extrabold text-lg text-primary">{n}</div>
                <div className="text-[11px] text-muted mt-1 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering model */}
      <section className="py-20">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">Our Engineering Model</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Five components. One intelligent system.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px]">
              Every system we build is composed of five architectural layers that work in concert.
              No single component operates in isolation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-11">
            {ENGINEERING_MODEL.map((m, i) => (
              <div
                key={m.n}
                className={`reveal d${(i % 3) + 1} bg-surface border border-line rounded-[20px] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold grid place-items-center">
                  {m.n}
                </div>
                <h4 className="font-heading font-bold text-[19px] mt-5 text-ink">{m.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-2">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">What We Believe</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Principles, not pitches.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-10">
            {BELIEFS.map((b, i) => (
              <div key={i} className={`reveal d${(i % 2) + 1} bg-bg border border-line rounded-[20px] p-7`}>
                <h4 className="font-heading font-bold text-[18px] text-ink leading-snug">{b.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-3">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">Why Five Nodes</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Built different. On purpose.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-10">
            {WHY.map((w, i) => (
              <div
                key={w.n}
                className={`reveal d${(i % 3) + 1} bg-surface border border-line rounded-[20px] p-7 shadow-card`}
              >
                <div className="font-heading font-extrabold text-2xl text-primary/30">{w.n}</div>
                <h4 className="font-heading font-bold text-[17px] mt-2 text-ink leading-snug">{w.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-2">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk"
        text="Ready to engineer intelligence into your operations? Every engagement starts with a discovery call. No pitches, no pressure — just an honest conversation about your operations and where AI can make a measurable impact."
        primary={["Book a Discovery Call", "/contact"]}
        secondary={["Our Services", "/services"]}
      />
    </main>
  );
}
