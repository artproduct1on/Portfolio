import { getTranslations } from "next-intl/server";
import { homeServices, homeIndustries, socials } from "@/utils/constants";
import s from "@/assets/styles/main.module.scss";
import IconSvg from "@/components/ui/IconSvg";
import AnimatedSection from "@/components/common/AnimatedSection";
import Form from "@/components/common/Form";
import Image from "next/image";
import LinkArrow from "@/components/ui/LinkArrow";
import { Link } from "@/i18n/navigation";
import { listArticlesPreview } from "@/utils/info/blogInfo";
import { IArticlePreview } from "@/types";

export default async function HomePage() {

  const t = await getTranslations("main");
  const tBlog = await getTranslations("blog");
  const servicesList = homeServices(t.raw("services.list"));
  const industries = homeIndustries(t.raw("services.industries"));

  const listUseful = listArticlesPreview(tBlog.raw("list"));

  return <>
    <AnimatedSection className={s.home} id="home">
      <h1 className={s.homeTitle}>
        <span className={s.homeTitlePart}>
          {t("home.h1.0")}
        </span>
        <span className={s.homeTitlePart}>
          {t("home.h1.1")}
        </span>
        <span className={s.homeTitlePart}>
          {t("home.h1.2")}
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

      <a className={s.homeNext} href="#services">
        <span className={s.homeNextText}>{t("home.next")}</span>
      </a>

    </AnimatedSection>

    <AnimatedSection className={s.services} id="services">
      <h2>{t("services.h2")}</h2>
      <h3 className={s.servicesSubTitle}>{t("services.SubTitle")}</h3>
      <div className={s.servicesImg}>
        <Image
          src="/dev.jpg"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <ul className={s.servicesList}>
        {servicesList.map(i => (
          <li className={s.servicesListItem} key={i.id}>
            <LinkArrow
              href={i.link}
              className={s.servicesListItemLink}
              title={i.title}
            />
            <p className={s.servicesListItemText}>{i.text}</p>
          </li>
        ))}
      </ul>
      <h3 className={s.servicesSubTitle}>{t("services.SubTitleSecond")}</h3>

      <ul className={s.servicesIndustries}>
        {industries.map(i => (
          <li className={s.servicesIndustriesItem} key={i.id}>
            <Link href={i.link} className={s.servicesIndustriesItemLink}>
              <IconSvg id={i.icon} />
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </AnimatedSection >

    <AnimatedSection className={s.why} id="why-me">
      <h2>{t("why.h2")}</h2>

      <h4 className={s.whySubTitle}>{t("why.list.0.0")}:</h4>
      <LinkArrow
        href={"/about"}
        className={s.whyLink}
        title={t("why.list.0.1")}
      />
      <h4 className={s.whySubTitle}>{t("why.list.1.0")}:</h4>
      <LinkArrow
        href={"/competence"}
        className={s.whyLink}
        title={t("why.list.1.1")}
      />
      <h4 className={s.whySubTitle}>{t("why.list.2.0")}:</h4>
      <LinkArrow
        href={"/competence#skills"}
        className={s.whyLink}
        title={t("why.list.2.1")}
      />
      <h4 className={s.whySubTitle}>{t("why.list.3.0")}:</h4>
      <LinkArrow
        href={"/competence#skills"}
        className={s.whyLink}
        title={t("why.list.3.1")}
      />
      <h4 className={s.whySubTitle}>{t("why.list.4.0")}:</h4>
      <LinkArrow
        href={"/blog/business-digitalization#personal-solution"}
        className={s.whyLink}
        title={t("why.list.4.1")}
      />

    </AnimatedSection>

    <AnimatedSection className={s.useful}>
      <h2>{t("useful.h2")}</h2>
      <h3 className={s.usefulSubTitle}>{t("useful.h3")}</h3>
      <ul className={s.list}>
        {listUseful.slice(0, 3).map((i: IArticlePreview) => (
          <li
            key={i.id}
            className={s.listItem}
          >
            <Link
              href={"blog/" + i.id}
              className={s.listItemLink}
            >
              <img
                className={s.listItemImg}
                src={i.img}
                alt={i.title}
                loading="lazy"
              />
              <h4 className={s.listItemTitle}>{i.title}</h4>
              <p className={s.listItemDescription}>{i.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </AnimatedSection>

    <AnimatedSection className={s.contact} id="contact">
      <h2>{t("contact.h2")}</h2>
      <Form />
    </AnimatedSection>

  </>;
}
