import Image from 'next/image'
import { motion } from 'framer-motion'

import { staggerContainer, fadeIn } from '@/lib/motion'

interface HeroSectionProps {
  imageSrc: string
  title: string
  highlightedWord: string
  description: string
}

export default function HeroSection({
  imageSrc,
  title,
  highlightedWord,
  description
}: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10" />
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 absolute inset-0 z-20 flex items-center">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white dark:text-white"
            variants={fadeIn}
          >
            {title.replace(highlightedWord, '')}
            <motion.span className="text-primary">
              {' '}
              {highlightedWord}
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400"
            variants={fadeIn}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
