import Link from "next/link";
import CTASection from "@/components/CTASection";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "باشا: المدير الذكي الذي تتصل به | فايف نودز",
  description:
    "باشا مدير ذكي مدعوم بالذكاء الاصطناعي يراقب عملك على مدار الساعة. يقرأ كل محادثة واتساب وإنستغرام وصوت، يقيّم فريقك، يكتشف المشاكل مبكراً، ويوجزك بصوته حين تتصل. مثل مساعد تنفيذي قرأ كل شيء. ثنائي اللغة عربي وإنجليزي، مصمم للشركات في قطر.",
  path: "/basha",
  ogTitle: "باشا: المدير الذكي بالذكاء الاصطناعي",
  ogDescription:
    "مدير ذكي يراقب عملك على مدار الساعة، يقرأ كل محادثة، يقيّم فريقك، ويوجزك بصوته حين تتصل. ثنائي اللغة، مصمم لقطر.",
  locale: "ar",
});

const BASHA_AWAY = [
  { e: "🌙", t: "بينما تنام", d: "الشكوى في الثانية صباحاً، والاستفسار بعد منتصف الليل: يُرى، ويُقيّم، وينتظرك في ملخّص صباحك." },
  { e: "📅", t: "بينما أنت في الاجتماعات", d: "يبرد عميل بينما فريقك منشغل. يلاحظ باشا ذلك وينبّهك قبل أن تخسره." },
  { e: "✈️", t: "بينما أنت بعيد", d: "في السفر أو الإجازة، تسافر رقابتك معك. لا شيء يفلت لأنك خرجت." },
  { e: "🌆", t: "بعد الدوام وفي العطلات", d: "العمل لا يتوقف يوم الجمعة. يواصل باشا المراقبة حين تنطفئ أضواء المكتب." },
];

const BASHA_CAPABILITIES = [
  { t: "يراقب كل محادثة", d: "عبر واتساب وإنستغرام والصوت والدردشة، يقرأ باشا كل رسالة يرسلها ويستقبلها فريقك، بالعربية والإنجليزية." },
  { t: "يكتشف الإحباط مبكراً", d: "تحليل المشاعر والنبرة يكشف العميل الغاضب، والشكوى الثانية، والصفقة التي على وشك الرحيل، قبل أن تتحوّل إلى مشكلة." },
  { t: "يقيس أداء فريقك", d: "أوقات الاستجابة، ومعدلات الحل، ودرجات الجودة والنبرة. يقيس باشا أداء فريقك فعلياً، محادثةً بمحادثة." },
  { t: "يوجزك بصوته", d: "اتصل بباشا أو اقرأ الملخّص الصباحي: ماذا حدث، وما الاتجاهات، ونقاط القوة والضعف. الملخّص الذي يقدّمه مدير بارع." },
  { t: "ينبّهك عند الضرورة", d: "تنبيهات فورية للعميل المهم غير المُجاب، وللتصعيد، ولإشارة فقدان العميل. يقاطعك باشا فقط حين يستحقّ الأمر." },
  { t: "لا ينسى أي عميل", d: "كل تفاعل محفوظ، وكل ملف محدّث، وكل علاقة معرّضة للخطر تظهر، فلا أحد يسقط بين الشقوق." },
];

const BASHA_CALL_POINTS = [
  "اسأل أي شيء: أرقام اليوم، عميل محدّد، نقطة ضعف الفريق.",
  "احصل على إجابة منطوقة، لا لوحة بيانات تبحث فيها.",
  "متاح على مدار الساعة، بالعربية والإنجليزية.",
];

const BASHA_DIALOGUE = [
  { q: "باشا، كيف كان أداء الفريق اليوم؟", a: "يوم جيد. 38 محادثة، متوسط الرد أقل من 4 دقائق، ولا شكاوى مفتوحة." },
  { q: "هل من أحد يستدعي قلقي؟", a: "نعم. السيد أحمد صمت بعد سؤاله عن السعر. أنصح بالتواصل معه قبل الغد." },
];

