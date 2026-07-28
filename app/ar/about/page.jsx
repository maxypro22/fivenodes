import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "شركة ذكاء اصطناعي في قطر — من نحن | فايف نودز",
  description:
    "فايف نودز شركة ذكاء اصطناعي في قطر — تهندس وكلاء واتساب ذكية، استقبال صوتي ذكي، وأتمتة ذكاء اصطناعي للشركات في قطر.",
  path: "/about",
  ogTitle: "من نحن — شركة ذكاء اصطناعي في قطر",
  locale: "ar",
});

const ABOUT_FACTS = [
  ["2024", "تأسّست"],
  ["قطر", "المقر الرئيسي"],
  ["قطر", "السوق الذي نخدمه"],
];

const ABOUT_STORY = [
  "معظم الشركات لا تعاني من مشكلة في الذكاء الاصطناعي — بل تعاني من مشكلة تشغيلية: أدوات مبعثرة، عمليات يدوية، نقاط عمياء في تفاعلات العملاء، وفرق تقضي ساعات في مهام يُفترض أن تُنجز في ثوانٍ.",
  "تأسّست فايف نودز للذكاء الاصطناعي عام 2024 لحل هذه المعادلة تحديداً. رأينا شركات في قطر تواجه نفس التحدي: كيف تُدخل الذكاء الاصطناعي في العمليات الفعلية — من وكلاء واتساب ذكية إلى أتمتة الذكاء الاصطناعي — بدون ميزانيات المؤسسات الضخمة، ولا جداول زمنية تمتد 18 شهراً، ولا أعباء الاستشارات التقليدية.",
  "فبنينا شركة مختلفة — شركة تتعامل مع الذكاء الاصطناعي كـتخصّص هندسي وليس كميزة إضافية. نحن لا نبيع روبوتات دردشة أو أدوات جاهزة. نهندس حلول ذكاء اصطناعي مخصصة تندمج مباشرة في طريقة عمل الشركات.",
  "اليوم، فايف نودز للذكاء الاصطناعي معروفة بأنها أول شركة وكلاء ذكاء اصطناعي في قطر، بعمليات في قطر — نخدم عملاء في قطاعات الضيافة، العقارات، الخدمات المهنية، وإدارة المرافق.",
];

const ABOUT_METRICS = [
  ["الأولى", "أول شركة وكلاء ذكاء اصطناعي في قطر"],
  ["4 أسابيع", "متوسط وقت النشر والتشغيل"],
  ["24/7", "أنظمة ذكاء اصطناعي تعمل بلا توقف"],
  ["AR/EN", "قدرات ذكاء اصطناعي ثنائية اللغة"],
];

const ENGINEERING_MODEL = [
  {
    n: "01",
    t: "محرّك القرار",
    d: "النواة الذكية التي تعالج المدخلات، تطبّق قواعد العمل، وتحدد الاستجابة أو الإجراء الأمثل في الوقت الحقيقي.",
  },
  {
    n: "02",
    t: "طبقة البيانات",
    d: "تخزين منظّم، استرجاع، وإدارة سياق. كل تفاعل مُسجّل، مُفهرس، ومُتاح للتحليل.",
  },
  {
    n: "03",
    t: "ناقل التكامل",
    d: "النسيج الرابط — واجهات برمجية (APIs)، ويب هوكس، وخطوط بيانات تربط أنظمة إدارة العملاء، الحجز، الفوترة، وأدواتك الداخلية.",
  },
  {
    n: "04",
    t: "نقاط التفاعل",
    d: "قنوات التوصيل — مكالمات صوتية، واتساب، دردشة الموقع، لوحات التحليل. القنوات تخدم الذكاء، لا تحدّده.",
  },
  {
    n: "05",
    t: "المراقبة والتعلّم",
    d: "تتبّع أداء مستمر، كشف الشذوذ، وتحسين النظام. الذكاء الاصطناعي يتطوّر مع كل تفاعل.",
  },
];

const BELIEFS = [
  {
    t: "الذكاء الاصطناعي يجب أن يعمل داخل أعمالك — لا فوقها.",
    d: "لا نُقحم الذكاء الاصطناعي كإضافة لاحقة. ندمج الذكاء في سير العمل الفعلي الذي يديره فريقك يومياً.",
  },
  {
    t: "الأنظمة المصمّمة خصيصاً تتفوّق على الأدوات الجاهزة.",
    d: "كل شركة لها منطقها الخاص، قواعدها، وحالاتها الاستثنائية. المنتجات الجاهزة لا تستوعب ذلك. الأنظمة المهندسة تستوعبه.",
  },
  {
    t: "ذكاء بلا شفافية لا قيمة له.",
    d: "إذا لم تستطع رؤية ما يفعله الذكاء الاصطناعي، لن تثق به. كل نظام نبنيه يأتي بشفافية كاملة ولوحات تحليل واضحة.",
  },
  {
    t: "سرعة النشر ميزة هندسية.",
    d: "الجداول الزمنية الطويلة لا تناسب الشركات في قطر. ننتقل من مرحلة الاكتشاف إلى نظام يعمل فعلياً خلال 4 أسابيع — بدون تنازلات.",
  },
];

