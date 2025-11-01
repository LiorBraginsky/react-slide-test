# Features Layer

Business features layer.

## Purpose

A feature is a specific business function:
- Has clear responsibility
- Can be used in pages
- Contains UI + logic for a single feature

## Current Features

This project currently has one feature:

### `change-background/`
Background generation feature with progress tracking.

**Structure:**
```
change-background/
├── ui/
│   ├── ChangeBackground.tsx  # Main feature component
│   └── BackgroundItem.tsx    # Background item display
├── model/
│   └── useChangeBackground.ts # Feature logic and hooks
└── index.ts                   # Public exports
```

**Note:** State management for backgrounds is in `shared/store/useBackgroundsStore.ts` since it's shared across the app.

## Feature Structure Guidelines

When adding new features, follow this structure:

```
feature-name/
├── ui/                        # UI components
│   └── FeatureComponent.tsx
├── model/                     # Business logic
│   ├── useFeature.ts         # Hooks
│   └── store.ts              # Local state (if needed)
├── api/                       # API calls (if needed)
│   └── api.ts
└── index.ts                   # Public exports
```

## Rules

- Folder name = action: `change-background/`, `add-comment/`, `edit-profile/`
- Name in **lowercase** with dashes
- Feature should be **independent** and reusable
- Export only what's needed via `index.ts`

## Imports

Features can import from:
- ✅ `shared/` - shared components, utilities, global state
- ❌ `app/` - NO
- ❌ `pages/` - NO
- ❌ `features/` - NO (features should not depend on other features)

## State Management

- **Local state**: Keep in feature's `model/store.ts` if only this feature needs it
- **Global state**: Move to `shared/store/` if multiple features or pages need it
- Example: `useBackgroundsStore` is in `shared/store/` because it's used in multiple places
