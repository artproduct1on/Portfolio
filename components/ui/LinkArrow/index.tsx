"use client";
import IconSvg from "../IconSvg";
import s from "./s.module.scss";
import { Link } from "@/i18n/navigation";

interface Props {
  href: string
  title?: string
  className?: string
};

export default function LinkArrow({
  title = "link",
  href,
  className
}: Props) {

  return (
    <Link
      href={href}
      className={`${s.link} ${className}`}
    >
      {title}
      <IconSvg id="link" />
    </Link>
  );
};

