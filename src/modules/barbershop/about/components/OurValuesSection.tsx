import { Badge } from '@/modules/shared/components/ui/badge'
import ValueCard from './ValueCard'
import { defaultValues } from '@/data'
import { fadeIn, staggerContainer } from '@/lib/motion'
import { motion } from 'framer-motion'

export interface Value {
  title: string
  description: string
}

interface OurValuesSectionProps {
  values?: Value[]
}

const OurValuesSection = ({
  values = defaultValues
}: OurValuesSectionProps) => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeIn}>
          <Badge className="mb-4 inline-block">LO QUE NOS DEFINE</Badge>
        </motion.div>
        <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
          Nuestros Valores
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Estos son los principios que guían nuestro trabajo diario y nos
          definen como barbería.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {values.map((value, index) => (
          <motion.div key={index} variants={fadeIn}>
            <ValueCard value={value} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default OurValuesSection
