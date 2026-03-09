# hammadCodes Next.js Rebuild — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the hammadCodes static portfolio as a modern Next.js app with updated Shopify-only content and fresh design.

**Architecture:** Next.js 14 App Router with Tailwind CSS. Single-page scrolling layout with section components. Hidden `/resume` route serving the existing PDF. No external form service — contact section links to email/socials directly.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, `react-type-animation` (typed text effect), `lucide-react` (icons)

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: Next.js project in a new `next-app/` directory (will be moved to root later)

**Step 1: Create Next.js app with Tailwind**

Run:
```bash
cd /Users/hammad/Documents/Work-freelancing/hammadCodes/hammadCodes
npx create-next-app@latest next-app --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*" --use-npm
```

**Step 2: Install dependencies**

Run:
```bash
cd next-app
npm install react-type-animation lucide-react
```

**Step 3: Copy static assets**

Copy the existing assets into the Next.js `public/` directory:
```bash
cp ../logo.png public/logo.png
cp ../static/media/me.3bcd718c.jpg public/me.jpg
cp ../static/media/hammad_resume.pdf public/hammad_resume.pdf
cp ../static/media/avatar-1.9277ecea.png public/avatar-1.png
cp ../static/media/avatar-2.75d8f23e.png public/avatar-2.png
cp ../static/media/avatar-3.d6c9b46f.png public/avatar-3.png
cp ../static/media/avatar-4.f7fb7ed7.png public/avatar-4.png
cp ../static/media/background_3.c57647f5.jpg public/background.jpg
cp ../static/media/upwork.6f20d0da.svg public/upwork.svg
```

**Step 4: Commit**

```bash
git add next-app/
git commit -m "chore: scaffold Next.js project with dependencies and assets"
```

---

### Task 2: Global Layout & Tailwind Theme

**Files:**
- Modify: `next-app/app/layout.tsx`
- Modify: `next-app/app/globals.css`
- Modify: `next-app/tailwind.config.ts`

**Step 1: Configure Tailwind theme**

In `tailwind.config.ts`, extend the theme with project colors:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f4f4f4",
        accent: "#f9ab00",
        "accent-red": "#ef4035",
      },
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 2: Set up globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0a0a;
  color: #f4f4f4;
}
```

**Step 3: Set up layout.tsx**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hammad | Shopify Expert & Developer",
  description:
    "Hammad — Shopify expert with 6+ years of experience in Shopify theme development, app development, and store setup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: configure Tailwind theme, globals, and layout"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `next-app/components/Navbar.tsx`

**Step 1: Create Navbar**

Client component with smooth-scroll links. Dark background, logo on left, nav links on right. Mobile hamburger menu.

Links: About, Services, Testimonials, Contact

Logo: `/logo.png`

**Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar component with mobile menu"
```

---

### Task 4: Hero Section

**Files:**
- Create: `next-app/components/Hero.tsx`

**Step 1: Create Hero**

Client component using `react-type-animation`. Full viewport height. Background image (`/background.jpg`) with dark overlay.

Headline: "Shopify Expert"
Typed text cycling: "Shopify Theme Developer", "Shopify 2.0 Specialist", "Liquid Expert", "Store Migration Specialist"
CTA button: "Let's Talk" scrolling to #contact

**Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with typed animation"
```

---

### Task 5: About Section

**Files:**
- Create: `next-app/components/About.tsx`

**Step 1: Create About**

Photo on left (`/me.jpg`), text on right. Responsive — stacks on mobile.

Updated bio text (6+ years, top-rated on Upwork, Shopify-only focus). Clean paragraph format, no read-more/less.

Key points to include:
- Top-rated certified developer on Upwork
- 6+ years of Shopify experience (since 2020)
- Shopify theme development from scratch
- Custom functionality, Shopify 2.0 features
- Cost-effective, agile, on-time delivery

**Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat: add About section with updated bio"
```

---

### Task 6: Services Section

