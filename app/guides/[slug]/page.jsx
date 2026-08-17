import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/components/guidesData";
import GuideArticle from "@/components/GuideArticle";
import { pageMeta } from "@/components/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return pageMeta({
    title: `${g.en.title} | Five Nodes`,
    description: g.en.description,
    path: `/guides/${slug}`,
    ogType: "article",
  });
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  return <GuideArticle guide={g} locale="en" />;
}
