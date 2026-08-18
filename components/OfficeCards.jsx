import FlagIcon from "./FlagIcon";

/**
 * Office cards for the contact pages.
 *
 * Phone numbers are given twice on purpose: `display` is how the number is
 * written locally, `tel` is the E.164 form the dialler needs. UK numbers drop
 * the trunk "0" after +44 — "+44 07384…" will not connect from abroad.
 */

export const OFFICES = [
  {
    key: "qa",
    code: "qa",
    country: "Qatar",
    en: { label: "Qatar Office", note: "Headquarters" },
    ar: { label: "مكتب قطر", note: "المقر الرئيسي" },
    lines: ["3rd Floor, Al Muftah Plaza", "Al Reem St, Doha, Qatar"],
    linesAr: ["الطابق الثالث، المفتاح بلازا", "شارع الريم، الدوحة، قطر"],
    phones: [
      { display: "+974 3001 0105", tel: "+97430010105", en: "Mobile", ar: "جوال" },
      { display: "+974 4444 0085", tel: "+97444440085", en: "Landline", ar: "أرضي" },
    ],
  },
  {
    key: "uk",
    code: "gb",
    country: "United Kingdom",
    en: { label: "UK Office", note: "AI automation services in London" },
    ar: { label: "مكتب المملكة المتحدة", note: "خدمات أتمتة الذكاء الاصطناعي في لندن" },
    lines: ["167–169 Great Portland St, 5th Floor", "London, W1W 5PF, United Kingdom"],
    linesAr: ["١٦٧–١٦٩ شارع غريت بورتلاند، الطابق الخامس", "لندن، W1W 5PF، المملكة المتحدة"],
    phones: [{ display: "+44 7384 188072", tel: "+447384188072", en: "Mobile", ar: "جوال" }],
  },
];

export default function OfficeCards({ locale = "en" }) {
  const isAr = locale === "ar";

  return (
    <div className="flex flex-col gap-4">
      {OFFICES.map((o) => {
        const t = isAr ? o.ar : o.en;
        const lines = isAr ? o.linesAr : o.lines;
        return (
          <div
            key={o.key}
            className="reveal d1 group bg-bg border border-line rounded-[20px] p-7 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <FlagIcon code={o.code} className="w-[24px] h-[17px]" />
                  <span className="text-[11px] uppercase tracking-[.12em] text-primary font-bold">
                    {t.label}
                  </span>
                </div>
                <p className="text-[11.5px] text-muted-2 mt-1.5">{t.note}</p>
              </div>
            </div>

            <p className="text-[15px] text-ink-2 leading-[1.65] mt-4">
              {lines.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </p>

            <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-line-soft">
              {o.phones.map((p) => (
                <div key={p.tel} className="flex items-center justify-between gap-3">
                  <a
                    href={`tel:${p.tel}`}
                    dir="ltr"
                    className="text-sm text-ink-2 font-medium hover:text-primary transition-colors"
                  >
                    {p.display}
                  </a>
                  <span className="text-[11px] uppercase tracking-[.1em] text-muted-2 shrink-0">
                    {isAr ? p.ar : p.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
