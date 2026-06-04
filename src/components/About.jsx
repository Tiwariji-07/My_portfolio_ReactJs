import { MaskText } from './Reveal.jsx'
import Reveal from './Reveal.jsx'
import { about, experience } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="bg-ink text-bg">
      <div className="container-px mx-auto max-w-[1600px] py-24 sm:py-36">
        <span className="label text-faint">/ About</span>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <MaskText
              as="h2"
              text={about.lead}
              className="display max-w-3xl text-[clamp(2rem,5.5vw,4.5rem)] text-bg"
            />
            <div className="mt-10 max-w-xl space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-lg leading-relaxed text-bg/70">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <Reveal>
              <h3 className="label mb-5 text-faint">Toolkit</h3>
              <dl className="space-y-3">
                {about.toolkit.map((t) => (
                  <div key={t.k} className="border-t border-bg/15 pt-3">
                    <dt className="font-mono text-xs uppercase tracking-wider text-accent">{t.k}</dt>
                    <dd className="mt-1 text-bg/80">{t.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="label mb-5 text-faint">Trajectory</h3>
              <ul>
                {experience.map((e) => (
                  <li
                    key={e.role}
                    className="flex items-baseline justify-between gap-4 border-t border-bg/15 py-3"
                  >
                    <span className="font-medium text-bg">{e.role}</span>
                    <span className="shrink-0 font-mono text-xs text-faint">{e.period}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
