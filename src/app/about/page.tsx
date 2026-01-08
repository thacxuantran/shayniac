"use client"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { socialLinks } from "@/data/projects"
import { cn } from "@/lib/utils"
import type { SocialLink } from "@/types"
import {
  ArrowUpRight,
  Code2,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Social Icon mapping
const socialIcons: Record<SocialLink["platform"], React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  dribbble: Github,
  twitter: Github,
}

// Skills data
const skills = {
  frontend: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Shadcn UI",
  ],
  stateManagement: ["Zustand", "React Query", "React Relay", "GraphQL"],
  tools: ["Git", "Figma", "Docker", "REST API", "React Hook Form", "Zod"],
  other: ["UI/UX Design", "Responsive Design", "Performance Optimization", "SEO"],
}

// Values data
const values = [
  {
    icon: Heart,
    title: "User-Centric",
    description: "Every design decision starts with understanding and empathizing with the user.",
  },
  {
    icon: Target,
    title: "Detail-Oriented",
    description: "The small details make the difference between good and exceptional products.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Always exploring new technologies and approaches to solve problems better.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great products are built by great teams working together toward a shared vision.",
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-[#1a1a1a] pt-20 md:pt-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex min-h-[calc(80vh-80px)] flex-col items-center justify-center gap-12 py-16 md:flex-row md:items-center md:justify-between md:gap-16 md:py-0">
            {/* Left Content */}
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
              <p
                className={cn(
                  "mb-4 text-lg font-medium text-white/60 transition-all duration-700",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                About Me
              </p>

              <h1
                className={cn(
                  "mb-6 text-4xl font-bold leading-tight text-white transition-all duration-700 sm:text-5xl lg:text-6xl",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                )}
                style={{ transitionDelay: "150ms" }}
              >
                Building digital
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  experiences
                </span>{" "}
                that matter
              </h1>

              <p
                className={cn(
                  "mb-8 max-w-lg text-base leading-relaxed text-white/60 transition-all duration-700 sm:text-lg",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: "300ms" }}
              >
                I&apos;m a Software Engineer passionate about creating intuitive, user-centered
                digital products. With expertise in frontend development and UI/UX design, I bridge
                the gap between design and code.
              </p>

              {/* Location */}
              <div
                className={cn(
                  "mb-8 flex items-center gap-2 text-white/60 transition-all duration-700",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: "400ms" }}
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Vietnam</span>
              </div>

              {/* Social Icons */}
              <div
                className={cn(
                  "flex items-center gap-4 transition-all duration-700",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: "500ms" }}
              >
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform]
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target={social.platform === "email" ? undefined : "_blank"}
                      rel={social.platform === "email" ? undefined : "noopener noreferrer"}
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1a1a1a]"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right Content - Profile Image Placeholder */}
            <div
              className={cn(
                "flex flex-1 items-center justify-center transition-all duration-700",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 h-72 w-72 rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-xl sm:h-80 sm:w-80" />
                <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 blur-xl sm:h-80 sm:w-80" />

                {/* Profile placeholder */}
                <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-purple-600/10 backdrop-blur-sm sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <img
                    className="flex flex-1 w-full h-full object-cover"
                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/461257754_3385890384889064_4311738257363143918_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGlZ_Q4jCO0mzOE6_Uk5Y2m0-Ie5kUNSFDT4h7mRQ1IUNxYRujrnHAaWhJKxyySS88e8DTvHYGROQloaaaL0TcU&_nc_ohc=Y-j-4q0F_bEQ7kNvwHyiRAe&_nc_oc=AdkgEwCT1zOb4e_W0TeaXsiWgJ5dMwxo0A1Mhn5GtbJSSXS3Fzs7xAlWtD9YmWgQDE6ss1sdyeL-BRdWTDSudTPb&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=EVlleAkW-xOuz2mo1-pxXA&oh=00_Afp7BEui4Qg85wTVtBGyLMeQq6bF4OH74OyrgyVvGqiBTQ&oe=6965CCBA"
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:mb-16">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-[#1a1a1a]" />
              <span className="text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/60">
                Skills & Expertise
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
              Technologies I work with
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]/60">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#1a1a1a] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* State Management */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]/60">
                State & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.stateManagement.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#1a1a1a] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]/60">
                Tools & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#1a1a1a] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other */}
            <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]/60">
                Other Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#1a1a1a] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-[#1a1a1a]/60">
              My Values
            </span>
            <h2 className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">What drives my work</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a]">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[#666666]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              amazing together
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-white/60 sm:text-lg">
            I&apos;m always excited to connect with fellow creators and explore new opportunities.
            Feel free to reach out!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:xuanthactk13@gmail.com"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1a1a1a] transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
            >
              Get in touch
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1a1a1a]"
            >
              View my work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
