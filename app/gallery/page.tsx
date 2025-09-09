import Navigation from "@/components/navigation"
import GalleryHero from "@/components/gallery-hero"
import GalleryFilter from "@/components/gallery-filter"
import GalleryGrid from "@/components/gallery-grid"
import GalleryCTA from "@/components/gallery-cta"

export const metadata = {
  title: "Gallery - Sami Production",
  description: "Explore our portfolio of professional video production, photography, and graphic design work.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <GalleryFilter />
      <GalleryGrid />
      <GalleryCTA />
    </main>
  )
}
