"use client";
import { useState } from "react";
import s from "./s.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LangSwitcher from "@/components/ui/LangSwitcher";
import Hamburger from "@/components/ui/Hamburger";

function Header() {
  const t = useTranslations("components.header");
  const list = t.raw("nav")
  const [isActive, setIsActive] = useState(false);
  const openMenu = (): void => setIsActive((prev: boolean) => !prev);
  const pathname = usePathname();

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
        <p className={s.logoText}>datair</p>
      </a>


      <Hamburger action={openMenu} />
      <nav
        className={s.nav}
        data-active={isActive}
        data-children={1}
      >
        <ul className={s.navList}>
          {list.map((i: { title: string, ref: string }) => (
            <li className={s.navListItem} key={i.title}>
              <Link
                className={s.navListLink}
                data-active={pathname === i.ref}
                href={i.ref}
              >
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
        <LangSwitcher />
      </nav>



    </header>

  );
};

export default Header;
