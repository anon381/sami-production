"use client"
import { Search, Filter, Grid3X3 } from "lucide-react"

export default function GalleryHero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-secondary">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Discover our creative work across video production, photography, graphic design, and live events. Each
              project tells a unique story.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-200">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Grid3X3 className="h-5 w-5" />
              <span>500+ Projects</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Filter className="h-5 w-5" />
              <span>4 Categories</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Search className="h-5 w-5" />
              <span>Easy Search</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
