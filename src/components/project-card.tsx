'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardClassName = cn(
    'group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500',
    'hover:scale-[1.02] hover:shadow-xl',
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  );

  const cardStyle = {
    transitionDelay: `${index * 100}ms`,
  };

  const cardContent = (
    <>
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        {/* Placeholder gradient background */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br',
            index % 4 === 0 && 'from-violet-100 to-purple-200',
            index % 4 === 1 && 'from-blue-100 to-cyan-200',
            index % 4 === 2 && 'from-emerald-100 to-teal-200',
            index % 4 === 3 && 'from-orange-100 to-amber-200'
          )}
        />

        {/* Placeholder icon/content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              'flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-2xl font-bold shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110',
              index % 4 === 0 && 'text-purple-600',
              index % 4 === 1 && 'text-blue-600',
              index % 4 === 2 && 'text-emerald-600',
              index % 4 === 3 && 'text-orange-600'
            )}
          >
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Categories/Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600"
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
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>
      </div>
    </>
  );

  if (project.link) {
    return (
      <Link
        href={project.link}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={cardClassName}
        style={cardStyle}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cardClassName}
      style={cardStyle}
    >
      {cardContent}
    </div>
  );
}

// Graphic Design Card variant
interface GraphicCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    size: 'large' | 'small';
    link?: string;
  };
  index?: number;
}

export function GraphicCard({ project, index = 0 }: GraphicCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardClassName = cn(
    'group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500',
    'hover:scale-[1.02] hover:shadow-xl',
    project.size === 'large' ? 'md:col-span-2' : '',
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  );

  const cardStyle = {
    transitionDelay: `${index * 100}ms`,
  };

  const cardContent = (
    <>
      {/* Image Container */}
      <div
        className={cn(
          'relative overflow-hidden bg-gray-100',
          project.size === 'large' ? 'aspect-[2/1]' : 'aspect-square'
        )}
      >
        {/* Placeholder gradient background */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br',
            index % 3 === 0 && 'from-rose-100 to-pink-200',
            index % 3 === 1 && 'from-sky-100 to-indigo-200',
            index % 3 === 2 && 'from-lime-100 to-green-200'
          )}
        />

        {/* Placeholder content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              'flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 text-3xl font-bold shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110',
              index % 3 === 0 && 'text-pink-600',
              index % 3 === 1 && 'text-indigo-600',
              index % 3 === 2 && 'text-green-600'
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
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>
      </div>
    </>
  );

  if (project.link) {
    return (
      <Link
        href={project.link}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={cardClassName}
        style={cardStyle}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cardClassName}
      style={cardStyle}
    >
      {cardContent}
    </div>
  );
}
