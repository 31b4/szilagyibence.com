import Image from "next/image";
import { ArrowUpRight, Camera, ChartNoAxesCombined, HeartPulse } from "lucide-react";
import { projects } from "@/data/content";

type Project = (typeof projects)[number];

const accentClasses = {
  blue: {
    badge: "border-sky-300/20 bg-sky-400/10 text-sky-200",
    icon: "text-sky-300",
    glow: "drop-shadow-[0_24px_40px_rgba(78,133,191,0.18)]"
  }
} as const;

const featureIcons = [ChartNoAxesCombined, HeartPulse, Camera];

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = accentClasses[project.accent];

  return (
    <article className="relative py-4 md:py-6">
      <div className="pointer-events-none absolute inset-y-8 left-1/2 w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_42%_46%,rgba(78,133,191,0.14),transparent_34%)]" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.72fr] lg:grid-rows-[auto_auto] lg:content-center lg:gap-x-14 lg:gap-y-8">
        <div className="order-2 relative min-h-[520px] overflow-visible bg-[radial-gradient(circle_at_46%_50%,rgba(78,133,191,0.22),transparent_42%)] md:min-h-[590px] lg:order-none lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-h-[720px]">
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center px-4 pt-20 md:px-8">
            <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#4E85BF]/25 blur-3xl md:h-80 md:w-80" />
            {project.images.map((src, index) => (
              <div
                key={src}
                className={`relative ${accent.glow} ${
                  index === 0
                    ? "z-20 w-[198px] sm:w-[255px] md:w-[275px] lg:w-[360px]"
                    : "z-10 -ml-8 mb-10 w-[170px] sm:-ml-12 sm:w-[235px] md:-ml-14 md:mb-14 md:w-[255px] lg:-ml-16 lg:w-[330px]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} app screen ${index + 1}`}
                  width={788}
                  height={1572}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 275px, (min-width: 640px) 255px, 210px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-none lg:col-start-2 lg:row-start-1 lg:self-end lg:pl-2">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${accent.badge}`}
            >
              {project.status}
            </span>
            <span className="text-sm text-white/35">{project.platform}</span>
          </div>

          <h3 className="mb-5 font-display text-4xl italic leading-none text-text md:text-6xl">
            {project.title}
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>
        </div>

        <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:self-start lg:pl-2">
          <div className="border-y border-white/10">
            {project.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 border-b border-white/10 py-4 last:border-b-0"
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${accent.icon}`}
                    aria-hidden="true"
                  />
                  <h4 className="text-sm font-semibold text-text/85">
                    {feature.title}
                  </h4>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="gradient-border-hover inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-text px-7 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
            >
              Learn more
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
