import LazyVideo from "./LazyVideo";

export default function VoicePlatform() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrap text-center">
        <h2 className="reveal font-serif text-ink font-normal text-[clamp(38px,6vw,76px)] leading-[1.05] tracking-[-.01em]">
          Bilingual AI agents
          <br className="hidden sm:block" /> that book &amp; message
        </h2>
        <p className="reveal d1 text-muted text-base md:text-lg mt-5 max-w-[600px] mx-auto leading-[1.6]">
          Natural, human-like voice agents in Arabic &amp; English — every call answered, every lead
          captured, 24/7.
        </p>

        {/* Waveform panel */}
        <div className="reveal d2 mt-14 relative rounded-[40px] md:rounded-[64px] overflow-hidden bg-[#080b16] border border-white/[.06] shadow-[0_50px_100px_-40px_rgba(8,11,22,.8)]">
          <LazyVideo
            className="w-full h-full object-cover aspect-[1140/360] block"
            src="/voice-wave.mp4"
          />
          {/* subtle edge fade so the pixels blend into the rounded panel */}
          <div className="pointer-events-none absolute inset-0 rounded-[40px] md:rounded-[64px] shadow-[inset_0_0_60px_20px_rgba(8,11,22,.75)]" />
        </div>
      </div>
    </section>
  );
}
