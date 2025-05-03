'use client'
import { TabsContent } from '@/modules/shared/components/ui/tabs'
import GalleryImageCard from './GalleryImageCard'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motion'
import MotionWrapper from './MotionWrapper'

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface GalleryTabContentProps {
  category: string;
  images: GalleryImage[];
}

const GalleryTabContent = ({ category, images }: GalleryTabContentProps) => {
  const filteredImages = category === 'all'
    ? images
    : images.filter((image) => image.category === category)

  return (
    <TabsContent value={category} className="mt-8">
      <MotionWrapper className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div key={index} variants={fadeIn}>
            <GalleryImageCard
              image={image.src}
              alt={image.alt}
              title={image.title}
            />
          </motion.div>
        ))}
      </MotionWrapper>
    </TabsContent>
  )
}

export default GalleryTabContent
