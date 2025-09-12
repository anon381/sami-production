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
          name: "Studio & Landscape photo and video Premium",
          price: 70000,
          details: [
            "one 30×60 Laminated Albums",
            "two Signing Board OR Sign Book",
          ],
          popular: true,
        },
        {
          name: "Studio & Landscape Standard",
          price: 60000,
          details: [
            "Two 30×60 Laminated Albums",
            "Three 50×50 Canvas Boards for Wall",
          ],
        },
        {
          name: "Landscape Package",
          price: 47000,
          details: [
            "One 30×60 Laminated Album",
            "Two 60×60 Canvas Boards for Wall",
          ],
        },
      ],
    },
    {
      title: "Ceremony Photo & Video",
      packages: [
        {
          name: "Premium Ceremony Package",
          price: 200000,
          details: [
            "Day: One",
            "Location: A.A",
            "Album: 30×90 cm album, 15 pages",
            "Video: 3 Sony cameras, 4K quality",
            "Photo: 2 Canon cameras, WITH DRONE",
          ],
        },
      ],
    },
    {
      title: "Event Photography Packages",
      packages: [
        {
          name: "TEKLIL Premium",
          price: 60000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 2 CAMERA",
            "VIDEO: 2 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
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
          name: "WEDDING CEREMONY Premium",
          price: 70000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 2 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
            "TIME DURATION: 5 HOUR",
          ],
        },
        {
          name: "WEDDING CEREMONY Standard",
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
          name: "SHIMGELENA",
          price: 40000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 1 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
          ],
        },
        {
          name: "PRE WEDDING",
          price: 40000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 1 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
          ],
        },
        {
          name: "KELKEL Premium",
          price: 70000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 2 CAMERA",
            "VIDEO: 2 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
            "TIME DURATION: 5 HOUR",
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
      title: "Additional Services",
      packages: [
        {
          name: "LANDSCAPE VIDEO",
          price: 20000,
          details: [],
        },
        {
          name: "LANDSCAPE VIDEO WITH DRONE",
          price: 30000,
          details: [],
        },
      ],
    },
  ];

  return (
    <section id="pricing-cards" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 opacity-0 animate-fade-in-up">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.packages.map((pkg, index) => (
                <Card
                  key={pkg.name}
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
              ))}
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