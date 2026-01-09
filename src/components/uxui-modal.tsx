"use client"

import { useEffect, useCallback, useState } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import type { Project } from "@/types"
import { ChevronLeft, ChevronRight, X, Palette, Lightbulb, Layers } from "lucide-react"

interface UXUIModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function UXUIModal({ project, isOpen, onClose }: UXUIModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageZoomed) {
          setIsImageZoomed(false)
        } else {
          onClose()
        }
      }
    },
    [onClose, isImageZoomed],
  )

  // Handle arrow keys for gallery navigation
  const handleKeyNav = useCallback(
    (e: KeyboardEvent) => {
      if (!project?.designGallery) return
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev < project.designGallery!.length - 1 ? prev + 1 : 0))
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.designGallery!.length - 1))
      }
    },
    [project?.designGallery],
  )

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setActiveImageIndex(0)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      })
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("keydown", handleKeyNav)
    } else {
      setIsAnimating(false)
      setIsImageZoomed(false)
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300)
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("keydown", handleKeyNav)
      return () => clearTimeout(timer)
    }

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("keydown", handleKeyNav)
    }
  }, [isOpen, handleEscape, handleKeyNav])

  if (!shouldRender || !project) return null

  const gallery = project.designGallery || []
  const hasGallery = gallery.length > 0

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))
  }

  const modalContent = (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        isAnimating ? "opacity-100" : "opacity-0",
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300",
          isAnimating ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative max-h-[95vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300",
          isAnimating ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0",
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[95vh] overflow-y-auto">
          {/* Hero Section with Main Image */}
          <div className="relative">
            {/* Main Image Display */}
            <div
              className="relative h-64 w-full cursor-pointer overflow-hidden bg-gray-900 md:h-80 lg:h-96"
              onClick={() => hasGallery && setIsImageZoomed(true)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hasGallery ? gallery[activeImageIndex].url : project.image}
                alt={hasGallery ? gallery[activeImageIndex].alt : project.imageAlt}
                className={cn(
                  "h-full w-full object-cover transition-all duration-700",
                  isAnimating ? "scale-100" : "scale-110",
                )}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Gallery Navigation */}
              {hasGallery && gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                    {activeImageIndex + 1} / {gallery.length}
                  </div>
                </>
              )}

              {/* Image Caption */}
              {hasGallery && gallery[activeImageIndex].caption && (
                <div className="absolute bottom-4 left-0 right-0 px-8">
                  <p className="text-center text-sm text-white/80">
                    {gallery[activeImageIndex].caption}
                  </p>
                </div>
              )}
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-16">
              {/* Categories */}
              <div
                className={cn(
                  "mb-3 flex flex-wrap gap-2 transition-all delay-100 duration-500",
                  isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-purple-500/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-purple-200 backdrop-blur-sm"
                  >
                    {category}
                  </span>
                ))}
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h2
                className={cn(
                  "text-2xl font-bold text-white transition-all delay-150 duration-500 md:text-3xl",
                  isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {hasGallery && gallery.length > 1 && (
            <div className="border-b border-gray-100 bg-gray-50 px-8 py-4">
              <div className="flex gap-3 overflow-x-auto p-2">
                {gallery.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(index)}
                    className={cn(
                      "relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300",
                      index === activeImageIndex
                        ? "ring-2 ring-purple-500 ring-offset-2"
                        : "opacity-60 hover:opacity-100",
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="border-b border-gray-100 bg-white px-8 py-6">
            <p
              className={cn(
                "text-base leading-relaxed text-gray-600 transition-all delay-200 duration-500",
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {project.description}
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-8 p-8">
            {/* Design Process */}
            {project.designProcess && project.designProcess.length > 0 && (
              <div
                className={cn(
                  "transition-all delay-250 duration-500",
                  isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold text-gray-900">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25">
                    <Lightbulb className="h-5 w-5" />
                  </span>
                  Design Process
                </h3>
                <div className="relative ml-5 border-l-2 border-purple-100 pl-8">
                  {project.designProcess.map((step, index) => (
                    <div key={index} className="relative mb-6 last:mb-0">
                      {/* Timeline dot */}
                      <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-600">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Design Tools */}
            {project.designTools && project.designTools.length > 0 && (
              <div
                className={cn(
                  "transition-all delay-300 duration-500",
                  isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold text-gray-900">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25">
                    <Palette className="h-5 w-5" />
                  </span>
                  Design Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.designTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:shadow-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies (if any) */}
            {project.technologies && project.technologies.length > 0 && (
              <div
                className={cn(
                  "transition-all delay-350 duration-500",
                  isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold text-gray-900">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25">
                    <Layers className="h-5 w-5" />
                  </span>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isImageZoomed && hasGallery && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsImageZoomed(false)}
        >
          <button
            onClick={() => setIsImageZoomed(false)}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation buttons */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Zoomed Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery[activeImageIndex].url}
            alt={gallery[activeImageIndex].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          {gallery[activeImageIndex].caption && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-6 py-3 text-center text-white backdrop-blur-sm">
              <p className="text-sm">{gallery[activeImageIndex].caption}</p>
              <p className="mt-1 text-xs text-white/60">
                {activeImageIndex + 1} / {gallery.length}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )

  if (typeof document !== "undefined") {
    return createPortal(modalContent, document.body)
  }

  return null
}
