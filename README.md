# Make A Difference

Canadian nonprofit website (MERN): courses, support requests, employment support, volunteering, donations, resources, events, and admin CMS.

## Prerequisites

- Node.js 20+
- MongoDB (local or Atlas)

## Installation

Use **two terminals** — dependencies install inside each app folder (nothing at repo root).

### Backend

```bash
cd backend
cp .env.example .env
# Edit .env with your values
npm install
npm run seed   # optional: admin user + sample data
npm run dev
```

API: `http://localhost:5000` — health check: `GET /api/v1/health`

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

App: `http://localhost:5173`

## Environment

- **frontend/.env.example** — `VITE_API_URL`, `VITE_USE_MOCK`
- **backend/.env.example** — database, JWT, CORS `CLIENT_URL`, email, Cloudinary, Stripe, etc.

## Folder layout

| Path | Purpose |
|------|---------|
| `frontend/` | React 18 + Vite, Tailwind, i18n, public site + admin UI |
| `backend/` | Express API, Mongoose models, `/api/v1` |
| `docs/` | Design tokens, API notes, page build status |

## Workflow: mockup → tokens → page

1. Receive page mockup from design.
2. Update **`frontend/src/styles/tokens.css`** (and verify on `/design-preview`).
3. Build or refine page sections in `frontend/src/pages/` and `components/sections/`.
4. Wire forms and lists to API when ready; update `docs/page-status.md`.

## Scripts

**Frontend:** `dev`, `build`, `preview`, `lint`, `format`

**Backend:** `dev`, `start`, `seed`, `test`, `lint`
