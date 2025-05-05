'use client'
import { Badge } from '@/modules/shared/components/ui/badge'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motion'
import MotionWrapper from './MotionWrapper'

interface SectionHeaderProps {
  badge: string
  title: string
  description: string
}

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => (
  <MotionWrapper className="text-center mb-16">
    <motion.div variants={fadeIn}>
      <Badge className="mb-4">{badge}</Badge>
    </motion.div>
    <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
      {title}
    </motion.h2>
    <motion.p
      variants={fadeIn}
      className="text-muted-foreground max-w-lg mx-auto"
    >
      {description}
    </motion.p>
  </MotionWrapper>
)

export default SectionHeader
