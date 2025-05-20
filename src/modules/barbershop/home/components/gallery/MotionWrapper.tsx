'use client'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/motion'
import React from 'react'

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
  isStagger?: boolean
}

const MotionWrapper = ({
  children,
  className,
  isStagger = true
}: MotionWrapperProps) => (
  <motion.div
    className={className}
    variants={isStagger ? staggerContainer : fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
)

export default MotionWrapper
