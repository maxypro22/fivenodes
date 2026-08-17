import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollIndicator from "@/components/ScrollIndicator";
import LangSetter from "@/components/LangSetter";
import { pageMeta } from "@/components/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://fivenodes.ai"),
  authors: [{ name: "Five Nodes" }],
  creator: "Five Nodes for Artificial Intelligence L.L.C.",
  publisher: "Five Nodes",
  keywords: [
    "AI company Qatar",
    "WhatsApp AI agent Qatar",
    "AI voice agent Qatar",
    "AI automation Qatar",
    "bilingual AI agent Qatar",
    "Five Nodes",
  ],
  robots: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  ...pageMeta({
    title: "AI Company in Qatar — Voice, WhatsApp & Automation Agents | Five Nodes",
    description:
      "Five Nodes is an AI company in Qatar building bilingual WhatsApp AI agents, AI voice agents, and AI automation for businesses in Qatar. 24/7 in Arabic and English.",
    path: "/",
    ogTitle: "Five Nodes — AI Company in Qatar",
  }),
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fivenodes.ai/#organization",
  name: "Five Nodes",
  legalName: "Five Nodes for Artificial Intelligence L.L.C.",
  url: "https://fivenodes.ai",
  // ImageObject (not a bare URL) so Google can use it as the knowledge-panel
  // logo, matching the production site. Points at an asset in this repo —
  // production's /images/logo.png does not exist here.
  logo: {
    "@type": "ImageObject",
    "@id": "https://fivenodes.ai/#logo",
    url: "https://fivenodes.ai/fivenodes-logo-black.png",
    contentUrl: "https://fivenodes.ai/fivenodes-logo-black.png",
    caption: "Five Nodes Logo",
    width: 7414,
    height: 3864,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@id": "https://fivenodes.ai/#service-voice" } },
      { "@type": "Offer", itemOffered: { "@id": "https://fivenodes.ai/#service-whatsapp" } },
      { "@type": "Offer", itemOffered: { "@id": "https://fivenodes.ai/#service-workflow" } },
      { "@type": "Offer", itemOffered: { "@id": "https://fivenodes.ai/#service-consult" } },
    ],
  },
  email: "Info@fivenodes.ai",
  // sameAs is how answer engines resolve "Five Nodes" to one real entity.
  // Add each profile here as it goes live — a Wikidata item in particular is a
  // disproportionately strong entity signal. See ENTITY-CHECKLIST.md.
  sameAs: [
    "https://www.linkedin.com/company/five-nodes-ltd",
    "https://x.com/five_nodes_ai",
    "https://www.instagram.com/five_nodes_ai/",
    "https://www.facebook.com/profile.php?id=61582372894863",
    "https://www.tiktok.com/@five_nodes_ai",
    // TODO once live — do not add speculative URLs, a 404 in sameAs weakens the
    // entity rather than strengthening it:
    // "https://www.wikidata.org/wiki/Q…",
    // "https://www.google.com/maps/place/…",   // Google Business Profile
    // "https://clutch.co/profile/five-nodes",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Muftah Plaza, Al Reem St",
    addressLocality: "Doha",
    addressCountry: "QA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+974 3001 0105",
      contactType: "customer service",
      email: "Info@fivenodes.ai",
      areaServed: "QA",
      availableLanguage: ["ar", "en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+44 7384 188072",
      contactType: "sales",
      email: "Info@fivenodes.ai",
      areaServed: "GB",
      availableLanguage: ["en", "ar"],
    },
  ],
  // Both offices as distinct places, so each can resolve locally.
  location: [
    {
      "@type": "Place",
      "@id": "https://fivenodes.ai/#office-qa",
      name: "Five Nodes — Qatar Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, Al Muftah Plaza, Al Reem St",
        addressLocality: "Doha",
        addressCountry: "QA",
      },
      telephone: "+974 3001 0105",
    },
    {
      "@type": "Place",
      "@id": "https://fivenodes.ai/#office-uk",
      name: "Five Nodes — UK Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "167-169 Great Portland Street, 5th Floor",
        addressLocality: "London",
        postalCode: "W1W 5PF",
        addressCountry: "GB",
      },
      telephone: "+44 7384 188072",
    },
  ],
};

// Runs synchronously before first paint so the page never flashes the wrong
// theme: honors a saved preference, otherwise falls back to system setting.
const THEME_INIT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fivenodes.ai/#website",
  url: "https://fivenodes.ai",
  name: "Five Nodes",
  // The site serves both locales, so declare both rather than "en" only.
  inLanguage: ["en", "ar"],
  publisher: { "@id": "https://fivenodes.ai/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.google.com/search?q=site%3Afivenodes.ai+{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${instrument.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased overflow-x-clip">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
        <LangSetter />
        <SmoothScroll />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFab />
        <ScrollIndicator />
        <ScrollReveal />
      </body>
    </html>
  );
}
