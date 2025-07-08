import { i18next } from '../src/localized-helpers';

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
