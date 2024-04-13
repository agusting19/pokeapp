import { Dictionary } from "@/types/i18n"
import type { Locale } from "./config"

const dictionaries = {
  en: () =>
    import("./locales/en/translations.json").then(
      (module) => module.default as Dictionary
    ),
  es: () =>
    import("./locales/es/translations.json").then(
      (module) => module.default as Dictionary
    ),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]?.() ?? dictionaries.es()
