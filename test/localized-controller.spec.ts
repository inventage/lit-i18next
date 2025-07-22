import { expect, fixture, html } from '@open-wc/testing';
import { customElement } from 'lit/decorators/custom-element.js';
import { LitElement } from 'lit';

import { updateWhenLocaleChanges } from '../src/localized-controller.js';
import { i18next, t } from '../src/localized-helpers.js';
import { initializeTranslations } from './utils.js';

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

describe('localized-controller', () => {
  before(async () => {
    await initializeTranslations();
  });

  it('re-renders when language changes', async () => {
    const el: TestElement = await fixture(html` <test-element></test-element>`);
    await expect(el).shadowDom.to.equal('bar');
    await i18next.changeLanguage('de');
    await expect(el).shadowDom.to.equal('baz');
  });
});
