import Link from "next/link";

export default function CTASection({
  title = "Ready to automate what matters?",
  text = "Every engagement starts with a free discovery call. We'll audit your workflows and show you exactly where AI can save time, reduce costs, and improve operations.",
  primary = ["Book a Discovery Call", "/contact"],
  secondary = ["About Five Nodes", "/about"],
}) {
  return (
    <section className="py-24">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0f1629] to-[#1d3a8f] text-white px-8 py-16 md:px-16 text-center">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-24 w-72 h-72 rounded-full bg-[#4f46e5]/30 blur-3xl pointer-events-none" />
          <div className="relative z-[1] max-w-[640px] mx-auto">
            <h2 className="reveal font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] leading-[1.1]">
              {title}
            </h2>
            <p className="reveal d1 text-white/70 text-base mt-5 leading-[1.6]">{text}</p>
            <div className="reveal d2 flex flex-wrap gap-[14px] justify-center mt-8">
              <Link
                href={primary[1]}
                className="btn bg-white text-ink px-[22px] py-[13px] hover:-translate-y-px hover:shadow-lg"
              >
                {primary[0]}
              </Link>
              <Link
                href={secondary[1]}
                className="btn border border-white/25 text-white px-[22px] py-[13px] hover:bg-white/10 hover:-translate-y-px"
              >
                {secondary[0]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
