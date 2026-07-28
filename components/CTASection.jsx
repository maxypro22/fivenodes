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
        <div
          className="relative overflow-hidden rounded-[18px] md:rounded-[24px] bg-gradient-to-br from-[#0f1629] to-[#1d3a8f] text-white px-5 py-9 md:px-16 md:py-16 text-center [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] md:[clip-path:polygon(52px_0,100%_0,100%_calc(100%-52px),calc(100%-52px)_100%,0_100%,0_52px)]"
        >
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-primary/30 dark:bg-[#bda7fe]/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-24 w-72 h-72 rounded-full bg-[#4f46e5]/30 dark:bg-[#bda7fe]/25 blur-3xl pointer-events-none" />
          <div className="relative z-[1] max-w-[640px] mx-auto">
            <h2 className="reveal font-heading font-extrabold text-[clamp(22px,3.6vw,42px)] tracking-[-.02em] leading-[1.15] md:leading-[1.1]">
              {title}
            </h2>
            <p className="reveal d1 text-white/70 text-[14px] md:text-base mt-3 md:mt-5 leading-[1.55] md:leading-[1.6]">{text}</p>
            <div className="reveal d2 flex flex-wrap gap-[10px] md:gap-[14px] justify-center mt-6 md:mt-8">
              <Link
                href={primary[1]}
                className="btn bg-white text-[#0f1629] dark:bg-[#bda7fe] dark:text-[#1b1523] text-[13px] md:text-sm px-4 py-2.5 md:px-[22px] md:py-[13px] hover:-translate-y-px hover:shadow-lg"
              >
                {primary[0]}
              </Link>
              <Link
                href={secondary[1]}
                className="btn border border-white/25 text-white text-[13px] md:text-sm px-4 py-2.5 md:px-[22px] md:py-[13px] hover:bg-white/10 hover:-translate-y-px"
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
