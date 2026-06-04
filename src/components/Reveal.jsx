import { motion } from 'motion/react'

/**
 * Scroll-reveal wrapper with an editorial "rise + fade" that animates once on
 * entry. Honours prefers-reduced-motion via index.css.
 */
export default function Reveal({ children, delay = 0, y = 28, className, as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}
