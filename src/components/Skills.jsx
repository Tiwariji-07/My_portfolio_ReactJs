import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { skillGroups, education, achievements } from '../data/portfolio.js'
import { ArrowUpRight } from 'lucide-react'

export default function Skills() {
  return (
    <Section id="skills" num="04" label="Capabilities" title="The toolkit.">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="rule-soft pt-4">
              <h3 className="label text-accent">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-x-12 gap-y-12 lg:grid-cols-2">
        <Reveal>
          <h3 className="label text-muted">Education</h3>
          <div className="rule mt-4 pt-6">
            <p className="font-display text-2xl leading-tight">{education.school}</p>
            <p className="mt-2 text-ink-soft">{education.degree}</p>
            <p className="label mt-3 text-faint">
              {education.period} · {education.detail}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="label text-muted">Achievements</h3>
          <ul className="rule mt-4 pt-2">
            {achievements.map((a) => (
              <li key={a.text} className="rule-soft flex items-start justify-between gap-6 py-4 first:border-t-0">
                <span className="text-ink-soft">{a.text}</span>
                {a.href && (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 items-center gap-1 label text-ink transition-colors hover:text-accent"
                  >
                    {a.linkLabel}
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
