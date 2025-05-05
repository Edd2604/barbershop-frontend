'use client'
import React from 'react'
import Link from 'next/link'
import { Badge } from '@/modules/shared/components/ui/badge'
import { Button } from '@/modules/shared/components/ui/button'
import BarberCard from '@/modules/barbershop/barbers/components/BarberCard'
import { barbers } from '@/data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/motion'
import { ArrowRightIcon } from 'lucide-react'

const BarbersSection = () => {
  return (
    <section id="equipo" className="xl:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeIn}>
            <Badge className="mb-4">NUESTRO EQUIPO</Badge>
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
            Maestros Barberos
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Conoce a nuestro equipo de profesionales apasionados por su oficio y
            comprometidos con la excelencia.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {barbers.map((barber) => (
            <motion.div key={barber.id} variants={fadeIn}>
              <BarberCard barber={barber} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href="/barbers">
            <Button variant="outline" className="rounded-full">
              Conoce a Todo el Equipo
              <ArrowRightIcon />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BarbersSection
