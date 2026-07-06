import { BLOG_POSTS } from "@/components/blogData";

const BASE = "https://fivenodes.ai";

// Top-level routes that exist in both languages.
const STATIC_PATHS = [
  "", // home
  "/services",
  "/basha",
  "/about",
  "/contact",
  "/book-demo",
  "/news",
  "/blog",
  "/faq",
  "/privacy",
  "/terms",
];

// Build an EN entry and its mirrored AR entry, each carrying hreflang alternates.
function entries(path, { priority = 0.7, changeFrequency = "monthly" } = {}) {
  const languages = {
    en: `${BASE}${path}`,
    ar: `${BASE}/ar${path}`,
  };
  return [
    { url: `${BASE}${path}`, changeFrequency, priority, alternates: { languages } },
    { url: `${BASE}/ar${path}`, changeFrequency, priority, alternates: { languages } },
  ];
}

export default function sitemap() {
  const staticEntries = STATIC_PATHS.flatMap((p) =>
    entries(p, { priority: p === "" ? 1 : 0.8 })
  );

  const blogEntries = BLOG_POSTS.flatMap((post) =>
    entries(`/blog/${post.slug}`, { priority: 0.6, changeFrequency: "weekly" })
  );

  return [...staticEntries, ...blogEntries];
}
