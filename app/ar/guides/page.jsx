import Link from "next/link";
import { GUIDES } from "@/components/guidesData";
import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "أدلة الذكاء الاصطناعي للشركات في قطر | فايف نودز",
  description:
    "أدلة عملية عن الوكلاء الصوتيين وأتمتة واتساب والذكاء الاصطناعي بالعربية وحماية البيانات للشركات في قطر — التكاليف والمقارنات وطريقة التطبيق.",
  path: "/guides",
  locale: "ar",
});

export default function GuidesIndexAr() {
  return (
    <main dir="rtl">
      <section className="py-14 md:py-20">
        <div className="wrap max-w-[900px]">
          <span className="eyebrow text-[11px] tracking-[.16em]">الأدلة</span>
          <h1 className="font-heading font-extrabold text-[clamp(30px,4.2vw,46px)] leading-[1.2] tracking-[-.02em] text-ink mt-4">
            أدلة الذكاء الاصطناعي للشركات في قطر
          </h1>
          <p className="text-muted text-base md:text-lg mt-4 max-w-[620px] leading-[1.8]">
            إجابات مباشرة عن تكلفة الوكلاء الأذكياء، وكيف يتعاملون مع العربية، وما الذي يجب التحقق منه
            قبل الشراء — مكتوبة للسوق القطري.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/ar/guides/${g.slug}`}
                className="group block rounded-[18px] border border-line bg-bg p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
                <h2 className="font-heading font-bold text-[17.5px] text-ink leading-snug group-hover:text-primary">
                  {g.ar.title}
                </h2>
                <p className="text-muted text-[14.5px] leading-[1.8] mt-2.5">{g.ar.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
