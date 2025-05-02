import React from 'react'

import Navbar from '@/modules/shared/components/Navbar'
import Footer from '@/modules/shared/components/Footer'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <h1>{children} </h1>
      <Footer />
    </div>
  )
}
