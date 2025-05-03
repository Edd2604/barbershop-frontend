import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ScrollDownIndicator = () => (
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
    >
      <ChevronDown className="h-8 w-8 text-primary" />
    </motion.div>
  </div>
)

export default ScrollDownIndicator
