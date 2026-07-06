"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocale, localizeHref, switchLocalePath, T } from "./i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const t = T[locale];
  const LINKS = t.nav;
  const homePath = locale === "ar" ? "/ar" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => {
    const target = localizeHref(href, locale);
    return href === "/" ? pathname === homePath : pathname.startsWith(target);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] backdrop-blur-[12px] backdrop-saturate-150 border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/90 border-line shadow-[0_6px_20px_-14px_rgba(16,22,41,.3)]"
            : "bg-[rgba(246,247,251,.82)] border-transparent"
        }`}
      >
        <div className="wrap flex items-center h-[60px] gap-[30px]">
          <Link href={homePath} className="flex items-center" aria-label="Five Nodes home">
            <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-9 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-2">
            {LINKS.map(([l, h]) => (
              <Link
                key={l}
                href={localizeHref(h, locale)}
                className={`text-sm font-medium transition-colors ${
                  isActive(h) ? "text-primary" : "text-ink-2 hover:text-primary"
                }`}
              >
                {l}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Link
              href={switchLocalePath(pathname)}
              className="hidden md:flex text-[13px] font-semibold items-center gap-[6px] text-ink-2 hover:text-primary"
              aria-label="Switch language"
            >
              🌐 {t.langSwitch}
            </Link>
            <Link href={localizeHref("/contact", locale)} className="hidden md:inline text-[13px] font-medium text-muted hover:text-ink">
              {t.agentDemo}
            </Link>
            <Link href={localizeHref("/book-demo", locale)} className="btn btn-primary">
              {t.bookDemo}
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label={t.menu}
              className="flex md:hidden flex-col gap-[5px] w-[26px]"
            >
              <span className="h-0.5 bg-ink rounded" />
              <span className="h-0.5 bg-ink rounded" />
              <span className="h-0.5 bg-ink rounded" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — wrapped in a viewport-sized clip layer so the off-screen
          drawer never causes horizontal overflow */}
      <div className="fixed inset-0 z-[200] overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 bg-white flex flex-col pt-20 px-[30px] pb-[30px] gap-[6px] transition-transform duration-300 ${
            open ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-[22px] right-[26px] text-3xl leading-none text-ink"
          >
            &times;
          </button>
          {LINKS.map(([l, h]) => (
            <Link
              key={l}
              href={localizeHref(h, locale)}
              onClick={() => setOpen(false)}
              className="py-[14px] text-lg font-semibold border-b border-line-soft"
            >
              {l}
            </Link>
          ))}
          <Link
            href={switchLocalePath(pathname)}
            onClick={() => setOpen(false)}
            className="py-[14px] text-lg font-semibold border-b border-line-soft"
          >
            🌐 {t.langSwitch}
          </Link>
          <Link href={localizeHref("/book-demo", locale)} onClick={() => setOpen(false)} className="btn btn-primary mt-5">
            {t.bookDemo}
          </Link>
        </div>
      </div>
    </>
  );
}
