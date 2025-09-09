"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Video, Palette, Radio, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesGrid() {
  const services = [
    {
      id: "camera-work",
      icon: Camera,
      title: "Camera Work",
      description: "Professional cinematography and photography services",
      features: ["4K/8K Video Recording", "Drone Cinematography", "Multi-Camera Setup", "Professional Lighting"],
      image: "/placeholder.svg?height=300&width=400&text=Camera+Work",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "video-editing",
      icon: Video,
      title: "Video Editing",
      description: "Post-production excellence with cutting-edge techniques",
      features: ["Color Grading", "Motion Graphics", "Sound Design", "Visual Effects"],
      image: "/placeholder.svg?height=300&width=400&text=Video+Editing",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "graphic-design",
      icon: Palette,
      title: "Graphic Design",
      description: "Visual storytelling through compelling design",
      features: ["Brand Identity", "Marketing Materials", "Digital Graphics", "Print Design"],
      image: "/placeholder.svg?height=300&width=400&text=Graphic+Design",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: "live-recording",
      icon: Radio,
      title: "Live Recording",
      description: "Real-time production for events and broadcasts",
      features: ["Live Streaming", "Event Coverage", "Multi-Camera Live", "Real-time Mixing"],
      image: "/placeholder.svg?height=300&width=400&text=Live+Recording",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = "/placeholder.svg?height=300&width=400&text=Service+Image"
  }

  return (
    <section id="services-grid" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50 overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                        <Icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground group-hover:text-foreground">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                      </div>
                    </div>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                      onError={handleImageError}
                    />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group-hover:scale-105 transition-transform duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
