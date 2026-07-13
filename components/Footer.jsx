"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubscribeForm from "./SubscribeForm";
import { getLocale, localizeHref, T } from "./i18n";

const CONTACTS = [
  ["+974 3001 0105", "office"],
  ["+974 4444 0085", "support"],
];

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

const HEADING = "font-heading font-bold text-[15px] text-ink mb-5";
const LINK = "text-[15px] text-ink-2 hover:text-primary transition-colors";

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const f = T[locale].footer;
  const loc = (href) => localizeHref(href, locale);

  return (
    <footer className="bg-bg border-t border-line-soft pt-[70px] pb-[30px]">
      <div className="wrap">
        {/* Top: brand + newsletter · quick links · services */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1.6fr] gap-12">
          {/* Brand + newsletter */}
          <div>
            <Link href={loc("/")} className="inline-flex items-center mb-5" aria-label="Five Nodes home">
              <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-12 w-auto" />
            </Link>
            <div className="font-heading font-bold text-lg text-ink mb-2">{f.stayConnected}</div>
            <p className="text-sm text-muted mb-4 max-w-[360px] leading-[1.6]">{f.newsletter}</p>
            <SubscribeForm placeholder={f.emailPlaceholder} />
          </div>

          {/* Quick Links */}
          <FooterCol title={f.resources} items={f.resourcesItems} loc={loc} />

          {/* Services — heading over a two-column list */}
          <div>
            <div className={HEADING}>{f.services}</div>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {f.servicesItems.map(([label, href]) => (
                <li key={label}>
                  <Link href={loc(href)} className={LINK}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle: socials + email */}
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between mt-16">
          <div className="flex gap-[10px]">
            {SOCIALS.map(({ name, url, d }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 rounded-full border border-line text-ink-2 grid place-items-center transition-all duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </div>
          <a
            href="mailto:Info@fivenodes.ai"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-primary"
          >
            Info@fivenodes.ai
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-muted-2">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Qatar Office card */}
        <div className="border-t border-line-soft mt-8 pt-10">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_12px_30px_-20px_rgba(16,22,41,.25)] lg:max-w-[560px]">
            <div className="flex items-center gap-2 font-heading font-bold text-ink">
              <span className="text-lg leading-none">🇶🇦</span>
              {f.officeName}
            </div>
            <div className="flex items-start gap-2.5 mt-4 text-[13px] text-muted leading-[1.55]">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mt-0.5 shrink-0 text-muted-2">
                <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <span>
                {f.address[0]} {f.address[1]}
              </span>
            </div>
            {CONTACTS.map(([ph]) => (
              <div key={ph} className="flex items-center gap-2.5 mt-2.5 text-sm text-ink-2 font-medium">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0 text-muted-2">
                  <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span dir="ltr">{ph}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line-soft mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[13px] text-muted-2">{f.rights}</div>
          <div className="flex gap-6 flex-wrap">
            <Link href={loc("/privacy")} className="text-[13px] text-muted hover:text-ink">{f.privacy}</Link>
            <Link href={loc("/terms")} className="text-[13px] text-muted hover:text-ink">{f.terms}</Link>
            <Link href={loc("/faq")} className="text-[13px] text-muted hover:text-ink">{f.faq}</Link>
            <Link href={loc("/contact")} className="text-[13px] text-muted hover:text-ink">{f.contactShort}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, loc }) {
  return (
    <div>
      <div className={HEADING}>{title}</div>
      <ul className="flex flex-col gap-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={loc(href)} className={LINK}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
