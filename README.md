# MuscleQuest website

The website for [MuscleQuest](https://musclequest.app), a free, offline-first workout tracker for Android. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), hosted on Cloudflare Pages.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm test             # unit tests (content sync, loaders, SEO helpers)
npm run build        # type check + static build to dist/
npm run check-links  # verify internal links and anchors in dist/
```

## Help and changelog content

The help guide and changelog come from the app repo (`constants/HelpData.ts`, `constants/WhatsNew.ts` and the Lingui `.po` files). After an app release:

```bash
npm run sync-content                       # expects the app at ../MuscleQuest
npm run sync-content -- --app-dir <path>   # or MUSCLEQUEST_APP_DIR=<path>
```

Commit the updated `src/content/help.json` and `src/content/changelog.json`.

## Screenshots

Screenshots live in `src/assets/screenshots/` and are wired up in `src/data/screenshots.ts`. To replace one, overwrite the file with the same name. If the file type changes (e.g. `.jpg` → `.png`), update its import. Capture them on the current app with realistic demo data (a few weeks of history, an active plan, some PRs and measurements), portrait, English UI:

| File | Screen | Should show | Used in |
|---|---|---|---|
| `home.png` | Home | Weekly goal strip with some days done, active plan workouts, measurements card | Hero, social preview image |
| `plan.png` | Plan overview or editor | Several workouts and a weekly schedule, ideally a superset | Plans |
| `workout.png` | Active workout | Mid-workout, pre-filled sets, rest timer running | Logging |
| `progression.png` | Exercise details | Performance chart, all-time PR, top sets | Progression |
| `stats.png` | Stats dashboard | Customised dashboard with muscle heatmap and weekly chart | Stats |
| `measurements.jpg` | Body measurements | A measurement chart over time, e.g. body weight (**currently a placeholder showing the wrong screen**) | Measurements |

Optional extras for later: plate calculator, friends.

After replacing `home.png`, regenerate the social preview image:

```bash
google-chrome --headless=new --hide-scrollbars --allow-file-access-from-files --window-size=1200,630 \
  --virtual-time-budget=4000 --screenshot=public/og-image.png "file://$PWD/scripts/og/og-image.html"
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=22`
- Analytics: Cloudflare Web Analytics, enabled on the Pages project (no code, no cookies)
