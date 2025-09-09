"use client"

import { Button } from "@/components/ui/button"
import { Play, Users, Award, Clock } from "lucide-react"

export default function AboutHero() {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Play, number: "1000+", label: "Projects Completed" },
  ]

  return (
    <section className="relative pt-20 pb-20 bg-gradient-to-br from-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                About <span className="text-secondary">Sami Production</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                We are passionate storytellers who transform ideas into compelling visual narratives. Our mission is to
                bring your vision to life through exceptional media production services.
              </p>
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-200">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up animate-delay-400">
            <div className="relative">
              <img
                src="/professional-video-production-team-working-in-mode.jpg"
                alt="Sami Production Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Icon className="h-8 w-8 text-secondary mx-auto" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
