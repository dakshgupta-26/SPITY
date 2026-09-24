import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Flame, Target, Lightbulb, CheckCircle2, XCircle, ChevronRight, Code, Trophy } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import { PRACTICE_QUESTIONS, type PracticeQuestion } from '../data/practiceData'

export const PracticeSection: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [showHint, setShowHint] = useState<boolean>(false)
  const [streak, setStreak] = useState<number>(14)
  const [solvedCount, setSolvedCount] = useState<number>(42)
  const [timerSeconds, setTimerSeconds] = useState<number>(45)

  const currentQ: PracticeQuestion = PRACTICE_QUESTIONS[questionIndex]

  // Countdown timer simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 60))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSelectOption = (optionId: string) => {
    if (selectedOptionId !== null) return // Lock once chosen
    setSelectedOptionId(optionId)

    const opt = currentQ.options.find((o) => o.id === optionId)
    if (opt?.isCorrect) {
      setStreak((s) => s + 1)
      setSolvedCount((c) => c + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOptionId(null)
    setShowHint(false)
    setTimerSeconds(45)
    setQuestionIndex((prev) => (prev + 1) % PRACTICE_QUESTIONS.length)
  }

  const selectedOption = currentQ.options.find((o) => o.id === selectedOptionId)

  return (
    <section id="practice" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[450px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="REAL-TIME INTERACTIVE PRACTICE"
        title="Understanding is step one."
        highlight="Practice makes it yours."
        subtitle="Test your conceptual intuition on staff-level questions. Receive immediate spatial explanations instead of opaque pass/fail marks."
      />

      {/* Realistic Technical Practice Console */}
      <div className="rounded-3xl bg-[#09090D] border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-xl">
        {/* Practice Top Telemetry Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] bg-zinc-950/80 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Question Tracker */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-violet-400 bg-violet-950/40 border border-violet-500/30 px-2.5 py-1 rounded">
              CHALLENGE {questionIndex + 1} OF {PRACTICE_QUESTIONS.length}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {currentQ.category} ❯ {currentQ.subCategory}
            </span>
          </div>

          {/* Right: Streak & Timer Metrics */}
          <div className="flex items-center gap-4 text-xs font-mono">
            {/* Solved Count */}
            <div className="hidden sm:flex items-center gap-1.5 text-violet-300 bg-violet-950/30 border border-violet-500/20 px-3 py-1 rounded-lg">
              <Trophy className="w-3.5 h-3.5 text-violet-400" />
              <span>{solvedCount} Solved</span>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-1.5 text-zinc-300 bg-zinc-900 border border-white/[0.08] px-3 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</span>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-1.5 text-amber-300 bg-amber-950/30 border border-amber-500/20 px-3 py-1 rounded-lg">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>{streak} Day Streak</span>
            </div>

            {/* Accuracy */}
            <div className="hidden md:flex items-center gap-1.5 text-emerald-300 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1 rounded-lg">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>96.4% Accuracy</span>
            </div>
          </div>
        </div>

        {/* Question & Interactive Body */}
        <div className="p-6 sm:p-10 space-y-6">
          {/* Question Text */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300">
                {currentQ.difficulty}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Code Snippet Block (if available) */}
          {currentQ.codeSnippet && (
            <div className="rounded-2xl bg-black/60 border border-white/[0.08] p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-zinc-500 text-[11px]">
                <div className="flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-violet-400" />
                  <span>source_snippet.ts</span>
                </div>
                <span>TypeScript</span>
              </div>
              <pre className="text-zinc-200 leading-relaxed font-mono">
                <code>{currentQ.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Answer Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((option) => {
              const isSelected = selectedOptionId === option.id
              const isSubmitted = selectedOptionId !== null

              let cardStyle =
                'bg-zinc-950/60 border-white/[0.08] hover:border-violet-500/40 text-zinc-200'

              if (isSubmitted) {
                if (option.isCorrect) {
                  cardStyle =
                    'bg-emerald-950/30 border-emerald-500/60 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                } else if (isSelected && !option.isCorrect) {
                  cardStyle =
                    'bg-rose-950/30 border-rose-500/60 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
                } else {
                  cardStyle = 'bg-zinc-950/30 border-white/[0.04] text-zinc-600 opacity-60'
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-xl border flex items-center justify-between gap-4 transition-all duration-200 ${cardStyle} ${
                    !isSubmitted ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {option.id}
                    </span>
                    <span className="text-sm font-medium">{option.text}</span>
                  </div>

                  {isSubmitted && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isSubmitted && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Explanation Banner (Appears on selection) */}
          <AnimatePresence>
            {selectedOption && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className={`p-5 rounded-2xl border ${
                  selectedOption.isCorrect
                    ? 'bg-emerald-950/20 border-emerald-500/30'
                    : 'bg-rose-950/20 border-rose-500/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  {selectedOption.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">
                      {selectedOption.isCorrect ? 'Conceptual Intuition Verified' : 'Common Misconception'}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {selectedOption.explanation}
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-violet-400">
                      Core Invariant: {currentQ.conceptPrinciple}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Interactive Toolbar: Hint & Next Button */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>{showHint ? 'Hide Hint' : 'View Concept Hint'}</span>
            </button>

            {selectedOptionId !== null ? (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors shadow-md"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs font-mono text-zinc-500">
                Select an option to evaluate
              </span>
            )}
          </div>

          {/* Hint disclosure */}
          {showHint && (
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed font-mono">
              💡 {currentQ.hint}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
