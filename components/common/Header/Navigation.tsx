"use client";
import Hamburger from "@/components/ui/Hamburger";
import LangSwitcher from "@/components/ui/LangSwitcher";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Navigation({ children, className }: Props) {

  const [isActive, setIsActive] = useState(false);
  const openMenu = (): void => setIsActive(prev => !prev);

  return (<>

    <Hamburger action={openMenu} />
    <nav
      className={className ?? ""}
      data-active={isActive}
    >
      {children}
      <LangSwitcher />
    </nav>
  </>
  );
}
