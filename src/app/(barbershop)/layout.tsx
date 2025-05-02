'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import Navbar from '@/modules/shared/components/Navbar'
import Footer from '@/modules/shared/components/Footer'
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthRoute = pathname.startsWith('/auth')
  return (
    <div>
      <Navbar />
      <h1>{children} </h1>
      {/* para que el footer no aparezca en el auth */}
      {!isAuthRoute && <Footer />}
    </div>
  )
}
