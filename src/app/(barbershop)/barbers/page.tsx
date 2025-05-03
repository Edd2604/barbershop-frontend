'use client'
import TeamSection from '@/modules/barbershop/barbers/components/TeamSection'
import HeroSection from '@/modules/shared/components/HeroSection'
import { barbers } from '@/data'
import StepContentSection from '@/modules/shared/components/StepContentSection'
import CallToReserveSection from '@/modules/shared/components/CallToReserveSection'
import HeroSection2 from '@/modules/shared/components/HeroSection2'

export default function BarbersPage() {
  return (
    <div>
      {/* <HeroSection
        imageSrc={'/fondo1.jpeg'}
        title={'Nuestros '}
        highlightedWord={'Barberos'}
        description={
          'Conoce al equipo de profesionales que harán realidad tu mejor versión.'
        }
      /> */}
      <HeroSection2
        badgeText="NUESTRO EQUIPO"
        title="Maestros Barberos"
        description="Conoce a nuestro equipo de profesionales apasionados por su oficio y comprometidos con la excelencia."
      />
      <TeamSection barbers={barbers} />
      <StepContentSection
        title="Únete a Nuestro Equipo"
        subtitle="OPORTUNIDADES"
        description="En Elegance Cut Studio siempre estamos buscando talento. Si eres un barbero apasionado, con experiencia y quieres formar parte de un equipo profesional y en constante crecimiento, nos encantaría conocerte."
        listTitle="Ofrecemos:"
        listItems={[
          'Formación continua',
          'Ambiente de trabajo profesional',
          'Oportunidades de crecimiento',
          'Salario competitivo'
        ]}
        buttonText="Reservar Ahora"
        buttonLink="/reservar"
        imagePosition="left"
        imageAlt="Experiencia premium de barbería"
        imageSrc="/fondo2.jpeg"
      />
      <CallToReserveSection
        title="Confía en los Mejores Profesionales"
        description="Nuestro equipo de barberos está listo para ofrecerte el mejor servicio. Reserva tu cita hoy mismo y experimenta la diferencia."
        buttonText="Reservar Cita"
      />
    </div>
  )
}
