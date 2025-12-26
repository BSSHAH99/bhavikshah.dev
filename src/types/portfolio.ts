export interface Personal {
  name: string;
  title: string;
  tagline: string;
  location: string;
  experience: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface Philosophy {
  title: string;
  principles: Principle[];
}

export interface About {
  summary: string;
  highlights: string[];
  philosophy: Philosophy;
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface ExperienceProject {
  name: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ExperienceProject[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  impact: string;
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  personal: Personal;
  about: About;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
}
