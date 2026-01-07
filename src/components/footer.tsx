'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { socialLinks, navLinks } from '@/data/projects';
import type { SocialLink } from '@/types';

// Social Icon mapping
const socialIcons: Record<SocialLink['platform'], React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  dribbble: Github,
  twitter: Github,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Top Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo and tagline */}
          <div>
            <Link
              href="/"
              className="mb-3 flex items-center gap-2 text-white transition-opacity hover:opacity-80"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-[#1a1a1a]">
                S
              </span>
              <span className="text-lg font-semibold tracking-tight">
                shayn
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Crafting thoughtful digital experiences that people love to use.
            </p>
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@designer.com"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
          >
            Let&apos;s work together
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target={social.platform === 'email' ? undefined : '_blank'}
                  rel={
                    social.platform === 'email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center md:text-left">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Shayn. All rights reserved. Designed and built
            with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
