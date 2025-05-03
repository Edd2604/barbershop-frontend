'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/modules/shared/components/ui/button'

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
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isScrolled ? 1 : 0,
        scale: isScrolled ? 1 : 0.5
      }}
      transition={{ duration: 0.3 }}
    >
      <Button
        size="icon"
        className="rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </Button>
    </motion.div>
  )
}

export default BackToTopButton
