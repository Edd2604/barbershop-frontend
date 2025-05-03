'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/modules/shared/components/ui/button'
import { Label } from '@/modules/shared/components/ui/label'
import { Input } from '@/modules/shared/components/ui/input'
import { Checkbox } from '@/modules/shared/components/ui/checkbox'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const inputClassName =
    'h-12 w-full rounded-2xl border shadow-none px-4 placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)] focus:outline-none'

  return (
    <motion.div
      className="w-full max-w-md border border-[var(--color-primary)] rounded-2xl p-8 bg-[var(--color-background)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-display text-[var(--color-foreground)] text-center mb-2">
        BIENVENIDO
      </h2>
      <p className="text-center text-[var(--color-muted-foreground)] mb-8">
        Accede a tu cuenta
      </p>

      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            className={inputClassName}
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm">
            Contraseña
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className={`${inputClassName} pr-10`}
              placeholder="Ingresa tu contraseña"
            />
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] rounded-full transition-colors p-0"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="w-3.5 h-3.5 rounded" />
            <Label htmlFor="remember">Recordarme</Label>
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full rounded-full text-black"
        >
          Ingresar
        </Button>

        <div className="text-center text-[var(--color-muted-foreground)] text-sm mt-6">
          ¿No tienes una cuenta?{' '}
          <Link
            href="/auth/register"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors font-medium"
          >
            Regístrate
          </Link>
        </div>
      </form>
    </motion.div>
  )
}
