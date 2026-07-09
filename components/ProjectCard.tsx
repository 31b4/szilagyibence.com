import Image from "next/image";
import { projects } from "@/data/content";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group grid overflow-hidden rounded-[28px] bg-[#15161a] lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex min-h-[31rem] flex-col justify-between p-7 sm:p-10 lg:min-h-[39rem] lg:p-12">
        <div>
          <p className="text-sm font-medium tracking-[-0.02em] text-[#72e3ae]">{project.eyebrow}</p>
          <h3 className="mt-4 text-[clamp(3rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
            {project.title}
          </h3>
          <p className="mt-5 text-sm font-medium tracking-[-0.02em] text-white/55">{project.role} · {project.year}</p>
          <p className="mt-7 max-w-md text-base leading-relaxed tracking-[-0.02em] text-white/70 sm:text-lg">
            {project.description}
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid gap-3 text-sm font-medium tracking-[-0.02em] text-white/80 sm:grid-cols-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="border-t border-white/15 pt-3">
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-5">
            <p className="max-w-sm text-sm leading-relaxed text-white/50">{project.stack.join(" · ")}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold tracking-[-0.02em] text-black transition-transform duration-200 hover:scale-[1.03]"
            >
              Visit TrackIt <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <figure className="relative min-h-[29rem] overflow-hidden bg-[#0d1110] sm:min-h-[36rem] lg:min-h-full" aria-label="TrackIt app screens">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_32%,rgba(44,171,112,0.32),transparent_38%)]" aria-hidden="true" />
        <div className="absolute bottom-0 left-[12%] h-[78%] w-[72%] rounded-t-[3rem] border border-white/10 bg-white/[0.035]" aria-hidden="true" />
        <Image
          src={project.images[0]}
          alt="TrackIt dashboard screen"
          width={741}
          height={1517}
          sizes="(min-width: 1024px) 330px, (min-width: 640px) 275px, 210px"
          className="absolute bottom-[-4%] right-[23%] z-20 w-[46%] rotate-[5deg] rounded-[2.1rem] shadow-[0_40px_75px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-[2deg]"
        />
        <figcaption className="absolute left-7 top-7 z-30 text-sm font-medium tracking-[-0.02em] text-white/65 sm:left-10 sm:top-10">
          Designed for a clearer personal record.
        </figcaption>
      </figure>
    </article>
  );
}
