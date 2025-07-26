import { languages } from "@/utils/constants";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: languages,
  defaultLocale: "en"
});
