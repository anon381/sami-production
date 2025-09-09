"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer:
        "We typically can start new projects within 1-2 weeks, depending on our current schedule and project complexity. For urgent projects, we offer rush services with additional fees. Contact us to discuss your specific timeline needs.",
    },
    {
      question: "What information do you need for project consultation?",
      answer:
        "To provide an accurate consultation and project estimate, we need details about your project scope, timeline, deliverables, and any specific requirements. The more information you provide in the contact form, the better we can assist you.",
    },
    {
      question: "Do you offer revisions on completed work?",
      answer:
        "Yes! All our packages include revision rounds. Starter package includes 2 revisions, Professional includes 5 revisions, and Enterprise includes unlimited revisions. Additional revisions beyond the package limit can be purchased separately.",
    },
    {
      question: "Can you work with clients remotely?",
      answer:
        "We work with clients worldwide. We use secure file sharing, video calls, and project management tools to ensure smooth collaboration regardless of location. Local clients can also visit our studio for in-person meetings.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and PayPal. For larger projects, we offer flexible payment schedules with milestone-based payments. A 50% deposit is typically required to start work.",
    },
    {
      question: "Do you provide raw footage and project files?",
      answer:
        "Raw footage and project files are included in our Professional and Enterprise packages. For Starter packages, they can be added for an additional fee. We provide all files in industry-standard formats.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-up animate-delay-200">
            Quick answers to common questions. Don't see what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50 transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left justify-between hover:bg-secondary/5"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="font-semibold text-foreground text-balance">{faq.question}</span>
                  </div>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-secondary flex-shrink-0" />
                  )}
                </Button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-8 text-muted-foreground leading-relaxed text-pretty">{faq.answer}</div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-fade-in-up animate-delay-600">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us Directly
          </Button>
        </div>
      </div>
    </section>
  )
}
