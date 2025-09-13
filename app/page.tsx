import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import PortfolioPreview from "@/components/portfolio-preview"
import AboutPreview from "@/components/about-preview"
// import TestimonialsSection from "@/components/testimonials-section"
import ParallaxSection from "@/components/parallax-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <ParallaxSection />
      <PortfolioPreview />
      <AboutPreview />
      {/* <TestimonialsSection /> */}
    </main>
  )
}