const BASHA_STEPS = [
  { n: "01", t: "اربط قنواتك", d: "أوصِل باشا بواتساب وإنستغرام والصوت والدردشة. للقراءة فقط. يراقب؛ ولا يردّ نيابةً عنك." },
  { n: "02", t: "يراقب باشا 24/7", d: "تُقرأ كل محادثة، وتُقيّم للجودة والنبرة، وتُفحَص للمخاطر، على مدار الساعة، وباللغتين." },
  { n: "03", t: "اتصل به للحصول على الملخّص", d: "ارفع السمّاعة متى أردت الصورة الكاملة. يجيبك باشا كمساعد تنفيذي قرأ كل شيء." },
];

const BASHA_IS = [
  "عيناك على كل محادثة",
  "صوت يمكنك الاتصال به في أي وقت",
  "مساعد لا ينهي دوامه أبداً",
  "إنذار مبكر قبل أن يرحل العملاء",
];

const BASHA_ISNT = [
  "ليس شات بوت يردّ على العملاء",
  "ليست لوحة بيانات أخرى تتفقّدها",
  "ليس صندوقاً أسود؛ كل إجابة مُفسَّرة",
  "ليس عبئاً إضافياً تديره",
];

const BASHA_STATS = [
  ["24/7", "يراقب دائماً"],
  ["100%", "محادثات مقروءة"],
  ["AR/EN", "ثنائي اللغة بالكامل"],
  ["مكالمة واحدة", "لملخّصك الكامل"],
];

