"use client";
import { useState } from "react";
import s from "./s.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { API_CONTACT } from "@/utils/constants";


interface IFormInput {
  name: string;
  email: string;
  message: string;
};

function Form() {
  const [status, setStatus] = useState<string | null>("Someone will get in touch with you soon!");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(API_CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent!");
        reset();
      } else if (res.status === 429) {
        const errorData = await res.json();
        const lastSentTime = new Date(errorData.lastSent);
        const nextAttemptTime = new Date(lastSentTime.getTime() + 24 * 60 * 60 * 1000);
        const timeLeftInMs = nextAttemptTime.getTime() - Date.now();
        const hoursLeft = Math.floor(timeLeftInMs / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeftInMs % (1000 * 60 * 60)) / (1000 * 60));

        setStatus(`Message already sent. Please try again in ${hoursLeft} hours and ${minutesLeft} minutes.`);
      } else {
        setStatus("Error sending message");
      }
    } catch (error) {
      setStatus("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={s.form}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className={s.status}>{status}</p>
      <Input
        type="text"
        placeholder="Name"
        error={errors.name?.message}
        register={
          register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be more than 2 characters" } })
        }
      />
      <Input
        type="email"
        placeholder="E-mail: example@domain.com"
        error={errors.email?.message}
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })
        }
      />

      <Input
        type="textarea"
        placeholder="Message: Hello, I would like to..."
        error={errors.message?.message}
        register={register("message", { required: "Message is required" })}
      />

      <Button
        className={s.button}
        type="submit"
        title="Send"
        disabled={loading}
      />

    </form>

  );
};

export default Form;
