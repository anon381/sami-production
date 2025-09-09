"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Play } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-secondary p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Play className="h-6 w-6 text-secondary-foreground transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-secondary">
              Sami Production
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    pathname === item.href ? "text-secondary" : "text-foreground hover:text-secondary"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full animate-in slide-in-from-left-full duration-300" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary/50 rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/25">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border/50">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 rounded-md hover:bg-secondary/10 ${
                  pathname === item.href ? "text-secondary bg-secondary/5" : "text-foreground hover:text-secondary"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.3s ease-out ${index * 50}ms`,
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
