'use client'

import React from 'react'
import Link from 'next/link'

import { navLinks } from '../../navbar/constants'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="hover:underline underline-offset-4 decoration-2 text-[var(--color-foreground)]/80 decoration-[var(--color-primary)]/30 hover:text-[var(--color-primary)] transition-colors"
    >
      {children}
    </Link>
  )
}

interface NavLink {
  href: string
  label: string
}

export const FooterNavigation = () => {
  const footerNavLinks: NavLink[] = [
    { href: '/barbershop', label: 'Inicio' },
    ...navLinks.map((link) => ({
      href: `/barbershop${link.href}`,
      label: link.label
    }))
  ]

  return (
    <div className="space-y-4 hidden md:block">
      <h3 className="text-[var(--color-foreground)] text-base font-semibold uppercase tracking-wider">
        Navegación
      </h3>
      <ul className="space-y-3 text-sm md:text-base">
        {footerNavLinks.map((link) => (
          <li key={link.href}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
