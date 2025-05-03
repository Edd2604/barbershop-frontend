import { motion } from 'framer-motion'

import { fadeIn, staggerContainer } from '@/lib/motion'

import { Badge } from './ui/badge'

interface HeroSectionProps {
  badgeText: string
  title: string
  description: string
}

const HeroSection = ({ badgeText, title, description }: HeroSectionProps) => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeIn}>
            <Badge className="mb-4">{badgeText}</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            variants={fadeIn}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
