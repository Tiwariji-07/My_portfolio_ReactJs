import Reveal from './Reveal.jsx'

/**
 * Consistent section shell: anchor id, vertical rhythm, centered max width
 * and an optional eyebrow + heading block.
 */
export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="container-px mx-auto w-full max-w-6xl">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-content sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
