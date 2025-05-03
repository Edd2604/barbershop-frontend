import { Star } from 'lucide-react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/modules/shared/components/ui/avatar'

const HeroAvatarsRating = () => (
  <div className="flex items-center gap-6 mt-12">
    <div className="flex -space-x-3">
      {[1, 2, 3].map((i) => (
        <Avatar key={i} className="border-2 border-background w-10 h-10">
          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} />
          <AvatarFallback>U{i}</AvatarFallback>
        </Avatar>
      ))}
    </div>
    <div>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="h-4 w-4 fill-yellow-500 text-yellow-500"
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        +2,500 clientes satisfechos
      </p>
    </div>
  </div>
)

export default HeroAvatarsRating
