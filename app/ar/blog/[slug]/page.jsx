import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import SmartImg from "@/components/SmartImg";
import { BLOG_POSTS } from "@/components/blogData";
import { getArBlog } from "@/components/arBlogContent";
import { pageMeta } from "@/components/seo";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "مقال — فايف نودز" };
  const ar = getArBlog(post.slug) || {};
  return pageMeta({
    title: ar.seoTitle || `${ar.title || post.title} | فايف نودز`,
    description: ar.metaDescription || ar.excerpt || post.excerpt,
    path: `/blog/${post.slug}`,
    ogTitle: ar.seoTitle || ar.title || post.title,
    ogType: "article",
    locale: "ar",
  });
}

// Render the mirrored Arabic article body: paragraphs, subheadings, grouped lists.
function ArticleBody({ blocks }) {
  const out = [];
  let list = null;

  const flushList = (key) => {
    if (list) {
      out.push(
        <ul key={`ul-${key}`} className="list-disc pr-6 flex flex-col gap-2 text-[16px] text-muted leading-[1.8]">
          {list}
        </ul>
      );
      list = null;
    }
  };

  blocks.forEach((b, i) => {
    if (b.type === "li") {
      list = list || [];
      list.push(<li key={i}>{b.text}</li>);
      return;
    }
    flushList(i);
    if (b.type === "h2") {
      out.push(
        <h2 key={i} className="font-heading font-bold text-[22px] md:text-[26px] tracking-[-.01em] text-ink mt-4">
          {b.text}
        </h2>
      );
    } else {
      out.push(
        <p key={i} className="text-[16px] text-muted leading-[1.8]">
          {b.text}
        </p>
      );
    }
  });
  flushList("end");
  return <div className="flex flex-col gap-5">{out}</div>;
}

export default function ArBlogPost({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const ar = getArBlog(post.slug) || {};
  const title = ar.title || post.title;
  const body = ar.body || [];
  const faq = ar.faq || [];
  const url = `https://fivenodes.ai/ar/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: ar.metaDescription || ar.excerpt || post.excerpt,
    image: post.image,
    datePublished: ar.date || post.date,
    inLanguage: "ar",
    author: { "@type": "Organization", name: "Five Nodes" },
    publisher: { "@id": "https://fivenodes.ai/#organization" },
    mainEntityOfPage: url,
  };

  const faqJsonLd =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <article className="pt-16 pb-10">
        <div className="wrap max-w-[760px] mx-auto">
          <Link href="/ar/blog" className="reveal inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 rotate-180">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            العودة إلى المدونة
          </Link>

          <div className="reveal d1 flex items-center gap-2 text-[12px] uppercase tracking-[.08em] text-muted-2 mt-6">
            <span className="text-primary font-bold">أتمتة الذكاء الاصطناعي قطر</span>
            <span>·</span>
            <span>{ar.date || post.date}</span>
          </div>
          <h1 className="reveal d1 font-heading font-extrabold text-[clamp(28px,4vw,44px)] tracking-[-.02em] leading-[1.1] text-ink mt-4">
            {title}
          </h1>

          <div className="reveal d2 h-56 md:h-80 rounded-[20px] bg-gradient-to-br from-[#dbe4ff] to-[#eef2ff] overflow-hidden mt-8">
            <SmartImg
              className="w-full h-full object-cover"
              alt={title}
              src={post.image}
              fallback={`https://picsum.photos/seed/fn-blog-${idx}/1200/600`}
            />
          </div>

          <div className="reveal d2 mt-8">
            {body.length > 0 ? (
              <ArticleBody blocks={body} />
            ) : (
              <p className="text-[18px] text-ink-2 leading-[1.75] font-medium">{ar.excerpt || post.excerpt}</p>
            )}
          </div>

          {faq.length > 0 && (
            <div className="reveal mt-14 pt-8 border-t border-line-soft">
              <h2 className="font-heading font-extrabold text-[24px] tracking-[-.02em] text-ink">
                الأسئلة الشائعة
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-heading font-bold text-[17px] text-ink">{f.q}</h3>
                    <p className="text-[15px] text-muted leading-[1.8] mt-2">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection
        title="أدخِل الذكاء الاصطناعي إلى عملياتك"
        text="تبدأ كل شراكة بمكالمة استكشافية مجانية. سنوضّح لك بالضبط أين يمكن للذكاء الاصطناعي أن يوفّر الوقت ويحقّق الإيرادات لأعمالك في قطر."
        primary={["احجز مكالمة استكشافية", "/ar/contact"]}
        secondary={["استعرض خدماتنا", "/ar/services"]}
      />
    </main>
  );
}
