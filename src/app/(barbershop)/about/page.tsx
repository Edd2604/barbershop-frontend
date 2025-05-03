'use client'
import OurStorySection from '@/modules/barbershop/about/components/OurStorySection'
import OurValuesSection from '@/modules/barbershop/about/components/OurValuesSection'
import StatsSection from '@/modules/barbershop/about/components/StatsSection'
import TimelineSection from '@/modules/barbershop/about/components/TimelineSection'
import CallToReserveSection from '@/modules/shared/components/CallToReserveSection'
import HeroSection from '@/modules/shared/components/HeroSection'

const timeline = [
  {
    year: 2018,
    title: 'Fundación',
    description:
      'BLADE abre sus puertas con un concepto innovador de barbería que combina técnicas tradicionales con tendencias modernas.',
    image: '/fondo1.jpeg'
  },
  {
    year: 2020,
    title: 'Expansión',
    description:
      'Tras el éxito inicial, ampliamos nuestras instalaciones y contratamos a nuevos barberos para satisfacer la creciente demanda.',
    image: '/fondo2.jpeg'
  },
  {
    year: 2022,
    title: 'Reconocimiento',
    description:
      "Ganamos el premio a 'Mejor Barbería de la Ciudad' y comenzamos a ofrecer cursos de formación para nuevos barberos.",
    image: '/fondo1.jpeg'
  },
  {
    year: 2023,
    title: 'Innovación',
    description:
      'Implementamos nuevas tecnologías y productos exclusivos para ofrecer una experiencia aún más premium a nuestros clientes.',
    image: '/fondo2.jpeg'
  },
  {
    year: 2025,
    title: 'Actualidad',
    description:
      'Hoy BLADE es un referente en el sector con un equipo de profesionales de primer nivel y clientes satisfechos que nos recomiendan.',
    image: '/fondo1.jpeg'
  }
]

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        badgeText="NUESTRA HISTORIA"
        title="Sobre Nosotros"
        description="Conoce la historia y los valores que hacen de BLADE un referente en el sector de la barbería."
      />
      <StatsSection />
      <OurStorySection
        title="Nuestra Historia"
        description={[
          'Elegance Cut Studio nació en 2018 con una visión clara: recuperar la tradición de la barbería clásica y adaptarla a las necesidades del hombre moderno. Lo que comenzó como un pequeño local con dos sillas, se ha convertido en un referente de la barbería en la ciudad.',
          'Fundada por Alex Rodríguez, maestro barbero con más de 15 años de experiencia, nuestra barbería ha crecido gracias a la pasión por el oficio y el compromiso con la excelencia en cada servicio.',
          'A lo largo de estos años, hemos formado un equipo de profesionales altamente cualificados que comparten nuestra filosofía: ofrecer servicios de barbería de primera calidad en un ambiente acogedor y profesional.'
        ]}
        buttonText="Conoce a Nuestro Equipo"
        buttonLink="/barbers"
        imageSrc="/fondo2.jpeg"
      />
      <TimelineSection timeline={timeline} />
      <OurValuesSection />
      <CallToReserveSection
        title="Forma Parte de Nuestra Historia"
        description="Ven a conocernos y descubre por qué somos la barbería preferida de la ciudad. Reserva tu cita hoy mismo."
        buttonText="Reservar Cita"
      />
    </div>
  )
}
