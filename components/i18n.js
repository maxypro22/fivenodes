// Locale helpers + chrome (navbar/footer/topbar) dictionary for the EN/AR mirror.
// English lives at the root ("/services"); Arabic is mirrored under "/ar/services".

export function getLocale(pathname) {
  return pathname === "/ar" || pathname?.startsWith("/ar/") ? "ar" : "en";
}

// Localize an app path for the current locale ("/services" -> "/ar/services").
export function localizeHref(href, locale) {
  if (locale !== "ar") return href;
  if (href === "/") return "/ar";
  if (href.startsWith("/ar")) return href;
  if (href.startsWith("/")) return `/ar${href}`;
  return href; // external / hash-only
}

// Given the current pathname, return the mirrored path in the other language.
export function switchLocalePath(pathname) {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3) || "/";
  if (pathname === "/") return "/ar";
  return `/ar${pathname}`;
}

export const T = {
  en: {
    dir: "ltr",
    nav: [
      ["Home", "/"],
      ["Services", "/services"],
      ["Basha AI", "/basha"],
      ["News", "/news"],
      ["Blog", "/blog"],
      ["About Us", "/about"],
      ["Contact", "/contact"],
    ],
    agentDemo: "Agent Demo",
    bookDemo: "Book Demo",
    langSwitch: "العربية",
    menu: "Menu",
    footer: {
      brand:
        "AI company in Qatar engineering bilingual voice & WhatsApp agents and AI automation that run your operations 24/7.",
      stayConnected: "Stay Connected",
      services: "Services",
      resources: "Resources",
      contact: "Contact",
      officeCity: "Doha — Office",
      supportCity: "Doha — Support",
      address: ["3rd Floor, Al Muftah Plaza,", "Al Reem St, Doha, Qatar."],
      rights: "© 2026 Five Nodes. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      faq: "FAQ",
      contactShort: "Contact",
      servicesItems: [
        ["AI Voice Solutions", "/services"],
        ["AI Chat & Messaging", "/services"],
        ["Omnichannel Monitoring", "/services"],
        ["Smart Booking", "/services"],
        ["Workflow Automation", "/services"],
        ["Data & Intelligence", "/services"],
        ["Basha AI", "/basha"],
      ],
      resourcesItems: [
        ["News", "/news"],
        ["Blog", "/blog"],
        ["About Us", "/about"],
        ["Book a Demo", "/book-demo"],
        ["FAQ", "/faq"],
        ["Contact", "/contact"],
      ],
    },
  },
  ar: {
    dir: "rtl",
    nav: [
      ["الرئيسية", "/"],
      ["خدماتنا", "/services"],
      ["باشا", "/basha"],
      ["الأخبار", "/news"],
      ["المدونة", "/blog"],
      ["من نحن", "/about"],
      ["تواصل معنا", "/contact"],
    ],
    agentDemo: "عرض الوكيل",
    bookDemo: "احجز مكالمة",
    langSwitch: "English",
    menu: "القائمة",
    footer: {
      brand:
        "شركة ذكاء اصطناعي في قطر تُصمّم وكلاء صوت وواتساب ثنائيي اللغة وأتمتة ذكاء اصطناعي تُدير عملياتك على مدار الساعة.",
      stayConnected: "ابقَ على تواصل",
      services: "الخدمات",
      resources: "روابط سريعة",
      contact: "تواصل معنا",
      officeCity: "الدوحة — المكتب",
      supportCity: "الدوحة — الدعم",
      address: ["الطابق الثالث، بلازا آل مفتاح،", "شارع الريم، الدوحة، قطر."],
      rights: "© 2026 فايف نودز. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      faq: "الأسئلة الشائعة",
      contactShort: "تواصل معنا",
      servicesItems: [
        ["حلول الصوت الذكي", "/services"],
        ["الدردشة والمراسلة الذكية", "/services"],
        ["المراقبة الشاملة", "/services"],
        ["الحجز الذكي", "/services"],
        ["أتمتة سير العمل", "/services"],
        ["البيانات والتحليلات", "/services"],
        ["باشا", "/basha"],
      ],
      resourcesItems: [
        ["الأخبار", "/news"],
        ["المدونة", "/blog"],
        ["من نحن", "/about"],
        ["احجز عرضاً", "/book-demo"],
        ["الأسئلة الشائعة", "/faq"],
        ["تواصل معنا", "/contact"],
      ],
    },
  },
};
