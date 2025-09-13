"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock } from "lucide-react"

export default function ContactMap() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Visit Our Studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            Located in the heart of New York's creative district. Schedule a visit to see our facilities and meet the
            team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Embedded Google Map */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in-up animate-delay-400">
            <Card className="overflow-hidden h-96">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3992.034580582168!2d38.78372407507722!3d8.997608691062458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85371032e8b5%3A0x8bad36741b2652f4!2zTWVkaGFuaWFsZW0gTWFsbCB8IEJvbGUgTWVkaGFuaWFsZW0gfCDhiJjhi7XhiIDhipLhi6vhiIjhiJ0g4Yie4YiNIHwg4Ymm4YiMIOGImOGLs-GKkuGLq-GIiOGInQ!5e1!3m2!1sen!2set!4v1757773340156!5m2!1sen!2set"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                />
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6 opacity-0 animate-fade-in-up animate-delay-600">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        Bole Medhaniyalem
                        <br />
                        Addis Ababa, Ethiopia
                        <br />
                        Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Studio Hours</h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      onClick={() => window.open("https://maps.app.goo.gl/LJQJeUcYkHQ1f5hL7", "_blank")}
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Parking & Access</h4>
                <div className="text-muted-foreground text-sm space-y-2">
                  <p>• Free street parking available</p>
                  <p>• Paid garage 2 blocks away</p>
                  <p>• Wheelchair accessible entrance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
