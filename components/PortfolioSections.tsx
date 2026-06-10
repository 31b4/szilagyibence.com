import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Github,
  Linkedin,
  Mail,
  ServerCog,
  X as XIcon
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { experience, profile, projects } from "@/data/content";

function getCompanyInitials(company: string) {
  const firstWord = company.replace(/[.]/g, "").split(/\s+/)[0] ?? "";

  if (firstWord.length >= 2 && firstWord === firstWord.toUpperCase()) {
    return firstWord.slice(0, 2);
  }

  return company
    .replace(/[.]/g, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function PortfolioSections() {
  return (
    <main className="bg-bg">
      <section className="border-y border-white/10 bg-surface/35 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.72fr_1fr] md:px-10">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-8 bg-white/40" />
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                The Mission
              </p>
            </div>
            <h2 className="font-display text-4xl italic leading-none text-text md:text-6xl">
              Making health data accessible and understandable.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 text-base leading-relaxed text-muted md:text-lg">
            <p>{profile.mission}</p>
            <p>
              Data should not be locked behind jargon. It should empower better
              decisions every single day.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section
        id="resume"
        className="border-y border-white/10 bg-surface/35 py-24 md:py-32"
      >
        <SectionHeader
          eyebrow="Resume"
          title="Where I have built things"
          description="Recent engineering work across AI systems, e-mobility operations, product infrastructure, and fullstack delivery."
        />

        <div className="relative mx-auto max-w-6xl px-6 md:px-10">
          <div className="absolute bottom-6 left-[2.05rem] top-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-[17rem]" />
          {experience.map((item, index) => (
            <article
              key={item.company}
              className="relative grid gap-5 pb-14 last:pb-0 md:grid-cols-[11rem_3rem_1fr] md:gap-8"
            >
              <div className="hidden pt-1 text-right md:block">
                <p className="font-body text-sm uppercase leading-relaxed tracking-[0.24em] text-white/45">
                  {item.dates}
                </p>
              </div>

              <div className="relative hidden justify-center md:flex">
                <div className="relative z-10 mt-1 h-4 w-4 rounded-full border border-[#89AACC]/60 bg-bg shadow-[0_0_0_7px_rgba(137,170,204,0.08),0_0_24px_rgba(137,170,204,0.25)]">
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#89AACC]" />
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-0 top-1 z-10 h-4 w-4 rounded-full border border-[#89AACC]/60 bg-bg shadow-[0_0_0_7px_rgba(137,170,204,0.08),0_0_24px_rgba(137,170,204,0.25)] md:hidden">
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#89AACC]" />
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-bg/70 p-6 transition-colors hover:border-white/20 md:p-8">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(137,170,204,0.08),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex min-w-0 gap-4">
                        {item.logo ? (
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white">
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              fill
                              className="object-contain p-1"
                              sizes="56px"
                            />
                          </div>
                        ) : (
                          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] font-display text-xl italic text-text">
                            {getCompanyInitials(item.company)}
                          </div>
                        )}
                        <div>
                          <div className="mb-2 flex flex-wrap items-center gap-3">
                            <h3 className="font-display text-3xl italic leading-none text-text md:text-4xl">
                              {item.company}
                            </h3>
                          </div>
                          <p className="text-sm text-muted">{item.role}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/35 md:hidden">
                            {item.dates}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="hidden gap-2 text-white/45 sm:flex">
                          {index === 0 ? (
                            <>
                              <Bot className="h-5 w-5" aria-hidden="true" />
                              <ServerCog
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </>
                          ) : (
                            <ServerCog
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${item.company} website`}
                          className="gradient-border-hover inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/55 transition-colors hover:text-text"
                        >
                          Website
                          <ArrowUpRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>

                    <p className="max-w-3xl text-base leading-relaxed text-muted">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-md border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-text/75"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.stack.map((stackItem) => (
                        <span
                          key={stackItem}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/55"
                        >
                          {stackItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-[85vh] py-24 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col justify-center px-6 md:px-10">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-8 bg-white/40" />
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Contact
            </p>
          </div>

          <h2 className="max-w-3xl font-display text-5xl italic leading-none text-text md:text-7xl">
            Let&apos;s build something meaningful together.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            I am focused on making health data accessible and understandable for
            everyone. If you share that vision, or just want to say hi, reach
            out.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="gradient-border-hover inline-flex items-center justify-center gap-2 rounded-full bg-text px-7 py-3.5 text-sm font-medium text-bg transition-transform hover:scale-105"
            >
              Email me
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="gradient-border-hover inline-flex items-center justify-center gap-2 rounded-full border border-stroke bg-bg px-7 py-3.5 text-sm font-medium text-text transition-transform hover:scale-105"
            >
              GitHub
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              aria-label="X profile"
              className="text-white/40 transition-colors hover:text-white"
            >
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-white/40 transition-colors hover:text-white"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/40 transition-colors hover:text-white"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-white/40 transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-colors hover:text-white"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
