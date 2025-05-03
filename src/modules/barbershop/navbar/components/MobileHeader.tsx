'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/modules/shared/components/ui/button'

import Logo from './Logo'

interface MobileHeaderProps {
  scrolled: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ scrolled, setIsOpen }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 xl:hidden',
        scrolled
          ? 'bg-[var(--color-background)]/80 backdrop-blur-md shadow-sm'
          : 'bg-[var(--color-background)]'
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo
            iconSize="h-5 w-5 md:h-6 md:w-6"
            textSize="text-base md:text-lg"
          />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <Menu size={16} />
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
