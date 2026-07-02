import Link from "next/link";
import PlatformOrbit from "./PlatformOrbit";

export default function Platform() {
  return (
    <section className="py-24 bg-bg">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center gap-14">
        <div>
          <h2 className="reveal font-heading font-extrabold text-[clamp(30px,4vw,44px)] tracking-[-.02em] mb-4 leading-[1.1]">
            Bilingual AI that works inside your tools
          </h2>
          <p className="reveal d1 text-muted text-base max-w-[480px] leading-[1.65]">
            We build AI chatbots, voice agents, and AI automation that plug directly into the tools
            businesses in Qatar already use — CRMs, WhatsApp Business, ERPs, calendars, and more.
          </p>
          <div className="reveal d2 flex flex-wrap gap-[14px] mt-8">
            <Link href="/contact" className="btn btn-primary px-[22px] py-[13px]">
              Book a Free Consultation
            </Link>
            <Link href="/services" className="btn btn-ghost px-[22px] py-[13px]">
              See Our Services
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center order-first lg:order-none">
          <PlatformOrbit />
        </div>
      </div>
    </section>
  );
}
