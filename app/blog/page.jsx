import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { BLOG_POSTS } from "@/components/blogData";

export const metadata = {
  title: "AI Automation Blog — Qatar | Five Nodes",
  description:
    "Insights on AI automation, voice agents, WhatsApp AI, and how businesses in Qatar are leveraging artificial intelligence.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader eyebrow="Blog" title="AI Automation Blog — Qatar">
        Insights on AI automation, voice agents, WhatsApp AI, and how businesses in Qatar are
        leveraging artificial intelligence.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {BLOG_POSTS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className={`reveal d${(i % 3) + 1} group bg-white border border-line rounded-[20px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-primary flex flex-col`}
            >
              <div className="h-40 bg-gradient-to-br from-[#dbe4ff] to-[#eef2ff] grid place-items-center overflow-hidden">
                <span className="font-heading font-extrabold text-primary/40 text-3xl">5N</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[.08em] text-muted-2">
                  <span className="text-primary font-bold">AI automation Qatar</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="font-heading font-bold text-[18px] text-ink mt-3 leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-[1.6] mt-2 flex-1">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4 group-hover:gap-3 transition-all">
                  Read more
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
