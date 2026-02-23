import { Wallet, Github, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white">
              <Wallet size={16} />
            </div>
            <span className="font-bold text-white">
              Finance<span className="text-teal-400">Tracker</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://mohitpalan.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-teal-400 transition-colors"
            >
              Portfolio <ExternalLink size={12} />
            </a>
            <a
              href="https://github.com/mohitpalan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-teal-400 transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500">&copy; {new Date().getFullYear()} Mohit Palan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
