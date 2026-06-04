import { motion } from 'motion/react'
import { ArrowRight, MapPin, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'
import { profile, socials, stats, asset } from '../data/portfolio.js'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container-px mx-auto flex min-h-screen max-w-6xl flex-col justify-center pt-24 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p
              variants={item}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-sm text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for new opportunities
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-content sm:text-6xl"
            >
              Hi, I'm {profile.name.split(' ')[0]}
              <span className="text-gradient"> {profile.name.split(' ')[1]}</span>.
              <br />
              <span className="text-content">{profile.role}.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft"
              >
                View my work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-content transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-4 text-muted">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="transition-colors hover:text-accent"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="transition-colors hover:text-accent"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="transition-colors hover:text-accent"
              >
                <Mail size={20} />
              </a>
              <span className="inline-flex items-center gap-1.5 text-sm">
                <MapPin size={16} />
                {profile.location}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-xs lg:max-w-sm"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent/20 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-black/40">
              <img
                src={asset('me.jpeg')}
                alt={`Portrait of ${profile.name}`}
                className="aspect-square w-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        <motion.dl
          variants={item}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-line pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-bold text-content sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
