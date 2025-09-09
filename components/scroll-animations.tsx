"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "slide-in-from-bottom-4", "duration-700")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => {
      el.classList.add("opacity-0")
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}

export function ScrollAnimateWrapper({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div data-animate className={`transition-all duration-700 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
