import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle, Code } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons.jsx'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile, socials, emailConfig } from '../data/portfolio.js'

const directLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'Location', value: profile.location, href: null },
]

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: socials.linkedin },
  { icon: WhatsappIcon, label: 'WhatsApp', href: socials.whatsapp },
  { icon: Code, label: 'LeetCode', href: socials.leetcode },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current, {
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
    'w-full border-0 border-b border-line bg-transparent py-3 text-ink placeholder:text-faint focus:border-accent focus:outline-none focus:ring-0'

  return (
    <Section id="contact" num="05" label="Contact">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="max-w-md text-balance font-display text-3xl leading-tight sm:text-4xl">
            Have a problem worth solving? <span className="display-italic text-accent">Let's talk.</span>
          </p>

          <dl className="mt-12">
            {directLinks.map((d) => (
              <div key={d.label} className="rule-soft flex items-baseline justify-between gap-6 py-4 first:border-t-0">
                <dt className="label text-muted">{d.label}</dt>
                <dd>
                  {d.href ? (
                    <a href={d.href} className="link-underline text-ink">
                      {d.value}
                    </a>
                  ) : (
                    <span className="text-ink">{d.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 label text-ink-soft transition-colors hover:text-accent"
              >
                <Icon size={16} />
                {label}
                <ArrowUpRight size={13} className="text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="label text-muted">
                  Name
                </label>
                <input id="user_name" name="user_name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="user_email" className="label text-muted">
                  Email
                </label>
                <input id="user_email" name="user_email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="user_subject" className="label text-muted">
                Subject
              </label>
              <input id="user_subject" name="user_subject" type="text" placeholder="What's this about?" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="label text-muted">
                Message
              </label>
              <textarea id="message" name="message" rows="4" required placeholder="Tell me a little about it…" className={`${field} resize-y`} />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm font-medium text-accent-ink">
                  <CheckCircle2 size={16} />
                  Thanks — your message is on its way.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm font-medium text-accent">
                  <AlertCircle size={16} />
                  Something went wrong. Email me directly at {profile.email}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
