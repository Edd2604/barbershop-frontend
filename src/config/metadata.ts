import type { Metadata } from 'next'

export const META_DATA: Metadata = {
  title: 'Barbershop',
  description: 'Sistema creado para una Barbería',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Barbershop Web App',
    statusBarStyle: 'default'
  }
}
