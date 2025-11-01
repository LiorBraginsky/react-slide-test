# Pages Layer

Route pages layer.

## Purpose

Each folder = one application page (route).

A page:
- Composes widgets and features
- Has minimal own logic
- Responsible for specific page layout

## Page Structure

```
home/
├── Home.tsx              # Page component
└── index.ts              # Exports
```

Or for larger pages:
```
home/
├── ui/
│   └── HomePage.tsx      # Page UI
├── model/
│   └── useHomePage.ts    # Page logic (optional)
└── index.ts              # Exports
```

## Naming Rules

- Folder names **lowercase**: `home/`, `about/`, `user-profile/`
- Component names **PascalCase**: `HomePage.tsx`, `Home.tsx`

## Imports

Pages can import from:
- ✅ `widgets/` - complex blocks
- ✅ `features/` - business features
- ✅ `shared/` - shared components
- ❌ `app/` - NO
- ❌ `pages/` - NO (pages don't import other pages)
