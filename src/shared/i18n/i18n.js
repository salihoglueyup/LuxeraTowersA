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

export const applyDocumentDirection = (lng = 'ar') => {
  if (typeof document === 'undefined') return;

  const normalizedLng = (lng || 'ar').toLowerCase();
  const dir = normalizedLng === 'ar' ? 'rtl' : 'ltr';

  document.documentElement.dir = dir;
  document.documentElement.lang = normalizedLng;
  document.body?.setAttribute('dir', dir);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // İlk ziyarette dil seçilmemişse Arapça'ya düşer (fallbackLng).
    // Kullanıcının seçimi localStorage'da saklanır ve sonraki ziyaretlerde gelir.
    fallbackLng: 'ar',
    debug: false,

    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', applyDocumentDirection);
applyDocumentDirection(i18n.language);

export default i18n;
