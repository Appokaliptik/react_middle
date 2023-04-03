import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const ns = ['profile', 'translation', 'about', 'main', 'articles', 'articles_details'];
const supportedLngs = ['en', 'ru'];
const resources = ns.reduce((acc, n) => {
  supportedLngs.forEach((lng) => {
    // @ts-ignore
    if (!acc[lng]) acc[lng] = {};
    // @ts-ignore
    acc[lng] = {
      // @ts-ignore
      ...acc[lng],
      [n]: require(`../../../../public/locales/${lng}/${n}.json`),
    };
  });
  return acc;
}, {});

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'ru', // default language
    // debug: false,
    debug: __IS_DEV,

    defaultNS: 'translation',
    ns,
    // returnNull: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources,
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
