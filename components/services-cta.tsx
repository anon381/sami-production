"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Let's discuss how we can bring your vision to life with our professional media production services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-200">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                  <a href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent"
                >
                  <a href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent"
                >
                  <a href="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Live Chat
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
