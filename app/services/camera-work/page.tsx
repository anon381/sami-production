import Navigation from "@/components/navigation"
import ServiceDetailHero from "@/components/service-detail-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServicePortfolio from "@/components/service-portfolio"

export const metadata = {
  title: "Camera Work - Sami Production",
  description: "Professional cinematography and photography services with 4K/8K recording and drone capabilities.",
}

export default function CameraWorkPage() {
  const serviceData = {
    title: "Camera Work",
    subtitle: "Professional Cinematography & Photography",
    description:
      "Capture every moment with cinematic excellence using state-of-the-art equipment and creative expertise.",
    image: "/placeholder-l5j4g.png",
    features: [
      {
        title: "4K/8K Video Recording",
        description: "Ultra-high definition recording for crystal clear footage",
        icon: "Video",
      },
      {
        title: "Drone Cinematography",
        description: "Aerial shots and unique perspectives from above",
        icon: "Plane",
      },
      {
        title: "Multi-Camera Setup",
        description: "Comprehensive coverage with multiple angles",
        icon: "Camera",
      },
      {
        title: "Professional Lighting",
        description: "Expert lighting design for perfect ambiance",
        icon: "Lightbulb",
      },
    ],
    process: [
      { step: "Consultation", description: "Discuss your vision and requirements" },
      { step: "Planning", description: "Create detailed shooting schedule and setup" },
      { step: "Production", description: "Professional filming with expert crew" },
      { step: "Review", description: "Quality check and client approval" },
    ],
    portfolio: [
      "/placeholder-63wcb.png",
      "/corporate-video-production.png",
      "/placeholder-ar63u.png",
      "/placeholder-tsku7.png",
    ],
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ServiceDetailHero {...serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServicePortfolio portfolio={serviceData.portfolio} />
    </main>
  )
}
