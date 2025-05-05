'use client'

import BarbersSection from '@/modules/barbershop/home/components/barbers/BarbersSection'
import GallerySection from '@/modules/barbershop/home/components/gallery/GallerySection'
import HeroSection from '@/modules/barbershop/home/components/hero/HeroSection'
import ServicesSection from '@/modules/barbershop/home/components/services/ServicesSection'
import TestimonialsSection from '@/modules/barbershop/home/components/testimonials/TestimonialsSection'
import BackToTopButton from '@/modules/shared/components/BackToTopButton'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BarbersSection />
      <TestimonialsSection />
      <BackToTopButton />
    </div>
  )
}
