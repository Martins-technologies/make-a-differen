# Make A Difference — Frontend

React + Vite website for Make A Difference.

## Tech stack

- React 18, React Router 7
- Vite 6
- Tailwind CSS 3, Radix UI, lucide-react icons
- i18next (English / French)
- React Hook Form + Zod, TanStack Query, Axios

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

### Environment variables

| Variable        | Purpose                                  |
| --------------- | ---------------------------------------- |
| `VITE_API_URL`  | Base URL of the backend API              |
| `VITE_USE_MOCK` | Set to `true` to use mock data           |

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the dev server            |
| `npm run build`   | Production build to `dist/`     |
| `npm run preview` | Preview the production build    |
| `npm run lint`    | Lint `src/` with ESLint         |
| `npm run format`  | Format `src/` with Prettier     |

## Project structure

```
src/
  components/   UI primitives and page sections (components/sections/<page>/)
  pages/        Route-level pages
  routes/       Router setup
  data/         Static content and image/icon paths
  i18n/         Translations (locales/en, locales/fr)
  services/     API clients
  hooks/ context/ utils/ config/ styles/
public/         Images and icons served as-is
```

Page copy lives in `src/i18n/locales/*/translation.json`. Update both English and French when changing text.
