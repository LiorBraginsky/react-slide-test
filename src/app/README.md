# App Layer

Application configuration layer.

## Purpose

Contains application initialization and configuration:

- Root application component
- Routing setup
- Global providers (if needed)

## Current Structure

```
app/
├── App.tsx           # Root component with routing
└── README.md         # This file
```

### App.tsx

- Sets up React Router with `BrowserRouter`
- Defines application routes
- Currently has one route: `/` → `Home` page

## Rules

- **DOES NOT contain** business logic
- **DOES NOT contain** UI components
- Only composition and configuration
- Keeps routing simple and declarative

## Imports

App layer imports from:

- ✅ `pages/` - page components for routes
- ✅ `shared/` - shared utilities
- ❌ `features/` - NO (features are used in pages)

## Adding New Routes

When adding a new page, update `App.tsx`:

```tsx
import { NewPage } from '@/pages/new-page'

// In Routes:
;<Route path="/new-page" element={<NewPage />} />
```

## Future Enhancements

As the app grows, you might add:

- `providers.tsx` - Global context providers (theme, auth, etc.)
- `router.tsx` - Separate routing configuration
- Error boundaries
- Loading states
