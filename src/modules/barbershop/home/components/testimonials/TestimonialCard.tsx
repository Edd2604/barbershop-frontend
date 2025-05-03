import { motion } from 'framer-motion'
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@/modules/shared/components/ui/avatar'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  text: string
  rating: number
  image: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="bg-background rounded-3xl p-6 shadow-md border border-border/50 h-full flex flex-col relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-primary/10 rounded-full" />
    <div className="absolute bottom-0 left-0 w-16 h-16 -ml-6 -mb-6 bg-primary/5 rounded-full" />

    <div className="relative">
      <svg
        className="absolute top-0 right-0 w-10 h-10 text-primary/20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <div className="flex items-center mb-6">
        <Avatar className="h-14 w-14 mr-4 border-2 border-primary/20">
          <AvatarImage
            src={testimonial.image || '/placeholder.svg'}
            alt={testimonial.name}
          />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <div className="flex">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground italic flex-1 relative z-10">
        &quot;{testimonial.text}&quot;
      </p>
    </div>
  </motion.div>
)

export default TestimonialCard
