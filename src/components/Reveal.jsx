import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]

/** Block reveal: rise + fade once on entry. */
export default function Reveal({ children, delay = 0, y = 32, className, as = 'div' }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Tag>
  )
}

/**
 * Word-by-word mask reveal for big headings. Each word rises out of a clipped
 * line. `as` lets you pick the heading tag.
 */
export function MaskText({ text, className = '', as = 'h2', delay = 0, stagger = 0.05 }) {
  const Tag = motion[as] ?? motion.h2
  const words = text.split(' ')
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              visible: { y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
