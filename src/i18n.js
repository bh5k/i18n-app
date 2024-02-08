// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationCA from './locales/ca.json';
import translationHI from './locales/hi.json';
import translationBB from './locales/bubblegum/translation.json';
import translationES from './locales/es.json';


const resources = {
  en: { translation: translationEN, },
  fr: { translation: translationFR, },
  ca: { translation: translationCA, },
  hi: { translation: translationHI, },
  bb: { translation: translationBB, },
  es: { translation: translationES, },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
