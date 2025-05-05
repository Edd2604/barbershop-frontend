import React from 'react'

import { InstallButton } from '@/modules/shared/components/install-button'
import { NavAdmin } from '@/modules/admin/admin-navbar'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="w-screen h-[60px] flex items-center justify-end px-5">
        <div className="flex-center gap-2 ">
          <InstallButton />
        </div>
      </header>
      <div className="flex h-[calc(100dvh-60px)] relative w-screen ">
        <NavAdmin />
        <main
          className={
            ' w-full h-full relative bg-secondary px-2 py-5 sm:p-10 flex flex-col gap-5 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-background scrollbar-thumb-primary'
          }
        >
          {children}
        </main>
      </div>
    </>
  )
}
