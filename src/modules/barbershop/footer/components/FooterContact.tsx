'use client'

import React from 'react'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

interface ContactItem {
  icon: React.ReactNode
  text: React.ReactNode
}

export const FooterContact = () => {
  const contactItems: ContactItem[] = [
    {
      icon: (
        <MapPin className="h-6 w-6 mr-3 text-gray-700 dark:text-[var(--color-primary)] shrink-0" />
      ),
      text: 'Av. El Sol 235, San Juan de Lurigancho 15096'
    },
    {
      icon: (
        <Phone className="h-6 w-6 mr-3 text-gray-700 dark:text-[var(--color-primary)] shrink-0" />
      ),
      text: '(01) 315 9600'
    },
    {
      icon: (
        <Mail className="h-6 w-6 mr-3 text-gray-700 dark:text-[var(--color-primary)] shrink-0" />
      ),
      text: 'info@rinconbarbero.com'
    },
    {
      icon: (
        <Clock className="h-6 w-6 mr-3 text-gray-700 dark:text-[var(--color-primary)] shrink-0" />
      ),
      text: (
        <div>
          <p className="text-[var(--color-foreground)]/70">
            Lun - Vie: 9:00 - 20:00
          </p>
          <p className="text-[var(--color-foreground)]/70">
            Sáb: 10:00 - 18:00
          </p>
        </div>
      )
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-[var(--color-foreground)] text-base font-semibold uppercase tracking-wider">
        Contacto
      </h3>
      <ul className="space-y-4 text-sm md:text-base">
        {contactItems.map((item, index) => (
          <li key={index} className="flex items-start">
            {item.icon}
            <span className="text-[var(--color-foreground)]/70">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
