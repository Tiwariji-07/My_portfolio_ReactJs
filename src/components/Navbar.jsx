import { useEffect, useState } from 'react'
import { profile, navLinks, socials } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 200)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-transform duration-500 ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <nav className="container-px mx-auto flex h-20 max-w-[1600px] items-center justify-between">
          <a href="#home" className="display text-xl leading-none" aria-label={`${profile.name} — home`}>
            {profile.first}
            <span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`ul label transition-colors ${active === link.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:bg-accent hover:text-ink"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`h-0.5 w-7 bg-ink transition-transform duration-300 ${open ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-7 bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-7 bg-ink transition-transform duration-300 ${open ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-bg transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? '[clip-path:circle(150%_at_100%_0)]' : '[clip-path:circle(0%_at_100%_0)]'
        }`}
      >
        <div className="container-px mx-auto flex h-full max-w-[1600px] flex-col justify-center">
          <ul className="space-y-2">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="display block text-6xl text-ink"
                  style={{ fontSize: 'clamp(3rem,15vw,6rem)' }}
                >
                  <span className="label mr-3 align-top text-muted">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex gap-6">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="label text-muted">GitHub</a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="label text-muted">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="label text-muted">Email</a>
          </div>
        </div>
      </div>
    </>
  )
}
