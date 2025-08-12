"use client";
import { UseFormRegisterReturn } from "react-hook-form";
import s from "./s.module.scss";

interface Props {
  type: string;
  placeholder: string;
  error: string | undefined;
  className?: string;
  register?: UseFormRegisterReturn;
};

function Input({
  type = "text",
  placeholder = "",
  className,
  error,
  register,
}: Props) {


  const lableItem = error ? <p className={s.error}>{error}</p> : <label className={s.lable}>{placeholder}</label>;

  if (type === "textarea") return (
    <>
      {error && <p className={s.error}>{error}</p>}
      <textarea
        className={`${s.textarea} ${className}`}
        placeholder={placeholder}
        {...register}
      />

    </>
  )

  return (
    <>
      {error && <p className={s.error}>{error}</p>}
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
