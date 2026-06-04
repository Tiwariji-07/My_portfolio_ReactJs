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
    <footer className="container-px mx-auto max-w-6xl pb-10">
      <div className="rule grid gap-8 pt-10 md:grid-cols-[1.5fr_1fr_auto] md:items-start">
        <div>
          <p className="font-display text-3xl">Vivek Raj</p>
          <p className="mt-2 max-w-xs text-muted">
            {profile.role} building AI systems out of {profile.location}.
          </p>
          <a href={`mailto:${profile.email}`} className="link-underline mt-4 inline-block text-ink">
            {profile.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-y-2">
            {navLinks.slice(1).map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="label text-muted transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 md:flex-col md:items-end">
          <div className="flex gap-4">
            {social.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-ink-soft transition-colors hover:text-accent">
                <Icon size={19} />
              </a>
            ))}
          </div>
          <a href="#home" className="label inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent" aria-label="Back to top">
            Top <ArrowUp size={13} />
          </a>
        </div>
      </div>

      <div className="rule-soft mt-8 flex flex-col justify-between gap-2 pt-6 sm:flex-row">
        <p className="label text-faint">© {year} Vivek Raj</p>
        <p className="label text-faint">Built with React · Vite · Tailwind</p>
      </div>
    </footer>
  )
}
