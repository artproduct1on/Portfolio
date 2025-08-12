"use client";
import { UseFormRegisterReturn } from "react-hook-form";
import s from "./s.module.scss";

interface Props {
  type: "button" | "submit" | "reset" | undefined
  title: string
  className?: string
  disabled?: boolean
};

function Button({
  type = "button",
  title = "button",
  className,
  disabled,
}: Props) {

  return (
    <button
      className={`${s.button} ${className}`}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
