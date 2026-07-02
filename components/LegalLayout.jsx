import PageHeader from "@/components/PageHeader";

export default function LegalLayout({ eyebrow, title, intro, sections }) {
  return (
    <main>
      <PageHeader eyebrow={eyebrow} title={title}>
        {intro}
      </PageHeader>
      <section className="pb-24">
        <div className="wrap max-w-[820px] mx-auto flex flex-col gap-8">
          {sections.map((s, i) => (
            <div key={i} className={`reveal d${(i % 3) + 1}`}>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">{s.h}</h2>
              <p className="text-[15px] text-muted leading-[1.8]">{s.p}</p>
            </div>
          ))}
          <p className="reveal text-sm text-muted-2 mt-4">Last updated: June 2026.</p>
        </div>
      </section>
    </main>
  );
}
