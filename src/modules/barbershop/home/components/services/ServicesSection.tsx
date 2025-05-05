'use client'
import Link from 'next/link'
import { Button } from '@/modules/shared/components/ui/button'
import SectionHeader from './SectionHeader'
import ServiceList from './ServiceList'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeIn, staggerContainer } from '@/lib/motion'
import { ArrowRightIcon } from 'lucide-react'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      id="servicios"
      className="py-24"
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div variants={fadeIn}>
            <SectionHeader />
          </motion.div>
          <motion.div variants={fadeIn}>
            <Link href="/servicios">
              <Button
                variant="outline"
                className="rounded-full self-start md:self-auto transition-transform hover:scale-105"
              >
                Ver Todos
                <ArrowRightIcon />
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div variants={fadeIn}>
          <ServiceList />
        </motion.div>
      </div>
    </motion.section>
  )
}
