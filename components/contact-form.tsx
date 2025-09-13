"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    services: [],
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
          newsletter: false,
        })
        setSubmitStatus("idle")
      }, 3000)
    }, 2000)
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => {
      const services = checked
        ? [...prev.services, service]
        : prev.services.filter((s: string) => s !== service)
      return { ...prev, services }
    })
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="opacity-0 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
            <p className="text-muted-foreground text-center">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+251989043855"
                  required
                />
              </div>

              {/* Type Radio Group */}
              <div className="space-y-2">
                <Label>Who are you?</Label>
                <div className="grid grid-cols-2 gap-2">
                  {['Company', 'Church', 'Team', 'Individual', 'Family', 'Friends', 'Other'].map((type) => (
                    <label key={type} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={formData.type === type}
                        onChange={() => handleInputChange("type", type)}
                        className="accent-secondary"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Services Needed Checkboxes */}
              <div className="space-y-2">
                <Label>Service Needed</Label>
                <div className="grid grid-cols-2 gap-2">
                  {['Live Recording', 'Camera Work', 'Video Editing', 'Graphics Design'].map((service) => (
                    <label key={service} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={(e) => handleServiceChange(service, e.target.checked)}
                        className="accent-secondary"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Timeline Calendar */}
              <div className="space-y-2">
                <Label htmlFor="timeline">Project Timeline</Label>
                <Input
                  id="timeline"
                  type="date"
                  value={formData.timeline}
                  onChange={(e) => handleInputChange("timeline", e.target.value)}
                  required
                />
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={isSubmitting || submitStatus === "success"}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-secondary-foreground mr-2" />
                    Sending Message...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="text-center text-sm text-secondary">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-center text-sm text-destructive flex items-center justify-center">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
