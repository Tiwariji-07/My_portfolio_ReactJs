import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Loader2, Check, AlertCircle } from 'lucide-react'
import { MaskText } from './Reveal.jsx'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'
import { GithubIcon, LinkedinIcon, WhatsappIcon, XIcon } from './BrandIcons.jsx'
import { profile, socials, emailConfig, achievements } from '../data/portfolio.js'

const social = [
  { icon: GithubIcon, label: 'GitHub', href: socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: socials.linkedin },
  { icon: XIcon, label: 'X', href: socials.x },
  { icon: WhatsappIcon, label: 'WhatsApp', href: socials.whatsapp },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    // Send an explicit params object whose keys match the EmailJS template
    // variables ({{name}}, {{email}}, {{subject}}, {{message}}).
    const data = new FormData(formRef.current)
    const params = {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message: data.get('message'),
    }

    try {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, params, {
        publicKey: emailConfig.publicKey,
      })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('Failed to send message:', err)
      setStatus('error')
    }
  }

  const field =
    'w-full border-0 border-b-2 border-line bg-transparent py-3 text-lg text-ink placeholder:text-faint focus:border-ink focus:outline-none'

  return (
    <section id="contact" className="container-px mx-auto max-w-[1600px] py-24 sm:py-36">
      <span className="label text-muted">/ Contact</span>
      <MaskText
        as="h2"
        text="Have an idea worth building?"
        className="display mt-6 max-w-4xl text-[clamp(2.5rem,8vw,7rem)]"
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <a href={`mailto:${profile.email}`} className="ul inline-block text-2xl font-semibold sm:text-3xl">
              {profile.email}
            </a>
            <p className="mt-3 font-mono text-sm text-muted">{profile.phone} · {profile.location}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-wrap gap-3">
              {social.map(({ icon: Icon, label, href }) => (
                <Magnetic key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-bg"
                  >
                    <Icon size={20} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12 border-t border-line">
              {achievements.map((a) => (
                <li key={a.text} className="flex items-center justify-between gap-4 border-b border-line py-3">
                  <span className="text-muted">{a.text}</span>
                  {a.href && (
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className="ul shrink-0 font-mono text-xs uppercase tracking-wider">
                      View
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label text-muted">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="label text-muted">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="label text-muted">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="What's on your mind?" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="label text-muted">Message</label>
              <textarea id="message" name="message" rows="4" required placeholder="Tell me about it…" className={`${field} resize-y`} />
            </div>

            <Magnetic className="inline-block">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-mono text-xs uppercase tracking-wider text-bg transition-colors hover:bg-accent hover:text-ink disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending</>
                ) : (
                  <>Send it <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
                )}
              </button>
            </Magnetic>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="flex items-center gap-2 font-mono text-sm text-ink"><Check size={16} /> Thanks — I&apos;ll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 font-mono text-sm text-red-600"><AlertCircle size={16} /> Something broke. Email me at {profile.email}.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
