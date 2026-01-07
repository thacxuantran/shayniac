'use client';

import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { heroContent, socialLinks } from '@/data/projects';
import type { SocialLink } from '@/types';

// Social Icon mapping
const socialIcons: Record<SocialLink['platform'], React.ElementType> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  dribbble: Github, // fallback
  twitter: Github, // fallback
};

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#1a1a1a] pt-20 md:pt-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-12 py-16 md:flex-row md:items-center md:justify-between md:gap-8 md:py-0">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Greeting */}
            <p
              className={cn(
                'mb-4 text-lg font-medium text-white/60 transition-all duration-700',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              {heroContent.greeting}
            </p>

            {/* Tagline */}
            <h1 className="mb-6 space-y-1">
              {heroContent.tagline.map((line, index) => (
                <span
                  key={index}
                  className={cn(
                    'block text-4xl font-bold leading-tight text-white transition-all duration-700 sm:text-5xl lg:text-6xl',
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  )}
                  style={{
                    transitionDelay: `${150 + index * 100}ms`,
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className={cn(
                'mb-8 max-w-md text-base leading-relaxed text-white/60 transition-all duration-700 sm:text-lg',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
              style={{ transitionDelay: '450ms' }}
            >
              {heroContent.subtitle}
            </p>

            {/* Social Icons */}
            <div
              className={cn(
                'flex items-center gap-4 transition-all duration-700',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
              style={{ transitionDelay: '550ms' }}
            >
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
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1a1a1a]"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Content - Avatar Row */}
          <div
            className={cn(
              'flex items-center transition-all duration-700',
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex -space-x-4">
              {heroContent.avatars.map((avatar, index) => (
                <div
                  key={avatar.id}
                  className={cn(
                    'relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#1a1a1a] bg-gradient-to-br transition-all duration-300 hover:z-10 hover:scale-110 sm:h-24 sm:w-24 lg:h-28 lg:w-28',
                    index === 0 && 'from-violet-500 to-purple-600',
                    index === 1 && 'from-blue-500 to-cyan-600',
                    index === 2 && 'from-emerald-500 to-teal-600',
                    index === 3 && 'from-orange-500 to-amber-600'
                  )}
                  style={{
                    zIndex: heroContent.avatars.length - index,
                  }}
                >
                  <span className="text-2xl font-bold text-white sm:text-3xl">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        )}
        style={{ transitionDelay: '700ms' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/40">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
