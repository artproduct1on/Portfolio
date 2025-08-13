"use client";
import s from "./s.module.scss";

interface Props {
  action: () => void;
  isActive?: boolean;
  className?: string;
};

function Hamburger({ action, isActive, className }: Props) {

  return (
    <button
      className={`${s.hamburger} ${className}`}
      onClick={action}
      data-active={isActive}
    >
      <hr className={s.hamburgerLine} />
      <hr className={s.hamburgerLine} />
      <hr className={s.hamburgerLine} />
    </button>
  );
}

export default Hamburger;
