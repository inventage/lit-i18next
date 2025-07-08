import { expect, fixture, html } from '@open-wc/testing';
import { customElement } from 'lit/decorators/custom-element.js';
import { LitElement } from 'lit';

import { updateWhenLocaleChanges } from '../src/localized-controller';
import { i18next, localized, t } from '../src/lit-i18next';

@localized()
@customElement('test-element')
class TestElement extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  override render() {
    return html`${t('foo')}`;
  }
}

describe('@localized', () => {
  before(async () => {
    await i18next.init({
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
  });

  it('re-renders when language changes', async () => {
    const el: TestElement = await fixture(html` <test-element></test-element>`);
    await expect(el).shadowDom.to.equal('bar');
    await i18next.changeLanguage('de');
    await expect(el).shadowDom.to.equal('baz');
  });
});
