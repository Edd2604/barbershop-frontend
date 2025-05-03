import { Button } from '@/modules/shared/components/ui/button'
import { Badge } from '@/modules/shared/components/ui/badge'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface OurStorySectionProps {
  title: string
  description: string[]
  buttonText: string
  buttonLink: string
  imageSrc: string
}

const OurStorySection = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc
}: OurStorySectionProps) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge className="mb-4 inline-block">QUIÉNES SOMOS</Badge>
            <h2 className="text-4xl font-bold">{title}</h2>
          </motion.div>
          {description.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground mb-6"
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (description.length + 1) * 0.1
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            style={{ transformOrigin: 'center' }}
            className="inline-block"
          >
            <Button asChild size="lg" className="rounded-full">
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-3xl overflow-hidden hidden lg:block"
        >
          <Image
            src={imageSrc}
            alt={`Historia de ${title}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
)

export default OurStorySection
