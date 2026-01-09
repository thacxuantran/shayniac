import type {
  Education,
  Experience,
  GraphicProject,
  NavLink,
  Project,
  ProjectCategory,
  SocialLink,
} from "@/types"

// Navigation Links
export const navLinks: NavLink[] = [
  { label: "Projects", href: "/#projects" },
  { label: "Experiences", href: "/#experience-education" },
  { label: "About", href: "/about" },
]

// Social Links
export const socialLinks: SocialLink[] = [
  {
    platform: "email",
    href: "mailto:xuanthactk13@gmail.com",
    label: "Email",
  },
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/thacxuantran/",
    label: "LinkedIn",
  },
  {
    platform: "github",
    href: "https://github.com/thacxuantran",
    label: "GitHub",
  },
]

// Project Categories for filtering
export const projectCategories: ProjectCategory[] = ["Website", "Mobile", "UX/UI"]

// Product Design Projects
export const productProjects: Project[] = [
  {
    id: "project-1",
    title: "Medgate - Telemedicine & Patient Engagement Platform",
    description:
      "A cross-platform telemedicine solution allowing patients to book appointments, manage insurance, and access prescriptions via web and mobile apps.",
    categories: ["Website", "Mobile"],
    image: "https://i.ytimg.com/vi/DfgdBLWWf58/maxresdefault.jpg",
    imageAlt: "Medgate telemedicine platform interface",
    featured: true,
    year: "2024 - Present",
    responsibilities: [
      "Developed a cross-platform telemedicine solution allowing patients to book appointments, manage insurance, and access prescriptions via a React Native app (iOS/Android)",
      "Implemented secure real-time chat and video conferencing features on the web portal using ReactJS, React Relay, and GraphQL to facilitate remote doctor-patient consultations",
      "Collaborated with cross-functional teams to define project requirements and optimize the frontend architecture for scalability and performance",
      "Enhanced user engagement by proposing intuitive design changes and utilizing Shadcn and React Hook Form to create a seamless, accessible user interface",
    ],
    technologies: [
      "ReactJS",
      "React Native",
      "TypeScript",
      "Zustand",
      "React Relay",
      "GraphQL",
      "Shadcn UI",
      "React Hook Form",
      "CSS/SCSS",
    ],
  },
  {
    id: "project-2",
    title: "AI Voice Agent & Omnichannel Customer Support Platform",
    description:
      "An intelligent customer support platform featuring visual flow builder, embeddable AI widget, admin dashboard, and SIP-based voice integration.",
    categories: ["Website"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop",
    imageAlt: "AI Voice Agent platform interface",
    featured: true,
    year: "2023 - 2024",
    responsibilities: [
      "Visual Flow Builder: Implemented an interactive, drag-and-drop AI training interface using React Flow, allowing users to visually design conversation flows and logic for the AI agents based on the Flowise engine",
      "Embeddable AI Widget: Engineered a lightweight, customizable chat widget integrated with AI capabilities, designed to be easily embedded into third-party client websites",
      "Admin Dashboard: Built a feature-rich admin dashboard using Shadcn UI and React Hook Form, enabling businesses to manage staff, curate enterprise knowledge bases for AI training, and monitor real-time conversation analytics",
      "Voice Integration: Integrated SIP-based voice features, allowing the AI agent to handle incoming calls, identify customer intent, and route users through specific support flows or to human agents",
    ],
    technologies: [
      "ReactJS",
      "TypeScript",
      "React Flow",
      "Shadcn UI",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Flowise",
      "SIP Protocol",
    ],
  },
  {
    id: "project-3",
    title: "SBI - Digital Market",
    description:
      "A comprehensive digital marketplace platform built with modern React stack, fulfilling customer requirements through collaborative solution development.",
    categories: ["Website"],
    image:
      "https://www.ledgerinsights.com/wp-content/uploads/2024/11/SBI-digital-markets-tokenization.jpg",
    imageAlt: "SBI Digital Market interface",
    featured: true,
    year: "2023",
    responsibilities: [
      "Participate in the entire project implementation process from start to finish, fulfill customer requirements, and engage in discussions to propose suitable solutions",
    ],
    duties: ["Discuss with customers about new features, problems, and solutions"],
    technologies: [
      "React",
      "TypeScript",
      "Shadcn",
      "Tailwind",
      "React Hook Form",
      "Zod",
      "React Router",
    ],
  },
  {
    id: "project-4",
    title: "Ecommerce & Education Projects",
    description:
      "Multiple projects for Google customers focusing on analytics integration, event tracking, and SEO optimization across various e-commerce and education platforms.",
    categories: ["Website"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    imageAlt: "Ecommerce and Education projects",
    year: "2022",
    responsibilities: [
      "Fixing components in many website platforms: NextJS, ReactJS,... to get matched parameters into Google Analytics",
      "Build Google Analytics customized components for Google customers using vanilla JS",
      "Implement code for events tracking and send them to Google Ads without significant impact on their website performance when they launch websites to market and get revenues that they expected",
      "Communicated and supported with Google product team for the prompt solution",
      "Be a part of Google Team to help customer solve all their problems in their website about UX/UI or content media to achieve SEO standards",
    ],
    technologies: ["React", "JavaScript", "NextJS", "Google Analytics", "Google Ads"],
  },
  {
    id: "project-5",
    title: "AI Chatbot Platform",
    description:
      "An intelligent chatbot platform with workflow creation, AI training capabilities, and customizable chatbot builder for healthcare services.",
    categories: ["Website"],
    image:
      "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/300961816_763898051549968_2064503114598938135_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gji5cepYrPIQ7kNvwELYEvC&_nc_oc=AdkEf3AI-iy4u_07v0gWVhoP_5jiYCzc7HcwbLmjWAmxMjnjFYYJD0su5ArxWgrhDNJ_FpaZ52zOrc7aBITqS9Y_&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=Jd_VgPRqEA0oku0vVZ868Q&oh=00_AfpjKeVdSv2oFk5016PtkEsf0diIxWcP2zQTKbWjnIN2QQ&oe=696648A6",
    imageAlt: "AI Chatbot Platform interface",
    year: "2021 - 2022",
    responsibilities: [
      "Create workflow, Training AI ChatBot, and Build a customized Chatbot",
      "Research the market to look for the new feature and new technology for applying the product",
      "Create the design idea and design the UI for the platform by using design tools (Figma, Photoshop, Sketch,...)",
    ],
    technologies: [
      "NextJS",
      "NestJS",
      "Python",
      "Microservice",
      "Docker",
      "RestAPI",
      "Kafka",
      "Figma",
      "Photoshop",
      "Sketch",
    ],
  },
  {
    id: "project-6",
    title: "Chamate - Speaking Practice with AI",
    description:
      "Master spoken English with an intelligent AI partner. Receive instant corrections on syntax and phonetics while conversing with various personas. Whether you are practicing for daily life or academic studies, our AI is trained to guide you through every level of conversation.",
    categories: ["Mobile"],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ed/73/45/ed734595-eb52-8e58-14f0-38e8a9e2c12f/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1200x630wa.jpg",
    imageAlt: "",
    year: "2021 - 2022",
    responsibilities: [
      "Founding Member & Mobile Lead: Established the project foundations from day one, overseeing the entire mobile ecosystem.",
      "End-to-End Product Development: Managed the full product lifecycle alongside the Co-founder, transforming initial concepts into UI/UX designs and high-performance code.",
      "Technical Leadership: Led and mentored the engineering team, ensuring code quality and adherence to project timelines.",
      "Strategic Execution: Translated business ideas into tangible mobile features, driving the product from zero to launch.",
    ],
    technologies: [
      "ReactJS",
      "React Native",
      "TypeScript",
      "Zustand",
      "Restful",
      "Shadcn UI",
      "React Hook Form",
      "React native paper",
    ],
  },
  {
    id: "project-7",
    title: "Athenka - AI Chatbot Platform",
    description:
      "An intelligent chatbot platform with workflow creation, AI training capabilities, and customizable chatbot builder for healthcare services.",
    categories: ["UX/UI"],
    image: "/assets/images/athenka1.png",
    imageAlt: "Athenka AI Chatbot Platform",
    featured: true,
    year: "2021",
    designProcess: [
      "Workflow Creation: Implemented a drag-and-drop interface for creating and managing chatbot workflows, allowing users to define conversation paths and responses",
      "AI Training: Built an AI training interface using React Flow, allowing users to train the chatbot on specific topics and intents",
      "Customizable Chatbot Builder: Created a customizable chatbot builder using Shadcn UI and React Hook Form, allowing users to create and customize chatbots for their specific needs",
      "Voice Integration: Integrated SIP-based voice features, allowing the chatbot to handle incoming calls, identify customer intent, and route users through specific support flows or to human agents",
    ],
    designTools: ["Figma", "FigJam", "Maze", "Notion", "Adobe Illustrator"],
    designGallery: [
      {
        id: "design-1",
        url: "/assets/images/athenka1.png",
        alt: "Dashboard Overview",
        caption: "Logo and branding",
      },
      {
        id: "design-2",
        url: "/assets/images/athenka2.png",
        alt: "Analytics View",
        caption: "AI Chatbot Widget",
      },
      {
        id: "design-3",
        url: "/assets/images/athenka3.png",
        alt: "Patient Management",
        caption: "AI Chatbot Builder and Node flow ",
      },
      {
        id: "design-4",
        url: "/assets/images/athenka4.png",
        alt: "Mobile Responsive Design",
        caption: "Components and animations",
      },
      {
        id: "design-5",
        url: "/assets/images/athenka5.png",
        alt: "Mobile Responsive Design",
        caption: "Main Workflow and Node flow",
      },
      {
        id: "design-6",
        url: "/assets/images/athenka6.png",
        alt: "Mobile Responsive Design",
        caption: "Icons and illustrations",
      },
    ],
  },
  {
    id: "project-8",
    title: "Eflowai - Omnichannel Customer Support Platform",
    description:
      "An intelligent customer support platform featuring visual flow builder, embeddable AI widget, admin dashboard, and SIP-based voice integration.",
    categories: ["UX/UI"],
    image: "/assets/images/eflowai1.png",
    imageAlt: "Eflowai Omnichannel Customer Support Platform",
    featured: true,
    year: "2024",
    designProcess: [
      "Visual Flow Builder: Implemented an interactive, drag-and-drop AI training interface using React Flow, allowing users to visually design conversation flows and logic for the AI agents based on the Flowise engine",
      "Embeddable AI Widget: Engineered a lightweight, customizable chat widget integrated with AI capabilities, designed to be easily embedded into third-party client websites",
      "Admin Dashboard: Built a feature-rich admin dashboard using Shadcn UI and React Hook Form, enabling businesses to manage staff, curate enterprise knowledge bases for AI training, and monitor real-time conversation analytics",
      "Voice Integration: Integrated SIP-based voice features, allowing the AI agent to handle incoming calls, identify customer intent, and route users through specific support flows or to human agents",
    ],
    designTools: ["Figma", "FigJam", "Maze", "Notion", "Adobe Illustrator"],
    designGallery: [
      {
        id: "design-1",
        url: "/assets/images/eflowai1.png",
        alt: "Eflowai Omnichannel Customer Support Platform",
        caption: "Main dashboard",
      },
      {
        id: "design-4",
        url: "/assets/images/eflowai2.png",
        alt: "Eflowai Omnichannel Customer Support Platform",
        caption: "User management",
      },
      {
        id: "design-5",
        url: "/assets/images/eflowai3.png",
        alt: "Eflowai Omnichannel Customer Support Platform",
        caption: "Data visualization and Task management",
      },
      {
        id: "design-6",
        url: "/assets/images/eflowai4.png",
        alt: "Eflowai Omnichannel Customer Support Platform",
        caption: "Components and animations",
      },
    ],
  },
  {
    id: "project-9",
    title: "GEN - Recruitment Platform",
    description:
      "A recruitment platform with job posting, candidate management, and interview scheduling features.",
    categories: ["UX/UI"],
    image: "/assets/images/gen1.png",
    imageAlt: "GEN Recruitment Platform",
    featured: true,
    year: "2020",
    designProcess: [
      "Job Posting: Implemented a job posting interface using React Flow, allowing users to post jobs and manage job applications",
      "Candidate Management: Built a candidate management interface using Shadcn UI and React Hook Form, allowing users to manage candidates and interview scheduling",
      "Interview Scheduling: Built an interview scheduling interface using React Flow, allowing users to schedule interviews and manage interviewers",
      "Interview Management: Built an interview management interface using Shadcn UI and React Hook Form, allowing users to manage interviews and interviewers",
    ],
    designTools: ["Figma", "FigJam", "Maze", "Notion", "Adobe Illustrator"],
    designGallery: [
      {
        id: "design-1",
        url: "/assets/images/gen1.png",
        alt: "GEN Recruitment Platform",
        caption: "GEN Recruitment Platform",
      },
      {
        id: "design-2",
        url: "/assets/images/gen2.png",
        alt: "GEN Recruitment Platform",
        caption: "Job posting interface",
      },
      {
        id: "design-3",
        url: "/assets/images/gen3.png",
        alt: "GEN Recruitment Platform",
        caption: "Homepage",
      },
      {
        id: "design-4",
        url: "/assets/images/gen4.png",
        alt: "GEN Recruitment Platform",
        caption: "Event page",
      },
    ],
  },
]

// Graphic Design Projects
export const graphicProjects: GraphicProject[] = [
  {
    id: "graphic-1",
    title: "Brand Identity - Nexus Studio",
    description:
      "Complete brand identity system including logo, typography, color palette, and brand guidelines for a creative agency.",
    image: "/images/graphic/nexus-brand.jpg",
    imageAlt: "Nexus Studio brand identity showcase",
    size: "large",
    link: "/graphic/nexus-studio",
  },
  {
    id: "graphic-2",
    title: "Event Poster Series",
    description:
      "Series of promotional posters for annual tech conference, featuring bold typography and geometric elements.",
    image: "/images/graphic/event-posters.jpg",
    imageAlt: "Tech conference poster designs",
    size: "small",
    link: "/graphic/event-posters",
  },
  {
    id: "graphic-3",
    title: "Magazine Layout Design",
    description:
      "Editorial design for quarterly lifestyle magazine featuring modern layouts and dynamic typography.",
    image: "/images/graphic/magazine.jpg",
    imageAlt: "Magazine spread layouts",
    size: "small",
    link: "/graphic/magazine",
  },
  {
    id: "graphic-4",
    title: "Packaging - Artisan Coffee",
    description:
      "Sustainable packaging design for specialty coffee roaster, emphasizing craft and environmental responsibility.",
    image: "/images/graphic/coffee-packaging.jpg",
    imageAlt: "Artisan coffee packaging design",
    size: "large",
    link: "/graphic/artisan-coffee",
  },
  {
    id: "graphic-5",
    title: "Icon Set - Finance App",
    description:
      "Custom icon library designed for financial applications, featuring consistent stroke weights and rounded aesthetics.",
    image: "/images/graphic/icon-set.jpg",
    imageAlt: "Finance app icon set",
    size: "small",
    link: "/graphic/finance-icons",
  },
  {
    id: "graphic-6",
    title: "Typography Exploration",
    description:
      "Experimental typography project exploring variable fonts and kinetic type for digital experiences.",
    image: "/images/graphic/typography.jpg",
    imageAlt: "Typography exploration project",
    size: "small",
    link: "/graphic/typography",
  },
]

// Work Experience
export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Software Engineer",
    company: "Axon Active",
    period: "May 2024 - Present",
    highlights: [
      "Contributed to a healthcare project aimed at improving patient-doctor interactions through online appointments, consultations, prescriptions, and patient monitoring",
      "Developing chat and video call features using ReactJS, Shadcn, React Hook Form, React Relay, and GraphQL for secure, real-time communication",
      "Building a React Native mobile app for iOS and Android, allowing patients to book appointments, interact with doctors, track visit history, manage profiles, insurance, and view prescriptions",
      "Collaborating with team members, including designers and backend developers, to align on project goals, resolve technical challenges, and ensure smooth integration",
      "Proposing UI improvements, suggesting intuitive designs and streamlined workflows to enhance user experience and accessibility",
    ],
    technologies: [
      "ReactJS",
      "React Native",
      "Shadcn",
      "React Hook Form",
      "React Relay",
      "GraphQL",
    ],
  },
  {
    id: "exp-2",
    title: "Software Engineer",
    company: "Vinova - Vietnam Software Outsourcing Company",
    period: "July 2023 - May 2024",
    highlights: [
      "As a Front End Developer, I work on a finance and stock market project, focusing on building user interfaces and integrating APIs using ReactJS, React Query, React Hook Form, and Shadcn",
      "Developing applications according to client requirements",
      "Be a core member of the development team of Vinova",
      "Participating in product development",
      "Leading a team with 2 fresher members - taking responsibilities in training my team members and sharing experiences with them",
    ],
    technologies: ["ReactJS", "React Query", "React Hook Form", "Shadcn"],
  },
  {
    id: "exp-3",
    title: "Front End Developer",
    company: "TDCX Malaysia - Behalf of Google",
    period: "June 2022 - July 2023",
    highlights: [
      "Participating in the entire project implementation process from the beginning to the end, fulfilling customer requirements",
      "Worked directly with Google Team to help customer solve all their problems with their website related to UX/UI or content media to achieve SEO standards",
      "During working time in this role, I have supported and maintained over 150 websites of customer",
    ],
  },
  {
    id: "exp-4",
    title: "Front End Developer & UX/UI Designer",
    company: "KMS Technology - Vietnam Software Product & Outsourcing Company",
    period: "March 2021 - Jun 2022",
    highlights: [
      "Be a core member to develop AI Chatbot product in Healthcare service - Create workflow, training AI Chatbot knowledge",
      "Studying the market to look for the new feature and new technology to add into the product",
      "Designing software pattern, screening flow and define new features",
      "Be a Front End Developer and UX/UI Designer for a new product of KMS - AI Chatbot Platform - Create workflow, Training AI ChatBot, and Build a customized Chatbot",
      "Research user behavior and find the most optimal solution",
    ],
  },
  {
    id: "exp-5",
    title: "Software Engineer Intern",
    company: "FPT Software",
    period: "May 2020 - Aug 2022",
    highlights: [
      "Collaborated with senior engineers to migrate legacy code to Reactjs, improving application performance and maintainability.",
      "Identified and resolved critical bugs in the production environment, increasing system stability and customer satisfaction.",
      "Wrote comprehensive unit and integration tests",
    ],
  },
]

