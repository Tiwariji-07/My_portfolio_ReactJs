/**
 * Seamless infinite marquee. Items are rendered twice inside one animated track
 * so a -50% translate loops cleanly. Pauses on hover; respects reduced motion.
 */
export default function Marquee({ items, reverse = false, duration = 30, separator = '✦' }) {
  const sequence = [...items, ...items]
  return (
    <div className="marquee-track relative flex overflow-hidden">
      <ul
        className={`marquee ${reverse ? 'marquee-reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
        aria-hidden="true"
      >
        {sequence.map((item, i) => (
          <li key={i} className="flex items-center">
            <span className="px-7">{item}</span>
            <span className="text-2xl leading-none text-accent">{separator}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