export default function BashaPage() {
  return (
    <main dir="rtl">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-surface pt-16 pb-14">
        <div className="wrap relative z-[1] text-center max-w-[820px] mx-auto">
          <span className="eyebrow reveal inline-flex justify-center">يراقب دائماً · لا ينام</span>
          <div className="reveal d1 font-heading font-extrabold text-[clamp(30px,4.6vw,52px)] tracking-[-.02em] mt-4">
            <span className="text-primary">Basha</span> <span className="text-ink">باشا</span>
          </div>
          <h1 className="reveal d1 font-serif font-normal text-[clamp(28px,4vw,46px)] tracking-[-.01em] leading-[1.08] text-ink mt-2">
            المدير الذكي الذي يمكنك الاتصال به.
          </h1>
          <p className="reveal d2 text-muted text-base md:text-lg mt-5 mx-auto max-w-[660px] leading-[1.65]">
            يراقب باشا عملك بينما أنت غائب: بينما تنام، وأنت في الاجتماعات، وحين يكون المكتب مغلقاً.
            يقرأ كل محادثة ويقيّم فريقك. ثم، متى أردت الصورة الكاملة، يكفي أن تتصل. مثل مساعد تنفيذي قرأ
            كل شيء ويستطيع أن يوجزك في ثوانٍ.
          </p>
          <div className="reveal d2 mt-7">
            <Link href="/ar/book-demo" className="btn btn-primary px-[22px] py-[13px]">
              احجز مكالمة
            </Link>
          </div>
        </div>
      </section>

      {/* 2. While you're away */}
      <section className="py-20 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center max-w-[720px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">بينما أنت بعيد</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3 leading-[1.15]">
              عملك لا يتوقف حين تتوقف أنت. والآن لا تتوقف رقابتك أيضاً.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4 mx-auto">
              كل ساعة لا تنظر فيها هي ساعة قد يحدث فيها خطأ ما. يغطّي باشا الفجوات، فلا تكلّفك اللحظات
              التي تفوتك.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mt-12">
            {BASHA_AWAY.map((a, i) => (
              <div key={a.t} className={`reveal d${(i % 4) + 1} bg-bg border border-line rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}>
                <div className="text-3xl">{a.e}</div>
                <h3 className="font-heading font-bold text-[17px] text-ink mt-4">{a.t}</h3>
                <p className="text-sm text-muted mt-2 leading-[1.6]">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Basha does */}
      <section className="py-24">
        <div className="wrap">
          <div className="max-w-[660px]">
            <span className="eyebrow reveal">ماذا يفعل باشا</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              المدير الذي يقرأ كل محادثة على حدة.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4">
              يقوم باشا بالمراقبة التي لا يملك أي مدير بشري وقتاً لها: كل قناة، وكل رسالة، على مدار
              الساعة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-11">
            {BASHA_CAPABILITIES.map((c, i) => (
              <div
                key={c.t}
                className={`reveal d${(i % 3) + 1} bg-surface border border-line rounded-[20px] p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold grid place-items-center">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-heading font-bold text-[18px] mt-5 text-ink">{c.t}</h4>
                <p className="text-sm text-muted leading-[1.65] mt-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Just call Basha */}
      <section className="py-24 bg-surface border-y border-line-soft">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow reveal">اتصل بباشا فحسب</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              ملخّصك على بُعد مكالمة واحدة.
            </h2>
            <p className="reveal d2 text-muted text-base leading-[1.7] mt-4 max-w-[480px]">
              باشا وكيل صوتي. اتصل به كما تتصل بمساعدك التنفيذي واحصل على إجابة مباشرة عن عملك في ثوانٍ.
              لقد قرأ كل محادثة، لذا فهو يعرف دائماً.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {BASHA_CALL_POINTS.map((p, i) => (
                <li key={i} className={`reveal d${(i % 3) + 1} flex items-start gap-3 text-[15px] text-ink-2`}>
                  <span className="w-5 h-5 rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          {/* dialogue card */}
          <div className="reveal d1 bg-bg border border-line rounded-[22px] p-6 shadow-card">
            <div className="flex items-center gap-3 pb-4 border-b border-line-soft">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#4f46e5] text-white grid place-items-center font-heading font-extrabold">B</span>
              <div>
                <div className="font-heading font-bold text-sm text-ink">Basha</div>
                <div className="flex items-center gap-1.5 text-[12px] text-muted-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> على مكالمة · مباشر
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {BASHA_DIALOGUE.map((d, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="self-end max-w-[80%] bg-primary text-on-primary rounded-2xl rounded-br-sm px-4 py-2.5 text-sm">
                    {d.q}
                  </div>
                  <div className="self-start max-w-[85%] bg-surface border border-line rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-ink-2">
                    {d.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-24">
        <div className="wrap">
          <div className="text-center max-w-[620px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">كيف يعمل</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              يعمل خلال أيام. ويراقب من اليوم الأول.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-12">
            {BASHA_STEPS.map((s) => (
              <div key={s.n} className="reveal d1 bg-surface border border-line rounded-[20px] p-7 shadow-card">
                <div className="w-11 h-11 rounded-xl bg-primary-soft text-badge font-heading font-extrabold grid place-items-center">
                  {s.n}
                </div>
                <h4 className="font-heading font-bold text-lg mt-5 text-ink">{s.t}</h4>
                <p className="text-sm text-muted mt-2 leading-[1.6]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Make no mistake */}
      <section className="py-24 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center max-w-[680px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">لا لبس في الأمر</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              مدير تتصل به. وليس شات بوت.
            </h2>
            <p className="reveal d2 text-muted text-base mt-4 mx-auto">
              باشا يتحدث إليك أنت، لا إلى عملائك أبداً. هو مساعدك، لا وكيلهم. وهذا هو جوهر الفكرة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-12 max-w-[880px] mx-auto">
            <div className="reveal d1 bg-bg border border-line rounded-[20px] p-7">
              <h3 className="font-heading font-bold text-lg text-ink mb-4">ما هو باشا</h3>
              <ul className="flex flex-col gap-3">
                {BASHA_IS.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-ink-2">
                    <span className="w-5 h-5 rounded-full bg-primary-soft text-primary grid place-items-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal d2 bg-bg border border-line rounded-[20px] p-7">
              <h3 className="font-heading font-bold text-lg text-ink mb-4">ما ليس باشا</h3>
              <ul className="flex flex-col gap-3">
                {BASHA_ISNT.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-muted">
                    <span className="w-5 h-5 rounded-full bg-[#fdecec] text-[#dc2626] grid place-items-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] mt-10 max-w-[760px] mx-auto">
            {BASHA_STATS.map(([n, l], i) => (
              <div key={l} className={`reveal d${(i % 4) + 1} bg-surface border border-line rounded-[16px] p-5 text-center shadow-card`}>
                <div className="font-heading font-extrabold text-[22px] text-primary">{n}</div>
                <div className="text-[11px] text-muted mt-1 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <CTASection
        title="امنح عملك مديراً يمكنك الاتصال به في أي وقت."
        text="شاهد باشا يقرأ محادثاتك، ويقيّم فريقك، ويوجزك بصوته كأفضل مساعد وظّفته يوماً. احجز مكالمة مدتها 30 دقيقة. بلا عروض ترويجية، فقط نظرة مباشرة."
        primary={["احجز مكالمة", "/ar/book-demo"]}
        secondary={["تواصل معنا", "/ar/contact"]}
      />
    </main>
  );
}
