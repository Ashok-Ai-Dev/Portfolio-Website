export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

