import Hamburger from "@/components/ui/Hamburger";
import { useTranslations } from "next-intl";
import s from "./s.module.scss"

function Header({ locale }: any) {

  const t = useTranslations();

  return (
    <header className={s.header}>
      <a className={s.logo} href="#home">
        <p className={s.logoText}>Datair</p>
      </a>
      <nav className={s.nav}>
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
      </nav>
      <Hamburger />
    </header>
  )
};

export default Header;
