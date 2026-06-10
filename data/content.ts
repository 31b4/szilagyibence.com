import { assetPath } from "@/data/paths";

export const profile = {
  name: "Szilagyi Bence",
  brand: "31b4",
  email: "contact@szilagyibence.com",
  github: "https://github.com/31b4",
  x: "https://x.com/31b4_",
  linkedin: "https://www.linkedin.com/in/benszilagyi/",
  headline: "Building health",
  mission:
    "I believe every person deserves to understand their own body. I build tools that turn complex health information into clear, actionable insights.",
  bio:
    "Designing privacy-first health products, AI workflows, and fullstack systems that make personal data easier to trust and act on."
};

export const heroRoles = [
  "Fullstack builder",
  "AI engineer",
  "Founder",
  "Health-data maker"
];

export const projects = [
  {
    title: "TrackIt",
    status: "App Store",
    platform: "iOS",
    url: "https://trackit.szilagyibence.com",
    description:
      "A privacy-first body metrics tracker for iPhone. Track measurements, sync with Apple Health, and see progress without fighting spreadsheets.",
    images: [assetPath("/images/trackit1.png"), assetPath("/images/trackit2.png")],
    accent: "blue",
    features: [
      {
        title: "15+ metrics"
      },
      {
        title: "Apple Health sync"
      },
      {
        title: "Progress photos"
      }
    ],
    stack: ["SwiftUI", "HealthKit", "SwiftData"]
  }
] as const;

export const experience = [
  {
    company: "Sonrisa",
    logo: assetPath("/images/sonrisa.png"),
    website: "https://sonrisa.hu/en",
    role: "AI Software Engineer",
    dates: "2025 - Present",
    status: "Current",
    description:
      "Built autonomous AI agents executing multi-step workflows and sub-agent architectures. Optimized prompt engineering to reduce token costs by 20% while increasing response accuracy.",
    highlights: [
      "Autonomous AI agents",
      "Sub-agent workflows",
      "Prompt optimization"
    ],
    stack: [
      "Java",
      "Python",
      "LLMs",
      "OpenAI API",
      "Anthropic API",
      "LangChain",
      "FastAPI",
      "Docker",
      "Redis",
      "Temporal.io"
    ]
  },
  {
    company: "ALTEO Nyrt.",
    logo: assetPath("/images/alteo.jpeg"),
    website: "https://alteo.hu/?lang=en",
    role: "Software Developer / IT Specialist - E-mobility",
    dates: "2025 - 2026",
    status: "E-mobility",
    description:
      "Developed internal software tools and web applications to support e-mobility operations and EV charger management.",
    highlights: [
      "EV charger management",
      "Internal tools",
      "Operational reporting"
    ],
    stack: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "Excel workflows",
      "Web apps"
    ]
  },
  {
    company: "OrthoGraph",
    logo: assetPath("/images/orthograph.png"),
    website: "https://www.orthograph.com/",
    role: "Fullstack Developer",
    dates: "2024 - 2025",
    status: "Fullstack",
    description:
      "Maintained a Laravel-based backend and containerized it with Docker.",
    highlights: ["Laravel backend", "Dockerized services", "PHP delivery"],
    stack: ["PHP", "Laravel", "Docker", "Docker Compose", "Git"]
  }
] as const;
