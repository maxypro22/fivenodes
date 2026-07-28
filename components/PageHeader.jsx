export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden bg-surface pt-16 pb-12">
      <div className="wrap relative z-[1] text-center max-w-[780px] mx-auto">
        {eyebrow && (
          <span className="eyebrow reveal inline-flex justify-center">{eyebrow}</span>
        )}
        <h1 className="reveal d1 font-heading font-extrabold text-[clamp(32px,4.5vw,52px)] tracking-[-.02em] leading-[1.06] mt-4 text-ink">
          {title}
        </h1>
        {children && (
          <p className="reveal d2 text-muted text-base md:text-lg mt-5 mx-auto max-w-[640px] leading-[1.6]">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
