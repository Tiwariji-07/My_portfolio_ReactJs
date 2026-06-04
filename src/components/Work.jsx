import { ArrowUpRight } from 'lucide-react'
import { MaskText } from './Reveal.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/portfolio.js'

export default function Work() {
  return (
    <section id="work" className="container-px mx-auto max-w-[1600px] py-24 sm:py-36">
      <div className="mb-14 flex items-end justify-between gap-6">
        <MaskText as="h2" text="Selected Work" className="display text-[clamp(2.5rem,8vw,7rem)]" />
        <span className="label hidden shrink-0 pb-2 text-muted sm:block">{projects.length} projects</span>
      </div>

      <div className="border-b border-line">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <article
              data-cursor
              className="group relative overflow-hidden border-t border-line"
            >
              <div className="absolute inset-0 translate-y-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" aria-hidden="true" />
              <div className="relative grid gap-4 px-1 py-8 transition-colors duration-500 group-hover:text-bg sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8 sm:py-10">
                <span className="label text-muted transition-colors group-hover:text-faint">
                  0{i + 1}
                </span>

                <div>
                  <h3 className="display text-[clamp(1.8rem,5vw,3.5rem)] leading-none">{p.title}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted transition-colors group-hover:text-bg/80">
                    {p.blurb}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted transition-colors group-hover:border-bg/30 group-hover:text-bg/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {p.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ul inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider transition-colors group-hover:text-accent"
                        >
                          {l.label}
                          <ArrowUpRight size={13} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-6">
                  <span className="label text-muted transition-colors group-hover:text-faint">{p.year}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
