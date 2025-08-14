import { getTranslations } from "next-intl/server";
import { socials } from "@/utils/constants";
import s from "@/assets/styles/main.module.scss";
import IconSvg from "@/components/ui/IconSvg";
import AnimatedSection from "@/components/common/AnimatedSection";
import Form from "@/components/common/Form";
import Image from "next/image";
import LinkArrow from "@/components/ui/LinkArrow";

import { Link } from "@/i18n/navigation";
import { front, back } from "@/utils/skillsInfo";
import WorkSkills from "@/components/common/WorkSkills";



const services = [
  {
    id: 1,
    title: "Personal Solution",
    text: "Поєднання в собі декількох рішень, під різні завдання",
    link: "/blog/services#personal-solution"
  },
  {
    id: 2,
    title: "Web Development",
    text: "Веб сайти та веб застосунки з адаптацію під ринок",
    link: "/blog/services#web-development"
  },
  {
    id: 3,
    title: "Mobile Development",
    text: "Додатки для App Store та Google Play",
    link: "/blog/services#app-development"
  },
  {
    id: 4,
    title: "Systems and Services",
    text: "WMS, CRM, ERP, POS, CMS та інші види систем.",
    link: "/blog/services#systems-and-services"
  },
];

const industries = [
  {
    id: 1,
    title: "Logistics",
    icon: "Logistics",
    link: "/blog/industries#logistics"
  },
  {
    id: 2,
    title: "eCommerce",
    icon: "eCommerce",
    link: "/blog/industries#eCommerce"
  },
  {
    id: 3,
    title: "Healthcare",
    icon: "Healthcare",
    link: "/blog/industries#healthcare"
  },
  {
    id: 4,
    title: "E-grocery",
    icon: "E-grocery",
    link: "/blog/industries#E-grocery"
  },
  {
    id: 5,
    title: "Education",
    icon: "Education",
    link: "/blog/industries#Education"
  },
  {
    id: 6,
    title: "Other",
    icon: "Other",
    link: "/blog/industries"
  },
]

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

      <a className={s.homeNext} href="#services">
        <span className={s.homeNextText}>{home("next")}</span>
      </a>

    </AnimatedSection>

    <AnimatedSection className={s.services} id="services">
      <h2>services</h2>
      <h3 className={s.servicesSubTitle}>Рішення для вашого бізнесу</h3>
      <div className={s.servicesImg}>
        <Image
          src="/dev.jpg"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <ul className={s.servicesList}>
        {services.map(i => (
          <li className={s.servicesListItem} key={i.id}>
            <LinkArrow href={i.link} className={s.servicesListItemLink} title={i.title} />
            <p className={s.servicesListItemText}>{i.text}</p>
          </li>
        ))}
      </ul>
      <h3 className={s.servicesSubTitle} > Індустриї</h3>

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

    <AnimatedSection className={s.useful} id="why me">
      <h2>why me</h2>

      <WorkSkills skills={[...front.slice(0, 5), ...back.slice(0, 4)]} />
    </AnimatedSection>

    <AnimatedSection className={s.useful} id="useful">
      <h2>useful</h2>
    </AnimatedSection>

    <AnimatedSection className={s.contact} id="contact">
      <h2>contact</h2>
      <Form />
    </AnimatedSection>

  </>;
}
