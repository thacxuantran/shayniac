'use client';

import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ProjectCard } from '@/components/project-card';
import { ProjectModal } from '@/components/project-modal';
import { UXUIModal } from '@/components/uxui-modal';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { productProjects, projectCategories, sectionTitles } from '@/data/projects';
import type { Project, ProjectCategory } from '@/types';

export function ProductProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUXUIModalOpen, setIsUXUIModalOpen] = useState(false);

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.05,
    triggerOnce: true,
  });

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return productProjects;
    }
    return productProjects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);

    // Check if it's a UX/UI project
    if (project.categories.includes('UX/UI')) {
      setIsUXUIModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseUXUIModal = () => {
    setIsUXUIModalOpen(false);
  };

  return (
    <>
      <section
        id="projects"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="bg-white py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            {/* Sticky Sidebar */}
            <aside className="lg:w-64 lg:flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                {/* Section Label */}
                <div
                  className={cn(
                    'mb-6 transition-all duration-700',
                    sectionVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  )}
                >
                  <h2 className="mb-2 text-2xl font-bold text-[#1a1a1a]">
                    {sectionTitles.productDesign.label}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {sectionTitles.productDesign.description}
                  </p>
                </div>

                {/* Category Filters */}
                <div
                  className={cn(
                    'flex flex-wrap gap-2 transition-all duration-700 lg:flex-col lg:gap-1',
                    sectionVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  )}
                  style={{ transitionDelay: '150ms' }}
                >
                  {/* All Filter */}
                  <FilterButton
                    label="All"
                    isActive={activeFilter === 'All'}
                    onClick={() => setActiveFilter('All')}
                    count={productProjects.length}
                  />

                  {/* Category Filters */}
                  {projectCategories.map((category) => {
                    const count = productProjects.filter((p) =>
                      p.categories.includes(category)
                    ).length;

                    return (
                      <FilterButton
                        key={category}
                        label={category}
                        isActive={activeFilter === category}
                        onClick={() => setActiveFilter(category)}
                        count={count}
                      />
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Projects Grid */}
            <div className="flex-1">
              <div
                className={cn(
                  'grid gap-6 sm:grid-cols-2',
                  filteredProjects.length === 0 && 'min-h-[300px]'
                )}
              >
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onClick={() => handleProjectClick(project)}
                    />
                  ))
                ) : (
                  <div className="col-span-2 flex items-center justify-center">
                    <p className="text-gray-500">
                      No projects found in this category.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* UX/UI Project Modal */}
      <UXUIModal
        project={selectedProject}
        isOpen={isUXUIModalOpen}
        onClose={handleCloseUXUIModal}
      />
    </>
  );
}

// Filter Button Component
interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
}

function FilterButton({ label, isActive, onClick, count }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group flex items-center justify-between gap-2 rounded-lg px-4 py-2 text-left text-sm font-medium transition-all duration-200',
        'hover:bg-gray-100',
        isActive
          ? 'bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]'
          : 'bg-gray-50 text-gray-700'
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          'flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold',
          isActive
            ? 'bg-white/20 text-white'
            : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
        )}
      >
        {count}
      </span>
    </button>
  );
}
