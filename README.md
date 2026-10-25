# Building Radar Wiesn-Event 2026: landing page

> [!NOTE]
> **Retired.** The event took place on 22 September 2026 and this page is no longer in use (marked as killed on 25 Oct 2026). The code stays here as a reference, e.g. as a starting point for the next event page.
>
> Archive record: [Wiesn Event 2026](https://app.notion.com/p/4000383dc99081658067c981ad6ee02c) in the Jeane Experiments pipeline (Notion).

## What this was

The invitation and sign-up page for the **Building Radar Wiesn-Event 2026** in Munich on **Tuesday, 22 September 2026, 9:00–17:30**: a day at Building Radar with breakfast and talks on AI for the construction industry, followed by a visit to the Oktoberfest together.

Built by Mara Sophie Knop between June and July 2026. German and English versions (language toggle, `/en` for English).

## How it worked

- **Stack:** Next.js (App Router) + Tailwind. Animated cloth hero (`ClothHero.tsx`, `ClothScene.tsx`), landing content (`Landing.tsx`), all copy in `app/translations.ts`.
- **Registration:** `RegistrationForm.tsx` collected first name, last name, email, attending / not attending and consent (linking to the Building Radar privacy policy), and posted it straight to a **HubSpot form**. The registration list lives in HubSpot, not in this project.
- **Hosting:** prepared for **Webflow Cloud** (`webflow.json`, `wrangler.jsonc`, `open-next.config.ts`). A preview also ran on Netlify as `br-wiesn-event2026`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
