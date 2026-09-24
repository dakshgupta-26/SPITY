import React from 'react'
import { ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Info (2 columns on md) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-700 p-[1px]">
                <div className="w-full h-full bg-[#09090D] rounded-[7px] flex items-center justify-center">
                  <span className="font-bold text-sm text-white">S</span>
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                SPITY
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              The next-generation visual learning platform. Teaching difficult computer science, engineering, and competitive concepts through interactive visual storytelling.
            </p>

            <div className="pt-2 flex items-center gap-3 text-zinc-400">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Learn */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Learn
            </h4>
            <ul className="space-y-2">
              <li><a href="#bento" className="hover:text-white transition-colors">Data Structures</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">Algorithms</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">React & Web</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">Node.js Internals</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">DBMS & SQL</a></li>
            </ul>
          </div>

          {/* Column 2: Paths */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Paths
            </h4>
            <ul className="space-y-2">
              <li><a href="#paths" className="hover:text-white transition-colors">Frontend Architecture</a></li>
              <li><a href="#paths" className="hover:text-white transition-colors">Backend & Distributed</a></li>
              <li><a href="#paths" className="hover:text-white transition-colors">DSA Mastery</a></li>
              <li><a href="#paths" className="hover:text-white transition-colors">AI Systems Engineer</a></li>
              <li><a href="#paths" className="hover:text-white transition-colors">GATE CS Excellence</a></li>
              <li><a href="#paths" className="hover:text-white transition-colors">FAANG System Design</a></li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#demo" className="hover:text-white transition-colors">Binary Search Demo</a></li>
              <li><a href="#visual-lesson" className="hover:text-white transition-colors">HTTP Protocol Flow</a></li>
              <li><a href="#practice" className="hover:text-white transition-colors">Interactive Practice</a></li>
              <li><a href="#progress" className="hover:text-white transition-colors">Mastery Radar</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">Visual Pedagogy</a></li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About SPITY</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers (We're Hiring)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 font-mono text-[11px]">
          <div>
            © 2026 SPITY Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-violet-400 font-bold">SPITY:</span>
            <span>Learn. Build. Become.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
