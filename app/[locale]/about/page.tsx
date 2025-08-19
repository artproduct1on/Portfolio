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

  return <>
    <AnimatedSection className={s.hero} id="about">
      <h1 className={s.title}>
        {t("hero.title")}
      </h1>

      <div className={s.block}>
        <div className={s.photo}>
          <Image
            className={s.photoImg}
            src="/me.png"
            alt={t("hero.photo")}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className={s.photoText}>
            {t("hero.photo")}
          </p>
        </div>

        <ul className={s.list}>
          {t.raw("hero.list").map(([title, desc]: [string, string], i: number) => (
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
    </AnimatedSection>
    <AnimatedSection className={s.career} id="career">
      <h2>
        {t("career.h2")}
      </h2>
      <h3>
        {t("career.h3")}
      </h3>
      <Clock start={startCareer} />
      <p className={s.careerText}>
        {t("career.info")}
      </p>
      <h3>
        {t("career.info_subtitle")}
      </h3>
      <ul className={s.careerList}>
        {t.raw("career.info_list").map((i: string, index: number) => (
          <li
            key={index}
            className={s.careerItem}
          >
            <span className={s.careerItemSpan}>
              0{index + 1}
            </span>
            {i}
          </li>
        ))}
      </ul>
    </AnimatedSection>
  </>;
}
