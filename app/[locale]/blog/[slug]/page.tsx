import s from "@/assets/styles/article.module.scss";
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/common/AnimatedSection";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import { listArticles } from "@/utils/info/blogInfo";
import { redirect } from "@/i18n/navigation";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string, slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const messages = await getMessages({ locale });

  if (!messages.articles[slug]) {
    redirect({ href: "/not-found", locale });
    return {
      title: messages.blog.head.head.title,
      description: messages.blog.head.description,
      keywords: messages.blog.head.keywords,
    };;
  }

  return {
    title: messages.articles[slug].head.title,
    description: messages.blog.head.description,
    keywords: messages.blog.head.keywords,
  };
};

interface IArticle {
  id: string;
  img?: string;
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const data = listArticles[slug as keyof typeof listArticles];

  if (!data) return <div>404</div>;

  const t = await getTranslations(`articles.${slug}`);
  const list = t.raw("body");

  return (
    <AnimatedSection
      id="articles"
      className={s.section}
    >

      <h1 className={s.title}>{t("head.title")}</h1>
      {
        data.map((i: IArticle, index) => (
          <article
            className={s.article}
            id={i.id}
            key={i.id}
          >
            <img
              className={s.articleImg}
              src={i.img}
              alt={list[index]?.title}
              loading="lazy"
            />
            <h3 className={s.articleTitle}>{list[index]?.title || "No title"}</h3>
            <p className={s.articleDescription}>{list[index]?.text || "No description"}</p>
          </article>
        ))
      }
    </AnimatedSection>);

}
