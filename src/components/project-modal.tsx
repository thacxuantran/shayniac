'use client';

import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to trigger animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match animation duration
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!shouldRender || !project) return null;

  const modalContent = (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300',
        isAnimating ? 'opacity-100' : 'opacity-0'
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          isAnimating ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={cn(
          'relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300',
          isAnimating
            ? 'scale-100 translate-y-0 opacity-100'
            : 'scale-95 translate-y-8 opacity-0'
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-gray-600 backdrop-blur-sm transition-all hover:bg-black/20 hover:text-gray-900"
          aria-label="Close modal"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[90vh] overflow-y-auto">
          {/* Header with image background */}
          <div className="relative">
            {/* Image Banner */}
            <div className="relative h-48 w-full overflow-hidden md:h-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.imageAlt}
                className={cn(
                  'h-full w-full object-cover transition-all duration-700',
                  isAnimating ? 'scale-100' : 'scale-110'
                )}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            </div>

            {/* Content overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-6">
              {/* Categories */}
              <div
                className={cn(
                  'mb-3 flex flex-wrap gap-2 transition-all delay-100 duration-500',
                  isAnimating
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
              >
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className={cn(
                      'rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm',
                      category === 'Mobile'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-blue-500/20 text-blue-300'
                    )}
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
                  'text-2xl font-bold text-white transition-all delay-150 duration-500 md:text-3xl',
                  isAnimating
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Description below banner */}
          <div className="border-b border-gray-100 bg-gray-50 px-8 py-4">
            <p
              className={cn(
                'text-sm leading-relaxed text-gray-600 transition-all delay-200 duration-500 md:text-base',
                isAnimating
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              )}
            >
              {project.description}
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-6 p-8">
            {/* Responsibilities */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <div
                className={cn(
                  'transition-all delay-250 duration-500',
                  isAnimating
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
              >
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </span>
                  Responsibilities
                </h3>
                <ul className="space-y-3">
                  {project.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-relaxed text-gray-600"
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Duties */}
            {project.duties && project.duties.length > 0 && (
              <div
                className={cn(
                  'transition-all delay-300 duration-500',
                  isAnimating
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
              >
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  Duties
                </h3>
                <ul className="space-y-3">
                  {project.duties.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-relaxed text-gray-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div
                className={cn(
                  'transition-all delay-350 duration-500',
                  isAnimating
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
              >
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200"
                      style={{ animationDelay: `${index * 30}ms` }}
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
    </div>
  );

  // Use portal to render modal at document body level
  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return null;
}
