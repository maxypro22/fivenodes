import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import SmartImg from "@/components/SmartImg";
import { BLOG_POSTS } from "@/components/blogData";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article — Five Nodes" };
  return { title: `${post.title} | Five Nodes Blog`, description: post.excerpt };
}

export default function BlogPost({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const next = BLOG_POSTS[(idx + 1) % BLOG_POSTS.length];

  return (
    <main>
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

          <div className="reveal d2 mt-8 flex flex-col gap-5">
            <p className="text-[18px] text-ink-2 leading-[1.75] font-medium">{post.excerpt}</p>
            <p className="text-[16px] text-muted leading-[1.8]">
              At Five Nodes, we track developments like this because they shape how bilingual AI
              voice and WhatsApp agents evolve for businesses in Qatar. Every shift in the AI
              landscape is an opportunity to make customer operations faster, smarter, and more
              cost-effective.
            </p>
            <p className="text-[16px] text-muted leading-[1.8]">
              Want to understand what this means for your business? Our team engineers custom AI
              systems — voice agents, WhatsApp automation, smart booking and omni-channel
              monitoring — deployed in weeks, not months.
            </p>
            <a
              href={`https://fivenodes.ai/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Read the original article on fivenodes.ai →
            </a>
          </div>

          {/* Next post */}
          <div className="reveal mt-14 pt-8 border-t border-line-soft">
            <div className="text-[12px] uppercase tracking-[.1em] text-muted-2">Next article</div>
            <Link href={`/blog/${next.slug}`} className="group flex items-center justify-between gap-4 mt-3">
              <span className="font-heading font-bold text-lg text-ink group-hover:text-primary transition-colors">
                {next.title}
              </span>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
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
