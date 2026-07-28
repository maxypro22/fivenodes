import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "خدمات ذكاء اصطناعي في قطر — وكلاء صوت وواتساب وأتمتة | فايف نودز",
  description:
    "خدمات ذكاء اصطناعي في قطر — وكلاء صوت ذكية، وكلاء واتساب ذكية، حجز ذكي، أتمتة، وتحليلات للشركات في قطر.",
  path: "/services",
  ogTitle: "خدمات ذكاء اصطناعي في قطر — فايف نودز",
  locale: "ar",
});

const SERVICES = [
  {
    code: "01",
    kicker: "صوت ذكي",
    name: "حلول الصوت الذكي في قطر",
    tagline: "كل مكالمة تُرد. كل فرصة تُلتقط.",
    desc: "وكلاء هاتف أذكياء يحجزون المواعيد، يردون على الاستفسارات، يؤهلون العملاء المحتملين، ويتولون مكالمات العملاء على مدار الساعة — بالعربية والإنجليزية. مبنيون على VAPI وElevenLabs لمحادثات طبيعية شبيهة بالبشر.",
    features: [
      "وكلاء مكالمات واردة وصادرة",
      "تحليل المكالمات والنسخ التلقائي",
      "حجز مواعيد ومزامنة مع التقويم",
      "دعم متعدد اللغات (عربي / إنجليزي / هندي)",
    ],
  },
  {
    code: "02",
    kicker: "دردشة ذكية",
    name: "الدردشة والمراسلة الذكية",
    tagline: "فريقك الذكي على كل قناة.",
    desc: "انشر وكلاء دردشة مدعومين بالذكاء الاصطناعي عبر واتساب، إنستغرام، فيسبوك ماسنجر، تليغرام، وموقعك الإلكتروني. نظام واحد، كل القنوات — متسق، سريع الاستجابة، ومتاح دائماً.",
    features: [
      "وكلاء واتساب وتليغرام ذكيون",
      "روبوتات إنستغرام وماسنجر",
      "دردشة مباشرة على الموقع",
      "صندوق وارد موحّد لجميع القنوات",
    ],
  },
  {
    code: "03",
    kicker: "مراقبة",
    name: "المراقبة الشاملة",
    tagline: "شاهد كل شيء. لا يفوتك شيء.",
    desc: "مراقبة ذكية في الوقت الحقيقي عبر واتساب، إنستغرام، فيسبوك، وتليغرام. تتبع المشاعر، اكشف تحولات النبرة، قِس أوقات الاستجابة، وقيّم أداء الفريق — بلوحات تحليل بمستوى المدير التنفيذي.",
    features: [
      "تحليل مشاعر عبر جميع القنوات",
      "تتبع زمن الاستجابة والالتزام بالاتفاقيات",
      "تقييم أداء الفريق",
      "لوحات تحليل تنفيذية بمؤشرات أداء",
      "تنبيهات المشاعر السلبية",
    ],
  },
  {
    code: "04",
    kicker: "حجز",
    name: "نظام الحجز الذكي في قطر",
    tagline: "من الطلب إلى التأكيد — بدون تدخل بشري.",
    desc: "أتمتة حجز شاملة توزّع الموظفين، تحسّن الجداول، وتدير الطاقة الاستيعابية. العملاء يحجزون فوراً عبر الصوت أو الدردشة — بدون تنسيق يدوي.",
    features: [
      "تدفقات حجز من البداية للنهاية",
      "توزيع تلقائي للموظفين",
      "تحسين المواعيد والطاقة الاستيعابية",
      "مزامنة التقويم والتذكيرات",
    ],
  },
  {
    code: "05",
    kicker: "أتمتة",
    name: "أتمتة سير العمل",
    tagline: "تخلص من المهام الروتينية. حرّر فريقك.",
    desc: "أتمتة ذكاء اصطناعي شاملة في قطر — مبنية على محركات سير عمل بمعايير الإنتاج وتكاملات مخصصة. نربط أدواتك، نؤتمت المهام المتكررة، ونحرر فريقك للتركيز على العمل ذي القيمة العالية.",
    features: [
      "أتمتة CRM وتوجيه العملاء المحتملين",
      "سير عمل الفواتير والمتابعة",
      "تكاملات API ومزامنة البيانات",
      "توليد المستندات تلقائياً",
    ],
  },
  {
    code: "06",
    kicker: "تحليلات",
    name: "البيانات والتحليلات",
    tagline: "قرارات أسرع. أرقام حقيقية. في الوقت الحقيقي.",
    desc: "حوّل بيانات التفاعل الخام إلى ذكاء استراتيجي. تحليل سلوكي، تحليل محادثات، توقع الطلب، وتقييم الجودة بالذكاء الاصطناعي — كل ذلك في لوحات تحليل مخصصة مصممة لصناع القرار.",
    features: [
      "تحليل السلوك والمحادثات",
      "تقييم الجودة بالذكاء الاصطناعي",
      "نماذج توقع الطلب",
      "لوحات تحليل تنفيذية مخصصة",
    ],
  },
  {
    code: "07",
    kicker: "ذاكرة",
    name: "ذاكرة العملاء الذكية",
    tagline: "نظامك يتذكر كل عميل.",
    desc: "طبقة ذاكرة دائمة عبر جميع نقاط التفاعل الذكية. كل تفاعل، تفضيل، وسياق يُخزّن ويبقى متاحاً — لذلك لن يضطر عميلك لتكرار نفسه أبداً.",
    features: [
      "محرك ذاكرة العملاء",
      "تحديث CRM تلقائي",
      "سجل تفاعلات كامل",
      "كشف مبكر عن فقدان العملاء وتنبيهات",
    ],
  },
  {
    code: "08",
    kicker: "إشعارات",
    name: "الإشعارات الذكية",
    tagline: "لا ننسى أي عميل. أبداً.",
    desc: "سلاسل إشعارات مدفوعة بالذكاء الاصطناعي تبقي العملاء متفاعلين. تذكيرات مسبقة بالمواعيد، متابعة ما بعد الخدمة، حملات إعادة التفاعل، وطلبات تقييم تلقائية — بتوقيت مثالي.",
    features: [
      "تذكير مسبق بالمواعيد",
      "متابعة ما بعد الخدمة",
      "حملات إعادة التفاعل",
      "طلبات التقييم التلقائية",
    ],
  },
];

