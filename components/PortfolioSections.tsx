import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { education, profile, projectNotes, projects, toolkit } from "@/data/content";

const inviso = projectNotes[0];

export default function PortfolioSections() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section id="experience" className="bg-[#f5f5f7] px-5 py-24 text-[#141416] sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[78rem]">
          <Reveal>
            <p className="text-sm font-medium tracking-[-0.02em] text-black/50">Career · 2024 — Now</p>
            <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                Experience.
              </h2>
              <p className="max-w-sm text-base leading-relaxed tracking-[-0.02em] text-black/60 sm:text-right">
                Product engineering, AI systems, and the tools behind real operations.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14 sm:mt-20" delay={90}>
            <ExperienceTimeline />
          </Reveal>
        </div>
      </section>

      <section id="work" className="bg-[#09090b] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[78rem]">
          <Reveal>
            <p className="text-sm font-medium tracking-[-0.02em] text-white/50">Selected work</p>
            <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
                Built products.
              </h2>
              <p className="max-w-sm text-base leading-relaxed tracking-[-0.02em] text-white/55 sm:text-right">
                Two co-founded iOS products, built from interface to infrastructure.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14 sm:mt-20" delay={90}>
            <ProjectCard project={projects[0]} />
          </Reveal>

          <Reveal className="mt-5" delay={120}>
            <article className="group grid overflow-hidden rounded-[28px] border border-white/10 bg-[#111216] lg:grid-cols-[1.08fr_0.92fr]">
              <div className="flex min-h-[29rem] flex-col justify-between p-7 sm:p-10 lg:min-h-[35rem] lg:p-12">
                <div>
                  <p className="text-sm font-medium tracking-[-0.02em] text-[#69d9ff]">{inviso.eyebrow}</p>
                  <h3 className="mt-4 text-[clamp(3rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
                    {inviso.title}
                  </h3>
                  <p className="mt-5 text-sm font-medium tracking-[-0.02em] text-white/55">{inviso.role} · {inviso.year}</p>
                  <p className="mt-7 max-w-md text-base leading-relaxed tracking-[-0.02em] text-white/70 sm:text-lg">
                    {inviso.description}
                  </p>
                </div>

                <div className="mt-10">
                  <ul className="grid gap-3 text-sm font-medium tracking-[-0.02em] text-white/80 sm:grid-cols-3">
                    {inviso.highlights.map((highlight) => (
                      <li key={highlight} className="border-t border-white/15 pt-3">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/50">
                    {inviso.stack.join(" · ")}
                  </p>
                </div>
              </div>

              <aside className="relative flex min-h-[17rem] flex-col justify-between overflow-hidden border-t border-white/10 bg-[#0d0e11] p-7 sm:min-h-[22rem] sm:p-10 lg:min-h-full lg:border-l lg:border-t-0" aria-label="Inviso Chat product summary">
                <p className="text-sm font-medium tracking-[-0.02em] text-[#69d9ff]">Private product · 2025</p>
                <div className="border-y border-white/10 py-6 sm:py-8">
                  <p className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-none tracking-[-0.09em] text-white/90">Inviso</p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">Secure messaging, built for real-time conversation and on-device intelligence.</p>
                </div>
                <p className="text-sm text-white/40">Co-founded product</p>
              </aside>
            </article>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-[#050506] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-[78rem]">
          <Reveal>
            <p className="text-sm font-medium tracking-[-0.02em] text-white/50">Contact</p>
            <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
                  Open to remote software engineering roles.
                </h2>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-9 inline-flex text-xl font-semibold tracking-[-0.045em] text-[#69d9ff] transition-colors hover:text-white sm:text-3xl"
                >
                  {profile.email} <span className="ml-2" aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="space-y-4 text-base leading-relaxed tracking-[-0.02em] text-white/60">
                <p>{profile.location} · {profile.availability}</p>
                <p>{education.degree} · {education.school} · {education.year}</p>
                <p>English (fluent) · Hungarian (native)</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-white/10 pt-7 sm:mt-28" delay={90}>
            <div className="grid gap-8 sm:grid-cols-3">
              {toolkit.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold tracking-[-0.02em] text-white">{group.title}</p>
                  <p className="mt-2 text-sm leading-relaxed tracking-[-0.01em] text-white/45">{group.items}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm tracking-[-0.01em] text-white/45 sm:mt-20 sm:flex-row sm:items-center">
              <p>© 2026 Bence Szilágyi</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/70">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn ↗</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">GitHub ↗</a>
                <a href="#home" className="transition-colors hover:text-white">Back to top ↑</a>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
