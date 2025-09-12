

import Navigation from "@/components/navigation";
import ServiceDetailHero from "@/components/service-detail-hero";
import ServiceFeatures from "@/components/service-features";
import ServiceProcess from "@/components/service-process";
import ServicePortfolio from "@/components/service-portfolio";

export const metadata = {
  title: "Graphic Design - Sami Production",
  description: "Visual storytelling through compelling design and branding.",
};

export default function GraphicDesignPage() {
  const serviceData = {
    title: "Graphic Design",
    subtitle: "Creative Branding & Visuals",
    description:
      "Elevate your brand with compelling graphics, digital artwork, and print-ready designs tailored to your vision.",
    image: "/graphic-design-studio-workspace.jpg",
    features: [
      {
        title: "Brand Identity",
        description: "Unique branding for your business",
        icon: "Camera" as "Camera",
      },
      {
        title: "Marketing Materials",
        description: "Brochures, flyers, and more",
        icon: "Lightbulb" as "Lightbulb",
      },
      {
        title: "Digital Graphics",
        description: "Web and social media assets",
        icon: "Video" as "Video",
      },
      {
        title: "Print Design",
        description: "High-quality print-ready designs",
        icon: "CheckCircle" as "CheckCircle",
      },
    ],
    process: [
      { step: "Consultation", description: "Understand your brand and goals" },
      { step: "Concept Design", description: "Create initial design concepts" },
      { step: "Revision", description: "Refine and finalize designs" },
      { step: "Delivery", description: "Provide all assets and files" },
    ],
    portfolio: [
      "/graphic-design-studio-workspace.jpg",
      "/placeholder-lwu14.png",
      "/placeholder-bjly2.png",
      "/placeholder-mqs4y.png",
    ],
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <ServiceDetailHero {...serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      <ServicePortfolio portfolio={serviceData.portfolio} />
    </main>
  );
}
