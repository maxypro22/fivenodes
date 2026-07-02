import FaqAccordion from "./FaqAccordion";

const ITEMS = [
  {
    q: "Are calls recorded?",
    a: "Yes, calls are recorded for quality assurance purposes. This helps us maintain service quality and continuously improve your AI assistant's performance.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. Your data is completely secured with end-to-end encryption. We do not use your data for training purposes unless you explicitly provide consent. Five Nodes complies with GDPR and CCPA regulations.",
  },
  {
    q: "Can the AI handle complex conversations and interruptions?",
    a: "Yes. Our AI can handle context switches, interruptions, and multi-turn conversations naturally. It understands intent, remembers context, and responds appropriately.",
  },
  {
    q: "What happens if the AI can't handle a request?",
    a: "Five Nodes is designed to recognize its limitations. When a call requires human intervention, it seamlessly transfers to your team with full context of the conversation. You can also set custom escalation rules.",
  },
  {
    q: "How long does it take to set up?",
    a: "Setup typically takes 2 to 5 business days, depending on the documents submitted and the complexity of your requirements. Our onboarding team guides you through every step.",
  },
  {
    q: "Can I customize the AI's voice and personality?",
    a: "Yes! You can choose from multiple voice options, adjust speaking speed and tone, and fully customize the AI's personality to match your brand.",
  },
];

export default function HomeFaq() {
  return (
    <section className="py-24">
      <div className="wrap max-w-[840px] mx-auto">
        <div className="text-center">
          <span className="eyebrow reveal inline-flex justify-center">FAQ</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.8vw,44px)] tracking-[-.02em] text-ink mt-3">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="reveal d1 mt-10">
          <FaqAccordion items={ITEMS} />
        </div>
      </div>
    </section>
  );
}
