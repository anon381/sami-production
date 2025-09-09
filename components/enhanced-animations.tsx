"use client"

import type React from "react"

import { useEffect } from "react"

export function useGlobalAnimations() {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scroll-to-top")

    const handleScroll = () => {
      if (scrollToTopBtn) {
        if (window.scrollY > 300) {
          scrollToTopBtn.classList.add("show")
        } else {
          scrollToTopBtn.classList.remove("show")
        }
      }
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in", "slide-in-from-bottom-4", "duration-700")
          entry.target.classList.remove("opacity-0", "translate-y-4")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(
      "[data-animate], .card, .service-card, .pricing-card, .team-member",
    )
    animateElements.forEach((el, index) => {
      el.classList.add("opacity-0", "translate-y-4", "transition-all", "duration-700")
      el.style.transitionDelay = `${index * 100}ms`
      observer.observe(el)
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="animate-in slide-in-from-left duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
