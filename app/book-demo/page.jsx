import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Book a Demo — See Five Nodes AI in Action",
  description:
    "Book a free demo of Five Nodes' bilingual AI voice and WhatsApp agents. See how AI automation can save time and capture revenue for your business in Qatar.",
};

const POINTS = [
  "See a live AI voice & WhatsApp agent in action",
  "Get a workflow audit tailored to your operations",
  "Understand your deployment timeline (2–6 weeks)",
  "No pitches, no pressure — just a straight answer",
];

export default function BookDemoPage() {
  return (
    <main>
      <PageHeader eyebrow="Book Demo" title="See Five Nodes AI in action">
        Book a free demo and discovery call. We'll show you exactly how bilingual AI voice and
        WhatsApp agents work — and where they can save time and capture revenue for your business in
        Qatar.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <h2 className="reveal font-heading font-bold text-2xl text-ink">What to expect</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {POINTS.map((p, i) => (
                <li key={p} className={`reveal d${(i % 4) + 1} flex items-start gap-3 text-[15px] text-ink-2`}>
                  <span className="w-[22px] h-[22px] rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="reveal d2 bg-white border border-line rounded-[20px] p-7 shadow-card mt-8">
              <h3 className="font-heading font-bold text-lg text-ink">Prefer to talk now?</h3>
              <div className="flex flex-col gap-2 mt-3 text-sm">
                <a href="tel:+97430010105" className="text-ink-2 hover:text-primary">+974 3001 0105</a>
                <a href="tel:+97444440085" className="text-ink-2 hover:text-primary">+974 4444 0085</a>
                <a href="mailto:Info@fivenodes.ai" className="text-ink-2 hover:text-primary">Info@fivenodes.ai</a>
              </div>
            </div>
          </div>

          <div className="reveal d1">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
