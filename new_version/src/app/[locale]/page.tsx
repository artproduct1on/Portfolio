import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";

import { workList } from "./helpers";
import { socials } from "@/utils/constants";
import s from "./s.module.scss";
import IconSvg from "@/components/ui/Icon";
import { front, back, tool } from "@/utils/skillsInfo";
import Clock from "@/components/common/Clock";
import WorkSkills from "@/components/common/WorkSkills";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function HomePage() {

  const home = useTranslations("home");
  const about = useTranslations("about");
  const work = useTranslations("work");

  const messages = useMessages();
  const aboutList = messages.about.list;
  const workProcessList = messages.work.list_2;

  return <>
    <AnimatedSection className={s.home} id="home">
      <h1 className={s.homeTitle}>
        <span className={s.homeTitlePart}>
          {home("h1.0")}
        </span>
        <span className={s.homeTitlePart}>
          {home("h1.1")}
        </span>
        <span className={s.homeTitlePart}>
          {home("h1.2")}
        </span>

      </h1>

      <ul className={s.homeList}>
        {socials.map((i) => (
          <li className={s.homeListItem} key={i.id}>
            <a className={s.homeListLink}
              href={i.ref}
              target="_blank"
              title={i.title}
            >
              <IconSvg id={i.icon} />
            </a>
          </li>
        ))}
      </ul>

      <a className={s.homeNext} href="#about">
        <p className={s.homeNextText}>
          {home("next")}
        </p>
        <div className={s.homeNextShell} />
      </a>

    </AnimatedSection>

    <AnimatedSection className={s.about} id="about">
      <h2>
        {about("h2")}
      </h2>

      <h3>
        {about("h3")}
      </h3>

      <div className={s.aboutBlock}>
        <div className={s.aboutPhoto}>
          <Image
            className={s.aboutPhotoImg}
            src="/me.png"
            alt={about("photo")}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className={s.aboutPhotoText}>
            {about("photo")}
          </p>
        </div>

        <ul className={s.aboutList}>
          {aboutList.map(([title, desc]: [string, string], i: number) => (
            <li className={s.aboutListLi} key={i}>
              <span className={s.aboutListSpan}>
                {title}
              </span>
              <p className={s.aboutListText}>
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <h3>
        {about("h3_2")}
      </h3>
      <Clock start="April 1, 2020" />
    </AnimatedSection>

    <AnimatedSection className={s.work} id="work">
      <h2>
        {work("h2")}
      </h2>
      <h3 className={s.workSubtitle}>
        {work("h3")}
      </h3>
      <ul className={s.workCompetence}>
        {workList.map(i => (
          <li className={s.workCompetenceItem} key={i.id}>
            <div className={s.workCompetenceCircle} data-perc={i.perc} />
            <label className={s.workCompetenceLabel}>
              {work("list." + i.id)}
            </label>
          </li>
        ))}
      </ul>

      <h3 className={s.workTitle}>
        {work("h3_2")}
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
      <h3 className={s.workTitle}>
        {work("h3_3")}
      </h3>

      <h4 className={s.workTitle}>
        {work("list_3.0")}
      </h4>

      <WorkSkills skills={front} />

      <h4 className={s.workTitle}>
        {work("list_3.1")}
      </h4>

      <WorkSkills skills={back} />

      <h4 className={s.workTitle}>
        {work("list_3.2")}
      </h4>

      <WorkSkills skills={tool} />

    </AnimatedSection>
  </>;
}
