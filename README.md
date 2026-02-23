# Valaidhalam – Landing Page

A premium, modern landing page for **Valaidhalam** tech services company, built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | Framework (App Router) |
| React | 18 | UI Library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.408 | Icons |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
valaidhalam/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with font setup
│   └── page.tsx             # Main page composition
├── components/
│   ├── Navbar.tsx           # Floating glassmorphism navbar
│   ├── Hero.tsx             # Gradient wave hero section
│   ├── Services.tsx         # Three animated service cards
│   ├── About.tsx            # Two-column about section
│   ├── Process.tsx          # 4-step horizontal process
│   ├── CTA.tsx              # Call-to-action with glow
│   └── Footer.tsx           # Clean footer with socials
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind + custom animations
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Features

### Design
- 🎨 **Blue + White** SaaS color theme with soft gradients
- 🪟 **Glassmorphism** navbar with blur + transparency
- 🔵 **Rounded cards** (12–28px radius throughout)
- 🌊 **Animated SVG waves** in hero section
- ✨ **Gradient orbs** with floating motion

### Animations (Framer Motion)
- **Navbar** – slides down with spring bounce on load
- **Hero** – staggered text fade-up sequence
- **Services** – scroll-triggered staggered card reveals
- **About** – slide-in from left/right on scroll
- **Process** – step connector line draws on scroll
- **CTA** – pulsing glow orb animation
- **Footer** – fade-in on scroll

### Performance
- Google Fonts loaded via `next/font` (zero layout shift)
- All scroll animations use `useInView` with `once: true`
- Passive scroll event listeners in Navbar

---

## Customization

### Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --blue-deep: #04112b;
  --blue-bright: #1d4ed8;
  /* ... */
}
```

### Content
- **Navbar links**: `components/Navbar.tsx` → `navLinks` array
- **Services**: `components/Services.tsx` → `services` array
- **Process steps**: `components/Process.tsx` → `steps` array
- **Contact email**: `components/CTA.tsx` → `href` on anchor tag
- **Footer links**: `components/Footer.tsx` → `footerLinks` object

### Fonts
Change fonts in `app/layout.tsx` — currently using **Syne** (headings) + **DM Sans** (body).

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Or push to GitHub and connect to Vercel dashboard.

---

## License

MIT © Valaidhalam
