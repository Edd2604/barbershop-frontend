import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Button } from './ui/button';

// Definición de tipos para las props
interface CallToReserveSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

// Componente con función de tipo flecha y desestructuración de props
const CallToReserveSection = ({
  title,
  description,
  buttonText,
}: CallToReserveSectionProps) => {
  return (
    <section className="py-20 bg-primary text-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            className="text-black text-3xl md:text-5xl font-bold mb-4"
            variants={fadeIn}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-black text-lg mb-8"
            variants={fadeIn}
          >
            {description}
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link href="/reserva">
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ transformOrigin: 'center' }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-white hover:bg-white text-black"
                >
                  {buttonText}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToReserveSection;
