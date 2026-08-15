import EN from "./seo/jsonld.en.json";
import AR from "./seo/jsonld.ar.json";

/**
 * Per-page structured data, matching what the production site at fivenodes.ai
 * serves: WebPage/ContactPage/CollectionPage/Blog, BreadcrumbList, plus the
 * Service, FAQPage, HowTo and LocalBusiness blocks each page carries.
 *
 * Organization and WebSite are emitted sitewide by the root layout, so they are
 * deliberately absent here — duplicating them would put two of each in the DOM.
 *
 * Server component: the JSON never reaches the client bundle, it is inlined
 * into the prerendered HTML.
 */
export default function JsonLd({ path = "/", locale = "en" }) {
  const table = locale === "ar" ? AR : EN;
  const key = locale === "ar" && !path.startsWith("/ar") ? `/ar${path === "/" ? "" : path}` : path;
  const blocks = table[key] || table[path] || [];

  if (!blocks.length) return null;

  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={b["@id"] || `${b["@type"]}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}
