import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export function ProjectCard({ project }) {
  return (
    <article className="glass group overflow-hidden rounded-3xl">
      <div className="relative">
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-white/5 dark:via-white/5 dark:to-white/0">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.github ? (
              <a
                className="btn-ghost px-3 py-2 text-xs"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Code
              </a>
            ) : null}
            {project.demo ? (
              <a
                className="btn-primary px-3 py-2 text-xs"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} /> Live
              </a>
            ) : null}
          </div>
        </div>

        {Array.isArray(project.tech) ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white/60 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {Array.isArray(project.bullets) ? (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

