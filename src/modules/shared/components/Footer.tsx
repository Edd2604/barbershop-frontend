'use client'

import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

import { FooterBranding } from '@/modules/barbershop/footer/components/FooterBranding'
import { FooterContact } from '@/modules/barbershop/footer/components/FooterContact'
import { FooterCopyright } from '@/modules/barbershop/footer/components/FooterCopyright'
import { FooterNavigation } from '@/modules/barbershop/footer/components/FooterNavigation'

interface SocialLink {
  href: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  { href: 'https://facebook.com', icon: <Facebook size={20} /> },
  { href: 'https://instagram.com', icon: <Instagram size={20} /> },
  { href: 'https://twitter.com', icon: <Twitter size={20} /> },
  { href: 'https://youtube.com', icon: <Youtube size={20} /> }
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] transition-colors">
      <hr className="w-full h-px bg-[var(--color-foreground)]/20" />
      <div className="container px-4 pt-12 pb-8 md:pt-16 md:pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <FooterBranding socialLinks={socialLinks} />
          <FooterNavigation />
          <FooterContact />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  )
}
