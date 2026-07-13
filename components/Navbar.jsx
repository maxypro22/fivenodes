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
        <div dir="ltr" className="wrap flex items-center h-[60px] gap-[30px]">
          <Link href={homePath} className="flex items-center" aria-label="Five Nodes home">
            <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-9 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-2">
            {LINKS.map(([l, h]) => {
              const external = h.startsWith("http");
              return (
                <Link
                  key={l}
                  href={external ? h : localizeHref(h, locale)}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    isActive(h) ? "text-primary" : "text-ink-2 hover:text-primary"
                  }`}
                >
                  {l}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 md:gap-4">
            {/* Language — full text on desktop */}
            <Link
              href={switchLocalePath(pathname)}
              className="hidden md:flex text-[13px] font-semibold items-center gap-[6px] text-ink-2 hover:text-primary"
              aria-label="Switch language"
            >
              🌐 {t.langSwitch}
            </Link>
            {/* Book a call — desktop only */}
            <span className="hidden md:inline-flex">
              <Link href={localizeHref("/book-demo", locale)} className="btn btn-primary">
                {t.bookDemo}
              </Link>
            </span>
            {/* Language — icon on mobile (right side) */}
            <Link
              href={switchLocalePath(pathname)}
              aria-label="Switch language"
              className="flex md:hidden w-9 h-9 items-center justify-center rounded-full text-lg text-ink-2 hover:text-primary"
            >
              🌐
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

      {/* Mobile menu — full-screen modern drawer */}
      <div className="fixed inset-0 z-[200] overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 bg-white flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          {/* top bar: logo left, close right */}
          <div dir="ltr" className="flex items-center justify-between h-[60px] px-[22px] border-b border-line-soft">
            <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-8 w-auto" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 grid place-items-center text-3xl leading-none text-ink"
            >
              &times;
            </button>
          </div>

          {/* centered links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-7 px-6">
            {LINKS.map(([l, h]) => {
              const external = h.startsWith("http");
              return (
                <Link
                  key={l}
                  href={external ? h : localizeHref(h, locale)}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`text-xl font-semibold tracking-wide transition-colors ${
                    isActive(h) ? "text-primary" : "text-ink hover:text-primary"
                  }`}
                >
                  {l}
                </Link>
              );
            })}
            <Link
              href={switchLocalePath(pathname)}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-ink-2 hover:text-primary"
            >
              🌐 {t.langSwitch}
            </Link>
          </nav>

          {/* bottom CTA — full-width pill */}
          <div className="p-6">
            <Link
              href={localizeHref("/book-demo", locale)}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-ink text-white font-semibold py-[15px] text-[15px] shadow-[0_14px_30px_-12px_rgba(15,22,41,.6)] transition-transform active:scale-[.99]"
            >
              {t.bookDemo}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
