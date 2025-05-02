import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navLinks } from '../constants';

import Logo from './Logo';
import ActionButtons from './ActionButtons';
import { Button } from '@/modules/shared/components/ui/button';
import { X } from 'lucide-react';
import ThemeToggle from '@/modules/shared/components/theme-toggle';


interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--color-background)] pointer-events-none md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 w-4/5 bg-[var(--color-sidebar)] shadow-xl p-6 md:hidden z-50"
          >
            <div className="flex items-center justify-between mb-8">
              <Logo iconSize="h-6 w-6" textSize="text-lg" />
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </motion.div>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'text-[var(--color-primary)] font-semibold'
                      : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)]'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300',
                      pathname === link.href ? 'w-12' : 'w-0'
                    )}
                  ></span>
                </Link>
              ))}
              <div className="pt-4 border-t border-[var(--color-border)]">
                <ActionButtons isMobile setIsOpen={setIsOpen} />
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
