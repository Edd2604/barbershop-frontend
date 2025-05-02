'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react'
import React from 'react'

import { BARBER_NAME } from '../constants'

const FooterLink = ({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className="hover:underline underline-offset-4 decoration-2 text-foreground/80 decoration-primary/30 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  )
}

interface SocialIconProps {
  href: string
  icon: React.ReactNode
}

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-foreground/70 hover:text-primary hover:bg-secondary/80 dark:bg-secondary dark:text-foreground/70 dark:hover:text-primary dark:hover:bg-secondary/50 transition-colors"
    >
      {icon}
    </motion.a>
  )
}

export default function Footer() {
  const words = BARBER_NAME.split(' ')
  const part1BarberName = words.slice(0, -1).join(' ')
  const part2BarberName = words[words.length - 1]
  return (
    <footer className="bg-background border-t border-border transition-colors">
      <div className="container px-4 pt-12 pb-8 md:pt-16 md:pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* principal */}
          <div className="md:col-span-2 space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-4 uppercase"
            >
              <span className="font-serif">{part1BarberName}</span>{' '}
              <span className="text-primary font-serif">{part2BarberName}</span>
            </motion.h3>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
              En {BARBER_NAME} ofrecemos servicios de barbería exclusivos para
              el caballero moderno, con productos premium y atención
              personalizada en un ambiente distinguido y sofisticado.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-6">
              <SocialIcon
                href="https://facebook.com"
                icon={<Facebook size={20} />}
              />
              <SocialIcon
                href="https://instagram.com"
                icon={<Instagram size={20} />}
              />
              <SocialIcon
                href="https://twitter.com"
                icon={<Twitter size={20} />}
              />
              <SocialIcon
                href="https://youtube.com"
                icon={<Youtube size={20} />}
              />
            </div>
          </div>

          {/* links */}
          <div className="space-y-4 hidden md:block">
            <h3 className="text-foreground text-base font-semibold uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FooterLink href="/barbershop">Inicio</FooterLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <FooterLink href="/barbershop/services">Servicios</FooterLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <FooterLink href="/barbershop/catalogo">Catálogo</FooterLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <FooterLink href="/barbershop/barberos">Barberos</FooterLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FooterLink href="/barbershop/nosotros">Nosotros</FooterLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <FooterLink href="/barbershop/ubicacion">Ubicación</FooterLink>
              </motion.li>
            </ul>
          </div>

          {/* contact */}
          <div className="space-y-4">
            <h3 className="text-foreground text-base font-semibold uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm md:text-base">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <MapPin className="h-6 w-6 mr-3 text-gray-700 dark:text-primary shrink-0" />
                <span className="text-foreground/70">
                  Av. El Sol 235, San Juan de Lurigancho 15096
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex items-start"
              >
                <Phone className="h-6 w-6 mr-3 text-gray-700 dark:text-primary shrink-0" />
                <span className="text-foreground/70">(01) 315 9600</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <Mail className="h-6 w-6 mr-3 text-gray-700 dark:text-primary shrink-0" />
                <span className="text-foreground/70">
                  info@rinconbarbero.com
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex items-start"
              >
                <Clock className="h-6 w-6 mr-3 text-gray-700 dark:text-primary shrink-0" />
                <div>
                  <p className="text-foreground/70">Lun - Vie: 9:00 - 20:00</p>
                  <p className="text-foreground/70">Sáb: 10:00 - 18:00</p>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-foreground/50 text-sm md:text-base text-center">
            © {new Date().getFullYear()} {BARBER_NAME}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-2 text-xs md:text-sm">
            <FooterLink href="/barbershop/privacidad">
              Política de privacidad
            </FooterLink>
            <span className="text-foreground/50">·</span>
            <FooterLink href="/barbershop/terminos">
              Términos de servicio
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
