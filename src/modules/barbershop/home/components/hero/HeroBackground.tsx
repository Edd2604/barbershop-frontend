import Image from 'next/image'

const HeroBackground = () => (
  <div className="absolute inset-0 z-0">
    <Image
      src="/fondo1.jpeg"
      alt="Barbería moderna"
      fill
      className="object-cover brightness-50"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
  </div>
)

export default HeroBackground
