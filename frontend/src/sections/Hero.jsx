import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { profile } from '../data/profile.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { safeExternalLink } from '../lib/links.js'

export function Hero() {
  const { text, caret } = useTypewriter({
    words: ['Full Stack Developer', 'MERN Developer', 'AI Enthusiast'],
  })

  const github = safeExternalLink(profile.socials.github)
  const linkedin = safeExternalLink(profile.socials.linkedin)
  const email = safeExternalLink(profile.socials.email)

  return (
    <section id="home" className="container-page pt-10 sm:pt-14">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to Software Engineer roles
          </div>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Hi, I’m <span className="grad-text">{profile.name}</span>
          </h1>

          <p className="mt-3 text-lg font-semibold text-slate-700 dark:text-slate-200">
            {text}
            <span className="ml-1 opacity-70">{caret}</span>
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              View Projects <ArrowRight size={16} />
            </a>
            <a className="btn-ghost" href={profile.resumeHref} download>
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <a
              className={
                github.disabled
                  ? 'inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 font-semibold text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500'
                  : 'inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 font-semibold text-slate-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10'
              }
              href={github.href}
              target={github.disabled ? undefined : '_blank'}
              rel={github.disabled ? undefined : 'noreferrer'}
              aria-disabled={github.disabled}
              title={github.disabled ? github.reason : 'Open GitHub'}
              onClick={(e) => {
                if (github.disabled) e.preventDefault()
              }}
            >
              <FaGithub /> GitHub
            </a>
            <a
              className={
                linkedin.disabled
                  ? 'inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 font-semibold text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500'
                  : 'inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 font-semibold text-slate-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10'
              }
              href={linkedin.href}
              target={linkedin.disabled ? undefined : '_blank'}
              rel={linkedin.disabled ? undefined : 'noreferrer'}
              aria-disabled={linkedin.disabled}
              title={linkedin.disabled ? linkedin.reason : 'Open LinkedIn'}
              onClick={(e) => {
                if (linkedin.disabled) e.preventDefault()
              }}
            >
              <FaLinkedinIn /> LinkedIn
            </a>
            <a
              className={
                email.disabled
                  ? 'inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 font-semibold text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500'
                  : 'inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 font-semibold text-slate-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10'
              }
              href={email.href}
              aria-disabled={email.disabled}
              title={email.disabled ? email.reason : 'Send email'}
              onClick={(e) => {
                if (email.disabled) e.preventDefault()
              }}
            >
              <HiOutlineMail /> Email
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            {profile.location} • {profile.role}
          </p>
        </div>

        <motion.div
          className="glass relative overflow-hidden rounded-3xl p-6"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-tr from-violet-500/30 to-cyan-500/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300">
              ATS-ready snapshot
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Primary stack
                </div>
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  React • Node • Express • MongoDB
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Strengths
                </div>
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  DSA • UI/UX • APIs • Auth
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5 sm:col-span-2">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Seeking
                </div>
                <div className="mt-1 font-semibold text-slate-900 dark:text-white">
                  SDE / Software Engineer • Intern / Full‑time
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Tip: Replace links and add your real `public/resume.pdf`.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
    </section>
  )
}

