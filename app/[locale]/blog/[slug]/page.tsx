import { getTranslations } from "next-intl/server";
import s from "@/assets/styles/about.module.scss";
import AnimatedSection from "@/components/common/AnimatedSection";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string, slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  console.log(slug);
  const messages = await getMessages({ locale });

  return {
    title: messages.about.head.title,
    description: messages.about.head.description,
    keywords: messages.about.head.keywords,
  };
};

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string, slug: string }>;
}) {

  const t = await getTranslations("about");

  return <>
    <AnimatedSection className={s.about} id="blog">
      <h2>
        {t("h2")}
      </h2>


    </AnimatedSection>
  </>;
}
