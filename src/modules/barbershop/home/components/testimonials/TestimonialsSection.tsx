'use client'
import { Badge } from '@/modules/shared/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/modules/shared/components/ui/carousel'
import { testimonials } from '@/data'
import TestimonialCard from './TestimonialCard'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/motion'

const TestimonialsSection = () => (
  <section className="py-8">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeIn}>
          <Badge className="mb-4">TESTIMONIOS</Badge>
        </motion.div>
        <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
          Lo Que Dicen Nuestros Clientes
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-muted-foreground max-w-lg mx-auto"
        >
          Descubre por qué nuestros clientes nos eligen y confían en nosotros
          para su imagen personal.
        </motion.p>
      </motion.div>

      <Carousel className="w-full mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={fadeIn} className="p-4">
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
        <motion.div
          className="flex justify-center mt-8 gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeIn}>
            <CarouselPrevious className="relative inset-0 translate-y-0" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <CarouselNext className="relative inset-0 translate-y-0" />
          </motion.div>
        </motion.div>
      </Carousel>
    </div>
  </section>
)

export default TestimonialsSection
