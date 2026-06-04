import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <Section id="experience" num="02" label="Experience">
      <ol>
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 0.05}>
            <article className="rule grid gap-x-10 gap-y-5 py-10 lg:grid-cols-[0.9fr_2fr]">
              <div>
                <p className="label text-accent">{job.period}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight">{job.role}</h3>
                <p className="mt-1 text-ink-soft">{job.company}</p>
                <p className="label mt-2 text-faint">{job.location}</p>
              </div>
              <ul className="space-y-4">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-4 text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
