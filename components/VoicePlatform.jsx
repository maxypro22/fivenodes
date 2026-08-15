export default function VoicePlatform() {
  return (
    <section className="pt-10 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.02fr] items-center gap-12 lg:gap-14">
        {/* ---------- Landing slot ----------
            The hero video flies into this panel and settles here.
            ScrollMediaTransfer reads this box's geometry; it stays empty. */}
        <div className="reveal d2 relative">
          <div
            data-transfer-slot="target"
            className="relative rounded-[26px] md:rounded-[34px] overflow-hidden bg-white border border-line shadow-[0_40px_90px_-40px_rgba(16,22,41,.35)] aspect-[16/13] sm:aspect-[16/11] lg:aspect-[5/4]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[26px] md:rounded-[34px] ring-1 ring-inset ring-black/[.06]" />
          </div>
        </div>

        {/* ---------- Copy ---------- */}
        <div>
          <h2 className="reveal font-serif text-ink font-normal text-[clamp(34px,5vw,64px)] leading-[1.05] tracking-[-.01em]">
            Automate Operations
          </h2>
          <p className="reveal d1 text-muted text-base md:text-lg mt-5 max-w-[500px] leading-[1.6]">
            Natural, human-like voice agents in Arabic &amp; English — every call answered, every lead
            captured, 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}
