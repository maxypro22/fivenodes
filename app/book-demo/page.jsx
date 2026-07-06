import PageHeader from "@/components/PageHeader";
import BookingWidget from "@/components/BookingWidget";
import SubscribeForm from "@/components/SubscribeForm";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "Book a Demo — Five Nodes for Artificial Intelligence",
  description:
    "Schedule a 30-minute demo with Five Nodes. See how AI voice agents, WhatsApp automation, and workflow automation can run your business operations 24/7.",
  path: "/book-demo",
  ogTitle: "Book a Demo — Five Nodes",
  ogDescription:
    "Pick a 30-minute slot to see Five Nodes' AI voice agents, WhatsApp automation, and workflow automation in action.",
});

export default function BookDemoPage() {
  return (
    <main>
      <PageHeader eyebrow="Get Started" title="Book a Demo">
        Book a free 30-minute demo, or choose a paid strategy consultation. Either way, we'll walk
        through your business and identify automation opportunities.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <div className="reveal">
            <BookingWidget fee={1000} currency="QAR" />
          </div>

          <div className="reveal d1 flex flex-col gap-8">
            <div className="bg-white border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">Prefer to talk now?</h3>
              <div className="flex flex-col gap-2 mt-3 text-sm">
                <a href="tel:+97430010105" className="text-ink-2 hover:text-primary">+974 3001 0105</a>
                <a href="tel:+97444440085" className="text-ink-2 hover:text-primary">+974 4444 0085</a>
                <a href="mailto:Info@fivenodes.ai" className="text-ink-2 hover:text-primary">Info@fivenodes.ai</a>
              </div>
            </div>

            <div className="bg-white border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">Stay in the loop</h3>
              <p className="text-sm text-muted mt-2 leading-[1.7]">
                Join our newsletter for the latest updates on AI voice agents, WhatsApp automation,
                and how businesses in Qatar are putting AI to work.
              </p>
              <div className="mt-4">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
