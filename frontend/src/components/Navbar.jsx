import { motion } from 'framer-motion'
import { Moon, Sun, Download, ArrowRight } from 'lucide-react'
import { profile } from '../data/profile.js'
import { cn } from '../lib/classNames.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ theme, setTheme }) {
  return (
    <div className="sticky top-0 z-50">
      <div className="container-page pt-3">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="glass flex items-center justify-between rounded-2xl px-3 py-3"
        >
          <a
            href="#home"
            className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-semibold text-slate-900 hover:bg-white/60 dark:text-white dark:hover:bg-white/10"
          >
            <span className="grad-text font-display text-base">
              {profile.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white/60 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn-ghost hidden sm:inline-flex" href="#projects">
              View Projects <ArrowRight size={16} />
            </a>
            <a
              className={cn('btn-primary')}
              href={profile.resumeHref}
              download
            >
              Resume <Download size={16} />
            </a>
            <button
              type="button"
              className="btn-ghost aspect-square px-2.5"
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

