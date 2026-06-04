import { useEffect, useRef } from 'react'

/**
 * Minimal blend-mode cursor: a dot that follows the pointer and grows over
 * interactive elements. Hidden on coarse pointers via index.css.
 */
export default function Cursor() {
  const dot = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('cursor-on')

    const node = dot.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let frame

    const move = (e) => {
      x = e.clientX
      y = e.clientY
    }
    const render = () => {
      cx += (x - cx) * 0.2
      cy += (y - cy) * 0.2
      if (node) node.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)

    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) node?.classList.add('is-hover')
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) node?.classList.remove('is-hover')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.body.classList.remove('cursor-on')
    }
  }, [])

  return <div ref={dot} className="cursor-dot" aria-hidden="true" />
}
