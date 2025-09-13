"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Instagram, Youtube } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      value: "+251989043855",
      description: "Call us anytime",
      action: "tel:+251989043855",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Bole Medhaniyalem",
        description: "Addis Ababa, Ethiopia",
      action: "https://maps.app.goo.gl/LJQJeUcYkHQ1f5hL7",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Sunday",
      description: "8:00 AM - 7:00 PM",
      action: "#",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Multiple ways to reach us. Choose what works best for you.</p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                        <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{detail.title}</h3>
                        <p className="text-foreground font-medium">{detail.value}</p>
                        <p className="text-muted-foreground text-sm">{detail.description}</p>
                      </div>
                      {detail.action !== "#" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => (window.location.href = detail.action)}
                          className="text-secondary hover:text-secondary-foreground hover:bg-secondary"
                        >
                          Contact
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Social Media */}
          {/* <Card className="opacity-0 animate-fade-in-up animate-delay-400">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card> */}

          {/* Emergency Contact */}
          <Card className="bg-secondary/5 border-secondary/20 opacity-0 animate-fade-in-up animate-delay-600">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Need Urgent Support?</h3>
              <p className="text-muted-foreground text-sm mb-4">For time-sensitive projects or urgent support needs</p>
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => (window.location.href = "tel:+251989043855")}
              >
                <Phone className="mr-2 h-4 w-4" />
                
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
