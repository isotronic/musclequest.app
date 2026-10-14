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

Screenshots live in `src/assets/screenshots/` and are wired up in `src/data/screenshots.ts`. To replace one, overwrite the file with the same name. If the file type changes (e.g. `.png` → `.jpg`), update its import. Capture them on the current app with realistic demo data (a few weeks of history, an active plan, some PRs and measurements), portrait, English UI:

| File | Screen | Should show | Used in |
|---|---|---|---|
| `home.jpg` | Home | Weekly goal strip with some days done, the active plan's workouts | Hero, social preview image |
| `plan.jpg` | Plan editor | Workouts with sets and reps, ideally a superset | Plans |
| `workout.jpg` | Active workout | Mid-workout, pre-filled set, rest timer running | Logging |
| `workout-overview.jpg` | Workout overview | Exercise list with a PR badge and suggested reps | Download card |
| `progression.jpg` | Exercise details | Performance chart, all-time PR | Progression |
| `stats.jpg` | Stats | Insights, totals, workout history, PRs (or the Consistency and Training Split widgets) | Stats |
| `measurements.jpg` | Body measurements | Latest values and a chart over time | Measurements |
| `friend-profile.jpg` | Friend profile | A friend's shared PRs and activity | Friends |

Optional extra for later: plate calculator.

After replacing `home.jpg`, regenerate the social preview image:

```bash
google-chrome --headless=new --hide-scrollbars --allow-file-access-from-files --window-size=1200,630 \
  --virtual-time-budget=4000 --screenshot=public/og-image.png "file://$PWD/scripts/og/og-image.html"
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=22`
- Analytics: Cloudflare Web Analytics, enabled on the Pages project (no code, no cookies)
