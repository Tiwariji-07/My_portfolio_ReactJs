import { ExternalLink } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { projects, asset } from '../data/portfolio.js'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured projects"
      description="A selection of things I've built — from full-stack applications to polished front-end clones."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/30">
              <div className="aspect-video overflow-hidden border-b border-line bg-ink">
                <img
                  src={asset(project.image)}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-content">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-content transition-colors hover:text-accent"
                >
                  {project.linkLabel}
                  <ExternalLink size={15} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
