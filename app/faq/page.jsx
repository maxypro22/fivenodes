import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FaqExplorer from "@/components/FaqExplorer";
import { FAQ, FAQ_KEY_FACTS } from "@/components/content";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "AI Solutions FAQ — Qatar | Five Nodes",
  description:
    "Answers to common questions about Five Nodes' AI voice agents, WhatsApp agents, custom CRMs, fine-tuning, and monitoring in Qatar.",
  path: "/faq",
  ogTitle: "AI Solutions FAQ — Five Nodes Qatar",
});

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <PageHeader eyebrow="FAQ" title="AI Solutions FAQ — Qatar">
        Frequently asked questions about Five Nodes' AI voice agents, WhatsApp agents, custom CRMs
        and ERPs, fine-tuned models, and omni-channel monitoring for businesses in Qatar.
      </PageHeader>

      {/* Key facts */}
      <section className="pb-12">
        <div className="wrap max-w-[860px] mx-auto">
          <div className="reveal bg-surface border border-line rounded-[16px] p-6 sm:p-8 shadow-card">
            <div className="eyebrow mb-4">Key facts about Five Nodes</div>
            <ul className="flex flex-col gap-2.5">
              {FAQ_KEY_FACTS.map((fact, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-ink-2 leading-[1.6]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"
                  />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ sections with search + section nav */}
      <section className="pb-14">
        <FaqExplorer groups={FAQ} />
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
