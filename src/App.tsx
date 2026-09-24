import { useLenis } from './hooks/useLenis'
import { CustomCursor } from './components/common/CustomCursor'
import { AmbientBackground } from './components/common/AmbientBackground'
import { Navbar } from './components/navbar/Navbar'
import { HeroSection } from './sections/HeroSection'
import { ProblemSection } from './sections/ProblemSection'
import { ConceptDemoSection } from './sections/ConceptDemoSection'
import { VisualLessonSection } from './sections/VisualLessonSection'
import { BentoCurriculumSection } from './sections/BentoCurriculumSection'
import { LearningPathsSection } from './sections/LearningPathsSection'
import { PracticeSection } from './sections/PracticeSection'
import { ProgressDashboardSection } from './sections/ProgressDashboardSection'
import { CommunitySection } from './sections/CommunitySection'
import { CoreUseCasesSection } from './sections/CoreUseCasesSection'
import { BrandStatementSection } from './sections/BrandStatementSection'
import { FinalCtaSection } from './sections/FinalCtaSection'
import { Footer } from './components/footer/Footer'

export function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP
  useLenis()

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F3F4F6] selection:bg-violet-600/30 selection:text-white">
      {/* Desktop Precision Cursor */}
      <CustomCursor />

      {/* Persistent Subtle Dark Background System */}
      <AmbientBackground />

      {/* Smart Sticky Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero with 3D Knowledge Network */}
        <HeroSection />

        {/* 2. The Problem: Memorization vs Understanding */}
        <ProblemSection />

        {/* 3. See The Concept: Live Binary Search Visualizer */}
        <ConceptDemoSection />

        {/* 4. Animation Is The Teacher: HTTP Request Flow */}
        <VisualLessonSection />

        {/* 5. What You Can Learn: Asymmetric Bento Grid */}
        <BentoCurriculumSection />

        {/* 6. Learning Paths: 5-Stage Sequential Progression */}
        <LearningPathsSection />

        {/* 7. Practice: Realistic Interactive Technical Console */}
        <PracticeSection />

        {/* 8. Progress Telemetry: SVG Radar & Mastery Heatmap */}
        <ProgressDashboardSection />

        {/* 9. Community: Real Aha! Moments & Discussions */}
        <CommunitySection />

        {/* 10. Three Core Pillars: BUILD, CRACK, GROW */}
        <CoreUseCasesSection />

        {/* 11. Keynote Brand Statement: "The future of learning is visual." */}
        <BrandStatementSection />

        {/* 12. Final Call To Action */}
        <FinalCtaSection />
      </main>

      {/* Modern Minimal Footer */}
      <Footer />
    </div>
  )
}

export default App
