import React from "react";
import "@/assets/styles/globals.scss";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";


export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: messages.main.head.title,
    description: messages.main.head.description,
    keywords: messages.main.head.keywords,
  };
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
};
