import SmartImg from "./SmartImg";
import { CLIENTS, TECH_LOGOS } from "./data";

export default function TrustedBy() {
  return (
    <section className="pt-14 pb-20">
      <div className="wrap">
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <span className="eyebrow reveal inline-flex justify-center">Trusted By</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3">
            Our Partners — AI Clients in Qatar
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-5 lg:grid-cols-9 gap-[14px]">
          {CLIENTS.map((n) => (
            <div
              key={n}
              className="reveal bg-white border border-line-soft rounded-[14px] h-24 grid place-items-center p-[14px] font-heading font-extrabold text-[#334155] text-center text-xs tracking-[.02em] shadow-card grayscale opacity-85 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-soft hover:border-line hover:grayscale-0 hover:opacity-100"
            >
              {n}
            </div>
          ))}
        </div>

        {/* Mobile marquee (loops left -> right) */}
        <div className="md:hidden overflow-hidden">
          <div className="flex w-max animate-marquee-right">
            {[...CLIENTS, ...CLIENTS].map((n, i) => (
              <div
                key={i}
                className="mr-[14px] w-[150px] shrink-0 bg-white border border-line-soft rounded-[14px] h-24 grid place-items-center p-[14px] font-heading font-extrabold text-[#334155] text-center text-xs tracking-[.02em] shadow-card"
              >
                {n}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-12 text-center">
          <span className="eyebrow inline-flex justify-center">We integrate with</span>
          <h3 className="font-heading font-bold text-[clamp(20px,2.6vw,30px)] tracking-[-.01em] text-ink mt-3">
            AI integrations we ship with
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {TECH_LOGOS.map((t) => (
              <div key={t.name} className="group relative">
                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 z-10 opacity-0 translate-y-1.5 scale-90 transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                  <div className="relative bg-ink text-white text-[13px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-soft">
                    {t.name}
                    <span className="absolute left-1/2 -translate-x-1/2 top-full -mt-1 w-2 h-2 bg-ink rotate-45" />
                  </div>
                </div>
                {/* Tile */}
                <div className="w-[74px] h-[74px] rounded-2xl bg-white border border-line shadow-card grid place-items-center p-4 grayscale opacity-70 transition-all duration-300 ease-smooth group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:shadow-soft group-hover:border-primary/40 group-hover:ring-4 group-hover:ring-primary/10">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
