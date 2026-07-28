import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { SERVICES, SERVICES_STATS, METHOD } from "@/components/content";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "AI Services in Qatar — Voice, WhatsApp & Automation Agents | Five Nodes",
  description:
    "AI services in Qatar — bilingual AI voice agents, WhatsApp AI agents, smart booking, AI automation, and AI analytics for businesses in Qatar.",
  path: "/services",
  ogTitle: "AI Services in Qatar — Five Nodes",
});

function Check() {
  return (
    <span className="w-[20px] h-[20px] rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5">
      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3">
        <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <PageHeader eyebrow="AI Services in Qatar" title="8 Bilingual AI Systems">
        Five Nodes' AI services in Qatar — eight bilingual AI systems for businesses. From AI voice
        agents and WhatsApp AI agents to smart booking and AI automation, each solution is
        custom-built and embedded into your operations.
      </PageHeader>

      {/* Stats */}
      <section className="pb-6">
        <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-[14px]">
          {SERVICES_STATS.map(([n, l], i) => (
            <div
              key={l}
              className={`reveal d${(i % 4) + 1} bg-surface border border-line rounded-[16px] p-6 text-center shadow-card`}
            >
              <div className="font-heading font-extrabold text-[28px] text-ink">{n}</div>
              <div className="text-xs text-muted mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we build */}
      <section className="py-16">
        <div className="wrap">
          <div className="max-w-[640px]">
            <span className="eyebrow reveal">What We Build</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Eight systems. One intelligent platform.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px]">
              Five Nodes engineers these AI capabilities to embed directly into your operations.
              Built by our team in Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-11">
            {SERVICES.map((s, i) => (
              <div
                key={s.code}
                className={`reveal d${(i % 2) + 1} group relative bg-surface border border-line rounded-[20px] p-8 shadow-card transition-all duration-300 ease-smooth hover:border-primary hover:shadow-hover hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold text-[15px] grid place-items-center transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                    {s.code}
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-[.1em] text-muted-2">
                    {s.kicker}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[21px] text-ink mt-5">{s.name}</h3>
                <div className="text-[14px] font-semibold text-primary mt-1">{s.tagline}</div>
                <p className="text-sm text-muted leading-[1.65] mt-3">{s.desc}</p>
                <ul className="mt-5 flex flex-col gap-[10px]">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-[10px] text-[14px] text-ink-2">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-6 hover:gap-3 transition-all"
                >
                  Get Started
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 border-t border-line-soft">
        <div className="wrap">
          <div className="max-w-[720px]">
            <span className="eyebrow reveal">Infrastructure</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Production-grade infrastructure.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px] leading-[1.7]">
              Every Five Nodes deployment runs on the same production stack we use ourselves —
              official WhatsApp Business APIs, Twilio voice, vector-enabled databases, and in-region
              cloud hosting for businesses in Qatar.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {[
              ["Voice", "VAPI"],
              ["Voice", "ElevenLabs"],
              ["AI", "OpenAI"],
              ["Data", "Supabase"],
              ["Messaging", "WhatsApp API"],
              ["Frontend", "Next.js"],
            ].map(([cat, name], i) => (
              <div
                key={name}
                className={`reveal d${(i % 3) + 1} rounded-2xl border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}
              >
                <div className="text-[11px] uppercase tracking-[.12em] text-muted-2">{cat}</div>
                <div className="font-heading font-bold text-ink mt-1.5 text-[15px]">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="wrap">
          <div className="text-center max-w-[620px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">Our Process</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              From discovery to deployment.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px]">
              Every engagement follows a proven four-phase methodology. No guesswork, no wasted time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px] mt-12">
            {METHOD.map((m, i) => (
              <div
                key={m.n}
                className={`reveal d${(i % 4) + 1} p-7 border border-line rounded-[20px] bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft`}
              >
                <div className="font-heading font-extrabold text-2xl text-primary/30">{m.n}</div>
                <h4 className="font-heading font-bold text-lg mt-2 text-ink">{m.t}</h4>
                <p className="text-sm text-muted leading-[1.6] mt-2">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to automate what matters?"
        text="Every engagement starts with a free discovery call. We'll audit your workflows and show you exactly where AI can save time, reduce costs, and improve operations. Have detailed questions first? Read the FAQ."
        primary={["Book a Discovery Call", "/contact"]}
        secondary={["Read the FAQ", "/faq"]}
      />
    </main>
  );
}
