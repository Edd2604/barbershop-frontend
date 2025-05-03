import Image from 'next/image'
import { motion } from 'framer-motion'

interface GalleryImageCardProps {
  image: string
  alt: string
  title: string
}

const GalleryImageCard = ({ image, alt, title }: GalleryImageCardProps) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
  >
    <Image
      src={image || '/placeholder.svg'}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <div className="h-1 w-10 bg-primary mt-2"></div>
      </div>
    </div>
  </motion.div>
)

export default GalleryImageCard
