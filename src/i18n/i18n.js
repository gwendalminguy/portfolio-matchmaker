import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import fr from "./fr.json";
import es from "./es.json";
import de from "./de.json";
import it from "./it.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      it: { translation: it },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "es", "de", "it"],
    load: "languageOnly",
    returnNull: false,
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "cookie"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
