import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] h-[520px]">
      <div className="absolute inset-0 rounded-[44px] bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-600 dark:to-slate-700 shadow-2xl shadow-teal-500/10" />
      <div className="absolute inset-[4px] rounded-[40px] bg-gradient-to-b from-slate-900 to-black dark:from-slate-700 dark:to-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black dark:bg-slate-800 rounded-b-2xl" />

        <div className="absolute inset-[4px] top-1 rounded-[36px] bg-gradient-to-b from-teal-50 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden">
          <div className="pt-10 px-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500">Total Balance</div>
                <div className="text-xl font-bold text-slate-800 dark:text-white">$4,285.50</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/40" />
            </div>

            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/30">
                <div className="text-[9px] text-teal-600 dark:text-teal-400 font-medium">Income</div>
                <div className="text-sm font-bold text-slate-800 dark:text-white">$6,240</div>
              </div>
              <div className="p-3 rounded-xl bg-peach-50 dark:bg-peach-400/10 border border-peach-100 dark:border-peach-400/20">
                <div className="text-[9px] text-peach-400 font-medium">Expenses</div>
                <div className="text-sm font-bold text-slate-800 dark:text-white">$1,954</div>
              </div>
            </div>

            <div className="flex items-end gap-1.5 h-16 mb-5 px-1">
              {[40, 65, 45, 80, 55, 70, 50, 90, 60, 75, 45, 85].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%` }}>
                  <div className={`w-full h-full rounded-t-sm ${i === 7 ? 'bg-teal-400' : 'bg-teal-200 dark:bg-teal-800/60'}`} />
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              {[
                { name: 'Grocery', amount: '-$45.20', color: 'bg-peach-300' },
                { name: 'Salary', amount: '+$3,120', color: 'bg-teal-400' },
                { name: 'Netflix', amount: '-$15.99', color: 'bg-sky-300' },
              ].map((tx) => (
                <div key={tx.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/40">
                  <div className={`w-7 h-7 rounded-lg ${tx.color}`} />
                  <div className="flex-1">
                    <div className="text-[11px] font-medium text-slate-700 dark:text-slate-300">{tx.name}</div>
                  </div>
                  <div className={`text-[11px] font-bold ${tx.amount.startsWith('+') ? 'text-teal-500' : 'text-slate-600 dark:text-slate-400'}`}>
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div
        className="absolute top-20 -left-20 w-80 h-80 bg-teal-200/25 dark:bg-teal-900/15 rounded-full blur-3xl"
        style={{ animation: 'float 8s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-10 -right-20 w-96 h-96 bg-peach-200/20 dark:bg-peach-400/5 rounded-full blur-3xl"
        style={{ animation: 'float-slow 10s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-teal-300/50 dark:bg-teal-600/30"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-2 h-2 rounded-full bg-peach-300/50 dark:bg-peach-400/20"
        style={{ animation: 'float-slow 8s ease-in-out infinite' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 pb-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800/40 text-teal-600 dark:text-teal-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Personal Finance App
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              <span className="text-slate-800 dark:text-white">Smart money</span>
              <br />
              <span className="bg-gradient-to-r from-teal-500 via-teal-400 to-sky-400 bg-clip-text text-transparent">
                management,
              </span>
              <br />
              <span className="text-slate-800 dark:text-white">simplified.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Track expenses, split bills with friends, manage budgets, and gain insights into your spending
              &mdash; all from your phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Download App
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 font-semibold hover:bg-teal-50 dark:hover:bg-teal-950/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#features" className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-teal-400 transition-colors">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <ArrowDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
