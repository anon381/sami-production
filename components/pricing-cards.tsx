"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Zap, Crown } from "lucide-react"

export default function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "project">("project")

  const packages = [
    {
      name: "Starter",
      icon: Star,
      description: "Perfect for small projects and startups",
      monthlyPrice: 5000,
      projectPrice: 10000,
      popular: false,
      features: [
        "Basic camera work (up to 4 hours)",
        "Standard video editing",
        "2 revision rounds",
        "HD video delivery",
        "Basic color correction",
        "Email support",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      icon: Zap,
      description: "Most popular choice for businesses",
      monthlyPrice: 10000,
      projectPrice: 20000,
      popular: true,
      features: [
        "Professional camera work (up to 8 hours)",
        "Advanced video editing & effects",
        "Drone cinematography included",
        "4K video delivery",
        "Professional color grading",
        "Motion graphics & titles",
        "5 revision rounds",
        "Priority support",
        "Raw footage included",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "Complete solution for large productions",
      monthlyPrice: 15000,
      projectPrice: 30000,
      popular: false,
      features: [
        "Full production crew (unlimited hours)",
        "Multi-camera setup",
        "Live recording capabilities",
        "8K video delivery",
        "Professional lighting setup",
        "Advanced motion graphics",
        "Custom graphic design",
        "Unlimited revisions",
        "24/7 dedicated support",
        "Rush delivery available",
        "Full commercial rights",
      ],
      color: "from-orange-500/20 to-red-500/20",
      buttonVariant: "outline" as const,
    },
  ]

  return (
    <section id="pricing-cards" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up animate-delay-200">
            Choose between monthly retainer or per-project pricing based on your needs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12 opacity-0 animate-fade-in-up animate-delay-400">
            <span
              className={`text-sm ${billingCycle === "project" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Per Project
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "project" : "monthly")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === "monthly" ? "bg-secondary" : "bg-muted"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === "monthly" ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${billingCycle === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Monthly Retainer
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            const price = billingCycle === "monthly" ? pkg.monthlyPrice : pkg.projectPrice

            return (
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

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <CardHeader className="text-center pb-8">
                    <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                      <Icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground mx-auto" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">ETB {price}</span>
                      <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "project"}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant={pkg.buttonVariant}
                      className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                        pkg.buttonVariant === "default"
                          ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                          : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                      }`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

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