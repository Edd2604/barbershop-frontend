'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/modules/shared/components/ui/button'
import { ChevronUp } from 'lucide-react'

const BackToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 hover:cursor-pointer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isScrolled ? 1 : 0,
        scale: isScrolled ? 1 : 0.5
      }}
      transition={{ duration: 0.3 }}
    >
      <Button
        size="icon"
        className="rounded-full shadow-lg hover:cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp />
      </Button>
    </motion.div>
  )
}

export default BackToTopButton
