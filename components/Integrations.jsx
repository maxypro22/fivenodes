import SmartImg from "./SmartImg";
import { TECH_LOGOS } from "./data";

export default function Integrations({
  eyebrow = "We integrate with",
  title = "AI integrations we ship with",
}) {
  return (
    <section className="py-20">
      <div className="wrap text-center">
        <span className="eyebrow reveal inline-flex justify-center">{eyebrow}</span>
        <h2 className="reveal d1 font-heading font-bold text-[clamp(22px,2.8vw,34px)] tracking-[-.01em] text-ink mt-3">
          {title}
        </h2>

        {/* looping integration marquee (laptop + phone) — dir=ltr so it scrolls
            correctly even inside an RTL (Arabic) page */}
        <div
          dir="ltr"
          className="mt-12 overflow-hidden relative pb-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee-left">
            {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((t, i) => (
              <div
                key={i}
                title={t.name}
                className="mr-4 shrink-0 w-[88px] h-[88px] rounded-2xl bg-white border border-line-soft shadow-card grid place-items-center p-4"
              >
                {t.svg ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-ink" aria-label={`${t.name} logo`}>
                    <path d={t.svg} />
                  </svg>
                ) : (
                  <SmartImg
                    className="w-9 h-9 object-contain"
                    alt={`${t.name} logo`}
                    src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                    fallback={`https://cdn.simpleicons.org/${t.slug}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
