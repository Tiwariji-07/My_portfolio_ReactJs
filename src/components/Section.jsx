import Reveal from './Reveal.jsx'

/**
 * Editorial section shell: a strong top rule, a monospace index + label, and a
 * large serif title — like a chapter heading in a printed dossier.
 */
export default function Section({ id, num, label, title, description, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="container-px mx-auto w-full max-w-6xl">
        <Reveal className="rule pt-5">
          <div className="flex items-baseline gap-5">
            <span className="label text-accent">{num}</span>
            <span className="label text-muted">{label}</span>
          </div>
          {title && (
            <h2 className="mt-7 max-w-3xl text-balance text-4xl leading-[1.05] sm:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
          )}
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}
