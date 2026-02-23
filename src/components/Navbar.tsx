import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Wallet } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ft-theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('ft-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-teal-200/20 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-shadow">
            <Wallet size={18} />
          </div>
          <span className="text-lg font-bold text-slate-800 dark:text-white">
            Finance<span className="text-teal-500">Tracker</span>
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-500 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          onClick={() => setDark(!dark)}
          className="sm:hidden p-2 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-500 dark:text-teal-400 cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  )
}
