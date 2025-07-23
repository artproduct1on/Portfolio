import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', "uk"],
  defaultLocale: 'en'
});