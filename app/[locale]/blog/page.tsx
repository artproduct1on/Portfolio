
import { getTranslations } from "next-intl/server";
import s from "@/assets/styles/about.module.scss";
import AnimatedSection from "@/components/common/AnimatedSection";

export default async function BlogPage() {

  const t = await getTranslations("about");



  return <>
    <AnimatedSection className={s.about} id="blog">
      <h2>
        {t("h2")}
      </h2>


    </AnimatedSection>
  </>;
}
