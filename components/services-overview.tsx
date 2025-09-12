"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Video, Palette, Radio, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Camera,
      title: "Camera Work",
      description: "Professional cinematography with state-of-the-art equipment and creative vision.",
      features: ["4K/8K Recording", "Drone Cinematography", "Multi-Camera Setup", "Professional Lighting"],
    image: "/professional-camera-equipment-cinematography.jpg",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Post-production excellence that brings your footage to life with precision and artistry.",
      features: ["Color Grading", "Motion Graphics", "Sound Design", "Visual Effects"],
    image: "/video-editing-suite-professional.jpg",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Visual storytelling through compelling graphics, branding, and digital artwork.",
      features: ["Brand Identity", "Motion Graphics", "Print Design", "Digital Assets"],
    image: "/graphic-design-studio-workspace.jpg",
    },
    {
      icon: Radio,
      title: "Live Recording",
      description: "Real-time production services for events, streams, and live performances.",
      features: ["Multi-Camera Live", "Live Streaming", "Event Coverage", "Real-time Editing"],
    image: "/live-recording-setup-professional.jpg",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive media production services that transform your vision into
            compelling visual stories.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="animate-on-scroll group bg-card hover:bg-secondary/5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <Link href="/services">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
