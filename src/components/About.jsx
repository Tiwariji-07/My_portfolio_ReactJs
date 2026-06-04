import { GraduationCap, Code2, Rocket } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/portfolio.js'

const highlights = [
  {
    icon: GraduationCap,
    title: 'CS Engineering graduate',
    text: 'B.Tech in Computer Science & Engineering, Malla Reddy College of Engineering and Technology.',
  },
  {
    icon: Code2,
    title: 'Full-stack mindset',
    text: 'Comfortable building React front ends and Java/Spring Boot & Python back ends with REST APIs.',
  },
  {
    icon: Rocket,
    title: 'Ready to ship',
    text: 'Seeking software development roles where I can keep learning and deliver real value.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A bit about me"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <div className="grid gap-4">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-accent/50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-content">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
