"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Zap, Award, Heart, Target } from "lucide-react"

export default function CompanyValues() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and delivering on our promises every time.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Success comes from working closely with our clients as true partners in their vision.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to stay at the forefront of our industry.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We never settle for good enough. Every project receives our full attention to detail.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for storytelling and visual arts drives everything we do.",
    },
    {
      icon: Target,
      title: "Results",
      description: "We measure our success by the impact we create for our clients' businesses.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            The principles that guide our work and define who we are as a company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                    <Icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
