import { ArrowUp } from 'lucide-react'
import { motion } from 'motion/react'
import { profile, navLinks, socials, asset } from '../data/portfolio.js'

const links = [
  { label: 'GitHub', href: socials.github },
  { label: 'LinkedIn', href: socials.linkedin },
  { label: 'LeetCode', href: socials.leetcode },
  { label: 'Résumé', href: asset(profile.resume) },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const name = `${profile.first} ${profile.last}.`

  return (
    <footer className="bg-ink text-bg">
      <div className="container-px mx-auto max-w-[1600px] pt-20">
        <div className="grid gap-10 border-b border-bg/15 pb-12 md:grid-cols-3">
          <div>
            <p className="label text-faint">Menu</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="ul text-xl">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-faint">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="ul text-xl">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="label text-faint">Say hi</p>
            <a href={`mailto:${profile.email}`} className="ul mt-4 inline-block text-xl">{profile.email}</a>
            <div className="mt-6 md:flex md:justify-end">
              <a href="#home" className="label inline-flex items-center gap-2 text-faint transition-colors hover:text-accent">
                Back to top <ArrowUp size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* giant animated name */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display w-full text-bg"
            style={{ fontSize: 'clamp(4rem,21vw,20rem)', lineHeight: 0.8 }}
          >
            {name}
          </motion.h2>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-bg/15 py-6 sm:flex-row">
          <p className="label text-faint">© {year} {profile.name}</p>
          <p className="label text-faint">Built with curiosity &amp; chai ✦</p>
        </div>
      </div>
    </footer>
  )
}
