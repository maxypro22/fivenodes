import { CLIENTS } from "./data";

export default function TrustedBy({
  eyebrow = "Trusted By",
  title = "Our Partners — AI Clients in Qatar",
}) {
  return (
    <section className="pt-14 pb-20">
      <div className="wrap">
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <span className="eyebrow reveal inline-flex justify-center">{eyebrow}</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3">
            {title}
          </h2>
        </div>

        {/* looping client marquee (laptop + phone) with edge fade — dir=ltr so it
            scrolls correctly even inside an RTL (Arabic) page */}
        <div
          dir="ltr"
          className="overflow-hidden relative pb-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee-left">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map(({ name, logo }, i) => (
              <div
                key={i}
                title={name}
                className="group mr-4 shrink-0 w-[150px] h-24 rounded-[14px] bg-surface border border-line-soft shadow-card grid place-items-center p-[16px] transition-all duration-300 hover:border-primary/30 hover:shadow-hover"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-10 max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  <span className="font-heading font-extrabold text-ink-2 text-center text-xs tracking-[.02em]">
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
