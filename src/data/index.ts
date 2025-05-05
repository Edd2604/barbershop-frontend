import { Value } from '@/modules/barbershop/about/components/OurValuesSection'

export const barbers = [
  {
    id: '1',
    name: 'Juan Pérez',
    role: 'Barbero Principal',
    image: '/barbers/barber1.jpeg',
    bio: 'Juan tiene más de 10 años de experiencia en cortes clásicos y modernos, siempre buscando la perfección en cada detalle.',
    specialties: ['Corte Clásico', 'Afeitado', 'Degradado']
  },
  {
    id: '2',
    name: 'Carlos Gómez',
    role: 'Especialista en Degradados',
    image: '/barbers/barber2.jpeg',
    bio: 'Carlos es un experto en degradados y diseños personalizados, apasionado por crear looks únicos para sus clientes.',
    specialties: ['Degradado', 'Diseño de Cabello', 'Tinte']
  },
  {
    id: '3',
    name: 'Miguel Rodríguez',
    role: 'Barbero Senior',
    image: '/barbers/barber3.jpeg',
    bio: 'Miguel combina técnicas tradicionales con un toque moderno, ofreciendo cortes impecables y un servicio excepcional.',
    specialties: ['Corte Tradicional', 'Afeitado con Navaja', 'Estilizado']
  },
  {
    id: '4',
    name: 'Andrés López',
    role: 'Especialista en Afeitado',
    image: '/barbers/barber4.jpeg',
    bio: 'Andrés es conocido por su precisión en el afeitado con navaja, brindando una experiencia relajante y de lujo.',
    specialties: ['Afeitado con Navaja', 'Cuidado de Barba', 'Corte Moderno']
  },
  {
    id: '5',
    name: 'Diego Martínez',
    role: 'Barbero Creativo',
    image: '/barbers/barber5.jpeg',
    bio: 'Diego se especializa en cortes creativos y personalizados, siempre innovando con las últimas tendencias.',
    specialties: ['Diseño de Cabello', 'Tinte', 'Degradado Creativo']
  },
  {
    id: '6',
    name: 'Luis Fernández',
    role: 'Barbero Clásico',
    image: '/barbers/barber6.jpeg',
    bio: 'Luis tiene un enfoque clásico, ofreciendo cortes atemporales que nunca pasan de moda, con un servicio de alta calidad.',
    specialties: ['Corte Clásico', 'Afeitado', 'Cuidado de Barba']
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'David Martínez',
    text: 'La mejor experiencia de barbería que he tenido. El ambiente, la atención y el resultado superaron mis expectativas.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 2,
    name: 'Javier López',
    text: 'Profesionales de primera. Mi corte y barba quedaron perfectos, y el trato fue excelente.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 3,
    name: 'Roberto Sánchez',
    text: 'Ambiente moderno y relajado. Los barberos son verdaderos artistas y el precio es justo por la calidad.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 4,
    name: 'Luis Fernández',
    text: 'Un lugar increíble para un corte de calidad. El equipo es muy profesional y el ambiente es acogedor.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 5,
    name: 'Marcos Pérez',
    text: 'Siempre salgo satisfecho. La atención al detalle y el servicio personalizado son excepcionales.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 6,
    name: 'Andrés López',
    text: 'Un servicio de primera calidad. La atención y el ambiente son inigualables.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 7,
    name: 'Diego Martínez',
    text: 'Un corte impecable. El equipo es muy profesional y el ambiente es muy acogedor.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: 8,
    name: 'Carlos Gómez',
    text: 'La mejor barbería de la ciudad. Siempre salgo con un look perfecto y una gran experiencia.',
    rating: 5,
    image: '/placeholder.svg?height=100&width=100'
  }
]

export const services = [
  {
    id: 1,
    name: 'Corte Premium',
    description: 'Corte personalizado con lavado y peinado',
    price: 35,
    duration: 45,
    image: '/fondo1.jpeg',
    popular: true
  },
  {
    id: 2,
    name: 'Barba Deluxe',
    description: 'Perfilado y arreglo completo de barba',
    price: 25,
    duration: 30,
    image: '/fondo2.jpeg',
    popular: false
  },
  {
    id: 3,
    name: 'Combo Total',
    description: 'Corte premium + barba deluxe + lavado de cabello',
    price: 50,
    duration: 75,
    image: '/fondo1.jpeg',
    popular: true
  },
  {
    id: 4,
    name: 'Tratamiento Facial',
    description: 'Limpieza facial profunda para hombres',
    price: 40,
    duration: 40,
    image: '/fondo2.jpeg',
    popular: false
  }
]

export const galleryImages = [
  {
    src: '/fondo1.jpeg',
    category: 'haircuts',
    alt: 'Corte de pelo 1',
    title: 'Corte 1'
  },
  { src: '/fondo2.jpeg', category: 'beards', alt: 'Barba 1', title: 'Barba 1' },
  {
    src: '/fondo1.jpeg',
    category: 'styles',
    alt: 'Estilo 1',
    title: 'Estilo 1'
  },
  {
    src: '/fondo2.jpeg',
    category: 'haircuts',
    alt: 'Corte de pelo 2',
    title: 'Corte 2'
  },
  { src: '/fondo1.jpeg', category: 'beards', alt: 'Barba 2', title: 'Barba 2' },
  {
    src: '/fondo2.jpeg',
    category: 'styles',
    alt: 'Estilo 2',
    title: 'Estilo 2'
  }
]

export const timeline = [
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

export const defaultValues: Value[] = [
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
