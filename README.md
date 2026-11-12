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

## Languages

The site is in English (at `/`) and German (at `/de/`). Page bodies live in `src/views/`; `src/pages/` and `src/pages/de/` are one-line wrappers that pass the locale. Copy comes from:

- `src/i18n/en.json` and `de.json`: navigation, footer and page chrome (a test checks both have the same keys)
- `src/content/home/en.ts` and `de.ts`: the home page
- `src/views/DeleteAccountPage.astro`: its own copy for both languages
- `src/content/help.json` and `changelog.json`: synced from the app's catalogs (below), all four languages

German copy uses the app's voice and terms (du, and the button names from the app's German UI). The privacy policy is English only; German pages link to it as "Datenschutzerklärung (Englisch)". The German 404 is moved to `dist/de/404.html` after the build, since Cloudflare Pages serves the nearest `404.html`. Spanish and French: add the locale to `SITE_LOCALES` in `src/i18n/ui.ts`, a dictionary, a home content file, the wrappers, the sitemap `i18n` map and the 404 hook in `astro.config.mjs`.

## Help and changelog content

The help guide and changelog come from the app repo (`constants/HelpData.ts`, `constants/WhatsNew.ts` and the Lingui `.po` files). After an app release:

```bash
npm run sync-content                       # expects the app at ../MuscleQuest
npm run sync-content -- --app-dir <path>   # or MUSCLEQUEST_APP_DIR=<path>
```

Commit the updated `src/content/help.json` and `src/content/changelog.json`.

## Screenshots

Screenshots live in `src/assets/screenshots/` and are wired up by file name in `src/data/screenshots.ts`. To replace one, overwrite the file with the same name. If the file type changes (e.g. `.png` → `.jpg`), update its import. Capture them on the current app with realistic demo data (a few weeks of history, an active plan, some PRs and measurements), portrait, English UI. For the German pages, put captures of the app in German in `src/assets/screenshots/de/` with the same file names; any file missing there falls back to the English one. The app repo's store-screenshot tool (`docs/store-screenshots/`) takes the same German captures in its `src/de/`.

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
| `coach-builder.png` | Coach app: plan builder, a client plan with a block | Three panes: exercise picker, workout strip with 3 to 4 workouts, open workout with a superset and set targets; the block's week tabs visible | Coach hero, coach social preview image |
| `coach-block-weeks.png` | Coach app: plan builder, block weeks | Week-by-week set targets for one exercise with a deload week marked, or the template with a muscle slot in the picker | Coach features 1 |
| `coach-client-view.png` | Coach app: client page, a completed workout | Set-by-set view with effort and a note, and the weekly volume or PR chart on the same screen | Coach features 2 |
| `coach-suggestions.png` | Coach app: suggestions queue | Two or three pending progression suggestions with accept, edit and reject | Coach features 3 |
| `coach-library.png` | Coach app: exercise library | Grid of exercises with stills, a muscle filter active, one custom exercise visible | Coach features 4 |
| `phone-sharing.png` | Phone: "Sharing with your trainer" settings | What is shared, since when, pause and disconnect visible | Coach page, for your clients 2 |

The coach page also reuses `workout.jpg` and `stats.jpg` (for your clients 1 and 3). The six coach files are flat placeholders until the owner captures them with the demo organisation (spec 09, "Screenshots"): web shots at 1440 by 900 without browser chrome, the phone shot portrait at 1080 by 2400, English UI.

Optional extra for later: plate calculator.

After replacing `home.jpg`, regenerate the social preview image:

```bash
google-chrome --headless=new --hide-scrollbars --allow-file-access-from-files --window-size=1200,630 \
  --virtual-time-budget=4000 --screenshot=public/og-image.png "file://$PWD/scripts/og/og-image.html"
```

After replacing `coach-builder.png`, regenerate the coach page's social preview the same way:

```bash
google-chrome --headless=new --hide-scrollbars --allow-file-access-from-files --window-size=1200,630 \
  --virtual-time-budget=4000 --screenshot=public/og-coach.png "file://$PWD/scripts/og/og-coach.html"
```

## Coach page

`/coach/` and `/de/coach/` (`src/views/CoachPage.astro`, copy in `src/content/coach/`) are the landing page for MuscleQuest Coach (spec 09 in the app repo). The request form posts to the coach web app's `/api/access-requests` route. Unlike the app pages, the German coach copy uses Sie (trainers are professional contacts).

To try the form locally, run the local Supabase stack (`npm run db:start` in the app repo) and the coach app (`npm run dev` in `../musclequest-coach`, port 5173), then start this site against them with Cloudflare's always-pass Turnstile test key:

```bash
PUBLIC_COACH_API_URL=http://localhost:5173/api/access-requests \
PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA npm run dev
```

### Launch gate

The page stays unpublished (`noindex`) until a trainer can be onboarded end to end: the coach app on `coach.musclequest.app` and the phone side of coaching in a store release of the app. Before merging:

1. Replace the placeholder screenshots (`coach-*.png`, `phone-sharing.png`) by file name, and regenerate `public/og-coach.png` (above).
2. Review the German body copy in `src/content/coach/de.ts`.
3. Publish the access request section of the privacy policy.
4. Turn indexing on: remove the `noindex` attribute from `<BaseLayout>` in `src/views/CoachPage.astro`, and remove the `/coach/` exclusion from the sitemap `filter` in `astro.config.mjs`.
5. Merge. Afterwards, turn `workers_dev` off in the coach repo's `wrangler.jsonc`.

### Campaign links

Each campaign gets a short path in `public/_redirects`, one line per campaign:

```
/go/flyer      /coach/?src=flyer      302
```

The `/go/` path shows up as its own path in Cloudflare Web Analytics (visits per campaign), and the `src` value is stored with each access request (requests per campaign). A source is lowercase letters, digits and hyphens, at most 40 characters; anything else is dropped by the form. `/de/go/<source>` sends any source to the German page. Point QR codes at the short path, for example `https://musclequest.app/go/flyer`: it is shorter to scan and keeps working if the page moves. `npm test` checks every line: the source must pass the form's rule and must equal the `/go/` path segment (`/go/flyer` sends `src=flyer`), so the analytics path and the stored source name the same campaign. The link check checks that each target page exists.

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION=22`
- Analytics: Cloudflare Web Analytics, enabled on the Pages project (no code, no cookies)
