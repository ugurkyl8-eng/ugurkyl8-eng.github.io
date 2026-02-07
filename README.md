# Replit.md

## Overview

This is **PadresStudios / Döner AI** — a Turkish AI assistant landing page and marketing website. The project showcases an upcoming AI product called "Döner AI" with a sleek, dark-themed design. It features a hero section with a chat demo, pricing cards, a scrolling model ticker, user reviews (with the ability to add new ones), FAQ accordion, and legal/privacy pages. The content is primarily in Turkish.

The app follows a full-stack monorepo pattern: a React SPA frontend served by an Express backend, with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
- **`client/`** — React frontend (Vite-bundled SPA)
- **`server/`** — Express 5 backend (API + static file serving)
- **`shared/`** — Shared types, schemas, and route definitions used by both client and server
- **`migrations/`** — Drizzle-generated database migrations
- **`script/`** — Build scripts (esbuild for server, Vite for client)

### Frontend
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side router)
- **Styling:** Tailwind CSS with CSS variables for theming. Strict black/dark theme throughout. Fonts: Outfit (headings), Inter/DM Sans (body).
- **UI Components:** shadcn/ui (new-york style) with Radix UI primitives. Extensive component library in `client/src/components/ui/`.
- **State/Data:** TanStack React Query for server state management
- **Forms:** React Hook Form with Zod resolvers
- **Animations:** Framer Motion for chat demo, pricing cards, review marquee, and model ticker
- **Icons:** Lucide React + react-icons (for social media icons)
- **Path aliases:** `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

### Backend
- **Runtime:** Node.js with Express 5
- **Language:** TypeScript, executed via `tsx` in development
- **API Pattern:** RESTful JSON API under `/api/` prefix
- **Dev Server:** Vite dev server middleware for HMR in development; static file serving in production
- **Build:** esbuild bundles server to `dist/index.cjs`; Vite builds client to `dist/public/`

### API Routes
Defined in `shared/routes.ts` as a typed contract object, used by both server handlers and client hooks:
- `POST /api/leads` — Create an email lead (newsletter signup)
- `GET /api/reviews` — List all reviews (ordered by newest)
- `POST /api/reviews` — Create a new review

### Database
- **Database:** PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM:** Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema** (`shared/schema.ts`):
  - `leads` table: `id` (serial PK), `email` (text), `created_at` (timestamp)
  - `reviews` table: `id` (serial PK), `name` (text), `content` (text), `rating` (integer, default 5), `created_at` (timestamp)
- **Migrations:** Use `npm run db:push` (drizzle-kit push) to sync schema to database
- **Connection:** `pg` Pool in `server/db.ts`

### Shared Layer
The `shared/` directory contains code used by both client and server:
- `schema.ts` — Drizzle table definitions and Zod insert schemas
- `routes.ts` — API route contract with paths, methods, input schemas, and response types

### Key Design Decisions
1. **Shared route contracts** — The `shared/routes.ts` file defines API routes as typed objects, ensuring client hooks and server handlers stay in sync. This avoids URL/type mismatches.
2. **Dark-only theme** — No light mode; CSS variables are set for a pure black background with white/gray foreground. This is intentional for the product's brand identity.
3. **Mock review fallback** — The `ReviewMarquee` component falls back to hardcoded mock reviews if the database has no reviews yet, ensuring the UI always looks populated.
4. **Toast for unavailable features** — Pricing "buy" buttons show toast notifications saying the feature isn't available yet, rather than linking to payment.

## External Dependencies

### Required Services
- **PostgreSQL Database** — Required. Must be provisioned and connection string set as `DATABASE_URL` environment variable. Used via `pg` Pool + Drizzle ORM.

### Key NPM Packages
- **Express 5** — HTTP server framework
- **Drizzle ORM + drizzle-kit** — Database ORM and migration tooling for PostgreSQL
- **Vite** — Frontend build tool and dev server
- **React 18** — UI framework
- **TanStack React Query** — Async state management
- **Framer Motion** — Animation library
- **shadcn/ui + Radix UI** — Component library primitives
- **Zod** — Schema validation (shared between client and server)
- **react-hook-form** — Form handling
- **wouter** — Client-side routing
- **connect-pg-simple** — PostgreSQL session store (installed but not actively used in current routes)

### Build Tools
- **tsx** — TypeScript execution for development
- **esbuild** — Server bundling for production
- **Tailwind CSS + PostCSS + Autoprefixer** — CSS processing

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)