import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#home" className="group flex items-baseline gap-2" aria-label={`${profile.name} — home`}>
          <span className="font-display text-xl font-semibold tracking-tight">Vivek Raj</span>
          <span className="hidden text-accent sm:inline">●</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.slice(1).map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`label transition-colors ${
                  active === link.id ? 'text-accent' : 'text-ink-soft hover:text-accent'
                }`}
              >
                <span className="text-faint">{link.num}</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-1 inline-flex items-center justify-center p-2 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <ul className="container-px mx-auto flex max-w-6xl flex-col py-2">
            {navLinks.slice(1).map((link) => (
              <li key={link.id} className="rule-soft first:border-t-0">
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-3 py-4 text-lg ${
                    active === link.id ? 'text-accent' : 'text-ink'
                  }`}
                >
                  <span className="label text-faint">{link.num}</span>
                  <span className="font-display">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
