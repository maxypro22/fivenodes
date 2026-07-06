import Link from "next/link";
import { Database, Clock, Mic, CalendarDays, ShieldCheck, Users, Zap, FileText, TrendingUp, Lock, Scale } from "lucide-react";

import { pageMeta } from "@/components/seo";
import IntegrationHub from "@/components/IntegrationHub";
import PlatformOrbit from "@/components/PlatformOrbit";
import CountUp from "@/components/CountUp";
import LazyVideo from "@/components/LazyVideo";
import SmartImg from "@/components/SmartImg";
import SolutionCard from "@/components/SolutionCard";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import { CLIENTS, TECH_LOGOS } from "@/components/data";

export const metadata = pageMeta({
  title: "شركة ذكاء اصطناعي في قطر — وكلاء صوت وواتساب وأتمتة | فايف نودز",
  description:
    "فايف نودز شركة ذكاء اصطناعي في قطر تبني وكلاء واتساب ذكية، وكلاء صوت بالذكاء الاصطناعي، وأتمتة ذكاء اصطناعي للشركات في قطر — بالعربية والإنجليزية على مدار الساعة.",
  path: "/",
  ogTitle: "فايف نودز — شركة ذكاء اصطناعي في قطر",
  locale: "ar",
});

// ---- Arabic data (mirrors the English home structure) ----
const SOLUTIONS = [
  {
    t: "حلول الصوت الذكي",
    tag: "كل مكالمة تُرد. كل فرصة تُلتقط.",
    f: ["وكيل المكالمات الواردة", "وكيل المكالمات الصادرة", "تحليل المكالمات والنسخ التلقائي", "دعم متعدد اللغات (عربي / إنجليزي / هندي)"],
  },
  {
    t: "الدردشة والمراسلة الذكية",
    tag: "فريقك الذكي على كل قناة.",
    f: ["وكلاء واتساب وتليغرام", "رسائل إنستغرام وماسنجر", "دردشة الموقع المباشرة", "صندوق وارد موحّد متعدد المنصات"],
  },
  {
    t: "المراقبة الشاملة",
    tag: "شاهد كل شيء. لا يفوتك شيء.",
    f: ["تحليل المشاعر عبر المنصات", "تتبع زمن الاستجابة واتفاقيات الخدمة", "تقييم أداء الفريق", "لوحات معلومات تنفيذية"],
  },
  {
    t: "الحجز الذكي",
    tag: "من الطلب إلى التأكيد — بدون تدخل بشري.",
    f: ["مسارات حجز من البداية للنهاية", "توزيع تلقائي للموظفين", "تحسين الطاقة الاستيعابية", "مزامنة التقويم والتذكيرات"],
  },
  {
    t: "أتمتة سير العمل",
    tag: "تخلّص من المهام الروتينية. حرّر فريقك.",
    f: ["أتمتة إدارة العملاء وتوجيههم", "مسارات الفواتير والمتابعة", "تكاملات ومزامنة عبر الواجهات البرمجية", "توليد المستندات"],
  },
  {
    t: "البيانات والتحليلات",
    tag: "قرارات أسرع. أرقام حقيقية. في الوقت الحقيقي.",
    f: ["تحليل سلوك العملاء", "تحليل ذكي للمحادثات", "توقّع الطلب", "تقييم الجودة بالذكاء الاصطناعي"],
  },
  {
    t: "ذاكرة العملاء الذكية",
    tag: "نظامك يتذكر كل عميل.",
    f: ["محرك ذاكرة العملاء", "تحديث CRM تلقائي", "سجل تفاعلات كامل", "كشف مبكر عن فقدان العملاء وتنبيهات"],
  },
  {
    t: "الإشعارات الذكية",
    tag: "لا ننسى أي عميل. أبداً.",
    f: ["تذكير مسبق بالمواعيد", "متابعة ما بعد الخدمة", "حملات إعادة التفاعل", "طلبات التقييم التلقائية"],
  },
];

