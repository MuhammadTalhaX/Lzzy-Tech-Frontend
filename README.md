# Lzzy Tech — Customer Storefront

A fresh, frontend-only Next.js storefront for a Pakistan-based computer peripherals and accessories shop.

## Requirements
- Node.js 20.9 or newer
- npm

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Scripts
- `npm run dev` — local development server
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm start` — serve production build

## Architecture
- `src/app` — App Router pages and global layout
- `src/components` — reusable layout, product, cart and catalogue components
- `src/data` — centralized mock product/category/brand data
- `src/store/cart-store.ts` — persisted client-side cart state
- `src/types` — shared TypeScript types
- `src/lib/api` — reserved for a future API integration boundary

## Demo catalogue
The catalogue is sample content. Product names, images, prices, specifications, ratings, discounts, and availability must be verified before production use. No brand partnership is implied.

## Frontend-only boundary
No backend, database, authentication, admin panel, real order submission, payment processing, email, or shipping integration is implemented. Checkout and contact forms only validate locally. They do not send or store submitted form data.

## Future backend integration
Set `NEXT_PUBLIC_API_URL` in `.env.local` when a separately developed API is ready. Replace the mock-data access layer deliberately; no real API calls are made in this phase. Keep API credentials and private secrets out of `NEXT_PUBLIC_` variables.

## Visual system
Finalized palette: Warm Ivory `#F5F3EE`, White `#FFFFFF`, Graphite `#252724`, Muted Olive `#7B8065`, Stone Gray `#E6E3DB`, Secondary Gray `#777970`, Secondary Surface `#EFEEE8`. Typography: Manrope and DM Sans.
