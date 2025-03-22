import React from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="w-full h-screen flex-center">{children}</main>
}
