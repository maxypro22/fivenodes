import Link from "next/link";

const BASE = "https://fivenodes.ai";

/**
 * Renders one guide in either locale, plus its structured data.
 *
 * The markup order is deliberate and is the whole point of these pages: the
 * direct answer sits in its own block immediately under the H1, before any
 * navigation or marketing, because that is the passage answer engines lift.
 */
export default function GuideArticle({ guide, locale = "en" }) {
  const c = guide[locale];
  const isAr = locale === "ar";
  const path = `${isAr ? "/ar" : ""}/guides/${guide.slug}`;
  const url = BASE + path;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": guide.howTo ? "HowTo" : "Article",
      "@id": `${url}#article`,
      headline: c.title,
      description: c.description,
      inLanguage: locale,
      datePublished: guide.updated,
      dateModified: guide.updated,
      url,
      author: { "@id": `${BASE}/#organization` },
      publisher: { "@id": `${BASE}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
      ...(guide.howTo && c.steps
        ? {
            step: c.steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.h,
              text: s.p,
            })),
          }
        : {}),
      // the passage we want quoted
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".guide-answer"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: locale,
      mainEntity: c.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isAr ? "الرئيسية" : "Home", item: BASE + (isAr ? "/ar" : "") },
        { "@type": "ListItem", position: 2, name: isAr ? "الأدلة" : "Guides", item: `${BASE}${isAr ? "/ar" : ""}/guides` },
        { "@type": "ListItem", position: 3, name: c.title, item: url },
      ],
    },
  ];

  return (
    <main dir={isAr ? "rtl" : "ltr"}>
      {jsonLd.map((b) => (
        <script
          key={b["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}

      <article className="py-14 md:py-20">
        <div className="wrap max-w-[820px]">
          <nav className="text-[13px] text-muted-2 mb-5">
            <Link href={isAr ? "/ar" : "/"} className="hover:text-primary">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            {" / "}
            <Link href={isAr ? "/ar/guides" : "/guides"} className="hover:text-primary">
              {isAr ? "الأدلة" : "Guides"}
            </Link>
          </nav>

          <h1 className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-.02em] text-ink">
            {c.title}
          </h1>

          {/* The direct answer — first content on the page, by design. */}
          <div className="guide-answer mt-6 rounded-[16px] border border-line bg-surface p-5 md:p-6">
            <p className="text-ink-2 text-[16px] md:text-[17.5px] leading-[1.7] font-medium">{c.answer}</p>
          </div>

          <p className="text-[12.5px] text-muted-2 mt-3">
            {isAr ? "آخر تحديث" : "Last updated"}: {guide.updated}
          </p>

          {(c.sections || []).map((s) => (
            <section key={s.h} className="mt-9">
              <h2 className="font-heading font-bold text-[clamp(19px,2.4vw,25px)] text-ink leading-snug">
                {s.h}
              </h2>
              {s.p.map((para, i) => (
                <p key={i} className="text-muted text-[15.5px] md:text-[16.5px] leading-[1.75] mt-3">
                  {para}
                </p>
              ))}
            </section>
          ))}

          {(c.steps || []).map((s) => (
            <section key={s.h} className="mt-8">
              <h2 className="font-heading font-bold text-[clamp(18px,2.2vw,22px)] text-ink">{s.h}</h2>
              <p className="text-muted text-[15.5px] md:text-[16.5px] leading-[1.75] mt-2">{s.p}</p>
            </section>
          ))}

          {c.table && (
            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse text-[14.5px]">
                <thead>
                  <tr>
                    {c.table.head.map((h) => (
                      <th
                        key={h}
                        className="bg-surface border border-line px-3 py-2.5 text-start font-heading font-bold text-ink"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.table.rows.map((r, i) => (
                    <tr key={i}>
                      {r.map((cell, j) => (
                        <td key={j} className="border border-line px-3 py-2.5 text-muted align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <section className="mt-12">
            <h2 className="font-heading font-extrabold text-[clamp(20px,2.6vw,28px)] text-ink">
              {isAr ? "الأسئلة الشائعة" : "Frequently asked questions"}
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              {c.faq.map((f) => (
                <div key={f.q} className="rounded-[14px] border border-line bg-bg p-5">
                  <h3 className="font-heading font-bold text-[16px] text-ink">{f.q}</h3>
                  <p className="text-muted text-[15px] leading-[1.7] mt-2">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {c.disclaimer && (
            <p className="mt-8 rounded-[12px] border border-line bg-surface p-4 text-[13.5px] text-muted-2 leading-[1.65]">
              {c.disclaimer}
            </p>
          )}

          <div className="mt-12 rounded-[20px] bg-primary text-[rgb(var(--on-primary))] p-6 md:p-8">
            <h2 className="font-heading font-extrabold text-[clamp(19px,2.4vw,24px)] leading-snug">
              {isAr ? "تحدث مع فريق فايف نودز في الدوحة" : "Talk to the Five Nodes team in Doha"}
            </h2>
            <p className="mt-2 text-[15px] leading-[1.65] text-[rgb(var(--on-primary)/.85)]">
              {isAr
                ? "استشارة مجانية لمناقشة حالتك تحديداً — بالعربية أو الإنجليزية."
                : "A free consultation about your specific case — in Arabic or English."}
            </p>
            <Link
              href={isAr ? "/ar/contact" : "/contact"}
              className="btn bg-[rgb(var(--on-primary))] text-primary hover:opacity-90 mt-5 px-5 py-[11px]"
            >
              {isAr ? "احجز استشارة مجانية" : "Book a free consultation"}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
