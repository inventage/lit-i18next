---
'@inventage/lit-i18next': major
---

**BREAKING**: The barrel export has been removed. Update all imports to use direct paths with `.js` extensions:

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

