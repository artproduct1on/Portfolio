import s from "./s.module.scss";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Navigation from "./Navigation";
import { getTranslations } from "next-intl/server";

async function Header() {
  const t = await getTranslations("header");
  const list = t.raw("nav")

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


      <Navigation
        className={s.nav}
      >
        <ul className={s.navList}>
          {list.map((i: { title: string, ref: string }) => (
            <li className={s.navListItem} key={i.title}>
              <Link className={s.navListLink} href={i.ref}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </Navigation>

    </header>

  );
};

export default Header;
