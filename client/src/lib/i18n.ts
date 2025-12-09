import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import az from "@/locales/az.json";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";

const fallbackLng = "en";
const storedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

void i18n.use(initReactI18next).init({
  resources: {
    az: { translation: az },
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: storedLanguage || "az",
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

export default i18n;
