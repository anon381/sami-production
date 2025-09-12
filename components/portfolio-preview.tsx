"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function PortfolioPreview() {
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

  const portfolioItems = [
    {
      title: "Corporate Brand Film",
      category: "Video Production",
    image: "/corporate-video-production.png",
      description: "A compelling brand story that showcases company values and vision.",
    },
    {
      title: "Wedding Cinematography",
      category: "Event Coverage",
    image: "/professional-video-production-team-working-in-mode.jpg",
      description: "Capturing precious moments with cinematic elegance and emotion.",
    },
    {
      title: "Product Launch Campaign",
      category: "Commercial",
    image: "/cinematic-film-production-studio-with-professional.jpg",
      description: "Dynamic visuals that drive engagement and boost sales.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-secondary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore some of our recent projects that showcase our commitment to excellence and creative storytelling
            across various industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-on-scroll group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary" className="rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <Link href="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
