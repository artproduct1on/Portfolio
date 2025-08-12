"use client";
import { UseFormRegisterReturn } from "react-hook-form";
import s from "./s.module.scss";

interface Props {
  type: string
  placeholder: string
  className?: string
  register?: UseFormRegisterReturn
  error?: string
};

function Input({
  type = "text",
  placeholder = "",
  className,
  register,
  error,
}: Props) {

  const errorItem = error && <p className={s.error}>{error}</p>;

  if (type === "textarea") return (
    <>
      {errorItem}
      <textarea
        className={`${s.textarea} ${className}`}
        placeholder={placeholder}
        {...register}
      />

    </>
  )

  return (
    <>
      {errorItem}
      <input
        className={`${s.input} ${className}`}
        type={type}
        placeholder={placeholder}
        {...register}
      />

    </>
  );
}

export default Input;
