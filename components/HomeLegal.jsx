"use client";

import Link from "next/link";
import { ShieldCheck, FileText, Lock, Scale } from "lucide-react";
import FeaturesDeck from "./FeaturesDeck";

const POINTS = [
  {
    Icon: FileText,
    t: "Information Collection",
    d: "We collect information you provide directly, including name, email, company name, and phone number when you request a demo or use our services.",
  },
  {
    Icon: ShieldCheck,
    t: "Call Recording Disclosure",
    d: "All calls handled by Five Nodes AI are recorded for quality assurance. You will be notified at the start of each call.",
  },
  {
    Icon: Lock,
    t: "Data Security",
    d: "Your data is protected with end-to-end encryption. We do not use your data for AI training unless you explicitly consent.",
  },
  {
    Icon: Scale,
    t: "GDPR & CCPA Compliance",
    d: "Five Nodes complies with GDPR, CCPA, and other applicable data protection regulations. You have the right to access, correct, or delete your personal data.",
  },
];

export default function HomeLegal() {
  return (
    <section className="py-24 bg-surface border-y border-line-soft">
      <div className="wrap">
        <div className="text-center max-w-[640px] mx-auto">
          <span className="eyebrow reveal inline-flex justify-center">Legal</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.8vw,44px)] tracking-[-.02em] text-ink mt-3">
            Privacy Policy
          </h2>
          <p className="reveal d2 text-muted text-base mt-[14px] mx-auto">
            Your privacy matters to us. Here's how we handle and protect your data.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-[22px] mt-12 max-w-[860px] mx-auto">
          {POINTS.map((p, i) => (
            <div
              key={p.t}
              className={`reveal d${(i % 2) + 1} group flex items-start gap-4 bg-bg border border-line rounded-[18px] p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}
            >
              <div className="w-12 h-12 rounded-[12px] bg-surface border border-line grid place-items-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary">
                <p.Icon size={22} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[16px] text-ink">{p.t}</h3>
                <p className="text-sm text-muted mt-1.5 leading-[1.55]">{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — same layered rotating deck as the Features section */}
        <div className="md:hidden mt-10 max-w-[420px] mx-auto">
          <FeaturesDeck items={POINTS} />
        </div>

        <div className="reveal text-center mt-10">
          <p className="text-sm text-muted">
            Questions about your data? Email{" "}
            <a href="mailto:Info@fivenodes.ai" className="text-primary font-medium hover:underline">
              Info@fivenodes.ai
            </a>
          </p>
          <Link href="/privacy" className="btn btn-ghost mt-5">
            Read full Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
