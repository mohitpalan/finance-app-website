import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquareText, Users, PiggyBank, Repeat, UsersRound, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: MessageSquareText,
    title: 'Smart SMS Import',
    description: 'Automatically reads bank SMS and parses transactions from 50+ bank formats and 6 popular UPI apps. Zero manual entry needed.',
    accent: 'from-teal-400 to-teal-600',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    iconColor: 'text-teal-500',
  },
  {
    icon: Users,
    title: 'Expense Splitting',
    description: 'Split bills with friends using equal, exact, or percentage splits. Track who owes what and settle up with ease.',
    accent: 'from-peach-300 to-peach-400',
    bg: 'bg-peach-50 dark:bg-peach-400/10',
    iconColor: 'text-peach-400',
  },
  {
    icon: PiggyBank,
    title: 'Budget Tracking',
    description: 'Set monthly or yearly budgets by category. Get smart alerts when you\'re approaching your limits.',
    accent: 'from-sky-300 to-sky-500',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    iconColor: 'text-sky-400',
  },
  {
    icon: Repeat,
    title: 'Recurring Bills',
    description: 'Never miss a payment. Auto-track subscriptions and recurring expenses with daily, weekly, monthly, or yearly frequencies.',
    accent: 'from-teal-300 to-sky-400',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    iconColor: 'text-teal-400',
  },
  {
    icon: UsersRound,
    title: 'Group Expenses',
    description: 'Create groups for trips, households, or events. Track shared expenses and balances across all members.',
    accent: 'from-peach-300 to-teal-400',
    bg: 'bg-peach-50 dark:bg-peach-400/10',
    iconColor: 'text-peach-400',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Export',
    description: 'Detailed charts, trends, and category breakdowns. Export your data as CSV or PDF for complete financial visibility.',
    accent: 'from-sky-400 to-teal-400',
    bg: 'bg-sky-50 dark:bg-sky-950/30',
    iconColor: 'text-sky-400',
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" ref={ref} className="py-24 bg-surface/40 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Everything you need to manage your money
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-sky-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Packed with powerful features that make personal finance effortless and even enjoyable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-teal-100/50 dark:border-slate-700/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={feature.iconColor} />
                </div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
