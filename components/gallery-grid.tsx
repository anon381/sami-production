"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn, Play, ExternalLink, Heart, Share2 } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  category: string
  type: "image" | "video"
  thumbnail: string
  fullImage: string
  description: string
  client: string
  year: string
  tags: string[]
  likes: number
}

export default function GalleryGrid() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const [filter, setFilter] = useState("all")

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Corporate Brand Video",
      category: "video-editing",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Corporate+Video",
      fullImage: "/placeholder.svg?height=600&width=800&text=Corporate+Video",
      description: "A compelling brand story video for a tech startup that increased their conversion rate by 40%.",
      client: "TechStart Inc.",
      year: "2024",
      tags: ["Corporate", "Branding", "Motion Graphics"],
      likes: 124,
    },
    {
      id: "2",
      title: "Wedding Cinematography",
      category: "camera-work",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Wedding+Video",
      fullImage: "/placeholder.svg?height=600&width=800&text=Wedding+Video",
      description: "Beautiful wedding cinematography capturing every precious moment with cinematic quality.",
      client: "Private Client",
      year: "2024",
      tags: ["Wedding", "Cinematography", "Emotional"],
      likes: 89,
    },
    {
      id: "3",
      title: "Restaurant Menu Design",
      category: "graphic-design",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Menu+Design",
      fullImage: "/placeholder.svg?height=600&width=800&text=Menu+Design",
      description: "Modern menu design that increased customer engagement and sales for a local restaurant.",
      client: "Bella Vista Restaurant",
      year: "2024",
      tags: ["Menu Design", "Print", "Restaurant"],
      likes: 67,
    },
    {
      id: "4",
      title: "Live Concert Recording",
      category: "live-recording",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Concert+Recording",
      fullImage: "/placeholder.svg?height=600&width=800&text=Concert+Recording",
      description: "Multi-camera live recording of a local band's concert with professional audio mixing.",
      client: "The Midnight Band",
      year: "2024",
      tags: ["Live", "Concert", "Multi-camera"],
      likes: 156,
    },
    {
      id: "5",
      title: "Product Photography",
      category: "camera-work",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Product+Photo",
      fullImage: "/placeholder.svg?height=600&width=800&text=Product+Photo",
      description: "High-quality product photography for e-commerce that boosted online sales.",
      client: "Fashion Forward",
      year: "2024",
      tags: ["Product", "E-commerce", "Studio"],
      likes: 92,
    },
    {
      id: "6",
      title: "Documentary Edit",
      category: "video-editing",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Documentary",
      fullImage: "/placeholder.svg?height=600&width=800&text=Documentary",
      description: "Award-winning documentary edit about local environmental conservation efforts.",
      client: "Green Earth Foundation",
      year: "2023",
      tags: ["Documentary", "Environmental", "Award-winning"],
      likes: 203,
    },
    {
      id: "7",
      title: "Brand Identity Package",
      category: "graphic-design",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Brand+Identity",
      fullImage: "/placeholder.svg?height=600&width=800&text=Brand+Identity",
      description: "Complete brand identity package including logo, colors, and marketing materials.",
      client: "Urban Fitness",
      year: "2024",
      tags: ["Branding", "Logo", "Identity"],
      likes: 78,
    },
    {
      id: "8",
      title: "Event Live Stream",
      category: "live-recording",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Live+Stream",
      fullImage: "/placeholder.svg?height=600&width=800&text=Live+Stream",
      description: "Professional live streaming setup for corporate conference with 1000+ viewers.",
      client: "Business Summit 2024",
      year: "2024",
      tags: ["Live Stream", "Corporate", "Conference"],
      likes: 134,
    },
    {
      id: "9",
      title: "Drone Cinematography",
      category: "camera-work",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=400&text=Drone+Video",
      fullImage: "/placeholder.svg?height=600&width=800&text=Drone+Video",
      description: "Stunning aerial cinematography for real estate marketing campaign.",
      client: "Premium Properties",
      year: "2024",
      tags: ["Drone", "Aerial", "Real Estate"],
      likes: 167,
    },
  ]

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  const toggleLike = (itemId: string) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = "/placeholder.svg?height=300&width=400&text=Image+Not+Found"
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Type Indicator */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
                      {item.type === "video" ? <Play className="h-3 w-3 mr-1" /> : <ZoomIn className="h-3 w-3 mr-1" />}
                      {item.type}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-secondary"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(item.id)
                      }}
                    >
                      <Heart className={`h-4 w-4 ${likedItems.has(item.id) ? "fill-current text-red-500" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-secondary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80 mb-2">
                        {item.client} • {item.year}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                        <ZoomIn className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-secondary z-10"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-card rounded-2xl overflow-hidden">
                {/* Image/Video */}
                <div className="lg:col-span-2">
                  <img
                    src={selectedItem.fullImage || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="w-full h-96 lg:h-full object-cover"
                    onError={handleImageError}
                  />
                </div>

                {/* Details */}
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{selectedItem.title}</h2>
                    <p className="text-secondary font-medium">
                      {selectedItem.client} • {selectedItem.year}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{selectedItem.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleLike(selectedItem.id)}
                          className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        >
                          <Heart
                            className={`h-4 w-4 mr-2 ${likedItems.has(selectedItem.id) ? "fill-current text-red-500" : ""}`}
                          />
                          {selectedItem.likes}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                        >
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
