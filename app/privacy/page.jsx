import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy | Five Nodes",
  description: "How Five Nodes collects, uses, and protects your data — compliant with Qatar's PDPPL data-protection requirements.",
};

const SECTIONS = [
  {
    h: "Overview",
    p: "Five Nodes ('we', 'us') is an AI company headquartered in Qatar. This policy explains how we collect, use, and protect personal data when you use our website or engage our AI services. We are committed to compliance with Qatar's Personal Data Privacy Protection Law (PDPPL).",
  },
  {
    h: "Information We Collect",
    p: "We collect information you provide directly — such as your name, email, phone number, and message when you contact us or book a demo — as well as limited technical data (such as analytics) to measure site performance and improve your experience.",
  },
  {
    h: "How We Use Your Data",
    p: "We use your data to respond to enquiries, schedule consultations, deliver and operate contracted AI systems, and improve our services. Interaction data processed within deployed systems belongs to the client and is never used to train third-party models without explicit consent.",
  },
  {
    h: "Data Security",
    p: "Deployments run on enterprise-grade infrastructure with end-to-end encryption and in-region hosting. We apply access controls, monitoring, and industry-standard safeguards to protect your data against unauthorised access.",
  },
  {
    h: "Data Ownership",
    p: "Our clients retain full ownership of their systems, data, and logic. We build on open infrastructure with no proprietary lock-in, so you can export or migrate your data at any time.",
  },
  {
    h: "Your Rights",
    p: "You may request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at Info@fivenodes.ai.",
  },
  {
    h: "Contact",
    p: "For any privacy questions, email Info@fivenodes.ai or write to 3rd Floor, Al Muftah Plaza, Al Reem St, Doha, Qatar.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your privacy matters. This policy explains what data we collect, how we use it, and the rights you have — in line with Qatar's PDPPL."
      sections={SECTIONS}
    />
  );
}
