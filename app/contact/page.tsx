import Navigation from "@/components/navigation"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"
import ContactFAQ from "@/components/contact-faq"

export const metadata = {
  title: "Contact Us - Sami Production",
  description:
    "Get in touch with our team to discuss your media production needs. We're here to help bring your vision to life.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactFAQ />
    </main>
  )
}


