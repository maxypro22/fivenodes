import PageHeader from "@/components/PageHeader";
import BookingWidget from "@/components/BookingWidget";
import SubscribeForm from "@/components/SubscribeForm";

import { pageMeta } from "@/components/seo";

export const metadata = pageMeta({
  title: "احجز عرضاً توضيحياً — فايف نودز للذكاء الاصطناعي",
  description:
    "احجز عرضاً توضيحياً مدته 30 دقيقة مع فايف نودز. اكتشف كيف يمكن للوكلاء الصوتيين الذكيين وأتمتة واتساب وأتمتة سير العمل تشغيل أعمالك على مدار الساعة.",
  path: "/book-demo",
  ogTitle: "احجز عرضاً توضيحياً — فايف نودز للذكاء الاصطناعي",
  ogDescription:
    "اختر موعداً مدته 30 دقيقة لمشاهدة الوكلاء الصوتيين الذكيين وأتمتة واتساب وسير العمل من فايف نودز.",
  locale: "ar",
});

export default function BookDemoPage() {
  return (
    <main dir="rtl">
      <PageHeader eyebrow="احجز عرضاً توضيحياً" title="احجز عرضاً توضيحياً">
        احجز عرضاً توضيحياً مجانياً مدته 30 دقيقة، أو اختر استشارة استراتيجية مدفوعة. في الحالتين
        سنناقش أعمالك ونحدد فرص الأتمتة.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <div className="reveal">
            <BookingWidget fee={1000} currency="QAR" />
          </div>

          <div className="reveal d1 flex flex-col gap-8">
            <div className="bg-white border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">هل تفضّل التحدث الآن؟</h3>
              <div className="flex flex-col gap-2 mt-3 text-sm">
                <a href="tel:+97430010105" dir="ltr" className="text-ink-2 hover:text-primary">+974 3001 0105</a>
                <a href="tel:+97444440085" dir="ltr" className="text-ink-2 hover:text-primary">+974 4444 0085</a>
                <a href="mailto:Info@fivenodes.ai" className="text-ink-2 hover:text-primary">Info@fivenodes.ai</a>
              </div>
            </div>

            <div className="bg-white border border-line rounded-[20px] p-7 shadow-card">
              <h3 className="font-heading font-bold text-lg text-ink">ابقَ على تواصل</h3>
              <p className="text-sm text-muted mt-2 leading-[1.7]">
                انضم لنشرتنا البريدية لآخر المستجدات في أتمتة الذكاء الاصطناعي، ووكلاء الصوت، وأتمتة
                واتساب، وكيف تسخّر الشركات في قطر الذكاء الاصطناعي في عملها.
              </p>
              <div className="mt-4">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
