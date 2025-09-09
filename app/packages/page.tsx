import Navigation from "@/components/navigation"
import PackagesHero from "@/components/packages-hero"
import PricingCards from "@/components/pricing-cards"
import PackageComparison from "@/components/package-comparison"
import PackagesCTA from "@/components/packages-cta"

export const metadata = {
  title: "Packages & Pricing - Sami Production",
  description: "Choose from our flexible packages designed to meet your media production needs and budget.",
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PackagesHero />
      <PricingCards />
      <PackageComparison />
      <PackagesCTA />
    </main>
  )
}
