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

export const projects = [
  {
    title: "TrackIt",
    eyebrow: "Health tracking for iPhone",
    role: "Co-founder · iOS & backend engineer",
    year: "2025",
    description:
      "Privacy-first health tracking with Apple Health sync and 15+ body metrics.",
    images: [assetPath("/images/trackit1.png"), assetPath("/images/trackit2.png")],
    highlights: ["15+ body metrics", "Apple Health sync", "App Store"],
    stack: ["Swift", "SwiftUI", "HealthKit", "Swift Charts", "Core Data"],
    url: "https://trackit.szilagyibence.com"
  }
] as const;

export const projectNotes = [
  {
    title: "Inviso Chat",
    eyebrow: "Secure messaging with on-device AI",
    role: "Co-founder · iOS & backend engineer",
    year: "2025",
    description:
      "Privacy-first messaging with peer-to-peer real-time communication and on-device processing.",
    highlights: ["WebRTC peer-to-peer", "On-device AI", "DTLS encryption"],
    stack: ["SwiftUI", "WebRTC", "Core ML", "DTLS encryption"]
  }
] as const;

export const experience = [
  {
    company: "OrthoGraph",
    logo: assetPath("/images/orthograph.png"),
    website: "https://www.orthograph.com/",
    role: "Full-stack Developer",
    dates: "2024 — 2025",
    summary: "Maintained and containerised a Laravel backend.",
    highlights: ["Laravel backend", "Docker containerisation"]
  },
  {
    company: "ALTEO Nyrt.",
    logo: assetPath("/images/alteo.jpeg"),
    website: "https://alteo.hu/?lang=en",
    role: "Software Developer / IT Specialist — E-mobility",
    dates: "2025 — 2026",
    summary: "Built internal software and web tools for EV charger operations.",
    highlights: ["Charger administration", "Reporting & maintenance tracking"]
  },
  {
    company: "Sonrisa",
    logo: assetPath("/images/sonrisa.png"),
    website: "https://sonrisa.hu/en",
    role: "AI Software Engineer",
    dates: "2026 — Present",
    summary: "Building autonomous AI workflows and multi-agent systems.",
    highlights: ["Multi-step & sub-agent workflows", "20% lower token costs with improved accuracy"]
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
