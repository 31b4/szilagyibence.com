import { assetPath } from "@/data/paths";

export const profile = {
  name: "Bence Szilágyi",
  email: "work@szilagyibence.com",
  github: "https://github.com/31b4",
  x: "https://x.com/31b4_",
  linkedin: "https://www.linkedin.com/in/benszilagyi/",
  role: "Software Engineer",
  focus: "AI systems, native iOS products, and the software behind them.",
  location: "Budapest, Hungary",
  availability: "Open to remote roles across CET / CST"
} as const;

export const experience = [
  {
    company: "Sonrisa",
    logo: assetPath("/images/sonrisa.png"),
    website: "https://sonrisa.hu/en",
    role: "AI Software Engineer",
    dates: "2025 — Present",
    summary:
      "Building AI systems for autonomous workflows and retrieval-quality improvements.",
    highlights: [
      "Built autonomous multi-step and sub-agent workflows.",
      "Designed a Library Graph approach for RAG retrieval so relevant chunks reach the LLM with more context.",
      "Reduced token cost by about 20% while improving response accuracy."
    ],
    tags: ["Python", "FastAPI", "LangChain", "LLM APIs", "Redis", "Temporal", "RAG"]
  },
  {
    company: "ALTEO Nyrt.",
    logo: assetPath("/images/alteo.jpeg"),
    website: "https://alteo.hu/?lang=en",
    role: "Software Developer / IT Specialist — E-mobility",
    dates: "2025 — 2026",
    summary:
      "Built internal software and web tools for EV charger operations.",
    highlights: [
      "Supported charger administration for e-mobility operations.",
      "Built reporting and maintenance-tracking tools for internal teams."
    ],
    tags: ["E-mobility", "EV charging", "Internal tooling", "Reporting"]
  },
  {
    company: "OrthoGraph",
    logo: assetPath("/images/orthograph.png"),
    website: "https://www.orthograph.com/",
    role: "Full-stack Developer",
    dates: "2024 — 2025",
    summary:
      "Maintained and containerised a Laravel backend for a production product.",
    highlights: [
      "Maintained a Laravel-based backend.",
      "Containerised the application for a repeatable development setup."
    ],
    tags: ["PHP", "Laravel", "Docker", "Docker Compose", "Git"]
  }
] as const;

export const projects = [
  {
    title: "Inviso Chat",
    eyebrow: "Secure messaging for iPhone",
    role: "Co-founder · iOS & backend engineer",
    year: "2025",
    description:
      "A peer-to-peer, end-to-end encrypted messenger with real-time sessions, on-device intelligence, and RAM-only messaging.",
    highlights: ["Peer-to-peer sessions", "End-to-end encryption", "RAM-only messaging"],
    stack: ["SwiftUI", "WebRTC", "Core ML", "DTLS encryption"],
    image: assetPath("/images/inviso-hero.png"),
    imageAlt: "Inviso Chat session list and encrypted message screen",
    url: "https://inviso.szilagyibence.com/",
    githubUrl: "https://github.com/apptrackit/chat-ios"
  },
  {
    title: "TrackIt",
    eyebrow: "Health tracking for iPhone",
    role: "Co-founder · iOS & backend engineer",
    year: "2025",
    description:
      "Privacy-first health tracking with Apple Health sync and 15+ body metrics.",
    highlights: ["15+ body metrics", "Apple Health sync", "App Store"],
    stack: ["Swift", "SwiftUI", "HealthKit", "Swift Charts", "Core Data"],
    image: assetPath("/images/trackit1.png"),
    imageAlt: "TrackIt health dashboard on iPhone",
    url: "https://trackit.szilagyibence.com/",
    githubUrl: "https://github.com/apptrackit/trackit-ios"
  }
] as const;

export const toolkit = [
  {
    title: "AI systems",
    items: "Python · FastAPI · LangChain · LLM APIs · Redis · Temporal"
  },
  {
    title: "iOS",
    items: "Swift · SwiftUI · HealthKit · WebRTC · Core ML"
  },
  {
    title: "Backend",
    items: "Java · PHP / Laravel · Docker · SQL"
  }
] as const;

export const education = {
  degree: "BSc in Computer Science",
  school: "University of Pécs",
  year: "2026"
} as const;
