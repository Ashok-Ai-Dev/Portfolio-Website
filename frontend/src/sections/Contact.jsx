import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/profile.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { safeExternalLink } from '../lib/links.js'

function getEnv(name) {
  return import.meta.env[name]
}

export function Contact() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const emailjsConfig = useMemo(() => {
    return {
      serviceId: getEnv('VITE_EMAILJS_SERVICE_ID'),
      templateId: getEnv('VITE_EMAILJS_TEMPLATE_ID'),
      publicKey: getEnv('VITE_EMAILJS_PUBLIC_KEY'),
    }
  }, [])

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending…' })

    const { serviceId, templateId, publicKey } = emailjsConfig
    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'Email service is not configured. Add EmailJS keys in frontend .env.',
      })
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey },
      )

      setStatus({ type: 'success', message: 'Message sent successfully.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({
        type: 'error',
        message: err?.text || 'Failed to send. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="container-page py-14 sm:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something"
        subtitle="Use the form (EmailJS) or reach out on LinkedIn/GitHub."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6">
            <div className="grid gap-4">
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Name
                </span>
                <input
                  className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-violet-400/40"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Email
                </span>
                <input
                  className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-violet-400/40"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  Message
                </span>
                <textarea
                  className="min-h-[140px] resize-y rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-violet-400/40"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="What would you like to discuss?"
                />
              </label>

              <button
                className="btn-primary"
                type="submit"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending…' : 'Send message'}
              </button>

              {status.type !== 'idle' ? (
                <div
                  className={
                    status.type === 'success'
                      ? 'rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100'
                      : status.type === 'error'
                        ? 'rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-100'
                        : 'rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
                  }
                >
                  {status.message}
                </div>
              ) : null}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass rounded-3xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Social links
            </div>
            <div className="mt-4 grid gap-3">
              <a
                className="btn-ghost justify-start"
                {...(() => {
                  const l = safeExternalLink(profile.socials.linkedin)
                  return l.disabled
                    ? {
                        href: '#',
                        'aria-disabled': true,
                        title: l.reason,
                        onClick: (e) => e.preventDefault(),
                      }
                    : { href: l.href, target: '_blank', rel: 'noreferrer' }
                })()}
              >
                LinkedIn
              </a>
              <a
                className="btn-ghost justify-start"
                {...(() => {
                  const l = safeExternalLink(profile.socials.github)
                  return l.disabled
                    ? {
                        href: '#',
                        'aria-disabled': true,
                        title: l.reason,
                        onClick: (e) => e.preventDefault(),
                      }
                    : { href: l.href, target: '_blank', rel: 'noreferrer' }
                })()}
              >
                GitHub
              </a>
              <a
                className="btn-ghost justify-start"
                {...(() => {
                  const l = safeExternalLink(profile.socials.leetcode)
                  return l.disabled
                    ? {
                        href: '#',
                        'aria-disabled': true,
                        title: l.reason,
                        onClick: (e) => e.preventDefault(),
                      }
                    : { href: l.href, target: '_blank', rel: 'noreferrer' }
                })()}
              >
                LeetCode
              </a>
              <a
                className="btn-ghost justify-start"
                {...(() => {
                  const l = safeExternalLink(profile.socials.gfg)
                  return l.disabled
                    ? {
                        href: '#',
                        'aria-disabled': true,
                        title: l.reason,
                        onClick: (e) => e.preventDefault(),
                      }
                    : { href: l.href, target: '_blank', rel: 'noreferrer' }
                })()}
              >
                GeeksforGeeks
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <div className="font-semibold text-slate-900 dark:text-white">
                EmailJS setup
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

