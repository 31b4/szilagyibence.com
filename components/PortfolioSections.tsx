import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { education, profile, projects, toolkit } from "@/data/content";

export default function PortfolioSections() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section id="experience" className="bg-[#eef3f8] px-5 py-24 text-[#172033] sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[78rem]">
          <Reveal>
            <p className="text-sm font-semibold tracking-[-0.02em] text-[#5c6e85]">Career · 2024 — Now</p>
            <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                Experience.
              </h2>
              <p className="max-w-sm text-base leading-relaxed tracking-[-0.02em] text-[#53647a] sm:text-right">
                AI systems, e-mobility operations, and full-stack product engineering.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14 sm:mt-20" delay={90}>
            <ExperienceTimeline />
          </Reveal>
        </div>
      </section>

      <section id="work" className="bg-[#f9fafc] px-5 py-24 text-[#172033] sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[78rem]">
          <Reveal>
            <p className="text-sm font-semibold tracking-[-0.02em] text-[#5c6e85]">Selected work</p>
            <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                Built products.
              </h2>
              <p className="max-w-sm text-base leading-relaxed tracking-[-0.02em] text-[#53647a] sm:text-right">
                Two co-founded mobile products, from interface to infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:mt-20">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={90 + index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[#dbe4ee] bg-[#e9eff6] px-5 py-24 text-[#172033] sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[78rem]">
          <Reveal>
            <p className="text-sm font-semibold tracking-[-0.02em] text-[#5c6e85]">Contact</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                  Available for select software engineering roles.
                </h2>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-9 inline-flex items-center gap-2 text-xl font-semibold tracking-[-0.045em] text-[#1766ad] transition-colors hover:text-[#123f73] sm:text-3xl"
                >
                  {profile.email} <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="space-y-4 text-base leading-relaxed tracking-[-0.02em] text-[#53647a]">
                <p>{profile.location} · {profile.availability}</p>
                <p>{education.degree} · {education.school} · {education.year}</p>
                <p>English (fluent) · Hungarian (native)</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-[#cfdce8] pt-7 sm:mt-28" delay={90}>
            <div className="grid gap-8 sm:grid-cols-3">
              {toolkit.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold tracking-[-0.02em] text-[#253955]">{group.title}</p>
                  <p className="mt-2 text-sm leading-relaxed tracking-[-0.01em] text-[#607289]">{group.items}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col justify-between gap-5 border-t border-[#cfdce8] pt-6 text-sm tracking-[-0.01em] text-[#607289] sm:mt-20 sm:flex-row sm:items-center">
              <p>© 2026 Bence Szilágyi</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[#35516f]">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#172033]">LinkedIn ↗</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#172033]">GitHub · 31b4 ↗</a>
                <a href="#home" className="transition-colors hover:text-[#172033]">Back to top ↑</a>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
