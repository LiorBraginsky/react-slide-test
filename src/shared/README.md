# Shared Layer

Shared resources layer.

## Purpose

Everything that is used across different parts of the application:

- UI components without business logic
- Utilities and helpers
- Hooks
- API client
- Constants
- Types

## Structure

```
shared/
├── shadcn/              # Shadcn UI components
│   ├── sheet.tsx
│   ├── button.tsx
│   └── ...
│
├── components/          # Custom UI components
│   ├── badge/
│   ├── button/
│   ├── card/
│   └── ...
│
├── lib/
│   └── cn.ts            # Utility functions
│
├── hooks/               # Reusable React hooks
│
└── store/               # Global state (Zustand stores)
```

## Rules

- **DOES NOT contain** business logic
- **DOES NOT know** about pages, widgets, features
- Only **reusable** items
- UI components should be **as generic as possible**

## shadcn/ vs components/

**shadcn/** - auto-generated components from Shadcn UI:

```bash
npx shadcn add button
# Creates src/shared/shadcn/button.tsx
```

**Usage:**

```tsx
import { Sheet } from '@/shared/shadcn/sheet'
```

**components/** - your custom UI components:

```tsx
// badge/ui/Badge.tsx
export function Badge({ children }: BadgeProps) {
  return <div>{children}</div>
}

// Usage
import { Badge } from '@/shared/components/badge'
```

## Imports

Shared **CANNOT** import from:

- ❌ `app/`
- ❌ `pages/`
- ❌ `widgets/`
- ❌ `features/`

Shared can only import:

- ✅ Other files from `shared/`
- ✅ External libraries
