import { profile } from '../data/profile.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function Certifications() {
  return (
    <section id="certifications" className="container-page py-14 sm:py-16">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials"
        subtitle="A concise section that boosts trust without clutter."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {profile.certifications.map((c, idx) => (
          <Reveal key={c.title} delay={idx * 0.03}>
            <div className="glass rounded-3xl p-6">
              <div className="font-semibold text-slate-900 dark:text-white">
                {c.title}
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {c.issuer}
              </div>
              <div className="mt-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
                {c.year}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

