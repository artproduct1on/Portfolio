"use client";
import { timeCalculationHelper } from "@/utils/helpers";
import s from "./s.module.scss";
import { useTranslations } from "next-intl";

function Clock({ start }: { start: string }) {
  const t = useTranslations("components");

  const { months, days, years } = timeCalculationHelper(start);

  return (
    <ul className={s.clock}>
      <li className={s.clockItem}>
        {t("clock.0")}
        <span className={s.clockItemSpan}>{years}</span>
      </li>
      <li className={s.clockItem}>
        {t("clock.1")}
        <span className={s.clockItemSpan}>{months}</span>
      </li>
      <li className={s.clockItem}>
        {t("clock.2")}
        <span className={s.clockItemSpan}>{days}</span>
      </li>
    </ul>

  );
};

export default Clock;
