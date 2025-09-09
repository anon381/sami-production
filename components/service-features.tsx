"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Plane, Camera, Lightbulb, CheckCircle } from "lucide-react"

const iconMap = {
  Video,
  Plane,
  Camera,
  Lightbulb,
  CheckCircle,
}

interface Feature {
  title: string
  description: string
  icon: keyof typeof iconMap
}

interface ServiceFeaturesProps {
  features: Feature[]
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            Professional features and capabilities that set us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || CheckCircle
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                      <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
