import { motion } from 'framer-motion'
import { Star, BookOpen, User, Clock, Rocket, Users } from 'lucide-react'
import { JSX } from 'react'

interface Value {
  title: string
  description: string
}

interface ValueCardProps {
  value: Value
}

const ValueCard = ({ value }: ValueCardProps) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Excelencia: <Star className="h-6 w-6" />,
    Profesionalidad: <BookOpen className="h-6 w-6" />,
    Personalización: <User className="h-6 w-6" />,
    Respeto: <Clock className="h-6 w-6" />,
    Innovación: <Rocket className="h-6 w-6" />,
    Comunidad: <Users className="h-6 w-6" />
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 h-full flex flex-col items-center text-center"
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
        {iconMap[value.title]}
      </div>
      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
      <p className="text-muted-foreground">{value.description}</p>
    </motion.div>
  )
}

export default ValueCard
