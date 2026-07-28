import SmartImg from "./SmartImg";
import { TECH_LOGOS } from "./data";

// Compact logo marquee embedded inside the hero, between the main grid and
// the stat bar — not a standalone section, so no heading/padding/background
// of its own; it inherits the hero's ambient glow.
export default function Integrations({ label = "AI integrations we ship with" }) {
  return (
    <div>
      <p className="text-[11px] font-heading font-bold tracking-[.14em] uppercase text-muted-2 mb-4">
        {label}
      </p>
      <div
        dir="ltr"
        className="overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee-left">
          {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((t, i) => (
            <div
              key={i}
              title={t.name}
              className="group mr-3 shrink-0 w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-card grid place-items-center p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
            >
              {t.svg ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-ink-2 transition-colors duration-300 group-hover:text-primary"
                  aria-label={`${t.name} logo`}
                >
                  <path d={t.svg} />
                </svg>
              ) : (
                <SmartImg
                  className="w-6 h-6 object-contain"
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
  );
}
