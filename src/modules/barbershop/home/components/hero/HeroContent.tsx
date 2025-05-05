import { motion } from 'framer-motion'
import { Calendar, ChevronDown } from 'lucide-react'
import { Badge } from '@/modules/shared/components/ui/badge'
import { Button } from '@/modules/shared/components/ui/button'
import HeroAvatarsRating from './HeroAvatarsRating'

const HeroContent = () => (
  <motion.div className="container mx-auto px-4 relative z-10">
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 border-yellow-500/20 backdrop-blur-sm">
        BARBERÍA PREMIUM
      </Badge>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
        Estilo que <span className="text-yellow-500">Trasciende</span> el Tiempo
      </h1>
      <p className="text-xl text-gray-400 mb-8 max-w-lg">
        Donde la tradición se encuentra con la innovación. Experimenta un
        servicio de barbería de élite diseñado para el hombre moderno.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button
          size="lg"
          className="rounded-full bg-yellow-500 text-black hover:bg-yellow-600"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Reservar Cita
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full border-white text-white bg-transparent hover:bg-white/10 hover:text-white focus:ring-0 focus:ring-offset-0"
        >
          Ver Servicios
          <ChevronDown className="ml-2 h-4 w-4 text-white" />
        </Button>
      </div>

      <HeroAvatarsRating />
    </motion.div>
  </motion.div>
)

export default HeroContent
