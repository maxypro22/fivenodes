import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service | Five Nodes",
  description: "The terms governing your use of the Five Nodes website and services.",
};

const SECTIONS = [
  {
    h: "Acceptance of Terms",
    p: "By accessing the Five Nodes website or engaging our services, you agree to these Terms of Service. If you do not agree, please do not use our website or services.",
  },
  {
    h: "Our Services",
    p: "Five Nodes engineers custom AI systems — including voice agents, WhatsApp agents, workflow automation, and omni-channel monitoring — for businesses in Qatar. The scope, deliverables, and timelines of any engagement are defined in a separate written agreement.",
  },
  {
    h: "Engagements & Deployment",
    p: "Every engagement begins with a discovery call and a scoping phase. Deployment timelines typically range from 2–6 weeks. Specific commitments, pricing, and service levels are set out in your engagement agreement.",
  },
  {
    h: "Intellectual Property",
    p: "Website content, branding, and materials are the property of Five Nodes. Systems we build for clients — including their data and business logic — are owned by the client as described in the engagement agreement.",
  },
  {
    h: "Acceptable Use",
    p: "You agree not to misuse our website or services, including attempting to disrupt, reverse-engineer, or gain unauthorised access to any system or data.",
  },
  {
    h: "Limitation of Liability",
    p: "Our website and general information are provided 'as is'. To the extent permitted by law, Five Nodes is not liable for indirect or consequential damages arising from use of the website. Service-specific liability is governed by your engagement agreement.",
  },
  {
    h: "Contact",
    p: "Questions about these terms can be sent to Info@fivenodes.ai or 3rd Floor, Al Muftah Plaza, Al Reem St, Doha, Qatar.",
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms govern your use of the Five Nodes website and services. Please read them carefully."
      sections={SECTIONS}
    />
  );
}
