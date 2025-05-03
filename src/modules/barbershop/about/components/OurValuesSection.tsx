import { Badge } from '@/modules/shared/components/ui/badge'
import ValueCard from './ValueCard'

interface Value {
  title: string
  description: string
}

interface OurValuesSectionProps {
  values?: Value[]
}

const defaultValues: Value[] = [
  {
    title: 'Excelencia',
    description:
      'Buscamos la perfección en cada corte y servicio que ofrecemos, cuidando hasta el más mínimo detalle.'
  },
  {
    title: 'Profesionalidad',
    description:
      'Nuestro equipo está en constante formación para ofrecer siempre las últimas técnicas y tendencias.'
  },
  {
    title: 'Personalización',
    description:
      'Cada cliente es único, por eso adaptamos nuestros servicios a las necesidades y preferencias individuales.'
  },
  {
    title: 'Respeto',
    description:
      'Valoramos el tiempo de nuestros clientes y nos comprometemos a ofrecer un servicio puntual y eficiente.'
  },
  {
    title: 'Innovación',
    description:
      'Incorporamos constantemente nuevas técnicas, productos y tecnologías para mejorar la experiencia de nuestros clientes.'
  },
  {
    title: 'Comunidad',
    description:
      'Creemos en crear un espacio donde los clientes se sientan parte de una comunidad que comparte valores y estilo.'
  }
]

const OurValuesSection = ({
  values = defaultValues
}: OurValuesSectionProps) => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge className="mb-4 inline-block">LO QUE NOS DEFINE</Badge>
        <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Estos son los principios que guían nuestro trabajo diario y nos
          definen como barbería.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValueCard key={index} value={value} />
        ))}
      </div>
    </div>
  </section>
)

export default OurValuesSection
