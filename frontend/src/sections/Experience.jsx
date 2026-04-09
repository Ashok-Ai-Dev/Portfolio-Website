import { profile } from '../data/profile.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function Experience() {
  return (
    <section id="experience" className="container-page py-14 sm:py-16">
      <SectionHeading
        eyebrow="Experience"
        title="Internship experience"
        subtitle="Recruiter-friendly, impact-first bullets."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {profile.experience.map((e, idx) => (
          <Reveal key={`${e.company}-${e.role}`} delay={idx * 0.03}>
            <div className="glass rounded-3xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {e.role}
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {e.date}
                </div>
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {e.company}
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

