import Navigation from "@/components/navigation"
import ServicesHero from "@/components/services-hero"
import ServicesGrid from "@/components/services-grid"
import ServicesCTA from "@/components/services-cta"

export const metadata = {
  title: "Our Services - Sami Production",
  description: "Professional camera work, video editing, graphic design, and live recording services.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  )
}
