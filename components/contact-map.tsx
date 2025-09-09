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
          {/* Map Placeholder */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in-up animate-delay-400">
            <Card className="overflow-hidden h-96">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">123 Creative Street, New York, NY 10001</p>
                  </div>
                  {/* Simulated map pins */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-secondary rounded-full animate-pulse" />
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/60 rounded-full" />
                  <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-secondary/40 rounded-full" />
                </div>
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
                        123 Creative Street
                        <br />
                        New York, NY 10001
                        <br />
                        United States
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
                      onClick={() => window.open("https://maps.google.com", "_blank")}
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      Schedule Visit
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
                  <p>• Subway: 14th St-Union Sq (4,5,6,L,N,Q,R,W)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
