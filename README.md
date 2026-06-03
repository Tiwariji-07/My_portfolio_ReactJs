# Vivek Raj — Portfolio

A modern, responsive personal portfolio for **Vivek Raj**, Software Developer.
Built as a fast single-page site with a clean, professional design.

## Tech stack

- **[Vite](https://vitejs.dev/)** + **[React 19](https://react.dev/)** — fast dev server and build (replaces the deprecated Create React App)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — design system and styling
- **[Motion](https://motion.dev/)** — subtle, accessible scroll & hover animations
- **[lucide-react](https://lucide.dev/)** — icon set
- **[EmailJS](https://www.emailjs.com/)** — contact form delivery (no backend required)

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
    Navbar.jsx           # Sticky nav with active-section highlighting
    Hero.jsx             # Intro / landing
    About.jsx            # About + highlights
    Skills.jsx           # Categorized skills
    Projects.jsx         # Project cards
    Contact.jsx          # EmailJS contact form
    Footer.jsx           # Footer + socials
    Section.jsx          # Shared section shell
    Reveal.jsx           # Scroll-reveal animation wrapper
    BrandIcons.jsx       # Inline GitHub/LinkedIn/WhatsApp SVGs
public/                  # Static images (profile, project screenshots, favicon)
```

## Accessibility & performance notes

- Honours `prefers-reduced-motion`
- Keyboard-accessible navigation with a "skip to content" link and visible focus rings
- Semantic landmarks, labelled form fields, and `aria-live` form status
- Lazy-loaded project images and external links hardened with `rel="noopener noreferrer"`
