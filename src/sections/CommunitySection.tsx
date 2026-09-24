import React from 'react'
import { motion } from 'framer-motion'
import { ThumbsUp, Sparkles, Users, ArrowRight } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import { COMMUNITY_POSTS } from '../data/communityData'

export const CommunitySection: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[450px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <SectionHeader
        badge="COMMUNITY PERSPECTIVE & AHA MOMENTS"
        title="Learn together."
        highlight="Build together."
        subtitle="Real engineers and students sharing the exact moment a notoriously difficult computer science concept finally clicked in their minds."
      />

      {/* Community Discussion Feed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COMMUNITY_POSTS.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-6 sm:p-7 bg-[#09090E]/80 border border-white/[0.08] hover:border-violet-500/30 transition-all shadow-lg flex flex-col justify-between group"
          >
            {/* Post Header: User, Role, Concept Tag */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${post.avatarColor} flex items-center justify-center font-bold text-white text-sm shadow-sm`}
                  >
                    {post.handle.slice(1, 3).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{post.handle}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      <span className="text-xs font-normal text-zinc-500">{post.timeAgo}</span>
                    </div>
                    <div className="text-xs text-zinc-400">{post.role}</div>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-violet-950/40 text-violet-300 border border-violet-500/30">
                  {post.conceptTag}
                </span>
              </div>

              {/* Title & Eureka Story */}
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                "{post.title}"
              </h4>

              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed mb-4">
                {post.message}
              </p>
            </div>

            {/* Post Footer: Extracted Core Insight & Telemetry */}
            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] text-xs font-mono text-zinc-400 flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-zinc-300">Spatial Takeaway:</strong> {post.insight}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span className="text-violet-400/80">{post.visualLabel}</span>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ThumbsUp className="w-3.5 h-3.5 text-violet-400" />
                  <span>{post.upvotes} found this intuitive</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Community Banner */}
      <div className="mt-10 p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400 shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              Join 40,000+ visual thinkers
            </h4>
            <p className="text-xs text-zinc-400">
              Interactive whiteboard discussions, live algorithm walkthroughs, and peer intuition breakdowns.
            </p>
          </div>
        </div>

        <a
          href="#demo"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] px-4 py-2.5 rounded-xl transition-all"
        >
          <span>Explore Community Sandbox</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  )
}
