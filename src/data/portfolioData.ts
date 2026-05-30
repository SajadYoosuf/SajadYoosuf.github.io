// src/data/portfolioData.ts

export interface Project {
  id: string;
  title: string;
  period: string;
  problem: string;
  role: string;
  solution: string;
  outcome: string;
  stack: string[];
  link?: string;
  caseStudyLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  iconName: 'lightbulb' | 'cpu' | 'award';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  subRole: string;
  location: string;
  headline: string;
  subHeadline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  cvUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Sajad Yoosuf',
  role: 'Full-Stack Product Engineer',
  subRole: 'Product Thinking + Full-Stack Execution',
  location: 'Kozhikode, Kerala',
  headline: 'I build products that work — end to end.',
  subHeadline: 'Full-stack product engineer. I take ideas from user problem → architecture → shipped feature → measured result.',
  bio: "I'm a full-stack product engineer from Kozhikode, Kerala. I love building things that real people use — ideally things that solve a problem I've run into myself. Outside of code, I'm drawn to product strategy, design systems, and learning how businesses actually work.",
  email: 'sajadyoosuf007@gmail.com', // Changeable easily by Sajad
  github: 'https://github.com/SajadYoosuf',
  linkedin: 'https://www.linkedin.com/in/sajad-yoosuf-a82616319/',
  cvUrl: '/cv.pdf', // Points to public/cv.pdf
};

export const valueProps: ValueProp[] = [
  {
    title: 'Product Thinking First',
    description: 'I start with the user problem, not the tech. Every architectural decision maps back to a business outcome and user experience.',
    iconName: 'lightbulb',
  },
  {
    title: 'Full-Stack Execution',
    description: 'Frontend, backend, mobile, infra, and deployment. I don\'t hand off — I own the implementation across the entire stack.',
    iconName: 'cpu',
  },
  {
    title: 'End-to-End Ownership',
    description: 'From discovery to post-launch metrics. I\'ve run sprints, written specs, and shipped features that moved business needles.',
    iconName: 'award',
  },
];

export const projects: Project[] = [
  {
    id: 'foodsnap-ai',
    title: 'FoodSnap AI — Intelligent Nutrition Tracker',
    period: '2026',
    problem: 'Manually logging meals and counting calories is tedious and prone to human error, causing users to abandon healthy dietary habits.',
    role: 'Creator & Lead Engineer',
    solution: 'Designed and shipped a mobile application using Flutter and Dart, integrating Gemini Vision API to identify food items, estimate portions, and log nutrition from a single snapshot.',
    outcome: 'Completed a fully interactive AI camera prototype that logs meal components, counts calories, and generates daily nutritional reports in under 3 seconds.',
    stack: ['Dart', 'Flutter', 'Node.js', 'Gemini API', 'Firebase'],
    link: 'https://github.com/SajadYoosuf/foodsnap-ai',
  },
  {
    id: 'ai-planner',
    title: 'AI-Powered Task Planner & Smart Scheduler',
    period: '2025',
    problem: 'Dynamic daily schedule fragmentation makes it hard for modern knowledge workers to establish and maintain consistent deep work states.',
    role: 'Creator & Lead Developer',
    solution: 'Shipped a highly responsive scheduling client using Flutter and Dart, integrating SQLite local database caching and modular task-priority auto-allocation.',
    outcome: 'Launched on GitHub with zero-latency offline-first synchronization, providing automated timeline adjustments for daily task pipelines.',
    stack: ['Dart', 'Flutter', 'SQLite', 'GitHub Actions', 'CI/CD'],
    link: 'https://github.com/SajadYoosuf/ai_daily_planner',
  },
  {
    id: 'disaster-management',
    title: 'Disaster Response & Relief Coordination Portal',
    period: '2025',
    problem: 'During extreme weather events, critical coordinates for rescue operations and medical supplies get lost in fragmented chat channels.',
    role: 'Core Architect & Developer',
    solution: 'Developed a high-velocity emergency response application in Flutter to aggregate rescue tickets, track dispatch locations, and display danger zones.',
    outcome: 'Shipped a resilient open-source community dashboard, facilitating real-time coordination and offline-first data sync for rescue workers.',
    stack: ['Dart', 'Flutter', 'SQLite', 'WebSockets', 'OpenStreetMap'],
    link: 'https://github.com/SajadYoosuf/disaster_management',
  },
  {
    id: 'cab-sharing',
    title: 'Cab-Pool sharing & Commute Optimization System',
    period: '2026',
    problem: 'Fragmented corporate commute options in congested urban hubs lead to high travel costs and under-utilized private vehicle capacity.',
    role: 'Creator & Architect',
    solution: 'Designed a high-performance ride matching and cost-allocation mobile application in Flutter with optimal route calculations.',
    outcome: 'Completed a simulated peer matching graph model, successfully demonstrating ride combinations and split billing under zero transaction latency.',
    stack: ['Dart', 'Flutter', 'Node.js', 'Graph APIs', 'PostgreSQL'],
    link: 'https://github.com/SajadYoosuf/cab-sharing',
  },
  {
    id: 'book-my-venue',
    title: 'BookMyVenue — Spatial Reservation & Calendar Platform',
    period: '2026',
    problem: 'Reserving corporate conference spaces and meeting rooms is plagued by double-bookings and asynchronous calendar update lag.',
    role: 'Open-Source Developer',
    solution: 'Engineered a real-time venue synchronization platform utilizing transaction isolation levels to prevent race conditions during concurrent bookings.',
    outcome: 'Successfully deployed a multi-tenant MIT-licensed venue booking template featuring instant calendar confirmations and real-time updates.',
    stack: ['Dart', 'Flutter', 'Firebase', 'Supabase', 'TypeScript'],
    link: 'https://github.com/SajadYoosuf/BookMyVenue',
  },
];

export const skillsMatrix: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Hono', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    category: 'Data & DB',
    skills: ['PostgreSQL', 'Supabase', 'Prisma', 'Redis', 'SQLite'],
  },
  {
    category: 'Infra & DevOps',
    skills: ['Docker', 'GitHub Actions', 'Vercel', 'Railway', 'Nginx'],
  },
  {
    category: 'Product & Hybrid',
    skills: ['User Research', 'Wireframing', 'PRD Writing', 'Sprint Planning', 'A/B Testing'],
  },
  {
    category: 'Design & UX',
    skills: ['Figma', 'Responsive UI', 'Design Systems', 'Accessibility (WCAG)'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Talk to users, map pain points, identify what to build—and crucially, what NOT to build to save capital and focus.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Write a lightweight spec. Decide on pragmatic architecture. Set a scope that ships working software in days, not months.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Work in short feedback loops. Ship clean, readable, type-safe code. Proactively communicate blockers and solutions.',
  },
  {
    number: '04',
    title: 'Ship',
    description: 'Automate deployments with high-confidence CI/CD, solid test coverage, and strict performance targets for zero-drama launches.',
  },
  {
    number: '05',
    title: 'Measure',
    description: 'Track actual usage. Instrument event analytics. Review core business/product metrics and iterate based on hard data.',
  },
];
