"use client";
import { useState } from "react";
import s from "./s.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LangSwitcher from "@/components/ui/LangSwitcher";
import Hamburger from "@/components/ui/Hamburger";
import Backdrop from "@/components/ui/Backdrop";
import useScrollLock from "@/hooks/useScrollLock";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useScrollLock(isActive);

  const t = useTranslations("components.header");
  const list = t.raw("nav");

  const toggleMenu = (): void => setIsActive((prev: boolean) => !prev);
  const closeMenu = (): void => { if (isActive) setIsActive(false); };

  return (
    <header className={s.header}>

      <Link
        className={s.logo}
        href="/"
        onClick={closeMenu}
      >
        <div className={s.logoImg}>
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className={s.logoText}>datair</p>
      </Link>

      <Hamburger
        className={s.hamburger}
        action={toggleMenu}
        isActive={isActive}
      />
      <Backdrop
        action={closeMenu}
        isActive={isActive}
      />
      <nav
        className={s.nav}
        data-active={isActive}
        data-children={1}
      >
        <ul
          className={s.navList}
          onClick={closeMenu}
        >
          {list.map((i: { title: string, ref: string }) => (
            <li
              className={s.navListItem}
              key={i.title}
            >
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
