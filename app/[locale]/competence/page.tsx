import s from "@/assets/styles/main.module.scss";
import { getTranslations } from "next-intl/server";
import { workList } from "@/utils/constants";
import { front, back, tool } from "@/utils/skillsInfo";
import AnimatedSection from "@/components/common/AnimatedSection";
import WorkSkills from "@/components/common/WorkSkills";

export default async function Page() {
  const t = await getTranslations("competence");
  const workProcessList = t.raw("list_2");

  return <>
    <AnimatedSection className={s.work}>
      <h1>
        {t("h2")}
      </h1>
      <h3 className={s.workSubtitle}>
        {t("h3")}
      </h3>
      <ul className={s.workCompetence}>
        {workList.map(i => (
          <li className={s.workCompetenceItem} key={i.id}>
            <div className={s.workCompetenceCircle} data-perc={i.perc} />
            <label className={s.workCompetenceLabel}>
              {t("list." + i.id)}
            </label>
          </li>
        ))}
      </ul>

      <h3 className={s.workTitle}>
        {t("h3_2")}
      </h3>
      <ul className={s.workProcess}>
        {workProcessList.map(([title, desc]: [string, string], i: number) => (
          <li
            className={s.workProcessItem}
            key={i}
            data-num={i + 1}
          >
            <p className={s.workProcessName}>
              {title}
            </p>
            <p className={s.workProcessText}>
              {desc}
            </p>
          </li>
        ))}

      </ul>

    </AnimatedSection>

    <AnimatedSection>
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
