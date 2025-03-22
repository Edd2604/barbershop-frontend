import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { META_DATA } from '@/app/config/metadata'
import { aldrich } from '@/app/config/fonts'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { NextAuthProvider } from '@/components/providers/session-provider'
import './globals.css'

export const metadata: Metadata = META_DATA

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="scrollbar-thin scrollbar-track-background scrollbar-thumb-primary"
    >
      <body className={`${aldrich.className} antialiased`}>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
