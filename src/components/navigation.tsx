"use client"

import { navLinks } from "@/data/projects"
import { useScrollHeader } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isScrolled = useScrollHeader(50)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement("a")
    link.href = "/cv/shayn-tran-cv.pdf" // Place your CV file in public/cv/
    link.download = "Shayn-Tran-CV.pdf"
    link.click()
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg" : "bg-[#1a1a1a]",
      )}
    >
      <nav className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
            onClick={closeMobileMenu}
          >
            <span className="text-lg font-semibold tracking-tight">shayniac.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            {/* Download CV Button */}
            <button
              type="button"
              onClick={handleDownloadCV}
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20"
            >
              <span>Download CV</span>
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-2 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Download CV Button */}
            <button
              type="button"
              onClick={() => {
                handleDownloadCV()
                closeMobileMenu()
              }}
              className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-300 hover:bg-gray-100"
            >
              <span>Download CV</span>
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
