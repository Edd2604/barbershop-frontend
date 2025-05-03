'use client'

import React, { useEffect, useState } from 'react'

import DesktopHeader from '@/modules/barbershop/navbar/components/DesktopHeader'
import MobileHeader from '@/modules/barbershop/navbar/components/MobileHeader'
import MobileMenu from '@/modules/barbershop/navbar/components/MobileMenu'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const headerAnimationProps = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.2 }
  }

  return (
    <>
      <MobileHeader scrolled={scrolled} setIsOpen={setIsOpen} />
      <DesktopHeader
        scrolled={scrolled}
        headerAnimationProps={headerAnimationProps}
      />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Navbar