**Files:**
- Create: `next-app/components/Services.tsx`

**Step 1: Create Services**

3 cards in a row (stacking on mobile):

1. **Shopify Theme Development** — Custom themes, Shopify 2.0, PSD/Figma to Liquid, theme customization
2. **Shopify App Development** — Custom Shopify apps, Node.js, React, API integrations
3. **Store Setup & Migration** — Store setup, platform migration to Shopify, payment gateways, shipping, checkout

Each card: icon (from lucide-react), title, description. Dark cards with amber accent border-bottom on hover.

**Step 2: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: add Services section with 3 Shopify cards"
```

---

### Task 7: Testimonials Section

**Files:**
- Create: `next-app/components/Testimonials.tsx`

**Step 1: Create Testimonials**

Simple carousel/slider (CSS-only or minimal JS, no heavy library). Auto-rotate with manual navigation dots.

4 testimonials from original site:
1. **Patrice L.** — "Hammad was a true pleasure to work with..."
2. **Rashe S.** — "Highly responsive contractor..."
3. **Monica C.** — "This is my second visit with him..."
4. **Asad A.** — "Engr. Hammad is very professional..."

Avatar images: `/avatar-1.png` through `/avatar-4.png`

**Step 2: Commit**

```bash
git add components/Testimonials.tsx
git commit -m "feat: add Testimonials carousel section"
```

---

### Task 8: Contact Section

**Files:**
- Create: `next-app/components/Contact.tsx`

**Step 1: Create Contact**

Heading: "Get In Touch"
Subtext: "Have a Shopify project in mind? Let's talk."

Display email + social links (LinkedIn, GitHub, Twitter) as clickable icons/buttons. No form.

Social links:
- LinkedIn: https://www.linkedin.com/in/hammadCodes
- GitHub: https://github.com/hammadCodes
- Twitter: https://www.twitter.com/hammadCodes

**Step 2: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: add Contact section with social links"
```

---

### Task 9: Footer & Fixed Social Sidebar

**Files:**
- Create: `next-app/components/Footer.tsx`
- Create: `next-app/components/SocialSidebar.tsx`

**Step 1: Create Footer**

Minimal footer: social links + "Copyright 2026 Hammad | All Rights Reserved"

**Step 2: Create SocialSidebar**

Fixed position right sidebar with LinkedIn, GitHub, Twitter icons. Visible on desktop, hidden on mobile.

**Step 3: Commit**

```bash
git add components/Footer.tsx components/SocialSidebar.tsx
git commit -m "feat: add Footer and fixed SocialSidebar"
```

---

### Task 10: Hidden Resume Route

**Files:**
- Create: `next-app/app/resume/page.tsx`

**Step 1: Create resume page**

Route `/resume` that embeds the PDF (`/hammad_resume.pdf`) in a full-page iframe. Not linked from navigation.

**Step 2: Commit**

```bash
git add app/resume/page.tsx
git commit -m "feat: add hidden /resume route serving PDF"
```

---

### Task 11: Assemble Main Page

**Files:**
- Modify: `next-app/app/page.tsx`

**Step 1: Compose all sections**

Import and render all components in order:
1. Navbar
2. Hero
3. About
4. Services
5. Testimonials
6. Contact
7. Footer
8. SocialSidebar

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble main page with all sections"
```

---

### Task 12: Google Analytics

**Files:**
- Modify: `next-app/app/layout.tsx`

**Step 1: Add GA script**

Add the Google Analytics tag (G-PYD80ZMLS5) using Next.js `<Script>` component from `next/script`.

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Google Analytics tracking"
```

---

### Task 13: Verify & Clean Up

**Step 1: Run dev server and verify all sections**

```bash
cd next-app && npm run dev
```

Check: all sections render, smooth scroll works, typed animation works, mobile responsive, /resume route works.

**Step 2: Build to verify no errors**

```bash
npm run build
```

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final cleanup and verify build"
```
