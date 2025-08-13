"use client";
import { useState } from "react";
import s from "./s.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { API_CONTACT } from "@/utils/constants";
import { timeRemainingHelper } from "@/utils/helpers";
import { useTranslations } from "next-intl";

interface IFormInput {
  name: string;
  email: string;
  message: string;
};

interface IStatusForm {
  title: string;
  code: number;
}

function Form() {

  const t = useTranslations("components.form");


  const [status, setStatus] = useState<IStatusForm>({
    title: t('0'),
    code: 0,
  });
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
        setStatus({ title: "Message sent!", code: res.status });
        reset();
      } else if (res.status === 429) {
        const errorData = await res.json();
        const { hours, minutes } = timeRemainingHelper(errorData.lastSent);
        setStatus({
          title: t('429', { hours, minutes }),
          code: res.status
        });
      } else {
        setStatus({
          title: t('500'),
          code: 500
        });
      }
    } catch (error) {
      setStatus({
        title: t('500'),
        code: 500
      });
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
      <p
        className={s.status}
        data-code={status.code}
      >
        {status.title}
      </p>
      <Input
        type="text"
        placeholder={t('name')}
        disabled={loading}
        error={errors.name?.message}
        register={
          register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be more than 2 characters" } })
        }
      />
      <Input
        type="email"
        placeholder={t('email')}
        disabled={loading}
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
        placeholder={t('message')}
        disabled={loading}
        error={errors.message?.message}
        register={register("message", { required: "Message is required" })}
      />

      <Button
        className={s.button}
        disabled={loading}
        type="submit"
        title={t('button')}
      />

    </form>

  );
};

export default Form;
