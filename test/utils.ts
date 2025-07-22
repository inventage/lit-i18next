import { i18next } from '../src/localized-helpers.js';

export const initializeTranslations = () =>
  i18next.init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          foo: 'bar',
        },
      },
      de: {
        translation: {
          foo: 'baz',
        },
      },
    },
  });
