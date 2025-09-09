"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Camera, Heart, Star } from "lucide-react"

export default function GalleryCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Inspired by Our Work?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Every project in our gallery represents a unique story and creative challenge. We'd love to help tell
                your story next.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-200">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Camera className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up animate-delay-400">
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Portfolio Stats</h3>
                    <p className="text-muted-foreground">Our work by the numbers</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Camera, number: "500+", label: "Projects" },
                      { icon: Heart, number: "2.5K+", label: "Likes" },
                      { icon: Star, number: "50+", label: "Awards" },
                      { icon: ArrowRight, number: "98%", label: "Satisfaction" },
                    ].map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <div key={index} className="text-center">
                          <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 mx-auto mb-3">
                            <Icon className="h-6 w-6 text-secondary mx-auto" />
                          </div>
                          <div className="text-xl font-bold text-secondary">{stat.number}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
