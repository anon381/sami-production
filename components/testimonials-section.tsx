"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "Marketing Director",
      content:
        "Sami Production exceeded our expectations with their corporate video. The team was professional, creative, and delivered exactly what we envisioned.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      name: "Michael Chen",
      company: "Creative Agency",
      role: "Creative Director",
      content:
        "Working with Sami Production was a game-changer for our client campaigns. Their attention to detail and creative vision is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=MC",
    },
    {
      name: "Emily Rodriguez",
      company: "Event Planners Inc",
      role: "CEO",
      content:
        "The live recording services provided by Sami Production made our event unforgettable. Professional, reliable, and incredibly talented team.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=ER",
    },
  ]

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with Sami Production.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-10 h-10 p-0 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-10 h-10 p-0 bg-transparent"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-secondary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
