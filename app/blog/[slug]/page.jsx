import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import SmartImg from "@/components/SmartImg";
import { BLOG_POSTS } from "@/components/blogData";
import { getBlogContent } from "@/components/blogContent";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article — Five Nodes" };
  const content = getBlogContent(post.slug);
  const title = content?.seoTitle || `${post.title} | Five Nodes`;
  const description = content?.metaDescription || post.excerpt;
  const url = `https://fivenodes.ai/blog/${post.slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: {
        en: url,
        ar: `https://fivenodes.ai/ar/blog/${post.slug}`,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Five Nodes",
      type: "article",
    },
  };
}

// Render the mirrored article body: paragraphs, subheadings, and grouped lists.
function ArticleBody({ blocks }) {
  const out = [];
  let list = null;

  const flushList = (key) => {
    if (list) {
      out.push(
        <ul key={`ul-${key}`} className="list-disc pl-6 flex flex-col gap-2 text-[16px] text-muted leading-[1.8]">
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

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const content = getBlogContent(post.slug);
  const body = content?.body || [];
  const faq = content?.faq || [];
  const url = `https://fivenodes.ai/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: content?.metaDescription || post.excerpt,
    image: post.image,
    datePublished: post.date,
    // Freshness signal: answer engines strongly prefer demonstrably current
    // sources. Falls back to the publish date when a post has not been revised.
    dateModified: post.updated || post.date,
    inLanguage: "en",
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
    <main>
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
          <Link href="/blog" className="reveal inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to blog
          </Link>

          <div className="reveal d1 flex items-center gap-2 text-[12px] uppercase tracking-[.08em] text-muted-2 mt-6">
            <span className="text-primary font-bold">AI automation Qatar</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <h1 className="reveal d1 font-heading font-extrabold text-[clamp(28px,4vw,44px)] tracking-[-.02em] leading-[1.1] text-ink mt-4">
            {post.title}
          </h1>

          <div className="reveal d2 h-56 md:h-80 rounded-[20px] bg-gradient-to-br from-[#dbe4ff] to-[#eef2ff] overflow-hidden mt-8">
            <SmartImg
              className="w-full h-full object-cover"
              alt={post.title}
              src={post.image}
              fallback={`https://picsum.photos/seed/fn-blog-${idx}/1200/600`}
            />
          </div>

          <div className="reveal d2 mt-8">
            {body.length > 0 ? (
              <ArticleBody blocks={body} />
            ) : (
              <p className="text-[18px] text-ink-2 leading-[1.75] font-medium">{post.excerpt}</p>
            )}
          </div>

          {faq.length > 0 && (
            <div className="reveal mt-14 pt-8 border-t border-line-soft">
              <h2 className="font-heading font-extrabold text-[24px] tracking-[-.02em] text-ink">
                Frequently Asked Questions
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
        title="Bring AI into your operations"
        text="Every engagement starts with a free discovery call. We'll show you exactly where AI can save time and capture revenue for your business in Qatar."
        primary={["Book a Discovery Call", "/contact"]}
        secondary={["Explore Services", "/services"]}
      />
    </main>
  );
}
