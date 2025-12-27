# HS coach Website

Modern marketing website for **HS coach** (luxury bus interior & exterior body manufacturer).

## Tech Stack

- **Next.js** (App Router)
- **React + TypeScript**
- **CSS** (`app/globals.css`)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Project Structure

```text
app/
  (site)/
    page.tsx              # Home
    services/page.tsx     # Services
    about/page.tsx        # About
    layout.tsx            # Navbar + Footer
  contact/
    page.tsx              # Contact (no footer)
    layout.tsx            # Navbar only
  globals.css             # Global styles
  layout.tsx              # Root layout

components/
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  SplitSection.tsx
  WorkSections.tsx
  Gallery.tsx
  InquiryForm.tsx
  ContactInfo.tsx

data/
  site.ts                 # Single source of truth for content + image paths

public/
  images/                 # Drop your images here (hero/ skins/ work/ illustrations/)
```

## Updating Content

Edit:

- `data/site.ts`

This file controls:

- Home/Services hero text and hero images
- Work gallery items (skins/work)
- Services list
- About text and stats
- Contact info (phone/email/address)

## Adding / Replacing Images

Place images under:

- `public/images/hero/`
- `public/images/skins/`
- `public/images/work/`
- `public/images/illustrations/`

Then update `imageSrc` in `data/site.ts`.

> The repo currently includes lightweight **SVG placeholders** so the site renders without broken images.

## Deployment

Build:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Credits

Designed, Developed and Deployed by **P6s**

- Visit: https://param.p6s.in
