import { getTranslations } from "next-intl/server";
import Link from "next/link";

import s from "@/assets/styles/notFound.module.scss";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");

  return (
    <section className={s.section}>
      <h1 className={s.title}>404 | {t("h1")}</h1>
      <p className={s.text}>{t("p")}</p>
      <Link className={s.link} href="/">
        {t("link")}
      </Link>
    </section>
  );
}
