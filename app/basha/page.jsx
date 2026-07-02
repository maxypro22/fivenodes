import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { BASHA_CAPABILITIES, BASHA_FEATURES } from "@/components/content";

export const metadata = {
  title: "Basha AI — The Intelligent Manager You Can Call | Five Nodes",
  description:
    "Basha is an AI management assistant that monitors your business communications 24/7 across WhatsApp, Instagram, voice and chat — in Arabic and English. It speaks to you, never your customers.",
};

export default function BashaPage() {
  return (
    <main>
      <PageHeader eyebrow="Basha AI" title="The Intelligent Manager you can call">
        Basha watches your business while you're away — an AI management assistant that monitors
        every conversation across WhatsApp, Instagram, voice and chat, 24/7, in Arabic and English.
      </PageHeader>

      {/* Feature stats */}
      <section className="pb-8">
        <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-[14px]">
          {BASHA_FEATURES.map(([n, l], i) => (
            <div key={l} className={`reveal d${(i % 4) + 1} bg-white border border-line rounded-[16px] p-6 text-center shadow-card`}>
              <div className="font-heading font-extrabold text-[24px] text-primary">{n}</div>
              <div className="text-xs text-muted mt-1 leading-tight">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">What Basha Does</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              Your business, watched — so you don't have to.
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
                <h4 className="font-heading font-bold text-[19px] mt-5 text-ink">{c.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinction */}
      <section className="py-16 bg-surface border-y border-line-soft">
        <div className="wrap max-w-[760px] mx-auto text-center">
          <span className="eyebrow reveal inline-flex justify-center">Important</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(24px,3.2vw,36px)] tracking-[-.02em] text-ink mt-3">
            Basha speaks to you, never to your customers.
          </h2>
          <p className="reveal d2 text-muted text-[16px] leading-[1.7] mt-5">
            Basha is your assistant, not their agent. It delivers a spoken answer, not a dashboard —
            reads 100% of your conversations, catches frustration early, and pings you the moment
            something needs your attention. It never forgets a customer.
          </p>
        </div>
      </section>

      <CTASection
        title="Meet your AI manager"
        text="Connect your communication channels and Basha starts monitoring from day one — no customer-facing responses, just clear oversight and a morning briefing you can call."
        primary={["Book a Discovery Call", "/contact"]}
        secondary={["Explore Services", "/services"]}
      />
    </main>
  );
}
