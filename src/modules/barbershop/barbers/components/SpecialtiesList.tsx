interface SpecialtiesListProps {
  specialties: string[]
}

const SpecialtiesList = ({ specialties }: SpecialtiesListProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {specialties.map((specialty, index) => (
        <span
          key={index}
          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
        >
          {specialty}
        </span>
      ))}
    </div>
  )
}

export default SpecialtiesList
