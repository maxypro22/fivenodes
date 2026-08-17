import Link from "next/link";
import { GUIDES } from "@/components/guidesData";
import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "AI Guides for Businesses in Qatar | Five Nodes",
  description:
    "Practical guides on AI voice agents, WhatsApp automation, Arabic AI and data protection for businesses in Qatar — costs, comparisons and how to deploy.",
  path: "/guides",
});

export default function GuidesIndex() {
  return (
    <main>
      <section className="py-14 md:py-20">
        <div className="wrap max-w-[900px]">
          <span className="eyebrow text-[11px] tracking-[.16em]">Guides</span>
          <h1 className="font-heading font-extrabold text-[clamp(30px,4.2vw,46px)] leading-[1.1] tracking-[-.02em] text-ink mt-4">
            AI guides for businesses in Qatar
          </h1>
          <p className="text-muted text-base md:text-lg mt-4 max-w-[620px] leading-[1.65]">
            Straight answers on what AI agents cost, how they handle Arabic, and what to check before
            you buy — written for the Qatari market.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group block rounded-[18px] border border-line bg-bg p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
                <h2 className="font-heading font-bold text-[17.5px] text-ink leading-snug group-hover:text-primary">
                  {g.en.title}
                </h2>
                <p className="text-muted text-[14.5px] leading-[1.6] mt-2.5">{g.en.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
