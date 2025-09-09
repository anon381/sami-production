"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import LoadingSpinner from "@/components/loading-spinner"

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-40 opacity-0 pointer-events-none [&.show]:opacity-100 [&.show]:pointer-events-auto"
      id="scroll-to-top"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navigation />

      <Suspense fallback={<LoadingSpinner />}>
        <main className="min-h-screen">{children}</main>
      </Suspense>

      <ScrollToTop />

      <Analytics />
    </>
  )
}
