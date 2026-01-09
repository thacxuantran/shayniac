"use client"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index?: number
  onClick?: () => void
}

export function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const cardClassName = cn(
    "group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 cursor-pointer",
    "hover:scale-[1.02] hover:shadow-xl",
    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
  )

  const cardStyle = {
    transitionDelay: `${index * 100}ms`,
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cardClassName}
      style={cardStyle}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        {/* Project Image or Placeholder */}
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            {/* Placeholder gradient background */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br",
                index % 4 === 0 && "from-violet-100 to-purple-200",
                index % 4 === 1 && "from-blue-100 to-cyan-200",
                index % 4 === 2 && "from-emerald-100 to-teal-200",
                index % 4 === 3 && "from-orange-100 to-amber-200",
              )}
            />
            {/* Placeholder icon/content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-2xl font-bold shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110",
                  index % 4 === 0 && "text-purple-600",
                  index % 4 === 1 && "text-blue-600",
                  index % 4 === 2 && "text-emerald-600",
                  index % 4 === 3 && "text-orange-600",
                )}
              >
                {project.title.charAt(0)}
              </div>
            </div>
          </>
        )}

        {/* Year badge */}
        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.year}
        </div>

        {/* UX/UI badge */}
        {project.categories.includes("UX/UI") && (
          <div className="absolute left-3 top-3 rounded-full bg-purple-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Design Case Study
          </div>
        )}

        {/* Hover overlay with icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
          <div className="flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Categories/Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide",
                category === "Mobile" && "bg-green-100 text-green-700",
                category === "Website" && "bg-blue-100 text-blue-700",
                category === "UX/UI" && "bg-purple-100 text-purple-700",
              )}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-[#1a1a1a] transition-colors group-hover:text-gray-700">
          {project.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{project.description}</p>

        {/* Design Tools preview for UX/UI projects */}
        {project.categories.includes("UX/UI") &&
        project.designTools &&
        project.designTools.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.designTools.slice(0, 4).map((tool) => (
              <span key={tool} className="rounded bg-purple-50 px-2 py-0.5 text-xs text-purple-600">
                {tool}
              </span>
            ))}
            {project.designTools.length > 4 && (
              <span className="rounded bg-purple-50 px-2 py-0.5 text-xs text-purple-500">
                +{project.designTools.length - 4}
              </span>
            )}
          </div>
        ) : (
          /* Technologies preview for other projects */
          project.technologies &&
          project.technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  )
}

// Graphic Design Card variant (keeping for backwards compatibility)
interface GraphicCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    imageAlt: string
    size: "large" | "small"
    link?: string
  }
  index?: number
}

export function GraphicCard({ project, index = 0 }: GraphicCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const cardClassName = cn(
    "group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500",
    "hover:scale-[1.02] hover:shadow-xl",
    project.size === "large" ? "md:col-span-2" : "",
    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
  )

  const cardStyle = {
    transitionDelay: `${index * 100}ms`,
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cardClassName} style={cardStyle}>
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden bg-gray-100",
          project.size === "large" ? "aspect-[2/1]" : "aspect-square",
        )}
      >
        {/* Placeholder gradient background */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            index % 3 === 0 && "from-rose-100 to-pink-200",
            index % 3 === 1 && "from-sky-100 to-indigo-200",
            index % 3 === 2 && "from-lime-100 to-green-200",
          )}
        />

        {/* Placeholder content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 texxt-3xl font-bold shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110",
              index % 3 === 0 && "text-pink-600",
              index % 3 === 1 && "text-indigo-600",
              index % 3 === 2 && "text-green-600",
            )}
          >
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-base font-bold text-[#1a1a1a] transition-colors group-hover:text-gray-700">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{project.description}</p>
      </div>
    </div>
  )
}
