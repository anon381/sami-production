import Navigation from "@/components/navigation";
import ServiceDetailHero from "@/components/service-detail-hero";
import ServiceFeatures from "@/components/service-features";
import ServiceProcess from "@/components/service-process";
import ServicePortfolio from "@/components/service-portfolio";
export default function VideoEditingPage() {
  const serviceData = {
    title: "Video Editing",
    subtitle: "Post-Production Excellence",
    description:
      "Transform raw footage into stunning visual stories with expert editing, color grading, and effects.",
    image: "/video-editing-suite-professional.jpg",
    features: [
      {
        title: "Color Grading",
        description: "Professional color correction for cinematic look",
        icon: "Camera" as "Camera",
      },
      {
        title: "Motion Graphics",
        description: "Dynamic animations and graphics",
        icon: "Video" as "Video",
      },
      {
        title: "Sound Design",
        description: "Crystal clear audio and effects",
        icon: "Lightbulb" as "Lightbulb",
      },
      {
        title: "Visual Effects",
        description: "Seamless integration of VFX",
        icon: "CheckCircle" as "CheckCircle",
      },
    ],
    process: [
      { step: "Footage Review", description: "Analyze and select best shots" },
      { step: "Editing", description: "Cut, arrange, and enhance video" },
      { step: "Effects & Audio", description: "Add graphics, VFX, and sound" },
      { step: "Final Delivery", description: "Export and deliver finished product" },
    ],
    portfolio: [
      "/video-editing-suite-professional.jpg",
      "/placeholder-fwwuy.png",
      "/placeholder-8y8mq.png",
      "/placeholder-f7gdo.png",
    ],
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <ServiceDetailHero {...serviceData} />
      <ServiceFeatures features={serviceData.features} />
      <ServiceProcess process={serviceData.process} />
      {/* <ServicePortfolio portfolio={serviceData.portfolio} /> */}
    </main>
  );
}
