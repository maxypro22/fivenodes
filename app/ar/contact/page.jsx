import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "احجز استشارة ذكاء اصطناعي مجانية في قطر | فايف نودز",
  description:
    "احجز استشارة ذكاء اصطناعي مجانية في قطر مع فايف نودز. سنوضح لك أين تساعد وكلاء الصوت ووكلاء واتساب وخدمات الذكاء الاصطناعي على توفير الوقت والتقاط الإيرادات.",
  path: "/contact",
  ogTitle: "احجز استشارة ذكاء اصطناعي مجانية في قطر — فايف نودز",
  ogDescription: "مقرنا في قطر. راسلنا على Info@fivenodes.ai أو اتصل +974 3001 0105.",
  locale: "ar",
});

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const QUICK = [
  { Icon: MailIcon, label: "البريد الإلكتروني", value: "Info@fivenodes.ai", href: "mailto:Info@fivenodes.ai" },
  { Icon: PhoneIcon, label: "هاتف قطر", value: "+974 3001 0105", href: "tel:+97430010105" },
  { Icon: PhoneIcon, label: "خط أرضي قطر", value: "+974 4444 0085", href: "tel:+97444440085" },
];

const DIRECT = [
  ["البريد الإلكتروني", "Info@fivenodes.ai", "mailto:Info@fivenodes.ai"],
  ["هاتف قطر", "+974 3001 0105", "tel:+97430010105"],
  ["خط أرضي قطر", "+974 4444 0085", "tel:+97444440085"],
  ["واتساب", "تحدّث معنا", "https://wa.me/97430010105"],
];

export default function ContactPage() {
  return (
    <main dir="rtl">
      {/* Hero */}
      <PageHeader eyebrow="تواصل معنا" title="احجز استشارة ذكاء اصطناعي مجانية في قطر.">
        لنبنِ شيئاً ذكياً معاً. كل تعاون مع فايف نودز يبدأ باستشارة ذكاء اصطناعي مجانية في قطر. بدون
        عروض ترويجية، بدون ضغط — مجرد محادثة صريحة حول أين تساعد أتمتة الذكاء الاصطناعي على توفير الوقت
        والتقاط الإيرادات.
      </PageHeader>

      {/* Quick contact cards */}
      <section className="pb-10">
        <div className="wrap grid grid-cols-1 sm:grid-cols-3 gap-[18px] max-w-[840px] mx-auto">
          {QUICK.map(({ Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              className={`reveal d${i + 1} group bg-white border border-line rounded-[18px] p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary`}
            >
              <div className="w-12 h-12 rounded-[14px] bg-primary-soft text-primary grid place-items-center mx-auto transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon />
              </div>
              <div className="font-heading font-bold text-ink mt-4">{label}</div>
              <div className="text-sm text-muted mt-1">{value}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-20">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <h2 className="reveal font-heading font-bold text-2xl text-ink">أرسل لنا رسالة</h2>
            <p className="reveal text-muted text-sm mt-2 mb-5">
              أخبرنا عن مشروعك وسنرد عليك خلال 24 ساعة.
            </p>
            <div className="reveal d1">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Quick Response */}
            <div className="reveal bg-white border border-line rounded-[20px] p-7 shadow-card">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                سرعة الاستجابة
              </div>
              <p className="text-muted text-sm mt-2">نرد عادةً خلال 24 ساعة.</p>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-bg border border-line rounded-[14px] p-4 text-center">
                  <div className="font-heading font-extrabold text-lg text-primary">&lt; 24h</div>
                  <div className="text-[11px] text-muted-2 mt-1">الرد عبر البريد الإلكتروني</div>
                </div>
                <div className="bg-bg border border-line rounded-[14px] p-4 text-center">
                  <div className="font-heading font-extrabold text-lg text-primary">30 min</div>
                  <div className="text-[11px] text-muted-2 mt-1">مكالمة اكتشاف مجانية</div>
                </div>
              </div>
            </div>

            {/* Contact Directly */}
            <div className="reveal d1 bg-white border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">تواصل مباشر</h3>
              <div className="flex flex-col gap-3 mt-4">
                {DIRECT.map(([label, value, href]) => (
                  <a key={label} href={href} className="flex items-center justify-between gap-4 group">
                    <span className="text-[11px] uppercase tracking-[.1em] text-muted-2">{label}</span>
                    <span className="text-sm font-medium text-ink-2 group-hover:text-primary transition-colors">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-surface border-y border-line-soft">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow reveal">مكاتبنا</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3">
              مقرنا في قطر. فريق واحد.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4 max-w-[440px]">
              مقرنا في قطر، نعمل حيث يتواجد عملاؤنا.
            </p>
          </div>
          <div className="reveal d1 bg-bg border border-line rounded-[20px] p-7 shadow-card">
            <div className="text-[11px] uppercase tracking-[.12em] text-primary font-bold">مكتب قطر</div>
            <p className="text-[15px] text-ink-2 leading-[1.6] mt-3">
              الطابق الثالث، المفتاح بلازا،
              <br />
              شارع الريم، الدوحة، قطر
            </p>
            <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-line-soft">
              <div className="flex items-center justify-between">
                <span className="text-sm text-ink-2 font-medium">+974 3001 0105</span>
                <span className="text-[11px] uppercase tracking-[.1em] text-muted-2">هاتف</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-ink-2 font-medium">+974 4444 0085</span>
                <span className="text-[11px] uppercase tracking-[.1em] text-muted-2">خط أرضي</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prefer a conversation? */}
      <section className="py-20">
        <div className="wrap text-center max-w-[680px] mx-auto">
          <h2 className="reveal font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink">
            تفضّل المحادثة؟
          </h2>
          <p className="reveal d1 text-muted text-base mt-4">
            احجز استشارة ذكاء اصطناعي مجانية مدتها 30 دقيقة في قطر. سنفحص سير عملك ونوضح لك أين تساعد
            وكلاء الصوت ووكلاء واتساب وخدمات الذكاء الاصطناعي على توفير الوقت والتقاط الإيرادات.
          </p>
          <div className="reveal d2 flex flex-wrap gap-[14px] justify-center mt-7">
            <a href="https://wa.me/97430010105" className="btn btn-primary px-[22px] py-[13px]">
              راسلنا على واتساب
            </a>
            <a href="tel:+97430010105" className="btn btn-ghost px-[22px] py-[13px]">
              اتصل الآن
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
