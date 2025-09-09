"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ProcessStep {
  step: string
  description: string
}

interface ServiceProcessProps {
  process: ProcessStep[]
}

export default function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            A streamlined approach that ensures quality results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className={`h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.step}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