// Education
export const education: Education[] = [
  {
    id: "edu-1",
    institution: "FPT University - Vietnam",
    degree: "Bachelor of Software Engineering | GPA: 8.56",
    year: "2021",
  },
  {
    id: "edu-2",
    institution: "Nguyen Binh Khiem High School for Gifted",
    degree: "Math Student",
    year: "2017",
  },
]

// Hero Content
export const heroContent = {
  greeting: "Hey there!",
  tagline: ["I'm Shayn!"],
  subtitle: " Not just a developer — I’m your partner in digital innovation.",
  avatars: [
    { id: 1, image: "/images/avatars/avatar-1.jpg", alt: "Team member 1" },
    { id: 2, image: "/images/avatars/avatar-2.jpg", alt: "Team member 2" },
    { id: 3, image: "/images/avatars/avatar-3.jpg", alt: "Team member 3" },
    { id: 4, image: "/images/avatars/avatar-4.jpg", alt: "Team member 4" },
  ],
}

// Section Titles
export const sectionTitles = {
  productDesign: {
    label: "Product Design",
    description: "Selected projects showcasing end-to-end product design work.",
  },
  graphicDesign: {
    title: "Graphic Design",
    subtitle:
      "A collection of visual design work including branding, illustration, and print design.",
  },
  experienceEducation: {
    title: "Experience & Education",
    subtitle: "My professional journey and academic background in software development.",
  },
}
