import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ } from "@/components/content";

export const metadata = {
  title: "FAQ — AI Voice Agents, WhatsApp Agents & Automation in Qatar | Five Nodes",
  description:
    "Frequently asked questions about Five Nodes' AI voice agents, WhatsApp agents, custom CRMs and ERPs, fine-tuned models, and omni-channel monitoring for businesses in Qatar.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions">
        Everything about Five Nodes' AI voice agents, WhatsApp agents, custom CRMs and ERPs,
        fine-tuned models, and omni-channel monitoring for businesses in Qatar.
      </PageHeader>

      {/* Key facts */}
      <section className="pb-10">
        <div className="wrap grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
          {[
            ["Founded 2024", "in Qatar, headquartered in Qatar"],
            ["2–6 weeks", "typical launch timeline"],
            ["PDPPL compliant", "Qatar data-protection ready"],
          ].map(([n, l], i) => (
            <div key={n} className={`reveal d${i + 1} bg-white border border-line rounded-[16px] p-6 shadow-card`}>
              <div className="font-heading font-extrabold text-lg text-ink">{n}</div>
              <div className="text-[13px] text-muted mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-10">
        <div className="wrap max-w-[860px] mx-auto flex flex-col gap-10">
          {FAQ.map((group, gi) => (
            <div key={group.section}>
              <h2 className={`reveal d${(gi % 3) + 1} font-heading font-bold text-xl text-ink mb-4`}>
                {group.section}
              </h2>
              <div className="reveal d1">
                <FaqAccordion items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        text="Talk to a Five Nodes engineer about your specific use case. No pitches — just a straight answer about whether AI fits your operations."
        primary={["Talk to an Engineer", "/contact"]}
        secondary={["Explore Services", "/services"]}
      />
    </main>
  );
}