const FEATURES = [
  { Icon: Database, t: "اتصال مباشر بقاعدة البيانات", d: "اربط نظامك مباشرة بأنظمة إدارة العملاء وبرامج الجدولة." },
  { Icon: Clock, t: "متاح على مدار الساعة", d: "لن تفوتك مكالمة أو رسالة بعد اليوم." },
  { Icon: Mic, t: "محادثات طبيعية", d: "ذكاء اصطناعي متقدم يتعامل مع السياق والمقاطعات بشكل طبيعي." },
  { Icon: CalendarDays, t: "جدولة ذكية", d: "احجز، أعد الجدولة، وألغِ المواعيد تلقائياً." },
  { Icon: ShieldCheck, t: "أمان بمعايير المؤسسات", d: "بنية تحتية متوافقة مع SOC 2 وGDPR وHIPAA." },
  { Icon: Users, t: "تصعيد للعنصر البشري", d: "تحويل سلس للمكالمات المعقدة إلى فريقك البشري." },
  { Icon: Zap, t: "إعداد فوري", d: "ابدأ خلال دقائق بتكامل بسيط." },
  { Icon: FileText, t: "أتمتة واتساب", d: "تفاعل متعدد القنوات مع رسائل مؤتمتة." },
  { Icon: TrendingUp, t: "تحليلات ورؤى", d: "تابع الأداء من خلال لوحات تحليل لحظية." },
];

const PROCESS = [
  {
    n: "الخطوة 01",
    t: "الاكتشاف والاستراتيجية",
    sub: "تدقيق • سير العمل • العائد",
    video: "/process-1-2.mp4",
    d: "نفهم سير عمل أعمالك ونرسم خارطة للمواضع التي يحقق فيها الذكاء الاصطناعي أكبر أثر وأسرع عائد.",
  },
  {
    n: "الخطوة 02",
    t: "البناء المخصص والتكامل",
    sub: "إعداد • تدريب • تكامل",
    video: "/process-2.mp4",
    d: "يقوم مهندسونا بإعداد وتدريب حلول الذكاء الاصطناعي الخاصة بك ودمجها بسلاسة مع أنظمتك الحالية.",
  },
  {
    n: "الخطوة 03",
    t: "الإطلاق والدعم المستمر",
    sub: "نشر • مراقبة • تحسين",
    video: "/process-3-3.mp4",
    d: "نشر كامل مع مدير حساب مخصص، وضبط مستمر ومراقبة على مدار الساعة.",
  },
];

const FAQ_ITEMS = [
  {
    q: "هل يتم تسجيل المكالمات؟",
    a: "نعم، تُسجَّل المكالمات لضمان الجودة. يساعدنا ذلك في تحسين أداء المساعد الذكي باستمرار.",
  },
  {
    q: "هل بياناتي آمنة؟",
    a: "بالتأكيد. بياناتك محمية بتشفير شامل من الطرف إلى الطرف. لا نستخدم بياناتك لتدريب نماذج الذكاء الاصطناعي إلا بموافقتك الصريحة. فايف نودز للذكاء الاصطناعي تلتزم بلوائح GDPR وCCPA.",
  },
  {
    q: "هل يستطيع الذكاء الاصطناعي التعامل مع محادثات معقدة ومقاطعات؟",
    a: "نعم. ذكاؤنا الاصطناعي يتعامل مع تبديل السياق، المقاطعات، والمحادثات متعددة الأدوار بشكل طبيعي. يفهم النية، يتذكر السياق، ويستجيب بشكل مناسب.",
  },
  {
    q: "ماذا يحدث إذا لم يستطع النظام الذكي معالجة طلب ما؟",
    a: "فايف نودز للذكاء الاصطناعي مصمم للتعرف على حدوده. عندما تتطلب المكالمة تدخلاً بشرياً، يحولها بسلاسة إلى فريقك مع السياق الكامل للمحادثة. يمكنك أيضاً تعيين قواعد تصعيد مخصصة.",
  },
  {
    q: "كم يستغرق الإعداد؟",
    a: "يستغرق الإعداد عادة من 2 إلى 5 أيام عمل، حسب المستندات المقدمة وتعقيد متطلباتك. فريق الإعداد يرشدك في كل خطوة.",
  },
  {
    q: "هل يمكنكم تخصيص صوت الذكاء الاصطناعي وشخصيته؟",
    a: "نعم! يمكنك الاختيار من خيارات صوتية متعددة، ضبط سرعة ونبرة الكلام، وتخصيص شخصية الذكاء الاصطناعي بالكامل لتتوافق مع علامتك التجارية.",
  },
];

