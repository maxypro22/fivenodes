"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubscribeForm from "./SubscribeForm";
import { getLocale, localizeHref, T } from "./i18n";
import FlagIcon from "./FlagIcon";
import { OFFICES } from "./OfficeCards";

const SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/five-nodes-ltd",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/five_nodes_ai/",
    d: "M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.4 1.3.5 2.4C21.9 8.9 22 9.3 22 12s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.4a4.5 4.5 0 01-1 1.6 4.5 4.5 0 01-1.6 1c-.6.3-1.3.4-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5a4.5 4.5 0 01-1.6-1 4.5 4.5 0 01-1-1.6c-.3-.6-.4-1.3-.5-2.4C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.4a4.5 4.5 0 011-1.6 4.5 4.5 0 011.6-1c.6-.3 1.3-.4 2.4-.5C9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.4 5.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
  },
  {
    name: "X",
    url: "https://x.com/five_nodes_ai",
    d: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5zM16.7 20h1.7L7.4 4H5.6z",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61582372894863",
    d: "M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@five_nodes_ai",
    d: "M16.5 3c.3 2.1 1.5 3.6 3.5 3.9V10c-1.3.1-2.5-.3-3.6-1v6.3c0 3.4-2.6 5.7-5.8 5.7-3 0-5.1-2.2-5.1-5 0-3 2.4-5.1 5.6-4.8v3.2c-.4-.1-.8-.2-1.2-.2-1.1 0-2 .9-2 2s.9 2.1 2.1 2.1c1.2 0 2.2-.9 2.2-2.3V3z",
  },
];

const HEADING = "font-heading font-bold text-[11px] uppercase tracking-[.14em] text-primary mb-4";

/* Link rows carry a small chevron marker, as in the reference footer. */
const LINK =
  "group flex items-start gap-2 py-[5px] text-[14px] leading-[1.5] text-ink-2 transition-colors duration-200 hover:text-primary";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="w-3 h-3 mt-[5px] shrink-0 text-muted-2 transition-all duration-200 group-hover:text-primary rtl:rotate-180"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Contact row: circular outlined icon badge, small label above the value. */
function ContactRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted-2">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[.1em] text-muted-2">{label}</div>
        <div className="text-[13.5px] text-ink-2 leading-[1.55] mt-1">{children}</div>
      </div>
    </div>
  );
}

const PinIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
    <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const PhoneGlyph = (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
    <path
      d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const MailGlyph = (
  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const f = T[locale].footer;
  const isAr = locale === "ar";
  const loc = (href) => localizeHref(href, locale);
  const hq = OFFICES[0];

  return (
    <footer className="bg-bg border-t border-line-soft pt-[60px] pb-[26px]">
      <div className="wrap">
        {/* ---------- Offices ---------- */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {OFFICES.map((o) => {
              const t = isAr ? o.ar : o.en;
              const lines = isAr ? o.linesAr : o.lines;
              return (
                <div
                  key={o.key}
                  className="rounded-2xl border border-line bg-surface p-6 shadow-[0_12px_30px_-20px_rgba(16,22,41,.25)]"
                >
                  <div className="flex items-center gap-2.5 font-heading font-bold text-ink">
                    <FlagIcon code={o.code} className="w-[22px] h-[16px]" />
                    {t.label}
                  </div>
                  <div className="flex items-start gap-2.5 mt-4 text-[13px] text-muted leading-[1.55]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mt-0.5 shrink-0 text-muted-2">
                      <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    <span>{lines.join(", ")}</span>
                  </div>
                  {o.phones.map((ph) => (
                    <a
                      key={ph.tel}
                      href={`tel:${ph.tel}`}
                      className="flex items-center gap-2.5 mt-2.5 text-sm text-ink-2 font-medium hover:text-primary transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 text-muted-2">
                        <path
                          d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span dir="ltr">{ph.display}</span>
                    </a>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- brand · quick links · services · contact ---------- */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-8 lg:grid-cols-[1.7fr_1fr_1fr_1.4fr] lg:gap-12">
          {/* Brand — centred on phones, start-aligned from sm up */}
          <div className="col-span-2 text-center sm:text-start lg:col-span-1">
            <Link href={loc("/")} className="inline-flex items-center mb-4" aria-label="Five Nodes home">
              <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-12 w-auto dark:hidden" />
              <img src="/fivenodes-logo-white.png" alt="Five Nodes" className="hidden h-12 w-auto dark:block" />
            </Link>

            <p className="text-[13.5px] text-muted leading-[1.7] max-w-[360px] mx-auto sm:mx-0">
              {f.newsletter}
            </p>

            <div className="mt-5 max-w-[360px] mx-auto sm:mx-0">
              <div className="font-heading font-bold text-[15px] text-ink mb-2">{f.stayConnected}</div>
              <SubscribeForm placeholder={f.emailPlaceholder} />
            </div>

            <div className="flex gap-[10px] mt-6 justify-center sm:justify-start">
              {SOCIALS.map(({ name, url, d }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full border border-line text-ink-2 grid place-items-center transition-all duration-200 hover:bg-primary hover:border-primary hover:text-on-primary hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className={HEADING}>{f.resources}</div>
            <ul>
              {f.resourcesItems.map(([label, href]) => (
                <li key={label}>
                  <Link href={loc(href)} className={LINK}>
                    <Chevron />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className={HEADING}>{f.services}</div>
            <ul>
              {f.servicesItems.map(([label, href]) => (
                <li key={label}>
                  <Link href={loc(href)} className={LINK}>
                    <Chevron />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <div className={HEADING}>{f.contact}</div>
            <div className="flex flex-col gap-4">
              <ContactRow icon={PinIcon} label={isAr ? "العنوان" : "Address"}>
                {(isAr ? hq.linesAr : hq.lines).join(", ")}
              </ContactRow>

              <ContactRow icon={PhoneGlyph} label={isAr ? "الهاتف" : "Phone"}>
                {hq.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    dir="ltr"
                    className="block hover:text-primary transition-colors"
                  >
                    {p.display}
                  </a>
                ))}
              </ContactRow>

              <ContactRow icon={MailGlyph} label={isAr ? "البريد الإلكتروني" : "Email"}>
                <a href="mailto:Info@fivenodes.ai" className="hover:text-primary transition-colors">
                  Info@fivenodes.ai
                </a>
              </ContactRow>
            </div>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="border-t border-line-soft mt-10 pt-6 flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-start">
          <div className="text-[13px] text-muted-2">{f.rights}</div>
          <div className="flex gap-1 flex-wrap justify-center -mx-3">
            {[
              [f.privacy, "/privacy"],
              [f.terms, "/terms"],
              [f.faq, "/faq"],
              [f.contactShort, "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={loc(href)}
                className="px-3 py-1 text-[13px] text-muted-2 hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
