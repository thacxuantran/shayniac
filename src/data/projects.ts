import type { Project, GraphicProject, NavLink, SocialLink, ProjectCategory, Experience, Education } from '@/types';

// Navigation Links
export const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Film', href: '#film' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    platform: 'email',
    href: 'mailto:hello@designer.com',
    label: 'Email',
  },
  {
    platform: 'linkedin',
    href: 'https://linkedin.com/in/designer',
    label: 'LinkedIn',
  },
  {
    platform: 'github',
    href: 'https://github.com/designer',
    label: 'GitHub',
  },
];

// Project Categories for filtering
export const projectCategories: ProjectCategory[] = [
  'Mobile',
  'Subscription',
  'SaaS Product',
  'Design System',
  'AR/VR',
];

// Product Design Projects
export const productProjects: Project[] = [
  {
    id: 'project-1',
    title: 'FinanceFlow Mobile App',
    description: 'A comprehensive mobile banking experience designed to simplify personal finance management with intuitive interfaces and seamless transactions.',
    categories: ['Mobile', 'Subscription'],
    image: '/images/projects/finance-app.jpg',
    imageAlt: 'FinanceFlow mobile banking app interface',
    link: '/projects/financeflow',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'CloudSync Dashboard',
    description: 'Enterprise SaaS platform for real-time data synchronization across multiple cloud providers with advanced analytics and monitoring.',
    categories: ['SaaS Product', 'Design System'],
    image: '/images/projects/cloudsync.jpg',
    imageAlt: 'CloudSync dashboard interface',
    link: '/projects/cloudsync',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'StreamBox Subscription',
    description: 'Redesigned streaming service experience focusing on content discovery, personalized recommendations, and multi-device viewing.',
    categories: ['Subscription', 'Mobile'],
    image: '/images/projects/streambox.jpg',
    imageAlt: 'StreamBox streaming service interface',
    link: '/projects/streambox',
  },
  {
    id: 'project-4',
    title: 'Atomic Design System',
    description: 'Scalable component library and design system built for enterprise applications, featuring accessibility-first components and comprehensive documentation.',
    categories: ['Design System'],
    image: '/images/projects/design-system.jpg',
    imageAlt: 'Atomic Design System components',
    link: '/projects/atomic-design',
    featured: true,
  },
  {
    id: 'project-5',
    title: 'VisionSpace AR',
    description: 'Augmented reality application for interior design visualization, allowing users to place virtual furniture in their real environment.',
    categories: ['AR/VR', 'Mobile'],
    image: '/images/projects/visionspace.jpg',
    imageAlt: 'VisionSpace AR application interface',
    link: '/projects/visionspace',
  },
  {
    id: 'project-6',
    title: 'TaskMaster Pro',
    description: 'Productivity SaaS tool designed for remote teams, featuring task management, time tracking, and team collaboration features.',
    categories: ['SaaS Product', 'Subscription'],
    image: '/images/projects/taskmaster.jpg',
    imageAlt: 'TaskMaster Pro productivity tool',
    link: '/projects/taskmaster',
  },
  {
    id: 'project-7',
    title: 'MetaVerse Gallery',
    description: 'Virtual reality art gallery experience enabling artists to showcase their work in immersive 3D environments.',
    categories: ['AR/VR'],
    image: '/images/projects/metaverse.jpg',
    imageAlt: 'MetaVerse Gallery VR experience',
    link: '/projects/metaverse-gallery',
  },
  {
    id: 'project-8',
    title: 'HealthTrack Mobile',
    description: 'Health and wellness tracking application with personalized insights, workout planning, and nutrition management.',
    categories: ['Mobile', 'Subscription'],
    image: '/images/projects/healthtrack.jpg',
    imageAlt: 'HealthTrack mobile app interface',
    link: '/projects/healthtrack',
  },
];

// Graphic Design Projects
export const graphicProjects: GraphicProject[] = [
  {
    id: 'graphic-1',
    title: 'Brand Identity - Nexus Studio',
    description: 'Complete brand identity system including logo, typography, color palette, and brand guidelines for a creative agency.',
    image: '/images/graphic/nexus-brand.jpg',
    imageAlt: 'Nexus Studio brand identity showcase',
    size: 'large',
    link: '/graphic/nexus-studio',
  },
  {
    id: 'graphic-2',
    title: 'Event Poster Series',
    description: 'Series of promotional posters for annual tech conference, featuring bold typography and geometric elements.',
    image: '/images/graphic/event-posters.jpg',
    imageAlt: 'Tech conference poster designs',
    size: 'small',
    link: '/graphic/event-posters',
  },
  {
    id: 'graphic-3',
    title: 'Magazine Layout Design',
    description: 'Editorial design for quarterly lifestyle magazine featuring modern layouts and dynamic typography.',
    image: '/images/graphic/magazine.jpg',
    imageAlt: 'Magazine spread layouts',
    size: 'small',
    link: '/graphic/magazine',
  },
  {
    id: 'graphic-4',
    title: 'Packaging - Artisan Coffee',
    description: 'Sustainable packaging design for specialty coffee roaster, emphasizing craft and environmental responsibility.',
    image: '/images/graphic/coffee-packaging.jpg',
    imageAlt: 'Artisan coffee packaging design',
    size: 'large',
    link: '/graphic/artisan-coffee',
  },
  {
    id: 'graphic-5',
    title: 'Icon Set - Finance App',
    description: 'Custom icon library designed for financial applications, featuring consistent stroke weights and rounded aesthetics.',
    image: '/images/graphic/icon-set.jpg',
    imageAlt: 'Finance app icon set',
    size: 'small',
    link: '/graphic/finance-icons',
  },
  {
    id: 'graphic-6',
    title: 'Typography Exploration',
    description: 'Experimental typography project exploring variable fonts and kinetic type for digital experiences.',
    image: '/images/graphic/typography.jpg',
    imageAlt: 'Typography exploration project',
    size: 'small',
    link: '/graphic/typography',
  },
];

