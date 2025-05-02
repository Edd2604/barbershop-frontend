'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Scissors, Menu, X, User, UserPlus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import ThemeToggle from './theme-toggle'
import { BARBER_NAME } from '../constants'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/catalog', label: 'Catálogo' },
  { href: '/barbers', label: 'Barberos' },
  { href: '/about', label: 'Nosotros' },
  { href: '/location', label: 'Ubicación' }
]

const letterVariants = {
  hover: { y: -3, transition: { duration: 0.2 } },
  rest: { y: 0, transition: { duration: 0.2 } }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.header
      key={pathname}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-background'
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.9 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, type: 'spring', stiffness: 300 }
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <Scissors className="h-8 w-8 text-primary" />
              </motion.div>
            </motion.div>
            <motion.div
              initial="rest"
              whileHover="hover"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              {Array.from(BARBER_NAME).map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ delay: index * 0.03 }}
                  className="inline-block"
                  style={{ color: 'var(--foreground)' }}
                >
                  {letter === ' ' ? <span> </span> : letter}
                </motion.span>
              ))}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden absolute left-1/2 transform -translate-x-1/2 md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative group text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-foreground font-semibold'
                    : 'text-foreground/70 hover:text-gray-700 dark:hover:text-primary'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full',
                    pathname === link.href ? 'w-full' : ''
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ThemeToggle />
            </motion.div>
            <Link href="/auth/signIn">
              {' '}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="border-2 hover: rounded-full"
                >
                  <User size={16} />
                  Iniciar Sesión
                </Button>
              </motion.div>
            </Link>
            <Link href="/auth/register">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-full text-black"
                >
                  <UserPlus size={16} />
                  Registrarse
                </Button>
              </motion.div>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ThemeToggle />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 bg-background/95 shadow-xl p-6 md:hidden z-50"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2">
                  <Scissors className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold text-foreground">
                    Elegance Cut Studio
                  </span>
                </Link>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative text-base font-medium transition-colors',
                      pathname === link.href
                        ? 'text-primary font-semibold'
                        : 'text-gray-700 dark:text-muted-foreground hover:text-primary'
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300',
                        pathname === link.href ? 'w-12' : 'w-0'
                      )}
                    ></span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <Link href="/auth/signIn">
                    {' '}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start mb-2"
                      >
                        Iniciar Sesión
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/auth/register">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="default" className="w-full">
                        Registrarse
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
