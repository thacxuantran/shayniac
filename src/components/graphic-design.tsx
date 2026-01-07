'use client';

import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { experiences, education, sectionTitles } from '@/data/projects';

export function GraphicDesign() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section
      id="experience-education"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#f5f5f5] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'mb-12 max-w-2xl transition-all duration-700 md:mb-16',
            sectionVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          )}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1a1a1a] md:text-4xl">
            {sectionTitles.experienceEducation.title}
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            {sectionTitles.experienceEducation.subtitle}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Experience Section */}
          <div className="lg:col-span-2">
            <h3
              className={cn(
                'mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500 transition-all delay-100 duration-700',
                sectionVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              )}
            >
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={cn(
                    'relative border-l-2 border-gray-200 pl-6 transition-all duration-700',
                    sectionVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  )}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-gray-300 bg-white" />

                  <div className="mb-2">
                    <h4 className="text-lg font-bold text-[#1a1a1a]">
                      {exp.title}
                    </h4>
                    <p className="text-sm font-medium text-gray-700">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>

                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-gray-600">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3
              className={cn(
                'mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500 transition-all delay-100 duration-700',
                sectionVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              )}
            >
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={cn(
                    'rounded-lg bg-white p-6 shadow-sm transition-all duration-700',
                    sectionVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  )}
                  style={{ transitionDelay: `${(index + 5) * 150}ms` }}
                >
                  <h4 className="mb-1 text-base font-bold text-[#1a1a1a]">
                    {edu.institution}
                  </h4>
                  <p className="mb-1 text-sm text-gray-600">{edu.degree}</p>
                  <p className="text-sm font-medium text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
