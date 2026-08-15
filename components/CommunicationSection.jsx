import { Clock, BrainCircuit, UserRoundCheck, Globe, Phone } from "lucide-react";
import WhatsAppChat from "./WhatsAppChat";

/* lucide ships no brand marks, so the platform glyphs are drawn inline. */
const Glyph = {
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12s-.64.81-.79.98-.29.19-.54.06a6.7 6.7 0 0 1-3.3-2.89c-.25-.43.25-.4.71-1.32.08-.17.04-.31-.02-.44s-.56-1.36-.77-1.86-.41-.43-.56-.44h-.48a.92.92 0 0 0-.67.31 2.8 2.8 0 0 0-.87 2.08 4.86 4.86 0 0 0 1.02 2.58 11.15 11.15 0 0 0 4.27 3.77c1.59.69 2.21.75 3.01.63a2.56 2.56 0 0 0 1.68-1.19 2.08 2.08 0 0 0 .15-1.19c-.06-.11-.23-.17-.48-.29z" />
    </svg>
  ),
  facebook: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  ),
  instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M16.5 2h-2.9v13.4a2.6 2.6 0 1 1-2.1-2.55v-2.95a5.5 5.5 0 1 0 5 5.47V8.9a6.4 6.4 0 0 0 3.8 1.23V7.2a3.6 3.6 0 0 1-3.8-3.4V2z" />
    </svg>
  ),
};

const DEFAULT_CHANNELS = [
  { key: "whatsapp", label: "WhatsApp" },
  { key: "voice", label: "Voice" },
  { key: "web", label: "Web" },
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
];

const FEATURE_ICONS = { clock: Clock, brain: BrainCircuit, handoff: UserRoundCheck };

const DEFAULT_FEATURES = [
  { icon: "clock", title: "24/7 replies", desc: "Always available" },
  {
    icon: "brain",
    title: "Context-based response",
    desc: "Understands context and replies according to user queries",
  },
  { icon: "handoff", title: "Human handoff", desc: "Escalates to humans when needed" },
];

function ChannelIcon({ k }) {
  const cls = "h-[15px] w-[15px] shrink-0";
  if (k === "voice") return <Phone className={cls} strokeWidth={2} aria-hidden="true" />;
  if (k === "web") return <Globe className={cls} strokeWidth={2} aria-hidden="true" />;
  const G = Glyph[k];
  return G ? <G className={cls} aria-hidden="true" /> : null;
}

export default function CommunicationSection({
  label = "Omnichannel",
  title = "Build your own AI agents across WhatsApp, voice and web",
  channelsTitle = "Deploy on",
  channels = DEFAULT_CHANNELS,
  features = DEFAULT_FEATURES,
  chat,
}) {
  return (
    <section className="py-12 md:py-16 bg-surface border-y border-line-soft overflow-hidden">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_.82fr] items-center gap-10 lg:gap-14">
        {/* ---------- Copy ---------- */}
        <div>
          <span className="reveal inline-flex items-center rounded-full border border-line bg-bg px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.16em] text-primary shadow-card">
            {label}
          </span>

          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(25px,3.1vw,36px)] leading-[1.14] tracking-[-.02em] text-ink mt-4 max-w-[560px]">
            {title}
          </h2>

          {/* channels — kept on a single row; scrolls rather than wraps if tight */}
          <div className="reveal d2 mt-5">
            <span className="block text-[11px] font-bold uppercase tracking-[.14em] text-muted-2">
              {channelsTitle}
            </span>
            <ul className="mt-3 flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {channels.map((c) => (
                <li key={c.key} className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-bg px-2.5 py-1.5 text-[12.5px] font-semibold text-ink-2 shadow-card whitespace-nowrap transition-all duration-200 ease-smooth hover:-translate-y-px hover:border-primary/40 hover:text-primary">
                    <ChannelIcon k={c.key} />
                    {c.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* capabilities */}
          <ul className="reveal d3 mt-6 flex flex-col gap-[14px]">
            {features.map((f) => {
              const Icon = FEATURE_ICONS[f.icon] || Clock;
              return (
                <li key={f.title} className="flex items-start gap-3.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-primary/10 text-primary">
                    <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading font-bold text-[15px] text-ink">{f.title}</span>
                    <span className="mt-0.5 block text-[13.5px] text-muted leading-[1.5]">{f.desc}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ---------- Chat canvas ---------- */}
        <div className="reveal d2 relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 -inset-y-6 rounded-[48px] bg-gradient-to-tr from-[#25d366]/15 via-primary/10 to-transparent blur-2xl"
          />
          {/* phone frame, scaled to hold the same footprint the canvas had */}
          <WhatsAppChat variant="phone" width={296} threadHeight={310} {...chat} />
        </div>
      </div>
    </section>
  );
}
