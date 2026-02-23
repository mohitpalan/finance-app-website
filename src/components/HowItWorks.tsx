import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PlusCircle, Target, Handshake, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: PlusCircle,
    number: '01',
    title: 'Add Transactions',
    description: 'Enter manually or let the app auto-import from your bank SMS. Smart category matching handles the rest.',
    gradient: 'from-teal-400 to-teal-500',
  },
  {
    icon: Target,
    number: '02',
    title: 'Set Budgets',
    description: 'Create category-wise spending limits for any period. Real-time tracking keeps you aware of where your money goes.',
    gradient: 'from-sky-400 to-teal-400',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Split & Settle',
    description: 'Share expenses with friends effortlessly. Track balances across groups and settle up with a single tap.',
    gradient: 'from-peach-300 to-peach-400',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">How It Works</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-peach-300 to-teal-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Getting started takes under a minute. Three simple steps to financial clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative text-center"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] z-0">
                    <ArrowRight className="w-full h-6 text-teal-200 dark:text-teal-800/40" strokeWidth={1} />
                  </div>
                )}

                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg mb-6`}>
                    <Icon size={32} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-teal-400 dark:text-teal-500 mb-2 block">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
