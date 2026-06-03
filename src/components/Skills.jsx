import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { skillGroups } from '../data/portfolio.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="A snapshot of the languages, frameworks and platforms I use to design and build software."
      className="bg-ink-soft"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-sm font-medium text-content transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