const SERVICES_STATS = [
  ["8", "خدمات أساسية"],
  ["24/7", "ذكاء اصطناعي متاح دائماً"],
  ["AR/EN", "ذكاء ثنائي اللغة"],
  ["4 أسابيع", "متوسط وقت النشر"],
];

const METHOD = [
  {
    n: "01",
    t: "الاكتشاف",
    d: "نفحص عملياتك، نرسم خريطة سير العمل، ونحدد فرص الذكاء الاصطناعي الأعلى أثراً.",
  },
  {
    n: "02",
    t: "التصميم المعماري",
    d: "نصمم النظام — تدفقات البيانات، التكاملات، منطق الذكاء الاصطناعي، وقنوات التوصيل — قبل كتابة سطر واحد من الكود.",
  },
  {
    n: "03",
    t: "البناء والاختبار",
    d: "نهندس الحل، نختبره على سيناريوهات حقيقية، ونكرر حتى يصل لمعايير الإنتاج.",
  },
  {
    n: "04",
    t: "النشر والتحسين",
    d: "ننشر في بيئتك، نراقب الأداء، ونحسّن باستمرار بناءً على بيانات التفاعل الفعلية.",
  },
];

function Check() {
  return (
    <span className="w-[20px] h-[20px] rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5">
      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3">
        <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ServicesPageAr() {
  return (
    <main dir="rtl">
      <PageHeader eyebrow="خدماتنا" title="خدمات ذكاء اصطناعي في قطر — 8 أنظمة ذكية">
        خدمات ذكاء اصطناعي في قطر من فايف نودز — ثمانية أنظمة ثنائية اللغة للشركات في قطر. من وكلاء
        صوت ووكلاء واتساب الذكية إلى الحجز الذكي والأتمتة — كل حل مبني خصيصاً.
      </PageHeader>

      {/* Stats */}
      <section className="pb-6">
        <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-[14px]">
          {SERVICES_STATS.map(([n, l], i) => (
            <div
              key={l}
              className={`reveal d${(i % 4) + 1} bg-surface border border-line rounded-[16px] p-6 text-center shadow-card`}
            >
              <div className="font-heading font-extrabold text-[28px] text-ink">{n}</div>
              <div className="text-xs text-muted mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we build */}
      <section className="py-16">
        <div className="wrap">
          <div className="max-w-[640px]">
            <span className="eyebrow reveal">ماذا نبني</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              ثمانية أنظمة. منصة ذكية واحدة.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px]">
              فايف نودز تهندس هذه القدرات المدعومة بالذكاء الاصطناعي للاندماج مباشرة في عملياتك — لا
              تجلس فوقها. صممها فريقنا في قطر.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-11">
            {SERVICES.map((s, i) => (
              <div
                key={s.code}
                className={`reveal d${(i % 2) + 1} group relative bg-surface border border-line rounded-[20px] p-8 shadow-card transition-all duration-300 ease-smooth hover:border-primary hover:shadow-hover hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold text-[15px] grid place-items-center transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                    {s.code}
                  </span>
                  <span className="text-[13px] font-bold uppercase tracking-[.1em] text-muted-2">
                    {s.kicker}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[21px] text-ink mt-5">{s.name}</h3>
                <div className="text-[14px] font-semibold text-primary mt-1">{s.tagline}</div>
                <p className="text-sm text-muted leading-[1.65] mt-3">{s.desc}</p>
                <ul className="mt-5 flex flex-col gap-[10px]">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-[10px] text-[14px] text-ink-2">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ar/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-6 hover:gap-3 transition-all"
                >
                  ابدأ الآن
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 rotate-180">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 border-t border-line-soft">
        <div className="wrap">
          <div className="max-w-[720px]">
            <span className="eyebrow reveal">نبنيه على</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              بنية تحتية بمعايير الإنتاج.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px] leading-[1.7]">
              نبني على أفضل الأدوات في المجال — بلا تقييد ببائع، بلا صناديق سوداء.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {[
              ["الصوت", "VAPI"],
              ["الصوت", "ElevenLabs"],
              ["الذكاء الاصطناعي", "OpenAI"],
              ["البيانات", "Supabase"],
              ["المراسلة", "WhatsApp API"],
              ["الواجهات", "Next.js"],
            ].map(([cat, name], i) => (
              <div
                key={name}
                className={`reveal d${(i % 3) + 1} rounded-2xl border border-line bg-surface p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}
              >
                <div className="text-[11px] text-muted-2">{cat}</div>
                <div dir="ltr" className="font-heading font-bold text-ink mt-1.5 text-[15px]">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="wrap">
          <div className="text-center max-w-[620px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">مراحل العمل</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              من الاكتشاف إلى التشغيل.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px]">
              كل مشروع يتبع منهجية مثبتة من أربع مراحل — بلا تخمين، بلا وقت ضائع.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px] mt-12">
            {METHOD.map((m, i) => (
              <div
                key={m.n}
                className={`reveal d${(i % 4) + 1} p-7 border border-line rounded-[20px] bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft`}
              >
                <div className="font-heading font-extrabold text-2xl text-primary/30">{m.n}</div>
                <h4 className="font-heading font-bold text-lg mt-2 text-ink">{m.t}</h4>
                <p className="text-sm text-muted leading-[1.6] mt-2">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="مستعد لأتمتة ما يهم؟"
        text="كل تعاون يبدأ بمكالمة اكتشاف مجانية. سنفحص سير عملك ونوضح لك تحديداً أين يمكن للذكاء الاصطناعي توفير الوقت، خفض التكاليف، وتحسين العمليات. لديك أسئلة تفصيلية أولاً؟ اطّلع على الأسئلة الشائعة."
        primary={["احجز مكالمة اكتشاف", "/ar/contact"]}
        secondary={["عن فايف نودز", "/ar/about"]}
      />
    </main>
  );
}
