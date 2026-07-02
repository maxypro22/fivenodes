import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Book a Free AI Consultation in Qatar | Contact Five Nodes",
  description:
    "Every Five Nodes engagement starts with a free AI consultation in Qatar. Contact our team — Info@fivenodes.ai, +974 3001 0105. Al Muftah Plaza, Al Reem St, Doha.",
};

const CONTACTS = [
  ["Email", "Info@fivenodes.ai", "mailto:Info@fivenodes.ai"],
  ["Mobile", "+974 3001 0105", "tel:+97430010105"],
  ["Landline", "+974 4444 0085", "tel:+97444440085"],
  ["WhatsApp", "Chat with us", "https://wa.me/97430010105"],
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader eyebrow="Contact" title="Book a Free AI Consultation in Qatar">
        Let's build something intelligent together. Every Five Nodes engagement starts with a free
        AI consultation — no pitches, no pressure, just an honest conversation about your operations
        and where AI automation can save time and capture revenue.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="reveal font-heading font-bold text-2xl text-ink mb-5">Send us a message</h2>
            <div className="reveal d1">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="reveal bg-white border border-line rounded-[20px] p-7 shadow-card">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Quick Response
              </div>
              <p className="text-muted text-sm mt-2">
                Built by our team in Qatar. We typically reply within 24 hours.
              </p>
            </div>

            <div className="reveal d1 bg-white border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">Contact Directly</h3>
              <div className="flex flex-col gap-3 mt-4">
                {CONTACTS.map(([label, value, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between gap-4 group"
                  >
                    <span className="text-[11px] uppercase tracking-[.1em] text-muted-2">{label}</span>
                    <span className="text-sm font-medium text-ink-2 group-hover:text-primary transition-colors">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal d2 bg-white border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">Our Offices</h3>
              <p className="text-[13px] text-muted-2 mt-1">Based in Qatar. One team.</p>
              <p className="text-sm text-muted leading-[1.6] mt-3">
                Qatar Office
                <br />
                3rd Floor, Al Muftah Plaza,
                <br />
                Al Reem St, Doha, Qatar
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
