import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/modules/shared/components/ui/button'
import { fadeIn } from '@/lib/motion'

import SpecialtiesList from './SpecialtiesList'

interface Barber {
  id: string
  name: string
  role: string
  image?: string
  bio: string
  specialties: string[]
}

interface BarberCardProps {
  barber: Barber
}

const BarberCard = ({ barber }: BarberCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <motion.div
      variants={fadeIn}
      className="relative h-auto rounded-xl overflow-hidden shadow-xl group"
      onClick={toggleExpand}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="relative w-full h-[400px] sm:h-[500px]">
        <Image
          src={barber.image || '/placeholder.svg'}
          alt={barber.name}
          fill
          className="object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6 sm:p-8">
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1">
            {barber.name}
          </h3>
          <p className="text-primary font-medium mb-4">{barber.role}</p>

          <AnimatePresence>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                isExpanded
                  ? { height: 'auto', opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between overflow-hidden md:group-hover:height-auto md:group-hover:opacity-1"
            >
              <div>
                <p className="text-white/80 mb-4 text-sm sm:text-base">
                  {barber.bio}
                </p>
                <div className="mb-4">
                  <SpecialtiesList specialties={barber.specialties} />
                </div>
              </div>
              <Link href="/reserva" className="mt-2">
                <Button className="w-full">
                  Reservar con {barber.name.split(' ')[0]}
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default BarberCard
