# Product Explorer

A product browsing app built with Next.js (App Router), React and TypeScript. It loads products from the public [Fake Store API](https://fakestoreapi.com), lets you search, filter and sort them, view product details and save favorites in the browser.

## Features

- Product grid fetched from `fakestoreapi.com`
- Search bar, category filter and sort selector
- Product detail page (`/products/[id]`)
- Favorites saved to `localStorage`
- Light/dark theme toggle
- Loading and error boundaries

## Tech stack

Next.js · React · TypeScript · Tailwind CSS · ESLint

## Project structure

```
src/app/page.tsx                 # product listing
src/app/products/[id]/page.tsx   # product detail
src/app/loading.tsx, error.tsx
src/components/                  # ProductGrid, ProductCard, SearchBar, CategoryFilter, SortSelect, FavoriteButton, ThemeToggle
src/lib/api.ts                   # Fake Store API client
src/lib/storage.ts               # favorites (localStorage)
src/types/product.ts
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
```

## Environment variables

None required.
## Screenshots

_Screenshots coming soon._

## License

No license file has been added to this repository yet.
