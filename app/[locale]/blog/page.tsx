import { getTranslations } from "next-intl/server";
import s from "@/assets/styles/blog.module.scss";
import AnimatedSection from "@/components/common/AnimatedSection";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { listArticlesPreview } from "@/utils/info/blogInfo";
import { IArticlePreview } from "@/types";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: messages.blog.head.title,
    description: messages.blog.head.description,
    keywords: messages.blog.head.keywords,
  };
};

export default async function BlogPage() {

  const t = await getTranslations("blog");

  const list = listArticlesPreview(t.raw("list"));

  return <>
    <AnimatedSection className={s.blog}>
      <h1 className={s.title}>
        {t("title")}
      </h1>
      <ul className={s.list}>
        {list.map((i: IArticlePreview) => (
          <li
            key={i.id}
            className={s.item}
          >
            <Link
              href={"blog/" + i.id}
              className={s.itemLink}
            >
              <img
                className={s.itemImg}
                src={i.img}
                alt={i.title}
              />
              <h4 className={s.itemTitle}>{i.title}</h4>
              <p className={s.itemDescription}>{i.description}</p>
            </Link>
          </li>
        ))}
      </ul>

    </AnimatedSection>
  </>;
}
