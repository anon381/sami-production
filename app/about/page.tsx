import Navigation from "@/components/navigation"
import AboutHero from "@/components/about-hero"
import AboutStory from "@/components/about-story"
// import TeamSection from "@/components/team-section"
import CompanyValues from "@/components/company-values"
import AboutTimeline from "@/components/about-timeline"
// import ClientTestimonials from "@/components/client-testimonials"
import AboutCTA from "@/components/about-cta"

export const metadata = {
  title: "About Us - Sami Production",
  description: "Learn about our story, meet our team, and discover what drives us to create exceptional media content.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      {/* <TeamSection /> */}
      <CompanyValues />
      <AboutTimeline />
      {/* <ClientTestimonials /> */}
      <AboutCTA />
    </main>
  )
}
