import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeIn } from '@/lib/motion';
import { Button } from './ui/button';

interface StepContentSectionProps {
  title: string;
  subtitle: string;
  description: string;
  listItems?: string[];
  listTitle?: string;
  buttonText: string;
  buttonLink: string;
  imagePosition?: 'left' | 'right';
  imageAlt: string;
  imageSrc: string;
}

const StepContentSection = ({
  title,
  subtitle,
  description,
  listItems = [],
  listTitle,
  buttonText,
  buttonLink,
  imagePosition = 'left',
  imageAlt,
  imageSrc,
}: StepContentSectionProps) => {
  const imageFirst = imagePosition === 'left';

  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imageFirst ? '' : 'lg:grid-flow-dense'}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={`relative h-[500px] rounded-xl overflow-hidden hidden lg:block ${imageFirst ? '' : 'lg:col-start-2'}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={imageFirst ? '' : 'lg:col-start-1'}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-10 bg-primary"></div>
              <span className="text-primary uppercase text-sm font-medium tracking-wider">
                {subtitle}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-muted-foreground mb-6 text-lg">{description}</p>
            {listItems.length > 0 && (
              <>
                <p className="text-muted-foreground mb-8 text-lg">
                  {listTitle}
                </p>
                <ul className="space-y-3 mb-8">
                  {listItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <Link href={buttonLink}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ transformOrigin: 'center' }}
                className="inline-block"
              >
                <Button size="lg" className="rounded-full">
                  {buttonText}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepContentSection;
