import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
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
  logo: "https://fivenodes.ai/icon-512.png",
  email: "Info@fivenodes.ai",
  sameAs: [
    "https://www.linkedin.com/company/five-nodes-ltd",
    "https://x.com/five_nodes_ai",
    "https://www.instagram.com/five_nodes_ai/",
    "https://www.facebook.com/profile.php?id=61582372894863",
    "https://www.tiktok.com/@five_nodes_ai",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Muftah Plaza, Al Reem St",
    addressLocality: "Doha",
    addressCountry: "QA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+974 3001 0105",
    contactType: "customer service",
    email: "Info@fivenodes.ai",
  },
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fivenodes.ai/#website",
  url: "https://fivenodes.ai",
  name: "Five Nodes",
  inLanguage: "en",
  publisher: { "@id": "https://fivenodes.ai/#organization" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${instrument.variable}`}>
      <body className="bg-bg text-ink font-body antialiased overflow-x-clip">
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
        <CookieBar />
        <WhatsAppFab />
        <ScrollIndicator />
        <ScrollReveal />
      </body>
    </html>
  );
}
