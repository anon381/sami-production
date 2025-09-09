"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface ServiceDetailHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
}

export default function ServiceDetailHero({ title, subtitle, description, image }: ServiceDetailHeroProps) {
  return (
    <section className="relative pt-20 pb-20 bg-gradient-to-br from-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">{title}</h1>
              <h2 className="text-xl md:text-2xl text-secondary mb-6">{subtitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-200">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Play className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up animate-delay-400">
            <div className="relative">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
