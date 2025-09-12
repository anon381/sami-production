"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Zap, Crown } from "lucide-react"

export default function PricingCards() {
  // New structure: categories with packages and details
  const categories = [
    {
      title: "Wedding Packages",
      packages: [
        {
          name: "PRIMERY KLKL",
          price: 55000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "1 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "NO TIME DURATION",
            "55,000 birr",
          ],
        },
        {
          name: "PRIMERY MELS",
          price: 55000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "1 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "NO TIME DURATION",
            "55,000 birr",
          ],
        },
        {
          name: "KILKL",
          price: 30000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "1 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "Total Price",
            "30,000 birr",
          ],
        },
        {
          name: "Studio & Landscape photo and video Premium",
          price: 70000,
          details: [
            "one 30×60 Laminated Albums",
            "two Signing Board OR Sign Book",
          ],
          popular: true,
        },
        {
          name: "Studio & Landscape Standard photo and video",
          price: 50000,
          details: [
            "one 30×60 Laminated Albums",
            "one 50×50 Canvas Boards for Wall",
          ],
        },
        {
          name: "Landscape Package photo and video",
          price: 45000,
          details: [
            "One 30×60 Laminated Album",
            "One 60×60 Canvas Boards for Wall",
          ],
        },
      ],
    },
    {
      title: "Ceremony Photo & Video",
      packages: [
        {
          name: "Ceremony Premium Package",
          price: 180000,
          details: [
            "Day  One",
            "Location  A.A",
            "Album  30×90 cm album",
            "15 pages",
            "Video  3 Sony cameras",
            "4K quality",
            "Photo  2 Canon cameras",
            "WITH DRONE",
            "Total Price",
            "180,000 birr",
          ],
        },
      ],
    },
    {
      title: "Event Photography Packages",
      packages: [
        {
          name: "FOR ONE DAY Teklil",
          price: 55000,
          details: [
            "PHOTO",
            "2 CAMERA",
            "VIDEO",
            "2 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "Total Price",
            "55,000 birr",
          ],
        },
        {
          name: "TEKLIL Standard",
          price: 50000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 2 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
          ],
        },
        {
          name: "FOR ONE DAY WEDDING AND Special gift",
          price: 70000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "2 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "NO TIME DURATION",
            "Total Price",
            "70,000 birr",
          ],
        },
        {
          name: "FOR ONE DAY WEDDING",
          price: 50000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "1 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "NO TIME DURATION",
            "50,000 birr",
          ],
        },
      ],
    },
    {
      title: "Special Event Packages",
      packages: [
        {
          name: "MELSE",
          price: 40000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 1 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
          ],
        },
        {
          name: "SHMGLNA",
          price: 30000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "1 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "Total Price",
            "30,000 birr",
          ],
        },
        {
          name: "Special Event Package",
          price: 35000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "1 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "Total Price",
            "35,000 birr",
          ],
        },
        {
          name: "PRIMERY KLKL",
          price: 55000,
          details: [
            "PHOTO",
            "1 CAMERA",
            "VIDEO",
            "1 CAMERA",
            "ALBUM",
            "1 30X60 CM ALBUM",
            "NO TIME DURATION",
            "55,000 birr",
          ],
        },
        {
          name: "KELKEL Standard",
          price: 55000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 1 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
            "TIME DURATION: 5 HOUR",
          ],
        },
      ],
    },
    {
      packages: [
      ],
    },
  ];

  return (
    <section id="pricing-cards" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-bold text-secondary mb-8 opacity-0 animate-fade-in-up ${["Ceremony Photo & Video", "Wedding Packages", "Event Photography Packages", "Special Event Packages"].includes(category.title) ? "md:col-start-2 md:text-center" : ""}`}>
              {category.title}
            </h2>
            <div className={`grid ${category.title === "Ceremony Photo & Video" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-3"} gap-8`}>
              {category.packages.map((pkg, index) => {
                // For Ceremony Premium Package, place in center column for md screens
                const isCeremonyPremium = category.title === "Ceremony Photo & Video" && pkg.name === "Ceremony Premium Package";
                return (
                  <div key={pkg.name} className={isCeremonyPremium ? "md:col-start-2" : ""}>
                    <Card
                      className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50 overflow-hidden ${
                        pkg.popular ? "ring-2 ring-secondary scale-105" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {pkg.popular && (
                        <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">Most Popular</Badge>
                      )}
                      <div className="relative z-10">
                        <CardHeader className="text-center pb-8">
                          <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                          <div className="mt-4">
                            <span className="text-4xl font-bold text-foreground">{pkg.price.toLocaleString()} birr</span>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-3">
                            {pkg.details.map((detail, detailIdx) => (
                              <div key={detailIdx} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>
                          <Button
                            variant={pkg.popular ? "default" : "outline"}
                            className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                              pkg.popular
                                ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                            }`}
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up animate-delay-600">
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
          >
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}