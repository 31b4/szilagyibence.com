import Image from "next/image";
import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
import { projects } from "@/data/content";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isInviso = project.title === "Inviso Chat";

  return (
    <article className="group grid overflow-hidden rounded-[28px] border border-[#d9e2eb] bg-white shadow-[0_18px_50px_rgba(45,69,98,0.06)] lg:grid-cols-[0.94fr_1.06fr]">
      <div className="flex min-h-[31rem] flex-col justify-between p-7 sm:p-10 lg:min-h-[39rem] lg:p-12">
        <div>
          <div className="flex items-center gap-2.5 text-sm font-semibold tracking-[-0.02em] text-[#1b6fbd]">
            {isInviso ? <LockKeyhole className="h-4 w-4" aria-hidden="true" /> : null}
            <p>{project.eyebrow}</p>
          </div>
          <h3 className="mt-5 text-[clamp(3rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#172033]">
            {project.title}
          </h3>
          <p className="mt-5 text-sm font-semibold tracking-[-0.02em] text-[#64748b]">{project.role} · {project.year}</p>
          <p className="mt-7 max-w-md text-base leading-relaxed tracking-[-0.02em] text-[#40516a] sm:text-lg">
            {project.description}
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid gap-3 text-sm font-semibold tracking-[-0.02em] text-[#35465d] sm:grid-cols-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="border-t border-[#dce5ee] pt-3">
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-[#dce5ee] pt-5">
            <p className="max-w-sm text-sm leading-relaxed text-[#64748b]">{project.stack.join(" · ")}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#172033] px-4 py-2.5 text-sm font-semibold tracking-[-0.02em] text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                Visit {isInviso ? "Inviso" : "TrackIt"} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#cfdbe7] bg-white px-3.5 py-2.5 text-[#21334a] transition-colors hover:border-[#98b0c9] hover:bg-[#f4f8fb]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <figure
        className={`relative min-h-[22rem] sm:min-h-[31rem] lg:min-h-full ${
          isInviso ? "bg-[#eff4fa]" : "overflow-hidden bg-[#eef7f1]"
        }`}
        aria-label={`${project.title} product screens`}
      >
        {isInviso ? (
          <>
            <div className="absolute left-7 top-7 z-10 inline-flex items-center gap-2 rounded-full border border-[#cbdceb] bg-white/80 px-3 py-1.5 text-xs font-bold tracking-[-0.01em] text-[#31516f] backdrop-blur sm:left-10 sm:top-10">
              <LockKeyhole className="h-3.5 w-3.5 text-[#1b6fbd]" aria-hidden="true" />
              P2P · encrypted
            </div>
            <div className="pointer-events-none absolute bottom-[7%] left-[59%] z-0 h-12 w-[54%] -translate-x-1/2 rounded-[100%] bg-[#506783]/20 blur-[26px] sm:bottom-[8%] sm:h-20 sm:blur-[36px]" aria-hidden="true" />
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="z-10 object-contain object-center p-5 pb-12 drop-shadow-[0_20px_18px_rgba(38,55,78,0.16)] sm:p-8 sm:pb-16 lg:p-7 lg:pb-16"
            />
          </>
        ) : (
          <>
            <div className="absolute inset-x-0 bottom-0 h-[82%] bg-[radial-gradient(circle_at_60%_28%,rgba(67,176,117,0.18),transparent_48%)]" aria-hidden="true" />
            <div className="absolute bottom-0 left-[12%] h-[78%] w-[72%] rounded-t-[3rem] border border-[#c8e1d0] bg-white/55" aria-hidden="true" />
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={741}
              height={1517}
              sizes="(min-width: 1024px) 330px, (min-width: 640px) 275px, 210px"
              className="absolute bottom-[-4%] right-[23%] z-20 w-[46%] rotate-[5deg] drop-shadow-[0_28px_32px_rgba(20,52,35,0.24)] transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-[2deg] lg:bottom-[1%] lg:right-[29%] lg:w-[39%]"
            />
          </>
        )}
      </figure>
    </article>
  );
}
