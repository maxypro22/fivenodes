import PageHeader from "@/components/PageHeader";
import SmartImg from "@/components/SmartImg";
import { NEWS_ITEMS } from "@/components/newsData";

export const metadata = {
  title: "Latest AI News — Qatar | Five Nodes",
  description:
    "The latest AI developments, breakthroughs, and industry announcements — curated from top sources.",
};

const SOURCE_COLORS = {
  "MIT Tech Review": "bg-[#fde8e8] text-[#c0392b]",
  "The Verge AI": "bg-[#efe6fd] text-[#7c3aed]",
  "TechCrunch AI": "bg-[#e5f6ea] text-[#15803d]",
  "The Decoder": "bg-[#e8eefe] text-[#2563eb]",
  "Wired AI": "bg-[#e9edf6] text-[#0f1629]",
  "Ars Technica": "bg-[#fdeede] text-[#c2620f]",
  "Hugging Face Blog": "bg-[#fef3d7] text-[#b45309]",
  "OpenAI Blog": "bg-[#e2f4f0] text-[#0e7c66]",
};

export default function NewsPage() {
  return (
    <main>
      <PageHeader eyebrow="News" title="Latest AI News — Qatar">
        The latest AI developments, breakthroughs, and industry announcements — curated from top
        sources.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {NEWS_ITEMS.map(([title, source, date, excerpt, image], i) => (
            <div
              key={i}
              className={`reveal d${(i % 3) + 1} group bg-white border border-line rounded-[18px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary flex flex-col`}
            >
              {/* thumbnail */}
              <div className="relative h-44 bg-gradient-to-br from-[#dbe4ff] to-[#eef2ff] overflow-hidden grid place-items-center">
                {image ? (
                  <SmartImg
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={title}
                    src={image}
                    fallback={`https://picsum.photos/seed/fn-news-${i}/600/340`}
                  />
                ) : (
                  <span className="font-heading font-extrabold text-primary/40 text-3xl">5N</span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    SOURCE_COLORS[source] || "bg-line-soft text-ink-2"
                  }`}
                >
                  {source}
                </span>
                <span className="text-[12px] text-muted-2">{date}</span>
              </div>
              <h3 className="font-heading font-bold text-[16px] text-ink mt-4 leading-snug group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.6] mt-2 flex-1">{excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary mt-4 group-hover:gap-2.5 transition-all"
              >
                Read full article
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              </div>
            </div>
          ))}
        </div>

        <p className="wrap text-[13px] text-muted-2 leading-[1.7] mt-14 text-center max-w-[860px]">
          Disclaimer: The news articles listed on this page are sourced from third-party
          publications and do not represent the views or opinions of Five Nodes for Artificial
          Intelligence. All content belongs to the respective publishers and is linked to its
          original source.
        </p>
      </section>
    </main>
  );
}
