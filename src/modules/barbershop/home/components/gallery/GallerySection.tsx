'use client'
import {
  Tabs,
  TabsList,
  TabsTrigger
} from '@/modules/shared/components/ui/tabs'
import { galleryImages } from '@/data'
import SectionHeader from './SectionHeader'
import GalleryTabContent from './GalleryTabContent'
import MotionWrapper from './MotionWrapper'

interface TabCategory {
  value: string
  label: string
}

const GallerySection = () => {
  const tabCategories: TabCategory[] = [
    { value: 'all', label: 'Todos' },
    { value: 'haircuts', label: 'Cortes' },
    { value: 'beards', label: 'Barbas' },
    { value: 'styles', label: 'Estilos' }
  ]

  return (
    <section id="galería" className="xl:py-8">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="NUESTROS TRABAJOS"
          title="Galería de Estilos"
          description="Explora nuestra colección de cortes y estilos realizados por nuestro equipo de barberos expertos."
        />

        <Tabs defaultValue="all" className="mb-12">
          <MotionWrapper className="flex justify-center">
            <TabsList className="rounded-full">
              {tabCategories.map(({ value, label }) => (
                <MotionWrapper key={value} isStagger={false}>
                  <TabsTrigger value={value} className="rounded-full">
                    {label}
                  </TabsTrigger>
                </MotionWrapper>
              ))}
            </TabsList>
          </MotionWrapper>

          {tabCategories.map(({ value }) => (
            <GalleryTabContent
              key={value}
              category={value}
              images={galleryImages}
            />
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default GallerySection
