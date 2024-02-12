/**
 * @license
 * Copyright 2021 Weave B.V.
 * SPDX-License-Identifier: MIT License
 */
import { default as i18next } from 'i18next';
export class LocalizeController {
    constructor(host, options) {
        this.localizeEventHandler = () => this.host.requestUpdate();
        this.host = host;
        const events = (options === null || options === void 0 ? void 0 : options.event) !== undefined ? options.event : LocalizeController.events;
        this.events = typeof events === 'string' ? [events] : events;
    }
    hostConnected() {
        for (const event of this.events) {
            if (event == 'initialized' && i18next.isInitialized)
                continue;
            i18next.on(event, this.localizeEventHandler);
        }
    }
    hostDisconnected() {
        for (const event of this.events) {
            i18next.off(event, this.localizeEventHandler);
        }
    }
}
LocalizeController.events = ['languageChanged'];
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
export const updateWhenLocaleChanges = (host, options) => host.addController(new LocalizeController(host, options));
//# sourceMappingURL=localized-controller.js.map