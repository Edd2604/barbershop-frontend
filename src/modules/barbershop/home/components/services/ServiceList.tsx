import { motion } from 'framer-motion'
import ServiceCard from '@/modules/barbershop/services/components/ServiceCard'
import { services } from '@/data'

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export default function ServiceList() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service) => (
        <motion.div key={service.id} variants={cardVariants}>
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  )
}
