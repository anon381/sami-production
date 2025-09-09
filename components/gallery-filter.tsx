"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Camera, Video, Palette, Radio, Grid3X3, List } from "lucide-react"

interface GalleryFilterProps {
  onFilterChange?: (category: string) => void
  onSearchChange?: (search: string) => void
  onViewChange?: (view: "grid" | "masonry") => void
}

export default function GalleryFilter({
  onFilterChange = () => {},
  onSearchChange = () => {},
  onViewChange = () => {},
}: GalleryFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  const categories = [
    { id: "all", name: "All Work", icon: Grid3X3, count: 500 },
    { id: "camera-work", name: "Camera Work", icon: Camera, count: 150 },
    { id: "video-editing", name: "Video Editing", icon: Video, count: 200 },
    { id: "graphic-design", name: "Graphic Design", icon: Palette, count: 100 },
    { id: "live-recording", name: "Live Recording", icon: Radio, count: 50 },
  ]

  const handleFilterChange = (categoryId: string) => {
    setActiveFilter(categoryId)
    onFilterChange(categoryId)
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    onSearchChange(value)
  }

  const handleViewChange = (view: "grid" | "masonry") => {
    setViewMode(view)
    onViewChange(view)
  }

  return (
    <section className="py-12 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewChange("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-secondary text-secondary-foreground"
                    : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                }
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "masonry" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewChange("masonry")}
                className={
                  viewMode === "masonry"
                    ? "bg-secondary text-secondary-foreground"
                    : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                }
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeFilter === category.id

              return (
                <Button
                  key={category.id}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => handleFilterChange(category.id)}
                  className={`group transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-secondary-foreground scale-105"
                      : "border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-105"
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name}
                  <Badge
                    variant="secondary"
                    className={`ml-2 ${isActive ? "bg-secondary-foreground/20 text-secondary-foreground" : "bg-secondary/20 text-secondary"}`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
