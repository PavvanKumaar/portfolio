/**
 * Site content — sourced from B Pavvan Kumaar's resume (Resume_24pw08)
 * Edit this file to update all portfolio content from one place.
 */

export const siteConfig = {
  name: "B Pavvan Kumaar",
  initials: "PK",
  tagline: "Full-Stack Developer · Flutter · React",
  bio: "3rd-year Integrated M.Sc. Software Systems student at PSG College of Technology, Coimbatore. I build full-stack web apps, cross-platform mobile apps, and love creating polished design work on the side.",
  email: "inboxofpbk@gmail.com",
  linkedin: "https://www.linkedin.com/in/b-pavvan-kumaar-5638ab294/",
  github: "https://github.com/PavvanKumaar",
  resumeUrl: "/resume/Resume_24pw08_Pavvan_Kumaar.pdf",
} as const;

export const education = [
  {
    degree: "Integrated M.Sc. Software Systems",
    institution: "PSG College of Technology, Coimbatore",
    period: "2024 – Present",
    grade: "8.20 CGPA",
    current: true,
  },
  {
    degree: "High School",
    institution: "St. John's Public School",
    period: "June 2024",
    grade: "88.2%",
    current: false,
  },
] as const;

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "Dart"],
  },
  {
    label: "Frameworks & Tools",
    skills: ["Flutter", "React.js", "Express.js", "Spring MVC", "Docker", "Git", "Postman"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    label: "Platforms",
    skills: ["Linux", "Windows"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "squezzy",
    title: "Squezzy",
    description: "Real-time stock analytics & short squeeze predictor",
    longDescription:
      "A real-time stock analytics platform that combines market data, Reddit sentiment analysis, and machine learning to predict potential short squeezes and detect active squeeze events — giving traders actionable signals to identify high-momentum opportunities.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker", "VADER", "Scikit-learn", "Recharts", "TailwindCSS"],
    github: "#",
  },
  {
    id: "taskify",
    title: "Taskify",
    description: "Team task management & workspace collaboration tool",
    longDescription:
      "A task management platform for creating workspaces and managing tasks for teams working on a shared project. Supports multiple workspaces, real-time updates, and role-based task assignment.",
    tags: ["React.js", "TypeScript", "MongoDB", "Express.js", "Node.js"],
    github: "#",
  },
  {
    id: "previewer",
    title: "PReviewer",
    description: "PR review tool for smarter, consequence-aware code merges",
    longDescription:
      "A Pull Request reviewing tool that specialises on reviewing requests and showing appropriate merges and their consequences to the application being built — helping teams avoid regressions.",
    tags: ["Developer Tooling"],
    github: "#",
  },
  {
    id: "versioning-fs",
    title: "Versioning File System",
    description: "FUSE-based virtual filesystem with automatic version snapshots",
    longDescription:
      "A FUSE-based virtual filesystem that automatically creates snapshots of files on every write, enabling seamless version tracking, history browsing, and instant restoration from the command line — with a hidden snapshot store and no changes to user workflows.",
    tags: ["C++", "FUSE", "Linux Filesystems", "Shell Scripting"],
    github: "#",
  },
];

export type DesignWork = {
  id: string;
  title: string;
  tools: string[];
  description: string;
  placeholder: string; // color for placeholder thumbnail
};

export const designWork: DesignWork[] = [
  {
    id: "design-1",
    title: "College Event Posters",
    tools: ["Photoshop", "Illustrator"],
    description:
      "Promotional posters and visual identity assets created as Deputy Coordinator of PSG College's Graphic Design Team.",
    placeholder: "#1a0533",
  },
  {
    id: "design-2",
    title: "Club Promo Videos",
    tools: ["Premiere Pro", "After Effects"],
    description:
      "Promotional video content and media assets for college club events — from concept to final edit.",
    placeholder: "#001a2e",
  },
  {
    id: "design-3",
    title: "UI/UX Work",
    tools: ["Figma"],
    description:
      "Interface designs and interactive prototypes created alongside development projects.",
    placeholder: "#0a1a1a",
  },
];

export const achievements = [
  {
    icon: "🎨",
    title: "Graphic Design",
    description: "Deputy Coordinator of College's Graphic Design Team",
  },
  {
    icon: "🎬",
    title: "Video Editing",
    description: "Created promotional video content and media assets for college club events",
  },
];
