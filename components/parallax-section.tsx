"use client"

import { useEffect, useRef } from "react"

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        imageRef.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/professional-video-production-team-working-in-mode.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Crafting Stories That
            <span className="text-secondary block">Inspire & Engage</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 animate-fade-in-up animate-delay-200">
            Every project is a new adventure. We combine technical expertise with creative vision to deliver media that
            doesn't just look good—it moves people.
          </p>
        </div>
      </div>
    </section>
  )
}
