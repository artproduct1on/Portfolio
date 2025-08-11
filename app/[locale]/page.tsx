
import { getTranslations } from "next-intl/server";


import { socials } from "@/utils/constants";
import s from "@/assets/styles/main.module.scss";
import IconSvg from "@/components/ui/Icon";
import AnimatedSection from "@/components/common/AnimatedSection";

export default async function HomePage() {

  const home = await getTranslations("main.home");


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
        <span className={s.homeNextText}>{home("next")}</span>
      </a>

    </AnimatedSection>

  </>;
}
