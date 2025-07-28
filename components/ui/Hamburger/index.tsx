"use client";
import { useState } from "react";
import s from "./s.module.scss";

interface Props {
  action: () => void;
};

function Hamburger({ action }: Props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(prev => !prev);
    action();
  };

  return (
    <button
      className={s.hamburger}
      onClick={handleClick}
      data-active={isActive}
    >
      <hr className={s.hamburgerLine} />
      <hr className={s.hamburgerLine} />
      <hr className={s.hamburgerLine} />
    </button>
  );
}

export default Hamburger;
