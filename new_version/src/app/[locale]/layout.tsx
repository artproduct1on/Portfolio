import React from "react";
import "../../styles/globals.scss";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

type Props = {
  children: React.ReactNode
  params: { locale: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: messages.head.title,
    description: messages.head.description,
    keywords: messages.head.keywords,
  };
};

export default async function Layout({
  children,
  params
}: Props) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
