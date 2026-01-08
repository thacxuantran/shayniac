// Common types used across the application
export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  image: string;
  imageAlt: string;
  link?: string;
  featured?: boolean;
  year: string;
  responsibilities?: string[];
  duties?: string[];
  technologies?: string[];
}

export type ProjectCategory = 'Website' | 'Mobile';

export interface GraphicProject {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  size: 'large' | 'small';
  link?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
}

// Social Links
export interface SocialLink {
  platform: 'email' | 'linkedin' | 'github' | 'dribbble' | 'twitter';
  href: string;
  label: string;
}

// Experience Types
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  highlights: string[];
  technologies?: string[];
}

// Education Types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

// Design System Colors
export const colors = {
  background: {
    hero: '#1a1a1a',
    primary: '#ffffff',
    tertiary: '#f5f5f5',
  },
  text: {
    onDark: '#ffffff',
    onLight: '#1a1a1a',
    secondary: '#666666',
  },
  accent: '#000000',
} as const;
