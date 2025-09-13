"use client"
import { X } from "lucide-react"
import { useState } from "react"
import { CardTitle } from "@/components/ui/card"
import { ReusableCard } from "@/components/ui/reusable-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Zap, Crown } from "lucide-react"

export default function PricingCards() {
  // State for selected package (for modal/lightbox)
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);
  // New structure: categories with packages and details
  const categories = [
    {
      title: "Wedding Packages",
      packages: [
        {
          name: "PRIMERY KLKL /ዋና ቅልቅል",
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
          name: "PRIMERY MELS /ዋና መልስ",
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
          name: "KILKL / ቅልቅል",
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
          name: "Studio & Landscape photo and video Premium/ የስቱዲዮ እና መስክ ፎቶ እና ቪዲዮ ፕሪሚየም",
          price: 70000,
          details: [
            "one 30×60 Laminated Albums",
            "two Signing Board OR Sign Book",
          ],
          popular: true,
        },
        {
          name: "Studio & Landscape Standard photo and video / የስቱዲዮ እና መስክ ፎቶ እና ቪዲዮ ስታንዳርድ",
          price: 50000,
          details: [
            "one 30×60 Laminated Albums",
            "one 50×50 Canvas Boards for Wall",
          ],
        },
        {
          name: "Landscape Package photo and video / የመስክ ፎቶ እና ቪዲዮ ጥቅል",
          price: 45000,
          details: [
            "One 30×60 Laminated Album",
            "One 60×60 Canvas Boards for Wall",
          ],
        },
      ],
    },
    {
      title: "Ceremony Photo & Video / የበዐል ፎቶ እና ቪዲዮ",
      packages: [
        {
          name: "Ceremony Premium Package / የበዐል ፕሪሚየም ጥቅል",
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
      title: "Event Photography Packages / የእቨንት ፎቶግራፊ ጥቅል",
      packages: [
        {
          name: "FOR ONE DAY Teklil / የአንድ ቀን ተክሊል",
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
          name: "TEKLIL Standard /  ተክሊል ስታንዳርድ",
          price: 50000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 2 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
          ],
        },
        {
          name: "FOR ONE DAY WEDDING AND Special gift / የአንድ ቀን ሰርግ እና ልዩ ስጦታ",
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
          name: "FOR ONE DAY WEDDING / የአንድ ቀን ሰርግ",
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
      title: "Special Event Packages / የልዩ እቨንት ጥቅል",
      packages: [
        {
          name: "MELSE / መልስ",
          price: 40000,
          details: [
            "FOR ONE DAY",
            "PHOTO: 1 CAMERA",
            "VIDEO: 1 CAMERA",
            "ALBUM: 1 30X60 CM ALBUM",
          ],
        },
        {
          name: "SHMGLNA / ሽምግልና",
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
          name: "Special Event Package / የልዩ ኢቨንት ጥቅል",
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
        // {
        //   name: "PRIMERY KLKL /ዋና ቅልቅል",
        //   price: 55000,
        //   details: [
        //     "PHOTO",
        //     "1 CAMERA",
        //     "VIDEO",
        //     "1 CAMERA",
        //     "ALBUM",
        //     "1 30X60 CM ALBUM",
        //     "NO TIME DURATION",
        //     "55,000 birr",
        //   ],
        // },
        // {
        //   name: "KELKEL Standard / ቅልቅል ስታንዳርድ",
        //   price: 55000,
        //   details: [
        //     "FOR ONE DAY",
        //     "PHOTO: 1 CAMERA",
        //     "VIDEO: 1 CAMERA",
        //     "ALBUM: 1 30X60 CM ALBUM",
        //     "TIME DURATION: 5 HOUR",
        //   ],
        // },
      ],
    },
  // ...existing code...
  ];

  return (
    <section id="pricing-cards" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-bold text-secondary mb-8 opacity-0 animate-fade-in-up md:col-start-2 md:text-center`}>
              Ceremony Photo & Video / የበዐል ፎቶ እና ቪዲዮ
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
              {category.packages.map((pkg, index) => {
                const isCeremonyPremium = category.title === "Ceremony Photo & Video / የበዐል ፎቶ እና ቪዲዮ" && pkg.name?.startsWith("Ceremony Premium Package");
                const imageMap: Record<string, string> = {
                  "PRIMERY KLKL": "/graphic-design-studio-workspace.jpg",
                  "PRIMERY MELS": "/graphic-design-studio-workspace.jpg",
                  "KILKL": "/graphic-design-studio-workspace.jpg",
                  "Studio & Landscape photo and video Premium": "/cinematic-film-production-studio-with-professional.jpg",
                  "Studio & Landscape Standard photo and video": "/cinematic-film-production-studio-with-professional.jpg",
                  "Landscape Package photo and video": "/cinematic-film-production-studio-with-professional.jpg",
                  "Ceremony Premium Package": "/professional-video-production-team-working-in-mode.jpg",
                  "FOR ONE DAY Teklil": "/professional-camera-equipment-cinematography.jpg",
                  "TEKLIL Standard": "/professional-camera-equipment-cinematography.jpg",
                  "FOR ONE DAY WEDDING AND Special gift": "/professional-video-production-team-working-in-mode.jpg",
                  "FOR ONE DAY WEDDING": "/professional-video-production-team-working-in-mode.jpg",
                  "MELSE": "/live-recording-setup-professional.jpg",
                  "SHMGLNA": "/live-recording-setup-professional.jpg",
                  "Special Event Package": "/live-recording-setup-professional.jpg",
                  "KELKEL Standard": "/live-recording-setup-professional.jpg",
                };
                const matchedKey = Object.keys(imageMap).find(key => pkg.name.toLowerCase().includes(key.toLowerCase()));
                let imageSrc = matchedKey ? imageMap[matchedKey as keyof typeof imageMap] : "/placeholder.jpg";
                return (
                  <div key={pkg.name} className={isCeremonyPremium ? "md:col-start-2" : ""}>
                    <div onClick={() => setSelectedPackage({ ...pkg, imageSrc })} style={{ cursor: "pointer" }}>
                      <ReusableCard
                        image={imageSrc}
                        title={pkg.name}
                        description={pkg.details.join(", ")}
                        tags={[]}
                      >
                        <div className="text-center pt-2 pb-2">
                          <span className="text-4xl font-bold text-foreground">{pkg.price.toLocaleString()} birr</span>
                        </div>
                        <div className={`grid gap-2 px-4 mb-4 ${pkg.details.length > 6 ? "grid-cols-3" : "grid-cols-2"}`}>
                          {pkg.details.map((detail, detailIdx) => (
                            <div key={detailIdx} className="flex items-center space-x-2">
                              <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                              <span className="text-foreground text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                        <div className="px-4 pb-6">
                          <a href="/contact" className="w-full block">
                            <Button
                              variant={pkg.popular ? "default" : "outline"}
                              className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                                pkg.popular
                                  ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                  : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                              }`}
                            >
                              Order
                            </Button>
                          </a>
                        </div>
                        {pkg.popular && (
                          <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">Most Popular</Badge>
                        )}
                      </ReusableCard>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up animate-delay-600">
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
          >
            <a href="/contact">Contact Us for Custom Pricing</a>
          </Button>
        </div>
        {selectedPackage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-secondary z-10"
                onClick={() => setSelectedPackage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden">
                {/* Image */}
                <div>
                  <img
                    src={selectedPackage.imageSrc || "/placeholder.svg"}
                    alt={selectedPackage.name}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                </div>
                {/* Details */}
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{selectedPackage.name}</h2>
                    <p className="text-secondary font-medium">
                      {selectedPackage.price.toLocaleString()} birr
                    </p>
                  </div>
                  <div className="space-y-2">
                    {selectedPackage.details.map((detail: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a href="/contact">
                      <Button variant="default" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Order This Package
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}