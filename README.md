[![npm version](https://img.shields.io/npm/v/@inventage%2Flit-i18next.svg)](https://www.npmjs.com/package/@inventage/lit-i18next)
[![Downloads](http://img.shields.io/npm/dm/@inventage%2Flit-i18next.svg)](https://www.npmjs.com/package/@inventage/lit-i18next)
[![License](https://img.shields.io/github/license/inventage/lit-i18next.svg)](https://github.com/inventage/lit-i18next/blob/master/LICENSE)

# @inventage/lit-i18next

## Usage

### Install

```bash
npm install --save @inventage/lit-i18next
```

### Initialization

```typescript
import { i18next } from '@inventage/lit-i18next/localized-helpers.js';
import { LitElement } from 'lit';

class MyApp extends LitElment {
  i18nInit = i18next.init({
    ...options,
  });

  protected async performUpdate(): Promise<unknown> {
    await this.i18nInit;

    return super.performUpdate();
  }
}
```

### Implementation

#### TypeScript (Decorator)

```typescript
import { localized } from '@inventage/lit-i18next/localized-decorator.js';
import { t } from '@inventage/lit-i18next/localized-helpers.js';
import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
@localized({ ...options })
class MyElement extends LitElement {
  protected render(): TemplateResult {
    return html`<b>${t('path.to.translation_key')}</b>`;
  }
}
```

#### JavaScript

```javascript
import { t } from '@inventage/lit-i18next/localized-helpers.js';
import { updateWhenLocaleChanges } from '@inventage/lit-i18next/localized-controller.js';
import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this, {
      ...options,
    });
  }

  render() {
    return html`<b>${t('path.to.translation_key')}</b>!`;
  }
}
customElements.define('my-element', MyElement);
```

#### Options

Options can be passed optionally to the `localized` decorator or the `updateWhenLocaleChanges` callback.

```ts
type Event = 'added' | 'initialized' | 'languageChanged' | 'loaded';
type LocalizeOptions = {
  event?: Event | Event[]; // Event or events which will trigger a rerender
};
```

## License

This project is released under the [MIT license](LICENSE).
