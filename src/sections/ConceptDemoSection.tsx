import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, SkipForward, ArrowRight, Zap } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'

interface SearchStep {
  left: number
  right: number
  mid: number
  description: string
  discardedRange: [number, number] | null
  found: boolean
  comparisons: number
}

const ARRAY_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const ConceptDemoSection: React.FC = () => {
  const [target, setTarget] = useState<number>(7)
  const [steps, setSteps] = useState<SearchStep[]>([])
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const timerRef = useRef<any>(null)

  // Compute all Binary Search steps deterministically for the selected target
  useEffect(() => {
    const computedSteps: SearchStep[] = []
    let left = 0
    let right = ARRAY_DATA.length - 1
    let comparisons = 0

    while (left <= right) {
      comparisons++
      const mid = Math.floor((left + right) / 2)
      const midVal = ARRAY_DATA[mid]

      if (midVal === target) {
        computedSteps.push({
          left,
          right,
          mid,
          description: `Midpoint index ${mid} (value ${midVal}) equals target ${target}. Target found!`,
          discardedRange: null,
          found: true,
          comparisons,
        })
        break
      } else if (midVal < target) {
        computedSteps.push({
          left,
          right,
          mid,
          description: `Midpoint value ${midVal} < target ${target}. The target must be in the right partition. Discarding elements 0 through ${mid}.`,
          discardedRange: [left, mid],
          found: false,
          comparisons,
        })
        left = mid + 1
      } else {
        computedSteps.push({
          left,
          right,
          mid,
          description: `Midpoint value ${midVal} > target ${target}. The target must be in the left partition. Discarding elements ${mid} through ${right}.`,
          discardedRange: [mid, right],
          found: false,
          comparisons,
        })
        right = mid - 1
      }
    }

    setSteps(computedSteps)
    setCurrentStepIndex(0)
    setIsPlaying(false)
  }, [target])

  // Playback timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1
          } else {
            setIsPlaying(false)
            return prev
          }
        })
      }, 1600)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, steps.length])

  const currentStep = steps[currentStepIndex] || {
    left: 0,
    right: 9,
    mid: 4,
    description: 'Ready to search.',
    found: false,
    comparisons: 0,
  }

  // Determine if index is active, discarded, or midpoint
  const isDiscarded = (index: number) => {
    return index < currentStep.left || index > currentStep.right
  }

  const isMid = (index: number) => {
    return index === currentStep.mid
  }

  const isTargetFound = currentStep.found && isMid(target - 1)

  return (
    <section id="demo" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <SectionHeader
        badge="INTERACTIVE VISUAL LEARNING DEMO"
        title="See it."
        highlight="Don't just read it."
        subtitle="Experience why SPITY changes everything. Instead of reading a paragraph about Binary Search, watch the search space halve in real time."
      />

      {/* Main Interactive Stage Container */}
      <div className="relative rounded-3xl bg-[#09090E]/90 border border-white/[0.1] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl">
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-zinc-950/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-sm font-bold text-white font-mono">
              ALGORITHM: BINARY_SEARCH.VIS
            </span>
          </div>

          {/* Target Number Picker */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-zinc-400">Target:</span>
            <div className="flex items-center gap-1 bg-zinc-900 border border-white/[0.1] rounded-lg p-1">
              {[3, 5, 7, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => setTarget(num)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                    target === num
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Array Playground */}
        <div className="p-6 sm:p-12 flex flex-col items-center justify-center">
          {/* Array Container */}
          <div className="w-full max-w-4xl py-8">
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3 justify-items-center">
              {ARRAY_DATA.map((value, index) => {
                const discarded = isDiscarded(index)
                const midpoint = isMid(index)
                const isFound = isTargetFound && midpoint

                return (
                  <div key={value} className="flex flex-col items-center gap-2 w-full">
                    {/* Index Label & Pointer Indicator */}
                    <div className="h-6 flex items-center justify-center text-[10px] font-mono">
                      {index === currentStep.left && index === currentStep.right ? (
                        <span className="text-violet-400 font-bold">L=R</span>
                      ) : index === currentStep.left ? (
                        <span className="text-sky-400 font-bold">L</span>
                      ) : index === currentStep.right ? (
                        <span className="text-indigo-400 font-bold">R</span>
                      ) : midpoint ? (
                        <span className="text-violet-300 font-bold">MID</span>
                      ) : (
                        <span className="text-zinc-600">{index}</span>
                      )}
                    </div>

                    {/* Array Cell */}
                    <motion.div
                      animate={{
                        scale: midpoint ? 1.08 : discarded ? 0.88 : 1,
                        opacity: discarded ? 0.2 : 1,
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className={`relative w-full aspect-square max-w-[68px] rounded-xl flex items-center justify-center font-mono text-lg sm:text-xl font-bold transition-all select-none ${
                        isFound
                          ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.7)] border-2 border-emerald-300'
                          : midpoint
                          ? 'bg-violet-600 text-white shadow-[0_0_24px_rgba(139,92,246,0.6)] border-2 border-violet-400'
                          : discarded
                          ? 'bg-zinc-900/40 text-zinc-600 border border-white/[0.04]'
                          : 'bg-zinc-900/90 text-zinc-100 border border-white/[0.12] hover:border-violet-500/40'
                      }`}
                    >
                      <span>{value}</span>

                      {/* Found Badge */}
                      {isFound && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute -top-3 -right-2 bg-emerald-500 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-full shadow-lg"
                        >
                          FOUND
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Value indicator */}
                    <span className="text-[10px] text-zinc-500 font-mono">
                      val: {value}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Real-time Step Log / Explanation Banner */}
          <div className="w-full max-w-3xl mt-4 p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.08] flex items-start gap-4">
            <div className="p-2 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 shrink-0 mt-0.5">
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold">
                  Step {currentStepIndex + 1} of {steps.length}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Comparisons: <strong className="text-white">{currentStep.comparisons}</strong>
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-medium">
                {currentStep.description}
              </p>
            </div>
          </div>

          {/* Interactive Playback Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause Simulation' : 'Play Step-by-Step'}</span>
            </button>

            <button
              onClick={() => {
                setIsPlaying(false)
                setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1))
              }}
              disabled={currentStepIndex >= steps.length - 1}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-sm font-medium border border-white/[0.08] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next Step</span>
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsPlaying(false)
                setCurrentStepIndex(0)
              }}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-sm font-medium border border-white/[0.08] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Bottom Educational Callout & Complexity Invariant Card */}
        <div className="px-6 py-6 border-t border-white/[0.08] bg-zinc-950/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-500/30 flex items-center justify-center text-violet-300 font-mono font-bold text-sm">
              O(log n)
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Logarithmic Time
              </div>
              <div className="text-xs text-zinc-400">
                Search space cut in half every comparison
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950/40 border border-sky-500/30 flex items-center justify-center text-sky-300 font-mono font-bold text-sm">
              3 steps
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Efficiency Proof
              </div>
              <div className="text-xs text-zinc-400">
                10 items solved in ≤4 checks vs linear 10
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <a
              href="#bento"
              className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 hover:text-violet-300 group"
            >
              <span>Explore 320+ Visual DSA Lessons</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
