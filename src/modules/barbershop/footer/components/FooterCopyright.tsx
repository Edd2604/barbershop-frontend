'use client'

import React from 'react'
import Link from 'next/link'
import { BARBER_NAME } from '@/modules/shared/constants'

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

export const FooterCopyright = () => {
  return (
    <div className="mt-12 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <p className="text-[var(--color-foreground)]/50 text-sm md:text-base text-center">
        © {new Date().getFullYear()} {BARBER_NAME}. Todos los derechos reservados.
      </p>
      <div className="flex gap-2 text-xs md:text-sm">
        <FooterLink href="/barbershop/privacidad">Política de privacidad</FooterLink>
        <span className="text-[var(--color-foreground)]/50">·</span>
        <FooterLink href="/barbershop/terminos">Términos de servicio</FooterLink>
      </div>
    </div>
  )
}
