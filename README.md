# Vivek Raj — Portfolio

A fast, responsive personal portfolio for **Vivek Raj**, Software Development
Engineer (AI systems — RAG, agents, MCP). A **bold minimal** design: off-white +
ink black, oversized grotesk type, one acid-lime accent, and rich interactive
motion.

## Tech stack

- **[Vite](https://vitejs.dev/)** + **[React 19](https://react.dev/)** — fast dev server and build (replaces the deprecated Create React App)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — design system and styling
- **[Motion](https://motion.dev/)** — load reveals, mask text, micro-interactions
- **[Lenis](https://lenis.darkroom.engineering/)** — smooth momentum scrolling
- **[lucide-react](https://lucide.dev/)** — UI icons (brand marks are inline SVGs)
- **[EmailJS](https://www.emailjs.com/)** — contact form delivery (no backend required)
- **Type**: [Archivo](https://fonts.google.com/specimen/Archivo) (display & body) · [Space Mono](https://fonts.google.com/specimen/Space+Mono) (labels)

### Interactions

Custom blend-mode cursor, magnetic buttons, an infinite capability marquee,
invert-on-hover work rows, scroll/word-mask reveals, and an animated giant-name
footer. Everything degrades gracefully and respects `prefers-reduced-motion`;
the custom cursor and magnetic effects are disabled on touch devices.

## Add your photo

The hero/portrait uses `public/vivek.png`. Drop a **transparent-background
cutout** there (PNG) and it appears automatically with the lime backdrop. Until
then it falls back to `public/me.jpeg`. To change the file name, edit
`profile.photo` in `src/data/portfolio.js`.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to ./dist
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Configuration

The contact form uses EmailJS. Sensible defaults are baked in, but you can
override them with environment variables. Copy `.env.example` to `.env` and set:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS public key is intended to be exposed client-side.

## Deployment (GitHub Pages)

The site auto-deploys to **GitHub Pages** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) on every push to
`master`.

One-time setup:

1. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
2. (Optional) Add `VITE_EMAILJS_*` repository secrets to override the contact-form
   defaults at build time.
3. Push to `master` (or run the workflow manually from the **Actions** tab).

The site is served from a subpath, so Vite's `base` is set to
`/My_portfolio_ReactJs/` in `vite.config.js`. Public assets are resolved through
`import.meta.env.BASE_URL` (see the `asset()` helper in
`src/data/portfolio.js`) so they work both locally and on Pages.

If you later move to a **custom domain** or a `username.github.io` user page,
build with `BASE_PATH=/`:

```bash
BASE_PATH=/ npm run build
```

## Editing content

All site content (bio, skills, projects, social links, contact details) lives in
a single file: [`src/data/portfolio.js`](src/data/portfolio.js). Update it there —
no component changes required.

## Project structure

```
index.html               # Vite entry HTML
src/
  main.jsx               # React entry
  index.css              # Tailwind import + theme tokens
  App.jsx                # Page composition
  data/portfolio.js      # Single source of truth for content
  components/
    SmoothScroll.jsx     # Lenis momentum scroll + anchor handling
    Cursor.jsx           # Custom blend-mode cursor
    Magnetic.jsx         # Magnetic hover wrapper
    Marquee.jsx          # Infinite capability marquee
    Reveal.jsx           # Scroll reveal + word-mask heading reveal
    Navbar.jsx           # Minimal nav + full-screen mobile menu
    Hero.jsx             # Oversized headline + portrait
    Work.jsx             # Selected work (invert-on-hover rows)
    About.jsx            # Personal story + toolkit + trajectory
    Contact.jsx          # Big CTA + EmailJS form
    Footer.jsx           # Animated giant-name footer
    BrandIcons.jsx       # Inline GitHub/LinkedIn/WhatsApp SVGs
public/                  # Static assets (vivek.png portrait, me.jpeg fallback, favicon)
```

## Accessibility & performance notes

- Honours `prefers-reduced-motion`
- Keyboard-accessible navigation with a "skip to content" link and visible focus rings
- Semantic landmarks, labelled form fields, and `aria-live` form status
- Lazy-loaded project images and external links hardened with `rel="noopener noreferrer"`
