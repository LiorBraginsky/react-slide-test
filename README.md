# React Background Generator

A modern React application featuring AI-powered background generation with real-time progress tracking. Built with TypeScript, Tailwind CSS, and following Feature-Sliced Design architecture.

## Features

- **Background Generation**: Generate custom backgrounds with simulated AI processing
- **Real-time Progress**: Live progress indicator with estimated time remaining
- **Responsive Design**: Mobile-friendly sidebar interface
- **Modern UI**: Custom Italian Plate font with beautiful gradient animations
- **Type-Safe**: Full TypeScript support throughout the codebase
- **Production Ready**: Automated deployment to GitHub Pages

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Accessible component library built on Radix UI
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Feature-Sliced Design** - Scalable architecture pattern

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

This project follows [Feature-Sliced Design](https://feature-sliced.design/) architecture:

```
react-slide-test/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── app/                    # Application initialization
│   │   ├── App.tsx
│   │   └── README.md
│   ├── pages/                  # Route pages
│   │   ├── home/
│   │   └── README.md
│   ├── features/               # Business features
│   │   ├── change-background/  # Background generation feature
│   │   └── README.md
│   ├── shared/                 # Shared resources
│   │   ├── components/         # Reusable UI components
│   │   ├── shadcn/            # Shadcn UI components
│   │   ├── lib/               # Utilities
│   │   ├── store/             # Global state
│   │   └── README.md
│   ├── assets/                # Images and static files
│   │   └── fonts/             # Custom fonts
│   ├── fonts.css              # Font face declarations
│   ├── index.css              # Global styles
│   └── main.tsx               # Application entry point
├── components.json            # Shadcn UI configuration
├── tailwind.config.js         # Tailwind configuration
├── vite.config.ts             # Vite configuration
└── package.json
```

### Architecture Layers

- **app/** - Application setup, routing, and global providers
- **pages/** - Route components that compose features
- **features/** - Business logic features (e.g., background generation)
- **shared/** - Reusable UI components, utilities, and hooks

Each layer can only import from layers below it, ensuring clean dependencies.

## Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers a new deployment.

## Custom Font

The project uses **Italian Plate No2 Expanded** font with 20 variants (10 weights × 2 styles).

Example usage:
```tsx
<h1 className="font-italian-plate font-black">Heading</h1>
<p className="font-italian-plate font-light">Text</p>
```

Available weights: `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-demibold`, `font-bold`, `font-extrabold`, `font-black`

For detailed font configuration, see [Font Documentation](src/assets/fonts/italian-plate/README.md).

## Adding Shadcn UI Components

The project is configured with Shadcn UI. Add new components using:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Components will be added to `src/shared/shadcn/`
