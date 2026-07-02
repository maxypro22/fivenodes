import SolutionsCards from "./SolutionsCards";

export default function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="wrap">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="reveal font-heading font-extrabold text-[clamp(30px,4vw,46px)] tracking-[-.02em] text-ink">
            What we build — 8 AI agents for businesses in Qatar
          </h2>
          <p className="reveal d1 text-muted text-base mt-[14px] mx-auto max-w-[640px]">
            Eight bilingual AI agents engineered by our team in Qatar — replacing manual work,
            capturing every customer, and giving you full operational control.
          </p>

          <div className="reveal d2 mt-10 flex items-center justify-center gap-8 sm:gap-14">
            {[
              ["35+", "AI Services"],
              ["8", "Categories"],
              ["∞", "Integrations"],
            ].map(([n, l], i) => (
              <div key={l} className="flex items-center gap-8 sm:gap-14">
                {i > 0 && <span className="w-px h-10 bg-line" />}
                <div className="text-center">
                  <div className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-none text-ink">
                    {n}
                  </div>
                  <div className="text-[11px] uppercase tracking-[.12em] text-muted-2 mt-2">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SolutionsCards />
      </div>
    </section>
  );
}
