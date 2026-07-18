import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

// Dil her zaman Arapça olsun - localStorage'daki eski tercihleri temizle
if (typeof window !== 'undefined') {
  localStorage.removeItem('i18nextLng');
}

export const applyDocumentDirection = (lng = 'ar') => {
  if (typeof document === 'undefined') return;

  const normalizedLng = (lng || 'ar').toLowerCase();
  const dir = normalizedLng === 'ar' ? 'rtl' : 'ltr';

  document.documentElement.dir = dir;
  document.documentElement.lang = normalizedLng;
  document.body?.setAttribute('dir', dir);
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'ar',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', applyDocumentDirection);
applyDocumentDirection('ar');

export default i18n;
