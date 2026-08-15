import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SmartImg from "@/components/SmartImg";
import { BLOG_POSTS } from "@/components/blogData";

import { pageMeta } from "@/components/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "AI Blog — Qatar AI Insights | Five Nodes",
  description:
    "Expert insights on AI automation, voice agents, and WhatsApp AI from Five Nodes, AI specialists in Qatar.",
  path: "/blog",
  ogTitle: "AI Blog — Five Nodes Qatar",
});

export default function BlogPage() {
  return (
    <main>
      <JsonLd path="/blog" locale="en" />
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
              className={`reveal d${(i % 3) + 1} group bg-surface border border-line rounded-[20px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-primary flex flex-col`}
            >
              <div className="h-44 bg-gradient-to-br from-[#dbe4ff] to-[#eef2ff] overflow-hidden">
                <SmartImg
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={p.title}
                  src={p.image}
                  fallback={`https://picsum.photos/seed/fn-blog-${i}/600/340`}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-[12px] text-muted-2">{p.date}</div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[.06em] text-primary bg-primary-soft rounded-full px-2 py-0.5">
                    AI company in Qatar
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[.06em] text-primary bg-primary-soft rounded-full px-2 py-0.5">
                    AI automation Qatar
                  </span>
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
