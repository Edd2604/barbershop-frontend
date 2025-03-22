'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Page() {
  const [loading] = useState(false)

  return (
    <>
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl sm:text-3xl">
            Iniciar Sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-10">
              <label htmlFor="name" className="flex flex-col gap-2">
                <span>Dni</span>
                <Input id="email" />
              </label>
              <label htmlFor="name" className="flex flex-col gap-2">
                <span>Número Telefónico</span>
                <Input id="email" />
              </label>
              <label htmlFor="name" className="flex flex-col gap-2">
                <span>Correo Electrónico</span>
                <Input id="email" />
              </label>

              <label htmlFor="password" className="flex flex-col gap-2">
                <span>Contraseña</span>
                <Input id="password" type="password" />
              </label>

              <label htmlFor="password" className="flex flex-col gap-2">
                <span>Confirmar Contraseña</span>
                <Input id="password" type="password" />
              </label>

              <div className="w-full flex-center flex-col gap-2 relative">
                <Button asChild variant={'outline'} className="text-xl w-full">
                  <Link href={'/auth/signIn'}>Iniciar Sesión</Link>
                </Button>
                o
                <Button disabled={loading} className="text-xl w-full">
                  {loading ? (
                    <AiOutlineLoading
                      size={18}
                      className="animate-spin ease-in-out"
                    />
                  ) : (
                    <>Registrarse</>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
