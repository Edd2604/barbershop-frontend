'use client'

import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import ScrollDownIndicator from './ScrollDownIndicator'

const HeroSection = () => (
  <section className="relative h-[calc(100vh-60px)] flex items-center overflow-hidden">
    <HeroBackground />
    <HeroContent />
    <ScrollDownIndicator />
  </section>
)

export default HeroSection
