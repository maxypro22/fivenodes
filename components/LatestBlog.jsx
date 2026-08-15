"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import SmartImg from "./SmartImg";
import Squircle from "./Squircle";
import { BLOG_POSTS } from "./blogData";
import { getArBlog } from "./arBlogContent";

// Free-license stock photos (Unsplash License — free for commercial use) used
// here instead of each post's own thumbnail, for a more editorial/moody feel
// on this teaser. Credits: Immo Wegmann, Cash Macanaya, Mohamed Nohassi.
const CARD_IMAGES = ["/blog/ai-chip.jpg", "/blog/human-ai-hands.jpg", "/blog/robot-assistant.jpg"];

const TXT = {
  en: { eyebrow: "Latest Blog", title: "Our Latest Blog", more: "More Articles", read: "Read more" },
  ar: { eyebrow: "أحدث المقالات", title: "أحدث مدوناتنا", more: "المزيد من المقالات", read: "اقرأ المزيد" },
};

export default function LatestBlog({ locale = "en" }) {
  const t = TXT[locale] || TXT.en;
  const isAr = locale === "ar";
  const base = isAr ? "/ar" : "";
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="reveal inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm mb-3">
              <Sparkles size={16} strokeWidth={2} />
              {t.eyebrow}
            </span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-.02em]">
              <span className="inline-block bg-primary text-on-primary px-4 py-1.5 rounded-lg">{t.title}</span>
            </h2>
          </div>
          <Link href={`${base}/blog`} className="reveal d2 btn btn-ghost px-6 py-3 shrink-0">
            {t.more}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {posts.map((p, i) => {
            const ar = isAr ? getArBlog(p.slug) || {} : {};
            const title = ar.title || p.title;
            const excerpt = ar.excerpt || p.excerpt;
            const date = ar.date || p.date;
            return (
              <Squircle
                as={Link}
                key={p.slug}
                href={`${base}/blog/${p.slug}`}
                radius={32}
                className={`reveal d${i + 1} group bg-surface border border-line rounded-[32px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-primary flex flex-col`}
              >
                <div className="relative h-44 bg-gradient-to-br from-[#dbe4ff] to-[#eef2ff] overflow-hidden">
                  <SmartImg
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={title}
                    src={CARD_IMAGES[i]}
                    fallback={p.image}
                  />
                  <span className="absolute left-3 top-3 rtl:left-auto rtl:right-3 bg-white/90 backdrop-blur text-[11px] font-semibold text-ink px-2.5 py-1 rounded-full shadow-card">
                    {date}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-[17px] text-ink leading-snug group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-[1.6] mt-2 flex-1 line-clamp-2">{excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4 group-hover:gap-3 transition-all">
                    {t.read}
                    <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                  </span>
                </div>
              </Squircle>
            );
          })}
        </div>
      </div>
    </section>
  );
}
