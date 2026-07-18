import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationTR from '../../locales/tr/translation.json';
import translationEN from '../../locales/en/translation.json';
import translationAR from '../../locales/ar/translation.json';
import translationRU from '../../locales/ru/translation.json';

const resources = {
  tr: { translation: translationTR },
  en: { translation: translationEN },
  ar: { translation: translationAR },
  ru: { translation: translationRU }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Set initial language to ar
    fallbackLng: 'ar', // Default language
    debug: false,
    
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
