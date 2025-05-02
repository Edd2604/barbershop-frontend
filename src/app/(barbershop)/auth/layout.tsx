/* eslint-disable quotes */
'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-[calc(100vh-60px)] flex flex-col md:flex-row ">
        <div className="hidden md:block md:w-1/2 relative overflow-hidden bg-background">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center rounded-r-4xl"
            style={{ backgroundImage: "url('/auth5.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-gray-900/30 rounded-r-4xl" />
          <div className="relative z-10 h-full flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                ELEGANCE CUT STUDIO
              </h1>
              <p className="text-lg text-primary font-medium italic">
                Experiencia Premium de Barbería
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 bg-background flex flex-col items-center justify-center relative overflow-hidden rounded-r-md">
          <div className="md:hidden text-center mb-6 pt-10">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              ELEGANCE CUT
            </h1>
            <p className="text-sm text-primary font-medium italic">
              Experiencia Premium de Barbería
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
