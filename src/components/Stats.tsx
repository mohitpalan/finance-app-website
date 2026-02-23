import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const techStack = [
  { name: 'React Native', bg: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400' },
  { name: 'NestJS', bg: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' },
  { name: 'PostgreSQL', bg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
  { name: 'Redis', bg: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' },
  { name: 'Docker', bg: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400' },
  { name: 'Firebase', bg: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' },
]

const stats = [
  { value: '50+', label: 'Bank Formats Supported' },
  { value: '6', label: 'UPI Apps Parsed' },
  { value: '300+', label: 'Auto-categorization Keywords' },
  { value: '57', label: 'App Screens' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-surface/40 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-teal-100/50 dark:border-slate-700/40"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-500 to-sky-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
            Built With
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${tech.bg} transition-transform hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
