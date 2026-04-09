import { useEffect, useMemo, useState } from 'react'
import { profile } from '../data/profile.js'
import { fetchGithubRepos } from '../lib/github.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'

function pickFeaturedRepos(repos) {
  return [...repos]
    .sort((a, b) => (b.stars - a.stars) || (b.forks - a.forks))
    .slice(0, 6)
}

export function Projects() {
  const [repos, setRepos] = useState([])
  const [repoError, setRepoError] = useState('')

  const username =
    import.meta.env.VITE_GITHUB_USERNAME || profile.github.username
  const token = import.meta.env.VITE_GITHUB_TOKEN

  useEffect(() => {
    const ctrl = new AbortController()
    setRepoError('')
    fetchGithubRepos({ username, token, perPage: 30, signal: ctrl.signal })
      .then((r) => setRepos(r))
      .catch((e) => setRepoError(e?.message || 'Failed to load repos'))
    return () => ctrl.abort()
  }, [token, username])

  const featured = useMemo(() => pickFeaturedRepos(repos), [repos])

  return (
    <section id="projects" className="container-page py-14 sm:py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Projects that show impact"
        subtitle="Three core projects (with role-friendly bullet points) plus live GitHub repos pulled automatically."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {profile.projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.04}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              GitHub repositories
            </div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Auto-fetched from GitHub API for <span className="font-semibold">{username}</span>.
            </div>
          </div>
          <a
            className="btn-ghost"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            View all on GitHub
          </a>
        </div>

        {repoError ? (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100">
            {repoError}. Set `VITE_GITHUB_USERNAME` (and optionally `VITE_GITHUB_TOKEN`) in your `.env`.
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r, idx) => (
            <Reveal key={r.id} delay={idx * 0.02}>
              <a
                className="glass block rounded-3xl p-5 transition hover:translate-y-[-1px]"
                href={r.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {r.name}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    ★ {r.stars}
                  </div>
                </div>
                <div className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                  {r.description || 'No description provided.'}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.language ? (
                    <span className="rounded-full border border-slate-200 bg-white/60 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                      {r.language}
                    </span>
                  ) : null}
                  <span className="rounded-full border border-slate-200 bg-white/60 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    Updated {new Date(r.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

