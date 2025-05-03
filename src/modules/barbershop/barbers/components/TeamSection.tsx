import { motion } from 'framer-motion'

import { staggerContainer } from '@/lib/motion'

import BarberCard from './BarberCard'

interface Barber {
  id: string
  name: string
  role: string
  image?: string
  bio: string
  specialties: string[]
}

interface TeamSectionProps {
  barbers: Barber[]
}

const TeamSection = ({ barbers }: TeamSectionProps) => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {barbers.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
