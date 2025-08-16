import { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import s from "@/assets/styles/about.module.scss";
import AnimatedSection from "@/components/common/AnimatedSection";
import Image from "next/image";
import Clock from "@/components/common/Clock";
import { startCareer } from "@/utils/constants";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: messages.about.head.title,
    description: messages.about.head.description,
    keywords: messages.about.head.keywords,
  };
};

export default async function AboutPage() {

  const t = await getTranslations("about");

  const list = t.raw("list");

  return <>
    <AnimatedSection className={s.section} id="about">
      <h1 className={s.title}>
        {t("title")}
      </h1>

      <div className={s.block}>
        <div className={s.photo}>
          <Image
            className={s.photoImg}
            src="/me.png"
            alt={t("photo")}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className={s.photoText}>
            {t("photo")}
          </p>
        </div>

        <ul className={s.list}>
          {list.map(([title, desc]: [string, string], i: number) => (
            <li className={s.listLi} key={i}>
              <span className={s.listSpan}>
                {title}
              </span>
              <p className={s.listText}>
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <h3>
        {t("h3")}
      </h3>
      <Clock start={startCareer} />
    </AnimatedSection>
  </>;
}
