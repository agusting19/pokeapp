import type { Locale } from "./config"

const dictionaries = {
  en: () =>
    import("./locales/en/translations.json").then((module) => module.default),
  es: () =>
    import("./locales/es/translations.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.es()
