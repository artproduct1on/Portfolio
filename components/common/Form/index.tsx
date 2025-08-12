"use client";
import { useState } from "react";
import s from "./s.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


interface IFormInput {
  name: string;
  email: string;
  message: string;
};

function Form() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message sent!");
      reset();
    } else {
      setStatus("Error sending message");
    }
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      {status && <p className={s.status}>{status}</p>}
      <Input
        type="text"
        placeholder="Your name"
        register={register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />
      <Input
        type="email"
        placeholder="Your email"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
        error={errors.email?.message}
      />

      <Input
        type="textarea"
        placeholder="Your message"
        register={register("message", { required: "Message is required" })}
        error={errors.message?.message}
      />

      <Button
        className={s.button}
        type="submit"
        title="Send"
      />

    </form>

  );
};

export default Form;
