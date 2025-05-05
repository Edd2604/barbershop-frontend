import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] selection:bg-[var(--color-primary)] selection:text-[var(--color-primary-foreground)] border-[var(--color-border)] flex h-9 w-full min-w-0 rounded-md border bg-[var(--color-background)] px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-[var(--color-foreground)]',
        'focus-visible:border-[var(--color-ring)] focus-visible:ring-[var(--color-ring)]/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-[var(--color-destructive)]/20 aria-invalid:border-[var(--color-destructive)]',
        className
      )}
      {...props}
    />
  )
}

export { Input }
