# Italian Plate No2 Expanded Font

This directory contains all font files for the Italian Plate No2 Expanded typeface (20 variants total).

## Available Weights

| Weight           | Normal | Italic |
| ---------------- | ------ | ------ |
| Thin (100)       | ✓      | ✓      |
| Ultralight (200) | ✓      | ✓      |
| Extralight (250) | ✓      | ✓      |
| Light (300)      | ✓      | ✓      |
| Regular (400)    | ✓      | ✓      |
| Medium (500)     | ✓      | ✓      |
| Demibold (600)   | ✓      | ✓      |
| Bold (700)       | ✓      | ✓      |
| Extrabold (800)  | ✓      | ✓      |
| Black (900)      | ✓      | ✓      |

## Configuration

The font is configured in:

- `src/fonts.css` - All @font-face declarations
- `tailwind.config.js` - Font family configuration

## Usage in Components

**Use `font-italian-plate` with Tailwind's weight utilities:**

```tsx
<h1 className="font-italian-plate font-black">Heading</h1>
<p className="font-italian-plate font-light">Text</p>
<em className="font-italian-plate font-medium italic">Italic</em>
```

## Available Tailwind Utilities

### Font Family

```css
font-italian-plate          /* Sets font-family to Italian Plate */
```

### Font Weights (use with font-italian-plate)

```css
font-thin          /* 100 */
font-extralight    /* 200 - also font-ultralight */
font-light         /* 300 */
font-normal        /* 400 */
font-medium        /* 500 */
font-demibold      /* 600 */
font-bold          /* 700 */
font-extrabold     /* 800 */
font-black         /* 900 */
```

### Examples

```tsx
// All weights
<p className="font-italian-plate font-thin">Thin text</p>
<p className="font-italian-plate font-ultralight">Ultralight text</p>
<p className="font-italian-plate font-extralight">Extralight text</p>
<p className="font-italian-plate font-light">Light text</p>
<p className="font-italian-plate font-normal">Regular text</p>
<p className="font-italian-plate font-medium">Medium text</p>
<p className="font-italian-plate font-demibold">Demibold text</p>
<p className="font-italian-plate font-bold">Bold text</p>
<p className="font-italian-plate font-extrabold">Extrabold text</p>
<p className="font-italian-plate font-black">Black text</p>

// With italic
<p className="font-italian-plate font-bold italic">Bold Italic</p>
```
