"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Clock, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const [bgPos, setBgPos] = useState("center")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    // Parallax effect
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
  const rate = scrolled * -0.9
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setBgPos(`center ${rate}px`)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const values = [
    {
      icon: Users,
      title: "Collaborative",
      description: "We work closely with clients to bring their vision to life",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
    },
    {
      icon: Clock,
      title: "Reliable",
      description: "On-time delivery and professional service you can count on",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Driven by creativity and love for visual storytelling",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24"
      style={{
        backgroundImage: "url('/corporate-video-production.png')",
        backgroundSize: "cover",
        backgroundPosition: bgPos,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-secondary">Sami Production</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded with a passion for visual storytelling, Sami Production has been creating compelling media content
              that resonates with audiences and drives results. Our team of creative professionals combines technical
              expertise with artistic vision to deliver exceptional production services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From intimate corporate videos to large-scale commercial productions, we approach every project with the
              same level of dedication and attention to detail. Our goal is not just to meet expectations, but to exceed
              them.
            </p>
            <Link href="/about">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="animate-on-scroll bg-card p-6 rounded-xl hover:bg-secondary/5 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
   
  );
}



