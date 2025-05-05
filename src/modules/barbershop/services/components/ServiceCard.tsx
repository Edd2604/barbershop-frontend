import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/modules/shared/components/ui/button'
import { Badge } from '@/modules/shared/components/ui/badge'
import { Clock, ArrowRightIcon } from 'lucide-react'

interface Service {
  id: number
  name: string
  description: string
  price: number
  duration: number
  image: string
  popular: boolean
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-background rounded-3xl overflow-hidden shadow-lg border border-border/50"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image || '/placeholder.svg'}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        {service.popular && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            Popular
          </Badge>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{service.name}</h3>
          <span className="text-xl font-bold text-primary">
            ${service.price}
          </span>
        </div>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{service.duration} min</span>
          </div>
          <Link href="/servicios">
            <Button variant="ghost" size="sm" className="rounded-full">
              Reservar
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
