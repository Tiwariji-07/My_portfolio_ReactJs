import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons.jsx'
import { profile, socials, navLinks } from '../data/portfolio.js'

const social = [
  { icon: GithubIcon, label: 'GitHub', href: socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: socials.linkedin },
  { icon: WhatsappIcon, label: 'WhatsApp', href: socials.whatsapp },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-px mx-auto flex max-w-6xl flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="font-display text-xl font-bold text-content">
            {profile.name}
          </a>
          <p className="mt-2 max-w-xs text-sm text-muted">{profile.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {social.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-px mx-auto max-w-6xl py-5 text-center text-xs text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
