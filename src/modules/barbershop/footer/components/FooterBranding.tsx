'use client'

import React from 'react'
import { BARBER_NAME } from '@/modules/shared/constants'

interface SocialLink {
  href: string
  icon: React.ReactNode
}

interface FooterBrandingProps {
  socialLinks: SocialLink[]
}

const SocialIcon = ({ href, icon }: SocialLink) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-secondary)] text-[var(--color-foreground)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/80 dark:bg-[var(--color-secondary)] dark:text-[var(--color-foreground)]/70 dark:hover:text-[var(--color-primary)] dark:hover:bg-[var(--color-secondary)]/50 transition-colors"
    >
      {icon}
    </a>
  )
}

export const FooterBranding = ({ socialLinks }: FooterBrandingProps) => {
  const words = BARBER_NAME.split(' ')
  const part1BarberName = words.slice(0, -1).join(' ')
  const part2BarberName = words[words.length - 1]

  return (
    <div className="md:col-span-2 space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
        <span>{part1BarberName}</span>{' '}
        <span className="text-[var(--color-primary)]">{part2BarberName}</span>
      </h3>
      <p className="text-[var(--color-foreground)]/70 text-sm md:text-base leading-relaxed">
        En {BARBER_NAME} ofrecemos servicios de barbería exclusivos para el caballero moderno, con productos premium y atención personalizada en un ambiente distinguido y sofisticado.
      </p>
      <div className="flex justify-center md:justify-start space-x-4 pt-6">
        {socialLinks.map((link, index) => (
          <SocialIcon key={index} href={link.href} icon={link.icon} />
        ))}
      </div>
    </div>
  )
}
