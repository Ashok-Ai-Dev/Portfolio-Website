import { profile } from '../data/profile.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function About() {
  return (
    <section id="about" className="container-page py-14 sm:py-16">
      <SectionHeading
        eyebrow="About"
        title="Professional summary"
        subtitle="A concise, recruiter-friendly overview with core strengths and a timeline."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-3xl p-6">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              {profile.about.summary}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profile.about.highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-white/20 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {h.title}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {h.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass rounded-3xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Timeline
            </div>
            <ol className="mt-4 space-y-4">
              {profile.about.timeline.map((t) => (
                <li
                  key={`${t.title}-${t.date}`}
                  className="rounded-2xl border border-white/20 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {t.title}
                    </div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {t.date}
                    </div>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {t.org}
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {t.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

