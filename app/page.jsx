import Hero from "@/components/Hero";
import VoicePlatform from "@/components/VoicePlatform";
import Solutions from "@/components/Solutions";
import Platform from "@/components/Platform";
import Features from "@/components/Features";
import Process from "@/components/Process";
import HomeFaq from "@/components/HomeFaq";
import HomeLegal from "@/components/HomeLegal";
import CTASection from "@/components/CTASection";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <main>
      <Hero />
      <VoicePlatform />
      <Solutions />
      <TrustedBy />
      <Platform />
      <Features />
      <Process />
      <HomeFaq />
      <HomeLegal />
      <CTASection
        title="Ready to Transform Your Customer Experience?"
        text="Discover how Five Nodes' AI services in Qatar streamline operations, capture every WhatsApp message, and unlock 24/7 bilingual customer engagement."
        primary={["Get Started", "/contact"]}
        secondary={["Contact Us", "/contact"]}
      />
    </main>
  );
}
