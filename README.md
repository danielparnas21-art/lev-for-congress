# Lev Parnas for Congress — Campaign Website

Next.js 16 + Tailwind v4 site for the Lev Parnas for Congress campaign (Independent, Florida's 27th District, 2026).

---

## 1. Running it on your computer

You need [Node.js](https://nodejs.org) v20 or newer installed. After that, open a terminal in this folder and run:

```bash
npm install      # one-time, installs dependencies
npm run dev      # starts the dev server
```

Open <http://localhost:3000> in your browser. The page auto-reloads when you change a file.

To stop the server, press `Ctrl + C` in the terminal.

---

## 2. Where to edit the text

**Almost every word on the site lives in one file:** [`lib/content.ts`](lib/content.ts).

Open it in any text editor (VS Code recommended). You'll see clearly-labelled sections:

| Edit this | To change... |
| --- | --- |
| `hero` | The big headline + sub-paragraph on the homepage |
| `homeStoryTeaser` | The "Lev's Story" section on the homepage |
| `issues` | The five policy positions (homepage + `/platform`) |
| `pullQuotes` | The featured quotes shown across the site |
| `story` | The long bio on the `/story` page |
| `donateCopy` | Headline + subhead on the `/donate` page |
| `press.articles` | The press coverage list on `/press` |
| `announcement` | The thin bar at the top — set `show: false` to hide it |
| `site` | Title, description, social media links, contact emails |

Save the file, and the running site updates immediately. No build step needed during development.

---

## 3. Replacing placeholders before launch

Search the project for `TODO` to find every spot that needs real campaign content. The key ones:

1. **Hero portrait photo** (`app/page.tsx`): swap the dark navy `<div>` for a real `<Image>` of Lev. Drop the image in `public/images/` and reference it.
2. **Book cover** (`app/press/page.tsx`): same pattern.
3. **Press article URLs**: add real coverage from the announcement onward in `lib/content.ts > press.articles`.
4. **Social media handles**: confirm in `lib/content.ts > site.social`.
5. **Contact emails**: `lib/content.ts > site.contact`.
6. **FEC committee name**: `lib/content.ts > site.fecDisclaimer` — must match the legal committee name filed with the FEC.
7. **Domain**: `lib/content.ts > site.url`.

---

## 4. Hooking up real services at launch

Three things are currently stubs that need real credentials:

### Square (donation processing)

The donate form structure is FEC-compliant and ready. To make it actually charge cards:

1. Create a Square developer account at <https://developer.squareup.com>.
2. Create a `.env.local` file in the project root with:
   ```
   SQUARE_APPLICATION_ID=...
   SQUARE_LOCATION_ID=...
   SQUARE_ACCESS_TOKEN=...
   ```
3. `npm install react-square-web-payments-sdk`.
4. Replace the placeholder in [`components/donate-form.tsx`](components/donate-form.tsx) (the section labelled "Square Web Payments SDK") with the real `<PaymentForm>` from that package.
5. Update [`app/api/donate/route.ts`](app/api/donate/route.ts) to call Square's `/v2/payments` endpoint with the card nonce.

**Required before going live:**
- Confirm the campaign's FEC committee is filed (Form 1).
- Have an attorney review the attestation copy and FEC compliance flow.
- Verify the per-election contribution limit currently in [`lib/fec.ts`](lib/fec.ts) against <https://www.fec.gov> for the active cycle.

### Email capture & volunteer signups

[`app/api/subscribe/route.ts`](app/api/subscribe/route.ts) and [`app/api/volunteer/route.ts`](app/api/volunteer/route.ts) currently just log to the server console. Pick a provider (Action Network, Mailchimp, NGP VAN are common) and replace each handler with a call to that provider's API.

---

## 5. Deploying to Vercel (free, easy)

1. Push this folder to a GitHub repository.
2. Go to <https://vercel.com/new> and import the repo.
3. Vercel auto-detects Next.js — accept the defaults and click Deploy.
4. Add the same env vars from step 4 above in the Vercel dashboard (Project → Settings → Environment Variables).
5. Point `levparnas.org` DNS at the Vercel deployment.

Vercel rebuilds on every push to `main`. The friend who handles deployment can edit content via GitHub directly without ever touching the dev server.

---

## 6. Project map (where things live)

```
app/
├── layout.tsx          # Site shell — fonts, nav, footer
├── page.tsx            # Homepage
├── story/page.tsx      # /story — bio + timeline
├── platform/page.tsx   # /platform — issues
├── donate/page.tsx     # /donate — donation funnel
├── join/page.tsx       # /join — email + volunteer signup
├── press/page.tsx      # /press — news + book
└── api/
    ├── donate/route.ts     # Stub — replace with Square
    ├── subscribe/route.ts  # Stub — replace with email provider
    └── volunteer/route.ts  # Stub — replace with CRM

components/
├── nav.tsx
├── footer.tsx
├── sticky-donate-bar.tsx   # Mobile only
├── email-capture.tsx
├── volunteer-form.tsx
└── donate-form.tsx          # FEC-compliant donation form

lib/
├── content.ts           # ALL THE COPY — edit this for text changes
└── fec.ts               # FEC constants, contribution limit, state list

app/globals.css          # Design tokens (colors, fonts, button styles)
```

---

## 7. Brand quick reference

- **Colors:** navy `#0a1628`, cream `#f5f1e8`, crimson `#b91c2a`
- **Fonts:** Playfair Display (headlines), Inter (body)
- All defined in [`app/globals.css`](app/globals.css) — change them once there, the whole site updates.
