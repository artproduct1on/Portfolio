import s from "@/assets/styles/competence.module.scss";
import { getMessages, getTranslations } from "next-intl/server";
import { workList } from "@/utils/constants";
import { front, back, tool } from "@/utils/info/skillsInfo";
import WorkSkills from "@/components/common/WorkSkills";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Metadata } from "next";


export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: messages.competence.head.title,
    description: messages.competence.head.description,
    keywords: messages.competence.head.keywords,
  };
};

export default async function CompetencePage() {
  const t = await getTranslations("competence");
  const workProcessList = t.raw("list_2");

  return <>
    <AnimatedSection className={s.section}>
      <h1 className={s.title}>
        {t("h2")}
      </h1>
      <h3 className={s.subtitle}>
        {t("h3")}
      </h3>
      <ul className={s.competence}>
        {workList.map(i => (
          <li className={s.competenceItem} key={i.id}>
            <div className={s.competenceCircle} data-perc={i.perc} />
            <label className={s.competenceLabel}>
              {t("list." + i.id)}
            </label>
          </li>
        ))}
      </ul>

      <h3 className={s.pitle}>
        {t("h3_2")}
      </h3>
      <ul className={s.process}>
        {workProcessList.map(([title, desc]: [string, string], i: number) => (
          <li
            className={s.processItem}
            key={i}
            data-num={i + 1}
          >
            <p className={s.processName}>
              {title}
            </p>
            <p className={s.processText}>
              {desc}
            </p>
          </li>
        ))}

      </ul>

    </AnimatedSection>

    <AnimatedSection className={s.skills}>
      <h2>
        {t("skills.title")}
      </h2>

      <h3>
        {t("skills.list.0")}
      </h3>

      <WorkSkills skills={front} />

      <h3>
        {t("skills.list.1")}
      </h3>

      <WorkSkills skills={back} />

      <h3 >
        {t("skills.list.2")}
      </h3>

      <WorkSkills skills={tool} />

    </AnimatedSection>
  </>;
}
