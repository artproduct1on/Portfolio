import React from "react";
import s from "./s.module.scss";
import IconSvg from "@/components/ui/Icon";
import { socials } from "@/utils/constants";

function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.contactList}>
        {
          socials.map((i) => (
            <li className={s.contactListItem} key={i.id}>
              <a className={s.contactListLink}
                href={i.ref}
                target="_blank"
                title={i.title}>
                <IconSvg id={i.icon} />
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}

export default Footer;
