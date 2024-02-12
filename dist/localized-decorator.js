/**
 * @license
 * Copyright 2021 Weave B.V.
 * SPDX-License-Identifier: MIT License
 */
import { updateWhenLocaleChanges } from './localized-controller';
/**
 * Class decorator to enable re-rendering the given LitElement whenever a new
 * active loaded locale has been set.
 *
 * See also {@link updateWhenLocaleChanges} for the same functionality without
 * the use of decorators.
 *
 * ```ts
 * import { LitElement, html } from 'lit';
 * import { customElement } from 'lit/decorators.js';
 * import { localized, t } from '@weavedev/lit-i18next';
 *
 * @localized()
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html`<b>${t('key.path')}</b>`;
 *   }
 * }
 * ```
 */
export const localized = (options) => (classOrDescriptor) => typeof classOrDescriptor === 'function'
    ? legacyLocalized(classOrDescriptor, options)
    : standardLocalized(classOrDescriptor, options);
const standardLocalized = ({ kind, elements }, options) => {
    return {
        kind,
        elements,
        finisher(clazz) {
            clazz.addInitializer(host => updateWhenLocaleChanges(host, options));
        },
    };
};
const legacyLocalized = (clazz, options) => {
    clazz.addInitializer(host => updateWhenLocaleChanges(host, options));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz;
};
//# sourceMappingURL=localized-decorator.js.map