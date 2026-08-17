import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

import { pageMeta } from "@/components/seo";
import JsonLd from "@/components/JsonLd";
import OfficeCards from "@/components/OfficeCards";

export const metadata = pageMeta({
  title: "Book a Free AI Consultation in Qatar | Five Nodes",
  description:
    "Book a free AI consultation in Qatar with Five Nodes. We'll show you where AI voice agents, WhatsApp automation, and AI services can save time and capture revenue.",
  path: "/contact",
  ogTitle: "Book Your Free AI Consultation in Qatar — Five Nodes",
});

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5s-1.2-1.6-1.2-3 .7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.8-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.8-.1 1.5z" />
  </svg>
);

const QUICK = [
  { Icon: MailIcon, label: "Email Us", value: "Info@fivenodes.ai", href: "mailto:Info@fivenodes.ai" },
  { Icon: PhoneIcon, label: "Call Us", value: "+974 3001 0105", href: "tel:+97430010105" },
  { Icon: WaIcon, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/97430010105" },
];

const DIRECT = [
  ["Email", "Info@fivenodes.ai", "mailto:Info@fivenodes.ai"],
  ["Qatar Mobile", "+974 3001 0105", "tel:+97430010105"],
  ["Qatar Landline", "+974 4444 0085", "tel:+97444440085"],
  ["WhatsApp", "Chat with us", "https://wa.me/97430010105"],
];

export default function ContactPage() {
  return (
    <main>
      <JsonLd path="/contact" locale="en" />
      {/* Hero */}
      <PageHeader eyebrow="Get In Touch" title="Book a Free AI Consultation in Qatar.">
        Let's build something intelligent together. Every Five Nodes engagement starts with a free
        AI consultation in Qatar. No pitches, no pressure — just an honest conversation about your
        operations and where AI automation can save time and capture revenue. Built by our team in
        Qatar.
      </PageHeader>

      {/* Quick contact cards */}
      <section className="pb-10">
        <div className="wrap grid grid-cols-1 sm:grid-cols-3 gap-[18px] max-w-[840px] mx-auto">
          {QUICK.map(({ Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              className={`reveal d${i + 1} group bg-surface border border-line rounded-[18px] p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary`}
            >
              <div className="w-12 h-12 rounded-[14px] bg-primary-soft text-primary grid place-items-center mx-auto transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                <Icon />
              </div>
              <div className="font-heading font-bold text-ink mt-4">{label}</div>
              <div className="text-sm text-muted mt-1">{value}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-20">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <h2 className="reveal font-heading font-bold text-2xl text-ink">Send us a message</h2>
            <p className="reveal text-muted text-sm mt-2 mb-5">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <div className="reveal d1">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Quick Response */}
            <div className="reveal bg-surface border border-line rounded-[20px] p-7 shadow-card">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Quick Response
              </div>
              <p className="text-muted text-sm mt-2">We typically reply within 24 hours.</p>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-bg border border-line rounded-[14px] p-4 text-center">
                  <div className="font-heading font-extrabold text-lg text-primary">&lt; 24h</div>
                  <div className="text-[11px] text-muted-2 mt-1">Email Response</div>
                </div>
                <div className="bg-bg border border-line rounded-[14px] p-4 text-center">
                  <div className="font-heading font-extrabold text-lg text-primary">30 min</div>
                  <div className="text-[11px] text-muted-2 mt-1">Free Discovery Call</div>
                </div>
              </div>
            </div>

            {/* Contact Directly */}
            <div className="reveal d1 bg-surface border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">Contact Directly</h3>
              <div className="flex flex-col gap-3 mt-4">
                {DIRECT.map(([label, value, href]) => (
                  <a key={label} href={href} className="flex items-center justify-between gap-4 group">
                    <span className="text-[11px] uppercase tracking-[.1em] text-muted-2">{label}</span>
                    <span className="text-sm font-medium text-ink-2 group-hover:text-primary transition-colors">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-surface border-y border-line-soft">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow reveal">Our Offices</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3">
              Doha and London. One team.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4 max-w-[440px]">
              Headquartered in Qatar with an office in London, we operate where our clients are.
            </p>
          </div>
          <OfficeCards locale="en" />
        </div>
      </section>

      {/* Prefer a conversation? */}
      <section className="py-20">
        <div className="wrap text-center max-w-[680px] mx-auto">
          <h2 className="reveal font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink">
            Prefer a conversation?
          </h2>
          <p className="reveal d1 text-muted text-base mt-4">
            Book a free 30-minute AI consultation in Qatar. We'll audit your workflows and show you
            where AI voice agents, WhatsApp automation, and AI services can save time and capture
            revenue.
          </p>
          <div className="reveal d2 flex flex-wrap gap-[14px] justify-center mt-7">
            <a href="https://wa.me/97430010105" className="btn btn-primary px-[22px] py-[13px]">
              WhatsApp Us
            </a>
            <a href="tel:+97430010105" className="btn btn-ghost px-[22px] py-[13px]">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
