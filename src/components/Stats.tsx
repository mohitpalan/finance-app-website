import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, EyeOff, Ban, Lock } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Bank Formats Supported' },
  { value: '6', label: 'UPI Apps Supported' },
  { value: '300+', label: 'Auto-categorization Rules' },
  { value: '0', label: 'Ads or Data Sold' },
]

const privacyPoints = [
  { icon: ShieldCheck, text: 'Your financial data stays on our servers, never sold or shared with third parties.' },
  { icon: EyeOff, text: 'No tracking, no analytics on your personal transactions, no profiling.' },
  { icon: Ban, text: 'Completely ad-free. Always. We do not monetize your data.' },
  { icon: Lock, text: 'Bank SMS is read locally on your device and never uploaded without your control.' },
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
          className="rounded-3xl bg-white dark:bg-slate-800/50 border border-teal-100/50 dark:border-slate-700/40 p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/40 mb-4">
              <ShieldCheck size={28} className="text-teal-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
              Your Privacy Comes First
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Finance Tracker is built with a privacy-first approach. Your money data is yours alone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {privacyPoints.map((point, i) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center">
                    <Icon size={18} className="text-teal-600 dark:text-teal-400" />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{point.text}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center">
            <a
              href="https://financetracker.mohitpalan.me/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Read our full Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