const LEGAL_POINTS = [
  {
    Icon: FileText,
    t: "جمع المعلومات",
    d: "نجمع المعلومات التي تقدمها مباشرة — الاسم، البريد الإلكتروني، اسم الشركة، ورقم الهاتف — عند طلب عرض توضيحي أو استخدام خدماتنا.",
  },
  {
    Icon: ShieldCheck,
    t: "إفصاح تسجيل المكالمات",
    d: "جميع المكالمات التي يتولاها نظام فايف نودز للذكاء الاصطناعي تُسجَّل لضمان الجودة. يُبلَّغ المتصل في بداية كل مكالمة.",
  },
  {
    Icon: Lock,
    t: "أمان البيانات",
    d: "بياناتك محمية بتشفير شامل من الطرف إلى الطرف. لا نستخدم بياناتك لتدريب نماذج الذكاء الاصطناعي إلا بموافقتك الصريحة.",
  },
  {
    Icon: Scale,
    t: "التوافق مع GDPR وCCPA",
    d: "تلتزم فايف نودز للذكاء الاصطناعي بلوائح GDPR وCCPA وغيرها من قوانين حماية البيانات المعمول بها. لك الحق في الوصول إلى بياناتك، تصحيحها، أو حذفها.",
  },
];

const ACCENT = "#3857e9";

function Stat({ lbl, children }) {
  return (
    <div>
      <div className="font-heading font-extrabold text-[26px] text-ink">{children}</div>
      <div className="text-xs text-muted-2 mt-0.5">{lbl}</div>
    </div>
  );
}

