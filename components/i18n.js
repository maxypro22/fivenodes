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
      ["Basha", "/basha"],
      ["News", "/news"],
      ["Blog", "/blog"],
      ["Monitor", "https://demo.fivenodes.ai"],
      ["Agent", "https://agent.fivenodes.ai"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
    bookDemo: "Book a call",
    langSwitch: "العربية",
    menu: "Menu",
    footer: {
      stayConnected: "Stay Connected",
      newsletter: "Join our newsletter for the latest updates on AI automation.",
      emailPlaceholder: "Enter your email",
      services: "Services",
      resources: "Quick Links",
      contact: "Contact",
      officeName: "Qatar Office",
      address: ["3rd Floor, Al Muftah Plaza,", "Al Reem St, Doha, Qatar"],
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
        ["AI Customer Memory", "/services"],
        ["Smart Notifications", "/services"],
      ],
      resourcesItems: [
        ["Home", "/"],
        ["About", "/about"],
        ["Services", "/services"],
        ["FAQ", "/faq"],
        ["Privacy Policy", "/privacy"],
        ["Contact", "/contact"],
        ["Book a call", "/book-demo"],
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
      ["المراقبة", "https://demo.fivenodes.ai"],
      ["الوكيل", "https://agent.fivenodes.ai"],
      ["من نحن", "/about"],
      ["تواصل معنا", "/contact"],
    ],
    bookDemo: "احجز مكالمة",
    langSwitch: "English",
    menu: "القائمة",
    footer: {
      stayConnected: "ابقَ على تواصل",
      newsletter: "انضم إلى نشرتنا البريدية لآخر تحديثات أتمتة الذكاء الاصطناعي.",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      services: "الخدمات",
      resources: "روابط سريعة",
      contact: "تواصل معنا",
      officeName: "مكتب قطر",
      address: ["الطابق الثالث، بلازا آل مفتاح،", "شارع الريم، الدوحة، قطر"],
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
        ["ذاكرة العملاء الذكية", "/services"],
        ["الإشعارات الذكية", "/services"],
      ],
      resourcesItems: [
        ["الرئيسية", "/"],
        ["من نحن", "/about"],
        ["خدماتنا", "/services"],
        ["الأسئلة الشائعة", "/faq"],
        ["سياسة الخصوصية", "/privacy"],
        ["تواصل معنا", "/contact"],
        ["احجز مكالمة", "/book-demo"],
      ],
    },
  },
};
