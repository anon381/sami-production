"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function ServicesHero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              From concept to completion, we offer comprehensive media production services that bring your vision to
              life with professional excellence.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              onClick={() => document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
