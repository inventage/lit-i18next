/**
 * @license
 * Copyright 2021 Weave B.V.
 * SPDX-License-Identifier: MIT License
 */
import type { ReactiveController, ReactiveControllerHost } from '@lit/reactive-element';
type Event = 'added' | 'initialized' | 'languageChanged' | 'loaded';
export type LocalizeOptions = {
    event?: Event | Event[];
};
export declare class LocalizeController implements ReactiveController {
    static readonly events: ReadonlyArray<Event>;
    readonly host: ReactiveControllerHost;
    private readonly events;
    private readonly localizeEventHandler;
    constructor(host: ReactiveControllerHost, options?: LocalizeOptions);
    hostConnected(): void;
    hostDisconnected(): void;
}
/**
 * Re-render the given LitElement whenever a new locale has set active.
 *
 * See also {@link localized} for the same functionality as a decorator.
 *
 * ```js
 * import { LitElement, html } from 'lit';
 * import { t, updateWhenLocaleChanges } from '@weavedev/lit-i18next';
 *
 * class MyElement extends LitElement {
 *   constructor() {
 *     super();
 *     updateWhenLocaleChanges(this);
 *   }
 *
 *   render() {
 *     return html`<b>${t('key.path')}</b>`;
 *   }
 * }
 */
export declare const updateWhenLocaleChanges: (host: ReactiveControllerHost, options?: LocalizeOptions) => void;
export {};
//# sourceMappingURL=localized-controller.d.ts.map