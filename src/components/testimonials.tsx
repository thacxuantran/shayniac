"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

// Testimonial data type
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "Axon Active",
    content:
      "Working with Shayn was an absolute pleasure. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The final product exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Technical Lead",
    company: "Axon Active",
    content:
      "Shayn delivered our mobile app on time and with exceptional quality. His expertise in React Native and his proactive communication made the entire development process smooth and efficient.",
  },
  {
    id: 3,
    name: "Thien Tran",
    role: "Design Lead",
    company: "Axon Active",
    content:
      "A rare developer who truly understands design. Shayn implemented our designs pixel-perfectly while suggesting improvements that enhanced the user experience. Highly recommended!",
  },
  {
    id: 4,
    name: "David Park",
    role: "QA Engineer",
    company: "KMS",
    content:
      "Shayn's work on our healthcare platform was outstanding. He navigated complex requirements with ease and delivered a scalable, maintainable codebase that our team continues to build upon.",
  },
  {
    id: 5,
    name: "Khoa Bui",
    role: "Project Lead",
    company: "TDCX",
    content:
      "Exceptional frontend skills combined with a deep understanding of UX principles. Shayn transformed our outdated interface into a modern, intuitive application that our users love.",
  },
  {
    id: 6,
    name: "Bon Tran",
    role: "Engineering Manager",
    company: "Vinova",
    content:
      "Shayn is a talented engineer who brings both technical excellence and creative problem-solving to every project. His contributions to our team were invaluable.",
  },
]

// Quote SVG icon component
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.4 24H8.4C8.4 18.48 12.88 14 18.4 14V18C15.08 18 12.4 20.68 12.4 24H14.4C16.6 24 18.4 25.8 18.4 28V34C18.4 36.2 16.6 38 14.4 38H10.4C8.2 38 6.4 36.2 6.4 34V28V24C6.4 17.36 11.76 12 18.4 12V14C12.88 14 8.4 18.48 8.4 24H14.4ZM35.6 24H29.6C29.6 18.48 34.08 14 39.6 14V18C36.28 18 33.6 20.68 33.6 24H35.6C37.8 24 39.6 25.8 39.6 28V34C39.6 36.2 37.8 38 35.6 38H31.6C29.4 38 27.6 36.2 27.6 34V28V24C27.6 17.36 32.96 12 39.6 12V14C34.08 14 29.6 18.48 29.6 24H35.6Z" />
    </svg>
  )
}

// Get initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

// Single testimonial card component
function TestimonialCard({
  testimonial,
  position,
  isActive,
}: {
  testimonial: Testimonial
  position: number
  isActive: boolean
}) {
  // Calculate transforms based on position (-2, -1, 0, 1, 2)
  const getCardStyles = () => {
    const absPosition = Math.abs(position)

    // Scale based on position
    const scale = position === 0 ? 1 : absPosition === 1 ? 0.85 : 0.75

    // Opacity based on position
    const opacity = position === 0 ? 1 : absPosition === 1 ? 0.5 : 0.25

    // Blur based on position
    const blur = position === 0 ? 0 : absPosition === 1 ? 2 : 4

    // X offset - cards spread out from center
    const xOffset = position * 280

    // Y rotation for 3D effect
    const rotateY = position === 0 ? 0 : position > 0 ? -15 : 15

    // Z-index
    const zIndex = position === 0 ? 30 : absPosition === 1 ? 20 : 10

    return {
      scale,
      opacity,
      blur,
      xOffset,
      rotateY,
      zIndex,
    }
  }

  const styles = getCardStyles()

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      initial={false}
      animate={{
        x: styles.xOffset - 175, // Center the card (350px / 2)
        y: "-50%",
        scale: styles.scale,
        rotateY: styles.rotateY,
        opacity: styles.opacity,
        filter: `blur(${styles.blur}px)`,
        zIndex: styles.zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      <div
        className={cn(
          "relative w-[320px] sm:w-[350px] rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 sm:p-8",
          isActive && "shadow-[0_0_40px_rgba(251,146,60,0.15)]",
        )}
      >
        {/* Decorative corner accent */}
        <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden rounded-tr-2xl">
          <div className="absolute right-2 top-2 h-16 w-[1px] rotate-45 bg-gradient-to-b from-purple-500/40 to-transparent" />
          <div className="absolute right-4 top-0 h-12 w-[1px] rotate-45 bg-gradient-to-b from-purple-500/20 to-transparent" />
        </div>

        {/* Quote icon */}
        <QuoteIcon className="mb-4 h-10 w-10 text-purple-500" />

        {/* Testimonial content */}
        <p className="mb-6 line-clamp-5 text-sm leading-relaxed text-white/70 sm:text-base">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author section */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-00">
            <span className="text-sm font-semibold text-white">
              {getInitials(testimonial.name)}
            </span>
          </div>

          {/* Name and role */}
          <div>
            <h4 className="font-semibold text-white">{testimonial.name}</h4>
            <p className="text-sm text-white/50">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>

        {/* Bottom decorative accent */}
        <div className="absolute bottom-0 left-0 h-20 w-20 overflow-hidden rounded-bl-2xl">
          <div className="absolute bottom-2 left-2 h-16 w-[1px] rotate-45 bg-gradient-to-t from-purple-500/40 to-transparent" />
          <div className="absolute bottom-4 left-0 h-12 w-[1px] rotate-45 bg-gradient-to-t from-purple-500/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Get position relative to active card (-2, -1, 0, 1, 2)
  const getPosition = (index: number): number => {
    const diff = index - activeIndex
    const length = testimonials.length

    // Handle wrapping for infinite loop effect
    if (diff > length / 2) return diff - length
    if (diff < -length / 2) return diff + length
    return diff
  }

  // Get visible cards (only show 5 cards at a time)
  const getVisibleCards = () => {
    const visible: { testimonial: Testimonial; position: number }[] = []

    testimonials.forEach((testimonial, index) => {
      const position = getPosition(index)
      if (Math.abs(position) <= 2) {
        visible.push({ testimonial, position })
      }
    })

    return visible
  }

  return (
    <section
      className="relative overflow-hidden bg-[#0a0a0a] py-20 md:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* purple gradient blurs */}
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Diagonal lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-[200%] origin-left -rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{
                top: `${i * 20}%`,
                left: "-50%",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-purple-500/80">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Clients &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
              Colleagues
            </span>{" "}
            Say
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative h-[400px] sm:h-[420px]">
          {/* Navigation - Left */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10 hover:text-white sm:left-4 sm:p-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Cards */}
          <div className="relative h-full w-full" style={{ perspective: "1200px" }}>
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map(({ testimonial, position }) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  position={position}
                  isActive={position === 0}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10 hover:text-white sm:right-4 sm:p-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-purple-500 to-purple-300"
                  : "w-2 bg-white/20 hover:bg-white/40",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
