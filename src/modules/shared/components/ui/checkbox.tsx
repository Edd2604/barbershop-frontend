'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-[var(--color-border)] data-[state=checked]:bg-[var(--color-primary)] data-[state=checked]:text-[var(--color-primary-foreground)] data-[state=checked]:border-[var(--color-primary)] focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 aria-invalid:ring-[var(--color-destructive)]/20 aria-invalid:border-[var(--color-destructive)] size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 bg-[var(--color-background)]',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
