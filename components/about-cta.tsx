"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail } from "lucide-react"

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/50 backdrop-blur-sm border-secondary/20">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Ready to Work Together?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Let's discuss how our team can help bring your vision to life. We're excited to hear about your
                  project and explore the possibilities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-200">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
