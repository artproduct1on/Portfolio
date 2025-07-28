"use client";
import s from "./s.module.scss";
import { useTranslations } from "next-intl";

function Clock({ start }: { start: string }) {
  const about = useTranslations("main.about");

  const startDate = new Date(start),
    currentDate = new Date(),
    timeDifference = currentDate.getTime() - startDate.getTime();

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365)),
    days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)),
    hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return (
    <ul className={s.clock}>
      <li className={s.clockItem}>
        {about("clock.0")}
        <span className={s.clockItemSpan}>{years}</span>
      </li>
      <li className={s.clockItem}>
        {about("clock.1")}
        <span className={s.clockItemSpan}>{days}</span>
      </li>
      <li className={s.clockItem}>
        {about("clock.2")}
        <span className={s.clockItemSpan}>{hours}</span>
      </li>
    </ul>

  );
};

export default Clock;
