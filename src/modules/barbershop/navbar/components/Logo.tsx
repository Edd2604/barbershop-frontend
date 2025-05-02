import React from 'react';
import Link from 'next/link';
import { Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

import { BARBER_NAME } from '@/modules/shared/constants';

const letterVariants = {
  hover: { y: -3, transition: { duration: 0.2 } },
  rest: { y: 0, transition: { duration: 0.2 } },
};

interface LogoProps {
  iconSize?: string;
  textSize?: string;
}

const Logo: React.FC<LogoProps> = ({ iconSize = 'h-8 w-8', textSize = 'text-xl' }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        initial={{ scale: 0.9 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, type: 'spring', stiffness: 300 },
        }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Scissors className={`${iconSize} text-[var(--color-primary)]`} />
        </motion.div>
      </motion.div>
      <motion.div
        initial="rest"
        whileHover="hover"
        className={`${textSize} font-bold tracking-tight text-[var(--color-foreground)]`}
      >
        {Array.from(BARBER_NAME).map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{ delay: index * 0.03 }}
            className="inline-block"
          >
            {letter === ' ' ? <span> </span> : letter}
          </motion.span>
        ))}
      </motion.div>
    </Link>
  );
};

export default Logo;
