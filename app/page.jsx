import Hero from "@/components/Hero";
import VoicePlatform from "@/components/VoicePlatform";
import Solutions from "@/components/Solutions";
import Platform from "@/components/Platform";
import Features from "@/components/Features";
import Process from "@/components/Process";
import HomeFaq from "@/components/HomeFaq";
import HomeLegal from "@/components/HomeLegal";
import LatestBlog from "@/components/LatestBlog";
import CTASection from "@/components/CTASection";
import TrustedBy from "@/components/TrustedBy";
import ScrollMediaTransfer from "@/components/ScrollMediaTransfer";
import DashboardSection from "@/components/DashboardSection";
import AutomateWithAI from "@/components/AutomateWithAI";
import Industries from "@/components/Industries";
import JsonLd from "@/components/JsonLd";
import CommunicationSection from "@/components/CommunicationSection";

export default function Home() {
  return (
    <main>
      <JsonLd path="/" locale="en" />
      <ScrollMediaTransfer />
      <Hero />
      <VoicePlatform />
      <AutomateWithAI />
      <Industries />
      <CommunicationSection />
      <Solutions />
      <TrustedBy />
      <Platform />
      <DashboardSection />
      <Features />
      <Process />
      <HomeFaq />
      <HomeLegal />
      <LatestBlog />
      <CTASection
        title="Ready to Transform Your Customer Experience?"
        text="Discover how Five Nodes' AI services in Qatar streamline operations, capture every WhatsApp message, and unlock 24/7 bilingual customer engagement."
        primary={["Get Started", "/contact"]}
        secondary={["Contact Us", "/contact"]}
      />
    </main>
  );
}
