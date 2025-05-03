'use client'

import { motion } from 'framer-motion'
import { Stat } from './StatsSection'

interface StatCardProps {
  stat: Stat
  index: number
}

export default function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate="visible"
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="rounded-full bg-primary/10 p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center">
        <stat.icon className="h-9 w-9 text-primary" />
      </div>
      <div className="text-4xl font-bold mb-2">{stat.number}</div>
      <p className="text-muted-foreground">{stat.label}</p>
    </motion.div>
  )
}