// Work Experience
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Software Engineer',
    company: 'Axon Active',
    period: 'May 2024 - Present',
    highlights: [
      'Contributed to a healthcare project aimed at improving patient-doctor interactions through online appointments, consultations, prescriptions, and patient monitoring',
      'Developing chat and video call features using ReactJS, Shadcn, React Hook Form, React Relay, and GraphQL for secure, real-time communication',
      'Building a React Native mobile app for iOS and Android, allowing patients to book appointments, interact with doctors, track visit history, manage profiles, insurance, and view prescriptions',
      'Collaborating with team members, including designers and backend developers, to align on project goals, resolve technical challenges, and ensure smooth integration',
      'Proposing UI improvements, suggesting intuitive designs and streamlined workflows to enhance user experience and accessibility',
    ],
    technologies: ['ReactJS', 'React Native', 'Shadcn', 'React Hook Form', 'React Relay', 'GraphQL'],
  },
  {
    id: 'exp-2',
    title: 'Software Engineer',
    company: 'Vinova - Vietnam Software Outsourcing Company',
    period: 'July 2023 - May 2024',
    highlights: [
      'As a Front End Developer, I work on a finance and stock market project, focusing on building user interfaces and integrating APIs using ReactJS, React Query, React Hook Form, and Shadcn',
      'Developing applications according to client requirements',
      'Be a core member of the development team of Vinova',
      'Participating in product development',
      'Leading a team with 2 fresher members - taking responsibilities in training my team members and sharing experiences with them',
    ],
    technologies: ['ReactJS', 'React Query', 'React Hook Form', 'Shadcn'],
  },
  {
    id: 'exp-3',
    title: 'Front End Developer',
    company: 'TDCX Malaysia - Behalf of Google',
    period: 'June 2022 - July 2023',
    highlights: [
      'Participating in the entire project implementation process from the beginning to the end, fulfilling customer requirements',
      'Worked directly with Google Team to help customer solve all their problems with their website related to UX/UI or content media to achieve SEO standards',
      'During working time in this role, I have supported and maintained over 150 websites of customer',
    ],
  },
  {
    id: 'exp-4',
    title: 'Front End Developer & UX/UI Designer',
    company: 'KMS Technology - Vietnam Software Product & Outsourcing Company',
    period: 'March 2021 - Jun 2022',
    highlights: [
      'Be a core member to develop AI Chatbot product in Healthcare service - Create workflow, training AI Chatbot knowledge',
      'Studying the market to look for the new feature and new technology to add into the product',
      'Designing software pattern, screening flow and define new features',
      'Be a Front End Developer and UX/UI Designer for a new product of KMS - AI Chatbot Platform - Create workflow, Training AI ChatBot, and Build a customized Chatbot',
      'Research user behavior and find the most optimal solution',
    ],
  },
];

// Education
export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'FPT University - Vietnam',
    degree: 'Bachelor of Software Engineering | GPA: 8.56',
    year: '2021',
  },
  {
    id: 'edu-2',
    institution: 'Nguyen Binh Khiem High School for Gifted',
    degree: 'Math Student',
    year: '2017',
  },
];

// Hero Content
export const heroContent = {
  greeting: 'Hey there!',
  tagline: ['I design digital', 'products that', 'people love to use.'],
  subtitle: 'Product Designer based in San Francisco, crafting thoughtful digital experiences for startups and enterprises.',
  avatars: [
    { id: 1, image: '/images/avatars/avatar-1.jpg', alt: 'Team member 1' },
    { id: 2, image: '/images/avatars/avatar-2.jpg', alt: 'Team member 2' },
    { id: 3, image: '/images/avatars/avatar-3.jpg', alt: 'Team member 3' },
    { id: 4, image: '/images/avatars/avatar-4.jpg', alt: 'Team member 4' },
  ],
};

// Section Titles
export const sectionTitles = {
  productDesign: {
    label: 'Product Design',
    description: 'Selected projects showcasing end-to-end product design work.',
  },
  graphicDesign: {
    title: 'Graphic Design',
    subtitle: 'A collection of visual design work including branding, illustration, and print design.',
  },
  experienceEducation: {
    title: 'Experience & Education',
    subtitle: 'My professional journey and academic background in software development.',
  },
};
