# Workspace Builder

Interactive workspace rental configurator for [Monis.rent](https://www.monis.rent) — Bali office equipment rentals.

Pick monitors, chairs, peripherals, and accessories to place on a CSS 3D diorama desk, then rent the whole setup with 48-hour delivery anywhere in Bali.

**Live:** [isandreas-workspace-builder.vercel.app](https://isandreas-workspace-builder.vercel.app)

---

## Features

- **Interactive Canvas** — CSS 3D diorama with 9 named slots (monitors, keyboard, lamp, chair, accessories, side unit, side box)
- **Product Catalog** — 63 real products across 8 categories with slot compatibility
- **Click-to-Place** — Select a slot, pick a product from the shelf, auto-placed
- **Inspector Panel** — Slides in to show product details, pricing, and removal
- **Rent Modal** — Radix Dialog checkout with summary table, form, and success state
- **Undo / Clear** — Full history stack with undo support
- **Framer Motion** — Item drop animations, floating hotspots, modal transitions
- **White Elegant Design** — Linen texture, Outfit + Cormorant Garamond fonts, terracotta accents

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@theme inline`) |
| Components | shadcn/ui, Radix UI (Dialog, Tooltip) |
| Animation | Framer Motion |
| Fonts | Outfit (sans), Cormorant Garamond (serif) |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Full-viewport layout wiring
│   ├── layout.tsx            # Font providers
│   └── globals.css           # Design system (@theme inline)
├── components/
│   ├── Canvas/
│   │   └── WorkspaceCanvas.tsx   # CSS 3D diorama + slot system
│   ├── Modal/
│   │   └── RentModal.tsx         # Checkout modal (Radix + Framer)
│   ├── ProductShelf.tsx          # Left sidebar product catalog
│   ├── ItemInspector.tsx         # Right panel product details
│   ├── FloatingToolbar.tsx       # Template / Undo / Clear toolbar
│   ├── RentSummaryBar.tsx        # Bottom rent CTA bar
│   └── ui/                       # DashedItemBox, ProductImage
├── data/
│   └── products.ts               # 63 products, 8 categories, SLOT_MAP
└── hooks/
    └── useWorkspaceStore.ts      # Central state (slots, history, pricing)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy

Deployed on [Vercel](https://vercel.com). Pushes to `main` trigger automatic deployments.

```bash
npx vercel --prod
```
