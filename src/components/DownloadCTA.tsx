import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Clock } from 'lucide-react'

export default function DownloadCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="download" ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 p-10 md:p-16 text-center text-white shadow-2xl shadow-teal-500/20"
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"
            style={{ animation: 'float-slow 10s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to take control of your finances?
            </h2>
            <p className="text-teal-100 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Your finances, completely private. No ads, no data selling, no compromises. Take control in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-teal-600 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer opacity-90">
                <Clock size={22} />
                <div className="text-left">
                  <div className="text-[10px] font-medium text-teal-400 uppercase tracking-wider">Coming Soon on</div>
                  <div className="text-base">Google Play</div>
                </div>
              </button>
            </div>

            <p className="text-sm text-teal-200">
              Built by{' '}
              <a
                href="https://mohitpalan.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-white hover:underline"
              >
                Mohit Palan <ExternalLink size={12} />
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
