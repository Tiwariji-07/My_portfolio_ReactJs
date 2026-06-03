import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons.jsx'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { profile, socials, emailConfig } from '../data/portfolio.js'

const contactItems = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: profile.location, href: null },
]

const socialItems = [
  { icon: GithubIcon, label: 'GitHub', href: socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: socials.linkedin },
  { icon: WhatsappIcon, label: 'WhatsApp', href: socials.whatsapp },
  { icon: Code, label: 'LeetCode', href: socials.leetcode },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        { publicKey: emailConfig.publicKey },
      )
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('Failed to send message:', err)
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-line bg-ink/60 px-4 py-3 text-sm text-content placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none'

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Have an opportunity, a project, or just want to say hello? Drop me a message and I'll get back to you."
      className="bg-ink-soft"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-8">
          <ul className="space-y-4">
            {contactItems.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-3 text-content">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  {label}
                </span>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="transition-colors hover:text-accent">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              )
            })}
          </ul>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-muted">
              Find me online
            </p>
            <div className="flex flex-wrap gap-3">
              {socialItems.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/60 px-4 py-2.5 text-sm font-medium text-content transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-line bg-surface/60 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="mb-1.5 block text-sm font-medium text-content">
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="user_email" className="mb-1.5 block text-sm font-medium text-content">
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="user_subject" className="mb-1.5 block text-sm font-medium text-content">
                Subject
              </label>
              <input
                id="user_subject"
                name="user_subject"
                type="text"
                placeholder="What's this about?"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-content">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell me a little about it…"
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                'Send message'
              )}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm font-medium text-accent">
                  <CheckCircle2 size={16} />
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm font-medium text-red-400">
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly at {profile.email}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
