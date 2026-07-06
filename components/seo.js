// Shared per-page metadata builder so every page emits the same rich SEO head
// (canonical + hreflang alternates, Open Graph with image, Twitter card) that
// the production site at fivenodes.ai serves.
const BASE = "https://fivenodes.ai";

export function pageMeta({
  title,
  description,
  path = "/",
  ogTitle,
  ogDescription,
  ogType = "website",
  keywords,
  locale = "en",
}) {
  const clean = path === "/" ? "" : path;
  const enUrl = `${BASE}${clean}`;
  const arUrl = `${BASE}/ar${clean}`;
  const isAr = locale === "ar";
  const url = isAr ? arUrl : enUrl;
  const canonical = isAr ? `/ar${clean}` || "/ar" : path;
  const ogT = ogTitle || title;
  const ogD = ogDescription || description;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        ar: arUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: ogT,
      description: ogD,
      url,
      siteName: "Five Nodes",
      type: ogType,
      locale: isAr ? "ar" : "en",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Five Nodes — AI company in Qatar (bilingual WhatsApp & voice agents)",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogT,
      description: ogD,
      images: ["/og-image.png"],
    },
  };
}
