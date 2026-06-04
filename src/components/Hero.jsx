import { motion } from 'motion/react'
import { ArrowDownRight } from 'lucide-react'
import Magnetic from './Magnetic.jsx'
import { profile, asset } from '../data/portfolio.js'

const ease = [0.16, 1, 0.3, 1]
const up = {
  hidden: { y: '110%' },
  visible: (i = 0) => ({ y: 0, transition: { duration: 0.9, ease, delay: 0.1 + i * 0.08 } }),
}

function Line({ children, i }) {
  return (
    <span className="block overflow-hidden">
      <motion.span variants={up} custom={i} className="block">
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const onImgError = (e) => {
    if (!e.currentTarget.dataset.fallback) {
      e.currentTarget.dataset.fallback = '1'
      e.currentTarget.src = asset(profile.photoFallback)
    }
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="container-px mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end pb-10 pt-28">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <span className="label flex items-center gap-2 text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.available}
          </span>
          <span className="label text-muted">/ {profile.location}</span>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.45fr_0.55fr]">
          {/* headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.06 }}
            className="display text-[clamp(3.2rem,13vw,12rem)]"
          >
            <Line i={0}>{profile.headline[0]}</Line>
            <Line i={1}>
              <span className="hl">{profile.headline[1]}</span> {profile.headline[2]}
            </Line>
          </motion.h1>

          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease }}
            className="relative mx-auto w-full max-w-[20rem] lg:mx-0"
          >
            <div className="absolute inset-x-6 bottom-0 top-10 -z-10 rounded-full bg-accent" aria-hidden="true" />
            <img
              src={asset(profile.photo)}
              onError={onImgError}
              alt={`${profile.name}, ${profile.role}`}
              className="w-full select-none object-contain"
              draggable="false"
            />
          </motion.div>
        </div>

        {/* subhead + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease }}
          className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-[1.4fr_1fr] md:items-center"
        >
          <p className="max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">{profile.subhead}</p>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:bg-accent hover:text-ink"
              >
                Start a conversation
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
            <a href="#work" className="ul label text-ink">
              Selected work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
