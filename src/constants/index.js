import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  django,
  uiux,
  redpulse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    blurb: "Responsive interfaces built with React, clean state and no wasted kilobytes.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    blurb: "Django and Node services, database design and APIs that stay predictable.",
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
    blurb: "Layouts, type and flow worked out in Figma before a single line is written.",
  },
  {
    title: "Writer",
    icon: creator,
    blurb: "Documentation, product copy and long-form pieces in Bangla and English.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    level: "Expert",
  },
  {
    name: "CSS 3",
    icon: css,
    level: "Expert",
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: "Expert",
  },
  {
    name: "TypeScript",
    icon: typescript,
    level: "Advanced",
  },
  {
    name: "React JS",
    icon: reactjs,
    level: "Expert",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    level: "Expert",
  },
  {
    name: "Node JS",
    icon: nodejs,
    level: "Advanced",
  },
  {
    name: "Python",
    icon: python,
    level: "Advanced",
  },
  {
    name: "Django",
    icon: django,
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: "Intermediate",
  },
  {
    name: "UI/UX Design",
    icon: uiux,
    level: "Advanced",
  },
  {
    name: "git",
    icon: git,
    level: "Advanced",
  },
  {
    name: "figma",
    icon: figma,
    level: "Intermediate",
  },
];

const experiences = [
  {
    title: "Django Developer",
    company_name: "Patiya RedPulse",
    icon: django,
    iconBg: "#092E20",
    date: "2025 - Present",
    skills: ["Django", "Python", "Tailwind", "PostgreSQL"],
    points: [
      "Built a blood donation network that connects seekers directly with eligible donors in Patiya, Chattogram.",
      "Designed the donor eligibility engine, including the automatic 90/120 day donation countdown.",
      "Shipped a full Bangla and English interface so the platform works for every user in the area.",
      "Handled deployment, SEO and performance tuning for the live site.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#1a1235",
    date: "Update this in src/constants/index.js",
    skills: ["React", "JavaScript", "Tailwind", "UI/UX"],
    points: [
      "Replace these lines with your own work history whenever you are ready.",
      "Each entry lives in the experiences array inside src/constants/index.js.",
      "Keep one bullet per responsibility so the timeline stays easy to scan.",
    ],
  },
];

const projects = [
  {
    name: "Patiya RedPulse",
    description:
      "A humanitarian blood donation platform for Patiya, Chattogram. Seekers search verified donors by blood group and upazila, call them with one tap, and post emergency requests — no middleman in between. Donor eligibility is tracked automatically with a 90/120-day countdown, and the whole interface works in both Bangla and English.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "bangla-i18n",
        color: "orange-text-gradient",
      },
    ],
    highlights: [
      "One-tap calling straight to an available donor",
      "Automatic donation-eligibility countdown",
      "Live donor count by blood group",
      "Bangla and English interface",
    ],
    image: redpulse,
    live_link: "https://patiya-red-pulse-j5-eight.vercel.app/",
    source_code_link: "https://patiya-red-pulse-j5-eight.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
