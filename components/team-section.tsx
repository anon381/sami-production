"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Sami ",
      role: "Founder & Creative Director",
      bio: "With over 8 years in media production, Sami leads our creative vision and ensures every project exceeds expectations.",
      skills: ["Creative Direction", "Cinematography", "Project Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Minte",
      role: "Lead Video Editor",
      bio: "Maya brings stories to life in post-production with her expertise in advanced editing techniques and motion graphics.",
      image: "/placeholder-60una.png",
      skills: ["Video Editing", "Motion Graphics", "Color Grading"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "daniel",
      role: "Senior Cinematographer",
      bio: "Alex captures stunning visuals with his technical expertise and artistic eye for composition and lighting.",
      image: "/placeholder-fwwuy.png",
      skills: ["Cinematography", "Lighting", "Drone Operation"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "bereket",
      role: "Graphic Designer",
      bio: "Jordan creates compelling visual identities and graphics that enhance our video productions and client branding.",
      image: "/placeholder-mqs4y.png",
      skills: ["Graphic Design", "Branding", "UI/UX Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            The creative minds behind every successful project. Our diverse team brings together years of experience and
            fresh perspectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 opacity-0 animate-fade-in-up border-border/50 hover:border-secondary/50 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-secondary font-medium">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
