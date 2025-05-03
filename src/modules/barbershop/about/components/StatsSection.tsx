'use client'

import { Clock, Users, Award, Scissors } from 'lucide-react'
import React from 'react'
import StatCard from './StatCard'

export interface Stat {
  number: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const statsData: Stat[] = [
  { number: '7', label: 'Años de experiencia', icon: Clock },
  { number: '12', label: 'Barberos profesionales', icon: Users },
  { number: '5', label: 'Premios recibidos', icon: Award },
  { number: '15K+', label: 'Clientes satisfechos', icon: Scissors }
]

export default function StatsSection() {
  return (
    <section className="xl:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
