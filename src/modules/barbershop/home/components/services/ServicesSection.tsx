'use client'
import Link from 'next/link'
import { Button } from '@/modules/shared/components/ui/button'
import SectionHeader from './SectionHeader'
import ServiceList from './ServiceList'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeIn, staggerContainer } from '@/lib/motion'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

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
          <SectionHeader />
          <Link href="/servicios">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Button
                variant="outline"
                className="rounded-full self-start md:self-auto transition-transform hover:scale-105"
              >
                Ver Todos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </motion.div>
          </Link>
        </div>
        <ServiceList />
      </div>
    </motion.section>
  )
}
