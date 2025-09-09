"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

interface ServicePortfolioProps {
  portfolio: string[]
}

export default function ServicePortfolio({ portfolio }: ServicePortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            See examples of our professional work and the quality we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.map((image, index) => (
            <Card
              key={index}
              className={`group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0 relative">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-secondary"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Portfolio"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
