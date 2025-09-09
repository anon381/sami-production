import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "Sami Production - Professional Media Production Services",
  description:
    "Professional camera work, video editing, graphic design, and live recording services. Transform your vision into compelling visual stories.",
  generator: "v0.app",
  keywords: "video production, camera work, video editing, graphic design, live recording, media production",
  authors: [{ name: "Sami Production" }],
  openGraph: {
    title: "Sami Production - Professional Media Production Services",
    description:
      "Transform your vision into compelling visual stories with our professional media production services.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