const WHY = [
  {
    n: "01",
    t: "مقرنا في قطر. صُنع للمنطقة.",
    d: "مقرنا في قطر، نعمل حيث يتواجد عملاؤنا — نقدم أنظمة ذكاء اصطناعي مهندسة للشركات في قطر.",
  },
  {
    n: "02",
    t: "هندسة أولاً. ليس مبيعات أولاً.",
    d: "لا نبيع ميزات أو عروض توضيحية. نهندس أنظمة. محادثاتنا تبدأ من عملياتك، لا من كتالوج منتجاتنا.",
  },
  {
    n: "03",
    t: "ملكية كاملة. بدون تقييد ببائع.",
    d: "أنت تملك النظام، البيانات، والمنطق البرمجي. نبني على بنية تحتية مفتوحة — بلا صناديق سوداء مغلقة لا تستطيع مغادرتها.",
  },
  {
    n: "04",
    t: "للشركات في قطر. بمعايير المؤسسات الكبرى.",
    d: "نبنيه لسرعة وميزانية الشركات في قطر، بموثوقية ومعايير هندسية على مستوى المؤسسات الكبرى.",
  },
  {
    n: "05",
    t: "العائد على الاستثمار هو المقياس الوحيد.",
    d: "نقيس النجاح بالساعات الموفّرة، الإيرادات المحمية، والتكاليف المُلغاة — وليس بعدد الميزات المُطلقة أو العروض التوضيحية.",
  },
  {
    n: "06",
    t: "نبقى بعد النشر.",
    d: "الأنظمة تحتاج ضبطها. الذكاء الاصطناعي يتحسّن بالبيانات. لا نسلّم ونختفي — نراقب، نحسّن، ونطوّر النظام معك.",
  },
];

export default function AboutPageAr() {
  return (
    <main dir="rtl">
      <PageHeader eyebrow="عن فايف نودز للذكاء الاصطناعي" title="فايف نودز — شركة ذكاء اصطناعي في قطر تهندس وكلاء واتساب ذكية ووكلاء صوت.">
        فايف نودز شركة ذكاء اصطناعي في قطر — تهندس وكلاء واتساب ذكية، استقبال صوتي ذكي، وأتمتة ذكاء
        اصطناعي للشركات في قطر. نصمم، نبني، ونشغّل أنظمة ذكاء اصطناعي إنتاجية في قطر.
      </PageHeader>

      {/* Facts */}
      <section className="pb-8">
        <div className="wrap grid grid-cols-3 gap-[14px] max-w-[560px] mx-auto">
          {ABOUT_FACTS.map(([n, l], i) => (
            <div key={l} className={`reveal d${i + 1} bg-surface border border-line rounded-[16px] p-5 text-center shadow-card`}>
              <div className="font-heading font-extrabold text-xl text-ink">{n}</div>
              <div className="text-xs text-muted mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-surface border-y border-line-soft">
        <div className="wrap max-w-[820px] mx-auto">
          <span className="eyebrow reveal">قصتنا</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,40px)] tracking-[-.02em] text-ink mt-3">
            بدأت من ملاحظة بسيطة.
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            {ABOUT_STORY.map((p, i) => (
              <p key={i} className={`reveal d${(i % 3) + 1} text-[16px] text-muted leading-[1.75]`}>
                {p}
              </p>
            ))}
          </div>
          <blockquote className="reveal d1 mt-8 border-r-4 border-primary pr-6 py-1 font-heading font-bold text-[20px] text-ink italic">
            "القنوات وسائل توصيل. الذكاء هو الأصل الحقيقي."
          </blockquote>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] mt-10">
            {ABOUT_METRICS.map(([n, l], i) => (
              <div key={l} className={`reveal d${(i % 4) + 1} bg-bg border border-line rounded-[14px] p-5 text-center`}>
                <div className="font-heading font-extrabold text-lg text-primary">{n}</div>
                <div className="text-[11px] text-muted mt-1 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering model */}
      <section className="py-20">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">نموذجنا الهندسي</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              خمسة مكوّنات. نظام ذكي واحد.
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px]">
              كل نظام نبنيه يتألّف من خمس طبقات معمارية تعمل بتناغم. لا مكوّن يعمل بمعزل عن الآخرين.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-11">
            {ENGINEERING_MODEL.map((m, i) => (
              <div
                key={m.n}
                className={`reveal d${(i % 3) + 1} bg-surface border border-line rounded-[20px] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold grid place-items-center">
                  {m.n}
                </div>
                <h4 className="font-heading font-bold text-[19px] mt-5 text-ink">{m.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-2">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">ما نؤمن به</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              مبادئ، وليست شعارات تسويقية.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-10">
            {BELIEFS.map((b, i) => (
              <div key={i} className={`reveal d${(i % 2) + 1} bg-bg border border-line rounded-[20px] p-7`}>
                <h4 className="font-heading font-bold text-[18px] text-ink leading-snug">{b.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-3">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="wrap">
          <div className="max-w-[620px]">
            <span className="eyebrow reveal">ولماذا فايف نودز للذكاء الاصطناعي</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              بُنيت بشكل مختلف. عن قصد.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-10">
            {WHY.map((w, i) => (
              <div
                key={w.n}
                className={`reveal d${(i % 3) + 1} bg-surface border border-line rounded-[20px] p-7 shadow-card`}
              >
                <div className="font-heading font-extrabold text-2xl text-primary/30">{w.n}</div>
                <h4 className="font-heading font-bold text-[17px] mt-2 text-ink leading-snug">{w.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-2">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="مستعد لهندسة الذكاء داخل عملياتك؟"
        text="كل تعاون نبدأ بمكالمة اكتشاف. بدون عروض ترويجية، بدون ضغط — مجرد محادثة صريحة حول عملياتك وأين يمكن للذكاء الاصطناعي أن يحقّق أثراً قابلاً للقياس."
        primary={["احجز مكالمة اكتشاف", "/ar/contact"]}
        secondary={["خدماتنا", "/ar/services"]}
      />
    </main>
  );
}
