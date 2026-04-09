import { profile } from '../data/profile.js'

export function Footer() {
  return (
    <footer className="container-page pb-10 pt-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
        <div>
          © {new Date().getFullYear()} <span className="font-semibold">{profile.name}</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            className="font-semibold hover:text-slate-900 dark:hover:text-white"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-semibold hover:text-slate-900 dark:hover:text-white"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

