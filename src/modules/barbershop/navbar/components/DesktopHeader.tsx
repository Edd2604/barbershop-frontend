import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navLinks } from '../constants';

import Logo from './Logo';
import ActionButtons from './ActionButtons';


interface DesktopHeaderProps {
  scrolled: boolean;
  headerAnimationProps: MotionProps;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ scrolled, headerAnimationProps }) => {
  const pathname = usePathname();

  return (
    <motion.header
      {...headerAnimationProps}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 hidden md:block',
        scrolled
          ? 'bg-[var(--color-background)]/80 backdrop-blur-md shadow-sm'
          : 'bg-[var(--color-background)]'
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative group text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-[var(--color-foreground)] font-semibold'
                    : 'text-[var(--color-foreground)]/70 hover:text-[var(--color-foreground)]'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full',
                    pathname === link.href ? 'w-full' : ''
                  )}
                ></span>
              </Link>
            ))}
          </nav>
          <ActionButtons />
        </div>
      </div>
    </motion.header>
  );
};

export default DesktopHeader;
