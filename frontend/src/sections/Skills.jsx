import { profile } from '../data/profile.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { SkillBar } from '../components/SkillBar.jsx'

export function Skills() {
  const entries = Object.entries(profile.skills)

  return (
    <section id="skills" className="container-page py-14 sm:py-16">
      <SectionHeading
        eyebrow="Skills"
        title="Technical skills (ATS optimized)"
        subtitle="Categorized stack with proficiency indicators for quick scanning."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {entries.map(([category, items], idx) => (
          <Reveal key={category} delay={idx * 0.03}>
            <div className="glass rounded-3xl p-6">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {category}
              </div>
              <div className="mt-4 grid gap-3">
                {items.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

