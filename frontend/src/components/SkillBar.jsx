import { motion } from 'framer-motion'

export function SkillBar({ name, level }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-slate-900 dark:text-white">
          {name}
        </div>
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          {level}%
        </div>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

