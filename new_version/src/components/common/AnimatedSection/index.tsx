"use client";
import { useIntersection } from "@/hooks/useIntersection";
import React, { useRef } from "react";
import s from "./s.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className, id }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [isActive] = useIntersection(ref);

  return (
    <section
      ref={ref}
      id={id}
      className={`${s.section} ${className ?? ""}`}
      data-active={isActive}
    >
      {children}
    </section>
  );
}
