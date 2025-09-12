import Navigation from "@/components/navigation";
import ServiceDetailHero from "@/components/service-detail-hero";
import ServiceFeatures from "@/components/service-features";
import ServiceProcess from "@/components/service-process";
import ServicePortfolio from "@/components/service-portfolio";
export default function LiveRecordingPage() {
  const serviceData = {
    title: "Live Recording",
    subtitle: "Real-Time Event Production",
    description:
      "Broadcast and capture live events with multi-camera setups and real-time mixing.",
    image: "/live-recording-setup-professional.jpg",
    features: [
      { title: "Live Streaming", description: "Broadcast events online in real time", icon: "Video" as "Video" },
      { title: "Event Coverage", description: "Comprehensive filming of your event", icon: "Camera" as "Camera" },
      { title: "Multi-Camera Live", description: "Multiple angles for dynamic coverage", icon: "Video" as "Video" },
      { title: "Real-time Mixing", description: "Live audio and video mixing", icon: "Lightbulb" as "Lightbulb" },
    ],
    process: [
      { step: "Consultation", description: "Discuss event details and requirements" },
      { step: "Setup", description: "Prepare equipment and crew" },
      { step: "Live Production", description: "Broadcast and record event" },
      { step: "Post-Event Delivery", description: "Provide recordings and highlights" },
    ],
    portfolio: [
      "/live-recording-setup-professional.jpg",
      "/placeholder-unp0e.png",
      "/placeholder-j7esz.png",
      "/placeholder-user.jpg",
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