export default function HomeAr() {
  return (
    <main dir="rtl">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-16 pb-20">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-l from-bg via-bg/92 to-bg/45" />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-bg via-transparent to-bg/50" />
        <div className="absolute left-[-10%] top-[-20%] w-[70%] h-[120%] z-0 pointer-events-none bg-[radial-gradient(closest-side,rgba(96,165,250,.28),rgba(96,165,250,0)_70%)] blur-[10px]" />

        <div className="wrap relative z-[1] grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] items-center gap-10">
          <div>
            <span className="eyebrow reveal">شركة ذكاء اصطناعي في قطر</span>
            <h1 className="reveal d1 font-serif font-normal text-[clamp(38px,5vw,62px)] leading-[1.05] tracking-[-.01em] mt-5 mb-4">
              <span className="text-ink">وكلاء واتساب وصوت</span>
              <br />
              <span className="text-primary">بالذكاء الاصطناعي</span>{" "}
              <span className="text-[#9aa7c7]">للشركات</span>
            </h1>
            <div className="reveal d1 h-[30px] mb-[10px] overflow-hidden">
              <span className="inline-block font-heading font-bold text-primary text-[clamp(15px,1.6vw,19px)]">
                بيانات آمنة · متاح على مدار الساعة · أتمتة ذكية
              </span>
            </div>
            <p className="reveal d1 font-heading font-semibold text-ink-2 text-[clamp(16px,1.7vw,21px)] leading-snug mb-[18px] max-w-[500px]">
              وكلاء واتساب ذكية وأتمتة لتشغيل عمليات الشركات في قطر.
            </p>
            <p className="reveal d2 text-base text-muted max-w-[490px] leading-[1.65]">
              فايف نودز شركة ذكاء اصطناعي في قطر. نبني وكلاء صوت بالذكاء الاصطناعي، وكلاء واتساب ذكية،
              وأتمتة ذكاء اصطناعي تعمل داخل عمليات الشركات في قطر بالعربية والإنجليزية على مدار الساعة.
            </p>
            <div className="reveal d3 flex gap-[14px] mt-7 mb-[22px] flex-wrap">
              <Link href="/ar/contact" className="btn btn-primary px-[22px] py-[13px]">
                احجز استشارة مجانية
              </Link>
              <Link href="/ar/services" className="btn btn-ghost px-[22px] py-[13px]">
                عرض الخدمات
              </Link>
            </div>
            <div className="reveal d3 flex items-center gap-[10px] text-[13px] text-muted">
              <span className="bg-white border border-line rounded-full px-[10px] py-1 font-bold text-ink flex items-center gap-[6px]">
                <span className="text-[#f5a623]">★</span> 4.8
              </span>
              <span>تقييم العملاء · أكثر من 10 آلاف مكالمة تمت معالجتها</span>
            </div>
            <div className="reveal d4 flex gap-10 mt-[38px] flex-wrap">
              <Stat lbl="كفاءة الحجز">
                <CountUp value={93} suffix="%" />
              </Stat>
              <Stat lbl="وقت التشغيل">
                <CountUp value={99.9} suffix="%" decimals={1} />
              </Stat>
              <Stat lbl="مكالمة تمت معالجتها">
                <CountUp value={10} suffix="K+" />
              </Stat>
              <Stat lbl="تقييم العملاء">
                <CountUp value={4.8} decimals={1} />
              </Stat>
            </div>
          </div>

          <IntegrationHub />
        </div>
      </section>

      {/* ================= VOICE PLATFORM ================= */}
      <section className="py-20 md:py-28">
        <div className="wrap text-center">
          <h2 className="reveal font-serif text-ink font-normal text-[clamp(38px,6vw,76px)] leading-[1.05] tracking-[-.01em]">
            أتمتة
            <br className="hidden sm:block" /> العمليات
          </h2>
          <p className="reveal d1 text-muted text-base md:text-lg mt-5 max-w-[600px] mx-auto leading-[1.6]">
            وكلاء صوت طبيعيون يشبهون البشر بالعربية والإنجليزية — كل مكالمة تُرد، وكل فرصة تُلتقط، على
            مدار الساعة.
          </p>

          <div className="reveal d2 mt-14 relative rounded-[40px] md:rounded-[64px] overflow-hidden bg-[#080b16] border border-white/[.06] shadow-[0_50px_100px_-40px_rgba(8,11,22,.8)]">
            <LazyVideo className="w-full h-full object-cover aspect-[1140/360] block" src="/voice-wave-2.mp4" />
            <div className="pointer-events-none absolute inset-0 rounded-[40px] md:rounded-[64px] shadow-[inset_0_0_60px_20px_rgba(8,11,22,.75)]" />
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section id="solutions" className="py-24">
        <div className="wrap">
          <div className="text-center max-w-[760px] mx-auto">
            <h2 className="reveal font-heading font-extrabold text-[clamp(30px,4vw,46px)] tracking-[-.02em] text-ink">
              ماذا نبني — 8 وكلاء ذكاء اصطناعي للشركات في قطر
            </h2>
            <p className="reveal d1 text-muted text-base mt-[14px] mx-auto max-w-[640px]">
              ثمانية وكلاء ذكاء اصطناعي ثنائيي اللغة، صمّمهم فريقنا في قطر — يحلّون محل العمل اليدوي،
              يلتقطون كل عميل، ويمنحونك تحكماً تشغيلياً كاملاً.
            </p>

            <div className="reveal d2 mt-10 flex items-center justify-center gap-8 sm:gap-14">
              {[
                ["+35", "خدمات ذكاء اصطناعي"],
                ["8", "فئات"],
                ["∞", "تكاملات"],
              ].map(([n, l], i) => (
                <div key={l} className="flex items-center gap-8 sm:gap-14">
                  {i > 0 && <span className="w-px h-10 bg-line" />}
                  <div className="text-center">
                    <div className="font-heading font-extrabold text-[clamp(28px,4vw,42px)] leading-none text-ink">
                      {n}
                    </div>
                    <div className="text-[11px] uppercase tracking-[.12em] text-muted-2 mt-2">{l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] mt-12">
            {SOLUTIONS.map((m, i) => (
              <div key={m.t} className={`reveal d${(i % 3) + 1}`}>
                <SolutionCard m={m} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="pt-14 pb-20">
        <div className="wrap">
          <div className="text-center max-w-[680px] mx-auto mb-10">
            <span className="eyebrow reveal inline-flex justify-center">موثوق من قِبل</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(26px,3.4vw,40px)] tracking-[-.02em] text-ink mt-3">
              شركاؤنا — عملاء الذكاء الاصطناعي في قطر
            </h2>
          </div>

          <div
            className="reveal overflow-hidden relative pb-2"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee-left">
              {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((n, i) => (
                <div
                  key={i}
                  className="mr-4 shrink-0 w-[150px] h-24 rounded-[14px] bg-white border border-line-soft shadow-card grid place-items-center p-[14px] font-heading font-extrabold text-[#334155] text-center text-xs tracking-[.02em]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLATFORM ================= */}
      <section className="py-24 bg-bg">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center gap-14">
          <div>
            <h2 className="reveal font-heading font-extrabold text-[clamp(30px,4vw,44px)] tracking-[-.02em] mb-4 leading-[1.1]">
              ذكاء اصطناعي ثنائي اللغة يعمل داخل أدواتك
            </h2>
            <p className="reveal d1 text-muted text-base max-w-[480px] leading-[1.65]">
              نبني روبوتات دردشة ووكلاء صوت وأتمتة ذكاء اصطناعي تتكامل مباشرة مع الأدوات التي تستخدمها
              الشركات في قطر بالفعل — أنظمة إدارة العملاء، واتساب للأعمال، أنظمة تخطيط الموارد،
              التقويمات، وأكثر.
            </p>
            <div className="reveal d2 flex flex-wrap gap-[14px] mt-8">
              <Link href="/ar/contact" className="btn btn-primary px-[22px] py-[13px]">
                احجز استشارة مجانية
              </Link>
              <Link href="/ar/services" className="btn btn-ghost px-[22px] py-[13px]">
                اطّلع على خدماتنا
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center order-first lg:order-none">
            <PlatformOrbit />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center">
            <div className="reveal flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-[.18em] text-primary">
              <span className="w-8 h-px bg-primary/30" />
              المزايا
              <span className="w-8 h-px bg-primary/30" />
            </div>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(30px,4.4vw,52px)] tracking-[-.02em] text-ink mt-4 leading-[1.05]">
              كل ما تحتاجه، ولا شيء زائد
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-14">
            {FEATURES.map((f, i) => (
              <div
                key={f.t}
                className={`reveal d${(i % 3) + 1} group flex items-start gap-4 bg-bg border border-line rounded-[16px] p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}
              >
                <div className="w-12 h-12 rounded-[12px] bg-white border border-line grid place-items-center text-ink-2 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-[0_10px_20px_-8px_rgba(37,99,235,.6)]">
                  <f.Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[16px] text-ink">{f.t}</h3>
                  <p className="text-sm text-muted mt-1.5 leading-[1.55]">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative overflow-hidden py-24 bg-bg border-y border-line-soft">
        <div className="pointer-events-none absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-[#3857e9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-1/4 w-96 h-96 rounded-full bg-[#3857e9]/[.07] blur-3xl" />

        <div className="wrap relative">
          <div className="text-center max-w-[640px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">كيف نعمل</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
              ثلاث خطوات لإطلاق وكيل ذكاء اصطناعي في قطر
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px] mx-auto">
              نرسم خرائط سير عملك، نبني وندمج وكلاء الذكاء الاصطناعي، ثم نطلقها مع دعم مستمر مخصص.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-12">
            {PROCESS.map((s, i) => (
              <div
                key={s.n}
                className={`reveal d${i + 1} group relative overflow-hidden rounded-[22px] border border-black/[.06] bg-white/70 backdrop-blur-xl shadow-[0_24px_55px_-26px_rgba(16,22,41,.3)] transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-[#3857e9]/30 hover:shadow-[0_30px_60px_-24px_rgba(56,87,233,.28)]`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <LazyVideo src={s.video} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/95 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[3px]" style={{ background: ACCENT, boxShadow: `0 0 12px ${ACCENT}` }} />
                </div>

                <div className="relative p-7">
                  <div className="text-[11px] font-bold tracking-[.16em] mb-2" style={{ color: ACCENT }}>
                    {s.n}
                  </div>
                  <h4 className="font-heading font-bold text-[17px] tracking-[.04em] text-ink">{s.t}</h4>
                  <p className="text-[13px] text-muted-2 mt-1.5">{s.sub}</p>
                  <p className="text-sm text-muted mt-3 leading-[1.6]">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTEGRATIONS ================= */}
      <section className="py-20">
        <div className="wrap text-center">
          <span className="eyebrow reveal inline-flex justify-center">نتكامل مع</span>
          <h2 className="reveal d1 font-heading font-bold text-[clamp(22px,2.8vw,34px)] tracking-[-.01em] text-ink mt-3">
            تكاملات الذكاء الاصطناعي التي نبني عليها
          </h2>

          <div
            className="reveal mt-12 overflow-hidden relative pb-2"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee-left">
              {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((t, i) => (
                <div
                  key={i}
                  title={t.name}
                  className="mr-4 shrink-0 w-[88px] h-[88px] rounded-2xl bg-white border border-line-soft shadow-card grid place-items-center p-4"
                >
                  {t.svg ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-ink" aria-label={`${t.name} logo`}>
                      <path d={t.svg} />
                    </svg>
                  ) : (
                    <SmartImg
                      className="w-9 h-9 object-contain"
                      alt={`${t.name} logo`}
                      src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                      fallback={`https://cdn.simpleicons.org/${t.slug}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24">
        <div className="wrap max-w-[840px] mx-auto">
          <div className="text-center">
            <span className="eyebrow reveal inline-flex justify-center">الأسئلة الشائعة</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.8vw,44px)] tracking-[-.02em] text-ink mt-3">
              أسئلة شائعة عن وكلاء واتساب الذكية وأتمتة الذكاء الاصطناعي
            </h2>
          </div>
          <div className="reveal d1 mt-10">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ================= LEGAL ================= */}
      <section className="py-24 bg-surface border-y border-line-soft">
        <div className="wrap">
          <div className="text-center max-w-[640px] mx-auto">
            <span className="eyebrow reveal inline-flex justify-center">الشؤون القانونية</span>
            <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.8vw,44px)] tracking-[-.02em] text-ink mt-3">
              سياسة الخصوصية
            </h2>
            <p className="reveal d2 text-muted text-base mt-[14px] mx-auto">
              خصوصيتك تهمنا. إليك كيف نتعامل مع بياناتك ونحميها.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px] mt-12 max-w-[860px] mx-auto">
            {LEGAL_POINTS.map((p, i) => (
              <div
                key={p.t}
                className={`reveal d${(i % 2) + 1} group flex items-start gap-4 bg-bg border border-line rounded-[18px] p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft hover:border-primary/40`}
              >
                <div className="w-12 h-12 rounded-[12px] bg-white border border-line grid place-items-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  <p.Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[16px] text-ink">{p.t}</h3>
                  <p className="text-sm text-muted mt-1.5 leading-[1.55]">{p.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-10">
            <p className="text-sm text-muted">
              أسئلة حول بياناتك؟ راسلنا على{" "}
              <a href="mailto:Info@fivenodes.ai" className="text-primary font-medium hover:underline">
                Info@fivenodes.ai
              </a>
            </p>
            <Link href="/ar/privacy" className="btn btn-ghost mt-5">
              اقرأ سياسة الخصوصية كاملة
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CTASection
        title="هل أنت مستعد لتحويل تجربة عملائك؟"
        text="اكتشف كيف تساعد خدمات الذكاء الاصطناعي في قطر من فايف نودز على أتمتة عملياتك، التقاط كل رسالة واتساب، وتقديم خدمة عملاء ثنائية اللغة على مدار الساعة."
        primary={["ابدأ الآن", "/ar/contact"]}
        secondary={["تواصل معنا", "/ar/contact"]}
      />
    </main>
  );
}
