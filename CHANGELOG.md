# @inventage/lit-i18next

## 4.0.0

### Major Changes

- [`4a45615`](https://github.com/inventage/lit-i18next/commit/4a45615ea0b44cb830319c9139247424c799738b) Thanks [@peschee](https://github.com/peschee)! - **BREAKING**: The barrel export has been removed. Update all imports to use direct paths with `.js` extensions:

  ## Before

  ```typescript
  import { localized, t, i18next } from '@inventage/lit-i18next';
  ```

  ## After

  ```typescript
  import { localized } from '@inventage/lit-i18next/localized-decorator.js';
  import { t, i18next } from '@inventage/lit-i18next/localized-helpers.js';
  import { updateWhenLocaleChanges } from '@inventage/lit-i18next/localized-controller.js';
  ```

  All exports are now in their respective files:
  - `localized` → `localized-decorator.js`
  - `t`, `i18next` → `localized-helpers.js`
  - `updateWhenLocaleChanges`, `LocalizeController`, `LocalizeOptions` → `localized-controller.js`

## 3.0.3

### Patch Changes

- [`c90c1aa`](https://github.com/inventage/lit-i18next/commit/c90c1aa573eb2e023c20c356284cdbf835c61ca4) Thanks [@peschee](https://github.com/peschee)! - Fix module exports

## 3.0.2

### Patch Changes

- [`a2085ae`](https://github.com/inventage/lit-i18next/commit/a2085aea4defac186b6ae45499f66a60a798e56a) Thanks [@peschee](https://github.com/peschee)! - Fix exports to the code `import { i18next } from '@inventage/lit-i18next'` works as expected

## 3.0.1

### Patch Changes

- [`dd15fdc`](https://github.com/inventage/lit-i18next/commit/dd15fdc0e47f8eadf96e38f12e4e7c3b8e47e928) Thanks [@peschee](https://github.com/peschee)! - Release pipeline fix to add missing dist files

## 3.0.0

### Patch Changes

- [`9f6107e`](https://github.com/inventage/lit-i18next/commit/9f6107ef64e703094106e7dbf579a4a0d954fc51) Thanks [@peschee](https://github.com/peschee)! - New major release featuring the following changes:
  - Requires `i18next@>=23.0.0 <26.0.0`
  - Requires `@lit/reactive-element@^2`
  - Automated tests with all supported major versions of `i18next`
  - Automated releases

- [`9cba9f4`](https://github.com/inventage/lit-i18next/commit/9cba9f43879c630cae70184c65562dd36430bbdc) Thanks [@peschee](https://github.com/peschee)! - Add versioning script

## 3.0.0-next.2

### Patch Changes

- [`9cba9f4`](https://github.com/inventage/lit-i18next/commit/9cba9f43879c630cae70184c65562dd36430bbdc) Thanks [@peschee](https://github.com/peschee)! - Add versioning script
