import React from "react";
import s from "./s.module.scss";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { languages } from "@/utils/constants";

function LangSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  const langs: string[] = languages.filter(i => i !== locale);

  return (
    <div className={s.langs}>
      <a
        className={s.langsLink}
        href={"/" + langs[0] + pathname}
      >
        {langs[0]}
      </a> |
      <a
        className={s.langsLink}
        href={"/" + langs[1] + pathname}
      >
        {langs[1]}
      </a>
    </div>
  );
}

export default LangSwitcher;
