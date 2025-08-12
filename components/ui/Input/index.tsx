"use client";
import { UseFormRegisterReturn } from "react-hook-form";
import s from "./s.module.scss";
import { useState } from "react";

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

  const [isFill, setIsFill] = useState<string>("");

  const lableItem = (
    <label
      className={s.lable}
      data-fill={isFill.length > 0}
      data-error={!!error}
    >
      {error || placeholder}
    </label>
  );

  if (type === "textarea") return (
    <div className={s.wrapper}>
      {lableItem}
      <textarea
        className={`${s.textarea} ${className}`}
        onInput={(e) => setIsFill(e.currentTarget.value)}
        {...register}
      />
    </div>
  )

  return (
    <div className={s.wrapper}>
      {lableItem}
      <input
        className={`${s.input} ${className}`}
        type={type}
        onInput={(e) => setIsFill(e.currentTarget.value)}
        {...register}
      />

    </div>
  );
}

export default Input;
