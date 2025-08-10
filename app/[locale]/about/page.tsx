
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/common/AnimatedSection";

export default async function HomePage() {

  const about = await getTranslations("main.about");



  return <>
    <AnimatedSection id="skills">
      <h2>
        {about("h2")}
      </h2>
    </AnimatedSection>
  </>;
}
