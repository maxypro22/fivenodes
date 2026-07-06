"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocale } from "./i18n";

// Keeps <html lang/dir> in sync with the current locale. The site is statically
// prerendered with lang="en"; this promotes /ar routes to lang="ar" dir="rtl"
// after hydration (and reverts on navigation back to English routes).
export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocale(pathname);
    const el = document.documentElement;
    el.lang = locale;
    el.dir = locale === "ar" ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}
