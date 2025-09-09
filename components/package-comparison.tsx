"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"

export default function PackageComparison() {
  const features = [
    { name: "Camera Work Hours", starter: "Up to 4 hours", professional: "Up to 8 hours", enterprise: "Unlimited" },
    { name: "Video Quality", starter: "HD (1080p)", professional: "4K", enterprise: "8K" },
    { name: "Drone Cinematography", starter: false, professional: true, enterprise: true },
    { name: "Multi-Camera Setup", starter: false, professional: false, enterprise: true },
    { name: "Live Recording", starter: false, professional: false, enterprise: true },
    { name: "Motion Graphics", starter: false, professional: true, enterprise: true },
    { name: "Custom Graphics", starter: false, professional: false, enterprise: true },
    { name: "Revision Rounds", starter: "2", professional: "5", enterprise: "Unlimited" },
    { name: "Support Level", starter: "Email", professional: "Priority", enterprise: "24/7 Dedicated" },
    { name: "Rush Delivery", starter: false, professional: false, enterprise: true },
    { name: "Commercial Rights", starter: false, professional: false, enterprise: true },
  ]

  const packages = ["Starter", "Professional", "Enterprise"]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Compare Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            See what's included in each package to make the best choice for your needs.
          </p>
        </div>

        <Card className="overflow-hidden opacity-0 animate-fade-in-up animate-delay-400">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Features</th>
                    {packages.map((pkg) => (
                      <th key={pkg} className="text-center p-4 font-semibold text-foreground min-w-32">
                        {pkg}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`border-b border-border/50 ${index % 2 === 0 ? "bg-muted/20" : ""}`}
                    >
                      <td className="p-4 font-medium text-foreground">{feature.name}</td>
                      <td className="p-4 text-center">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <CheckCircle className="h-5 w-5 text-secondary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-foreground">{feature.starter}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.professional === "boolean" ? (
                          feature.professional ? (
                            <CheckCircle className="h-5 w-5 text-secondary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-foreground">{feature.professional}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <CheckCircle className="h-5 w-5 text-secondary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-foreground">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
