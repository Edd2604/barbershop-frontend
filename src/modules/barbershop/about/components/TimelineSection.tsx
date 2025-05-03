import { motion } from 'framer-motion'
import { Badge } from '@/modules/shared/components/ui/badge'
import Image from 'next/image'

interface TimelineEvent {
  year: number
  title: string
  description: string
  image: string
}

interface TimelineSectionProps {
  timeline: TimelineEvent[]
}

const TimelineSection = ({ timeline }: TimelineSectionProps) => (
  <section className="xl:py-8">
    <div className="container mx-auto px-4">
      <div className="text-center mb-4 xl:mb-16">
        <Badge className="mb-4 inline-block uppercase tracking-wide text-sm font-semibold py-1 px-3 rounded-full">
          NUESTRA TRAYECTORIA
        </Badge>
        <h2 className="text-4xl font-bold mb-4">Línea de Tiempo</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Un recorrido por los momentos más importantes de nuestra historia.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-4 md:mb-20 last:mb-0 items-center text-center md:text-left`}
          >
            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-2xl overflow-hidden hidden md:block">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Badge className="inline-block px-4 py-1">{event.year}</Badge>
                <h3 className="text-2xl font-bold mb-4 mt-4">{event.title}</h3>
                <p className="text-gray-600 text-lg">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default TimelineSection
