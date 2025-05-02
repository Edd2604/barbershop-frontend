"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/modules/shared/components/ui/button';
import { Label } from '@/modules/shared/components/ui/label';
import { Input } from '@/modules/shared/components/ui/input';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputClassName = "h-12 w-full rounded-2xl border shadow-none px-4 placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)] focus:outline-none";

  return (
    <motion.div
      className="w-full max-w-md border border-[var(--color-primary)] rounded-2xl p-8 bg-[var(--color-background)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-display text-[var(--color-foreground)] text-center mb-2">
        REGÍSTRATE
      </h2>
      <p className="text-center text-[var(--color-muted-foreground)] mb-8">
        Crea tu cuenta
      </p>

      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="dni" className="text-sm">
            DNI
          </Label>
          <Input
            type="text"
            id="dni"
            className={inputClassName}
            placeholder="Ingresa tu DNI"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm">
            Número de Teléfono
          </Label>
          <Input
            type="tel"
            id="phone"
            className={inputClassName}
            placeholder="Ingresa tu número de teléfono"
          />
        </div>

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

        <div className="space-y-2">
          <Label htmlFor="confirm-password" className="text-sm">
            Confirmar Contraseña
          </Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              className={`${inputClassName} pr-10`}
              placeholder="Confirma tu contraseña"
            />
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] rounded-full transition-colors p-0"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full rounded-full text-black"
        >
          Registrarse
        </Button>

        <div className="text-center text-[var(--color-muted-foreground)] text-sm mt-6">
          ¿Ya tienes una cuenta?{' '}
          <Link
            href="/auth/signIn"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors font-medium"
          >
            Inicia sesión
          </Link>
        </div>
      </form>
    </motion.div>
  );
}
