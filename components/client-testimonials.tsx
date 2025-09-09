"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Marketing Director",
      content:
        "Sami Production transformed our brand story into a compelling video that increased our conversion rate by 40%. Their attention to detail and creative vision exceeded our expectations.",
      rating: 5,
      image: "/placeholder-j7esz.png",
    },
    {
      name: "Michael Chen",
      company: "Global Fitness",
      role: "CEO",
      content:
        "Working with Sami Production was a game-changer for our marketing campaigns. They delivered high-quality content on time and within budget. Highly recommended!",
      rating: 5,
      image: "/placeholder-8y8mq.png",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Creative Director",
      content:
        "The team's professionalism and creativity are unmatched. They took our abstract ideas and turned them into visually stunning content that resonated with our audience.",
      rating: 5,
      image: "/creative-director-headshot.png",
    },
    {
      name: "David Thompson",
      company: "Local Restaurant Chain",
      role: "Owner",
      content:
        "Sami Production helped us create promotional videos that significantly boosted our online presence. The ROI has been incredible, and we continue to work with them.",
      rating: 5,
      image: "/placeholder-unp0e.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden opacity-0 animate-fade-in-up animate-delay-400">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <Quote className="h-12 w-12 text-secondary mx-auto opacity-50" />

                <div className="space-y-6">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed font-medium text-balance">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                      <div className="text-secondary">{testimonials[currentTestimonial].role}</div>
                      <div className="text-muted-foreground text-sm">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-secondary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
