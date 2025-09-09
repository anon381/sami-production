"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Lightbulb } from "lucide-react"

export default function AboutStory() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                Founded in 2019, Sami Production began as a small creative studio with a big vision: to democratize
                high-quality media production and make professional video content accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                What started as a one-person operation has grown into a full-service production company, but we've never
                lost sight of our core values: creativity, quality, and genuine care for our clients' success.
              </p>
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in-up animate-delay-200">
            {[
              {
                icon: Heart,
                title: "Passion-Driven",
                description: "Every project is approached with genuine enthusiasm and creative energy.",
              },
              {
                icon: Target,
                title: "Results-Focused",
                description: "We measure our success by the impact we create for our clients.",
              },
              {
                icon: Lightbulb,
                title: "Innovation-Led",
                description: "Always exploring new techniques and technologies to stay ahead.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-secondary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                        <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
