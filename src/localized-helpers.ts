/**
 * @license
 * Copyright 2021 Weave B.V.
 * Copyright 2025 Inventage AG
 * SPDX-License-Identifier: MIT License
 */

import type { TFunction } from 'i18next';
import { default as i18next } from 'i18next';

// noinspection JSUnusedGlobalSymbols
export { i18next };
// noinspection JSUnusedGlobalSymbols
export const t: TFunction = i18next.t.bind(i18next);
