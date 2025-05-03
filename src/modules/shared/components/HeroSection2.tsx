import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from './ui/badge';


// Definición de tipos para las props
interface HeroSection2Props {
  badgeText: string;
  title: string;
  description: string;
}

// Componente con función de tipo flecha y desestructuración de props
const HeroSection2 = ({
  badgeText,
  title,
  description,
}: HeroSection2Props) => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeIn}>
            <Badge className="mb-4">{badgeText}</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            variants={fadeIn}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection2;
