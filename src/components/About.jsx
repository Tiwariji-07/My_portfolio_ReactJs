import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/portfolio.js'

const facts = [
  { k: 'Currently', v: `${profile.role}, ${profile.company}` },
  { k: 'Based in', v: profile.location },
  { k: 'Focus', v: 'RAG · Agents · MCP · Retrieval' },
  { k: 'Open to', v: 'Hard problems worth solving' },
]

export default function About() {
  return (
    <Section id="about" num="01" label="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
        <Reveal className="space-y-6">
          <p className="font-display text-2xl leading-snug text-balance sm:text-3xl">
            From shipping pages and REST APIs to building retrieval and agent systems that
            <span className="display-italic text-accent"> hold up in production</span>.
          </p>
          {profile.about.map((p, i) => (
            <p key={i} className="max-w-xl text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="rule-soft">
            {facts.map((f) => (
              <div key={f.k} className="rule-soft flex justify-between gap-6 py-4 first:border-t-0">
                <dt className="label text-muted">{f.k}</dt>
                <dd className="max-w-[60%] text-right text-sm font-medium text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
