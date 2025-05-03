import React from 'react'
import Link from 'next/link'
import { User, UserPlus } from 'lucide-react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import ThemeToggle from '@/modules/shared/components/theme-toggle'
import { Button } from '@/modules/shared/components/ui/button'

interface ActionButtonsProps {
  isMobile?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isMobile = false,
  setIsOpen
}) => {
  const toggleMenu = () => {
    if (isMobile && setIsOpen) {
      setIsOpen((prev) => !prev)
    }
  }

  return (
    <div
      className={cn(
        isMobile ? 'flex flex-col space-y-4' : 'flex items-center gap-2'
      )}
    >
      {isMobile ? (
        <>
          <Link href="/auth/signIn">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="default"
                className="w-full justify-start"
                onClick={toggleMenu}
              >
                <User size={16} className="mr-2" />
                Iniciar Sesión
              </Button>
            </motion.div>
          </Link>
          <Link href="/auth/register">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                size="default"
                className="w-full rounded-full text-black"
                onClick={toggleMenu}
              >
                <UserPlus size={16} className="mr-2" />
                Registrarse
              </Button>
            </motion.div>
          </Link>
        </>
      ) : (
        <>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ThemeToggle />
          </motion.div>
          <Link href="/auth/signIn">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className="border-2 rounded-full"
              >
                <User size={16} className="mr-1" />
                Iniciar Sesión
              </Button>
            </motion.div>
          </Link>
          <Link href="/auth/register">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                size="sm"
                className="rounded-full text-[var(--color-primary-foreground)]"
              >
                <UserPlus size={16} className="mr-1" />
                Registrarse
              </Button>
            </motion.div>
          </Link>
        </>
      )}
    </div>
  )
}

export default ActionButtons
