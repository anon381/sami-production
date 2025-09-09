"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"

export default function ContactHero() {
  const quickActions = [
    { icon: Phone, label: "Call Now", value: "+1 (555) 123-4567", action: "tel:+15551234567" },
    { icon: Mail, label: "Email Us", value: "hello@samiproduction.com", action: "mailto:hello@samiproduction.com" },
    { icon: MessageCircle, label: "Live Chat", value: "Available 9-6 EST", action: "#" },
    { icon: Clock, label: "Schedule Call", value: "Book a meeting", action: "#" },
  ]

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Let's Create Something <span className="text-secondary">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Ready to bring your vision to life? Get in touch with our team and let's discuss how we can help you
              create compelling visual content that drives results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-0 animate-fade-in-up animate-delay-200">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex-col space-y-2 border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground group transition-all duration-300 hover:scale-105 bg-transparent"
                  onClick={() => (action.action.startsWith("#") ? null : (window.location.href = action.action))}
                >
                  <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <div className="font-semibold">{action.label}</div>
                    <div className="text-xs opacity-80">{action.value}</div>
                  </div>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
