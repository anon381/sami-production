"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Clock, Shield, Award } from "lucide-react"

export default function PackagesCTA() {
  const guarantees = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We guarantee project completion within agreed timelines",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "100% satisfaction guarantee or we'll make it right",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Award-winning team with 5+ years of experience",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <Card
                key={index}
                className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                    <Icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{guarantee.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{guarantee.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main CTA */}
        <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Choose your package and let's bring your vision to life. Our team is ready to deliver exceptional
                  results that exceed your expectations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-200">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                  <a href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent">
                  <a href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent">
                  <a href="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Live Chat
                  </a>
                </Button>
              </div>

              <div className="opacity-0 animate-fade-in-up animate-delay-400">
                <p className="text-sm text-muted-foreground">
                  Free consultation • No hidden fees • Flexible payment options
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
