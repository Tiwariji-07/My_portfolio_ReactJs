import { ArrowUpRight } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <Section
      id="work"
      num="03"
      label="Selected Work"
      title="Things I've designed, built and shipped."
    >
      <div>
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <article className="group rule grid gap-x-10 gap-y-6 py-12 lg:grid-cols-[0.5fr_2.5fr]">
              <div>
                <p className="font-display text-5xl text-line-strong/30 transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="label mt-3 text-muted">{project.period}</p>
              </div>

              <div>
                <h3 className="max-w-2xl text-balance text-3xl leading-tight sm:text-4xl">
                  {project.title}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1">
                  {project.stack.map((s) => (
                    <li key={s} className="label text-muted after:ml-2 after:text-faint after:content-['/'] last:after:content-['']">
                      {s}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 max-w-2xl space-y-3">
                  {project.points.map((pt, j) => (
                    <li key={j} className="flex gap-4 text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 label text-ink transition-colors hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
