import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Share2, ZoomIn, Play, ExternalLink } from "lucide-react"

export interface ReusableCardProps {
  image: string
  title: string
  description: string
  tags?: string[]
  type?: "image" | "video"
  likes?: number
  onClick?: () => void
  children?: React.ReactNode
}

export function ReusableCard({ image, title, description, tags = [], type, likes, onClick, children }: ReusableCardProps) {
  return (
    <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50 overflow-hidden rounded-xl bg-white/90" onClick={onClick}>
      <CardContent className="p-0 relative">
        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-xl border-b border-border"
          />
          {/* Type Indicator */}
          {type && (
            <div className="absolute bottom-2 left-2">
              <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                {type === "video" ? <Play className="h-3 w-3 mr-1" /> : <ZoomIn className="h-3 w-3 mr-1" />}
                {type}
              </Badge>
            </div>
          )}
          {/* Likes */}
          {typeof likes === "number" && (
            <div className="absolute bottom-2 right-2 flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="font-bold text-lg text-secondary">{likes}</span>
            </div>
          )}
        </div>
        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
          {children}
        </div>
      </CardContent>
    </Card>
  )
}
