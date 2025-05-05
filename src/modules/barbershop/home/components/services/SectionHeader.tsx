import { Badge } from '@/modules/shared/components/ui/badge'
import { motion } from 'framer-motion'

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function SectionHeader() {
  return (
    <motion.div variants={headerVariants} initial="hidden" animate="visible">
      <motion.div variants={childVariants}>
        <Badge className="mb-4">NUESTROS SERVICIOS</Badge>
      </motion.div>
      <motion.h2 variants={childVariants} className="text-4xl font-bold mb-4">
        Servicios Premium
      </motion.h2>
      <motion.p
        variants={childVariants}
        className="text-muted-foreground max-w-lg"
      >
        Ofrecemos una gama completa de servicios de barbería diseñados para
        realzar tu estilo personal y brindarte una experiencia excepcional.
      </motion.p>
    </motion.div>
  )
}
