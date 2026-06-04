import { motion } from 'motion/react'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile, socials, stats, asset } from '../data/portfolio.js'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="container-px mx-auto max-w-6xl pt-28 pb-16 sm:pt-36">
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <motion.p variants={rise} className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <span className="text-ink">{profile.name}</span>
          <span className="text-faint">/</span>
          <span>
            {profile.role} <span className="text-accent">@ {profile.company}</span>
          </span>
          <span className="text-faint">/</span>
          <span>{profile.location}</span>
        </motion.p>

        <motion.h1
          variants={rise}
          className="mt-8 max-w-5xl text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.25rem]"
        >
          {profile.statement[0]}{' '}
          <span className="display-italic text-accent">{profile.statement[1]}</span>{' '}
          {profile.statement[2]}{' '}
          <span className="text-muted">{profile.statement[3]}</span>
        </motion.h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <motion.div variants={rise}>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{profile.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent"
              >
                Selected work
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#contact" className="link-underline label text-ink">
                Get in touch
              </a>
              <div className="flex items-center gap-4 text-ink-soft">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
                  <GithubIcon size={19} />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                  <LinkedinIcon size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={rise} className="relative lg:justify-self-end">
            <div className="absolute -right-2 -top-2 hidden h-full w-full border border-line-strong lg:block" aria-hidden="true" />
            <div className="relative max-w-[16rem] overflow-hidden border border-line-strong bg-paper-2">
              <img
                src={asset('me.jpeg')}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full object-cover grayscale-[0.45] [filter:grayscale(0.45)_sepia(0.12)_contrast(1.05)] transition-[filter] duration-500 hover:[filter:grayscale(0)_sepia(0)]"
                loading="eager"
              />
            </div>
            <p className="label mt-3 text-faint">Fig. 01 — Hyderabad, IN</p>
          </motion.div>
        </div>

        <motion.dl variants={rise} className="rule mt-16 grid grid-cols-2 gap-px sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="pt-5 pr-4">
              <dt className="font-display text-3xl font-semibold sm:text-4xl">{s.value}</dt>
              <dd className="mt-2 max-w-[14ch] text-sm leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.a
          variants={rise}
          href="#about"
          className="label mt-14 inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Scroll
        </motion.a>
      </motion.div>
    </section>
  )
}
