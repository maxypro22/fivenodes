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
  title: "Five Nodes — AI Company in Qatar | Bilingual WhatsApp & Voice Agents",
  description:
    "Five Nodes engineers bilingual (Arabic/English) AI voice agents, WhatsApp agents, and AI automation for businesses in Qatar. Secure, custom-built, deployed in weeks.",
  metadataBase: new URL("https://fivenodes.ai"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${instrument.variable}`}>
      <body className="bg-bg text-ink font-body antialiased overflow-x-hidden">
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
