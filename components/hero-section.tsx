"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Camera, Video, Palette, Radio } from "lucide-react"

export default function HeroSection() {
  const [currentService, setCurrentService] = useState(0)

  const services = [
    { icon: Camera, name: "Camera Work", description: "Professional cinematography" },
    { icon: Video, name: "Video Editing", description: "Post-production excellence" },
    { icon: Palette, name: "Graphic Design", description: "Visual storytelling" },
    { icon: Radio, name: "Live Recording", description: "Real-time production" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50" />
        <img
          src="/cinematic-film-production-studio-with-professional.jpg"
          alt="Production Studio Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Bringing Your
              <span className="text-secondary block">Vision to Life</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Professional media production services that transform your ideas into compelling visual stories. From
              concept to completion, we deliver excellence in every frame.
            </p>
          </div>

          {/* Service Showcase */}
          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <div className="flex items-center justify-center space-x-4 mb-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.name}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-500 ${
                      index === currentService
                        ? "bg-secondary text-secondary-foreground scale-110"
                        : "bg-card text-card-foreground hover:bg-secondary/20"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium hidden sm:block">{service.name}</span>
                  </div>
                )
              })}
            </div>
            <p className="text-secondary font-semibold text-lg">{services[currentService].description}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-400">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-0 animate-fade-in-up animate-delay-600">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up animate-delay-600">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
