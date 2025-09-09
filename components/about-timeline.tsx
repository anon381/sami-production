"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Award } from "lucide-react"

export default function AboutTimeline() {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Sami Production was established with a vision to democratize professional video production.",
      icon: Calendar,
      stats: "1 Team Member",
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a successful brand campaign.",
      icon: Users,
      stats: "50+ Projects",
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to a team of 5 specialists covering all aspects of media production.",
      icon: MapPin,
      stats: "5 Team Members",
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Won 'Best Local Production Company' at the Regional Media Awards.",
      icon: Award,
      stats: "3 Awards Won",
    },
    {
      year: "2023",
      title: "500th Project",
      description: "Celebrated completing our 500th project with clients across various industries.",
      icon: Users,
      stats: "500+ Projects",
    },
    {
      year: "2024",
      title: "Studio Expansion",
      description: "Opened our new state-of-the-art production facility with advanced equipment.",
      icon: MapPin,
      stats: "New Studio",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            From humble beginnings to industry recognition - here's how we've grown over the years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary/20 hidden lg:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} opacity-0 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10 hidden lg:block" />

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-secondary/50">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                            <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-2xl font-bold text-secondary">{milestone.year}</span>
                              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                                {milestone.stats}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
