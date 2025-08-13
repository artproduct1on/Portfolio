"use client";
import s from "./s.module.scss";

interface Props {
  action: () => void;
  isActive?: boolean;
  className?: string;
};

function Backdrop({ action, isActive, className }: Props) {


  if (isActive) return (
    <div
      className={`${s.backdrop} ${className}`}
      onClick={action}
      data-active={isActive}
    />
  )

  return null;
}

export default Backdrop;
