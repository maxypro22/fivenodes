"use client";

import { FEATURES } from "./featuresData";
import FeaturesDeck from "./FeaturesDeck";

export default function Features() {
  return (
    <section className="py-24 bg-surface border-y border-line-soft">
      <div className="wrap">
        {/* header */}
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-[.18em] text-primary">
            <span className="w-8 h-px bg-primary/30" />
            Features
            <span className="w-8 h-px bg-primary/30" />
          </div>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(30px,4.4vw,52px)] tracking-[-.02em] text-ink mt-4 leading-[1.05]">
            Everything You Need, Nothing You Don't
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-14">
          {FEATURES.map((f, i) => (
            <div
              key={f.t}
              className={`reveal d${(i % 3) + 1} group flex items-start gap-4 bg-bg border border-line rounded-[16px] p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}
            >
              <div className="w-12 h-12 rounded-[12px] bg-white border border-line grid place-items-center text-ink-2 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-[0_10px_20px_-8px_rgba(37,99,235,.6)]">
                <f.Icon size={22} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[16px] text-ink">{f.t}</h3>
                <p className="text-sm text-muted mt-1.5 leading-[1.55]">{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked deck */}
        <div className="md:hidden mt-10">
          <FeaturesDeck items={FEATURES} />
        </div>
      </div>
    </section>
  );
}
