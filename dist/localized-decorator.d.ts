/**
 * @license
 * Copyright 2021 Weave B.V.
 * SPDX-License-Identifier: MIT License
 */
import type { ReactiveElement } from '@lit/reactive-element';
import type { Constructor } from '@lit/reactive-element/decorators/base';
import { LocalizeOptions } from './localized-controller';
interface ClassDescriptor {
    kind: 'class';
    elements: ClassElement[];
    finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
}
interface ClassElement {
    kind: 'field' | 'method';
    key: PropertyKey;
    placement: 'static' | 'prototype' | 'own';
    initializer?: Function;
    extras?: ClassElement[];
    finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
    descriptor?: PropertyDescriptor;
}
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
export declare const localized: (options?: LocalizeOptions) => (classOrDescriptor: typeof ReactiveElement | ClassDescriptor) => any;
export {};
//# sourceMappingURL=localized-decorator.d.ts.map