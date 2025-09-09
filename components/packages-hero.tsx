"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Star } from "lucide-react"

export default function PackagesHero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="opacity-0 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-secondary fill-current" />
              ))}
              <span className="text-muted-foreground ml-2">Trusted by 500+ clients</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Choose Your Perfect <span className="text-secondary">Package</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Flexible pricing options designed to fit your project needs and budget. From startup-friendly packages to
              enterprise solutions.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              onClick={() => document.getElementById("pricing-cards")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Packages
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
