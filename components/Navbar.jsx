"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Languages } from "lucide-react";
import { getLocale, localizeHref, switchLocalePath, T } from "./i18n";
import ThemeToggle from "./ThemeToggle";

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
      <header className="sticky top-0 z-[100]">
        {/* Glass surface — flat flush strip near the edges, rising via diagonal
            cuts into a taller plateau that carries the logo/links/CTA. Only
            worth the clip-path math once there's real edge margin to shape. */}
        <div
          aria-hidden="true"
          className="hidden xl:block absolute inset-x-0 top-0 h-[68px] -z-10 bg-surface transition-[background-color] duration-300"
          style={{
            "--gap": "max(0px, calc((100% - 1200px) / 2))",
            clipPath:
              "polygon(0 0, 100% 0, 100% 44px, calc(100% - var(--gap)) 44px, calc(100% - var(--gap) - 22px) 100%, calc(var(--gap) + 22px) 100%, var(--gap) 44px, 0 44px)",
            filter: scrolled
              ? "drop-shadow(0 16px 30px rgba(16,22,41,.16))"
              : "drop-shadow(0 6px 16px rgba(16,22,41,.08))",
          }}
        />
        {/* Mobile / narrow viewport fallback — plain flush solid bar */}
        <div
          aria-hidden="true"
          className={`xl:hidden absolute inset-0 -z-10 bg-surface transition-shadow duration-300 ${
            scrolled ? "shadow-[0_12px_34px_-20px_rgba(16,22,41,.4)]" : ""
          }`}
        />
        {/* hairline that fades toward the edges */}
        <div className="hidden xl:block absolute inset-x-0 bottom-0 h-px -z-10 bg-gradient-to-r from-transparent via-line to-transparent" />

        <div dir="ltr" className="wrap flex items-center h-[68px] gap-7">
          <Link href={homePath} className="flex items-center shrink-0" aria-label="Five Nodes home">
            <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-9 w-auto dark:hidden" />
            <img src="/fivenodes-logo-white.png" alt="Five Nodes" className="hidden h-9 w-auto dark:block" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map(([l, h]) => {
              const external = h.startsWith("http");
              return (
                <Link
                  key={l}
                  href={external ? h : localizeHref(h, locale)}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`font-heading text-[13.5px] font-semibold tracking-[-.01em] px-3 py-2.5 rounded-full transition-all duration-200 ${
                    isActive(h)
                      ? "text-primary bg-primary-soft"
                      : "text-ink-2 hover:text-primary hover:bg-bg"
                  }`}
                >
                  {l}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:gap-3">
            {/* Language — full text on desktop */}
            <Link
              href={switchLocalePath(pathname)}
              className="hidden md:flex font-heading text-[13px] font-semibold items-center gap-[7px] px-3.5 py-2.5 rounded-full text-ink-2 hover:text-primary hover:bg-bg transition-all duration-200"
              aria-label="Switch language"
            >
              <Languages size={16} strokeWidth={2} />
              {t.langSwitch}
            </Link>
            {/* Book a call — desktop only */}
            <Link
              href={localizeHref("/book-demo", locale)}
              className="group hidden md:inline-flex items-center gap-2 rounded-xl [clip-path:polygon(7px_0,100%_0,100%_calc(100%-7px),calc(100%-7px)_100%,0_100%,0_7px)] bg-primary text-on-primary font-heading font-semibold text-[13.5px] px-5 py-2.5 shadow-button hover:bg-primary-dark hover:-translate-y-px transition-all duration-200"
            >
              {t.bookDemo}
              <ArrowRight size={15} strokeWidth={2.3} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <ThemeToggle className="hidden md:flex" />
            {/* Language — icon on mobile (right side) */}
            <Link
              href={switchLocalePath(pathname)}
              aria-label="Switch language"
              className="flex md:hidden w-9 h-9 items-center justify-center rounded-full text-ink-2 hover:text-primary hover:bg-bg transition-all duration-200"
            >
              <Languages size={18} strokeWidth={2} />
            </Link>
            <ThemeToggle className="flex md:hidden" />
            <button
              onClick={() => setOpen(true)}
              aria-label={t.menu}
              className="flex md:hidden w-10 h-10 flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-surface/70 backdrop-blur"
            >
              <span className="h-0.5 w-[18px] bg-ink rounded" />
              <span className="h-0.5 w-[18px] bg-ink rounded" />
              <span className="h-0.5 w-[18px] bg-ink rounded" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen modern drawer */}
      <div className="fixed inset-0 z-[200] overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 bg-surface flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          {/* top bar: logo left, close right */}
          <div dir="ltr" className="flex items-center justify-between h-[60px] px-[22px] border-b border-line-soft">
            <img src="/fivenodes-logo-black.png" alt="Five Nodes" className="h-8 w-auto dark:hidden" />
            <img src="/fivenodes-logo-white.png" alt="Five Nodes" className="hidden h-8 w-auto dark:block" />
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
                  className={`font-heading text-xl font-semibold tracking-[-.01em] transition-colors ${
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
              className="flex items-center gap-2 font-heading text-base font-semibold text-ink-2 hover:text-primary"
            >
              <Languages size={18} strokeWidth={2} />
              {t.langSwitch}
            </Link>
            <ThemeToggle />
          </nav>

          {/* bottom CTA — full-width, modern notched shape */}
          <div className="p-6">
            <Link
              href={localizeHref("/book-demo", locale)}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] bg-primary text-on-primary font-semibold py-[15px] text-[15px] shadow-button transition-transform active:scale-[.99]"
            >
              {t.bookDemo}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
