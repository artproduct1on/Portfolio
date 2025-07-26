"use client";
import { useState } from "react";
import s from "./s.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Hamburger from "@/components/ui/Hamburger";
import LangSwitcher from "@/components/ui/LangSwitcher";

function Header() {
  const t = useTranslations();
  const [isActive, setIsActive] = useState(false);
  const openMenu = (): void => setIsActive(prev => !prev);

  return (
    <header className={s.header}>

      <a className={s.logo} href="#home">
        <div className={s.logoImg}>
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className={s.logoText}>Datair</p>
      </a>

      <Hamburger action={openMenu} />

      <nav
        className={s.nav}
        data-active={isActive}
      >
        <ul className={s.navList}>
          <li className={s.navListItem}>
            <a className={s.navListLink} href="#home">
              {t("nav.0")}
            </a>
          </li>
          <li className={s.navListItem}>
            <a className={s.navListLink} href="#about">
              {t("nav.1")}
            </a>
          </li>
          <li className={s.navListItem}>
            <a className={s.navListLink} href="#work">
              {t("nav.2")}
            </a>
          </li>
        </ul>
        <LangSwitcher />
      </nav>

    </header>

  );
};

export default Header;
