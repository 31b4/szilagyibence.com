import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { experience } from "@/data/content";

export default function ExperienceTimeline() {
  return (
    <ol className="relative space-y-6 before:absolute before:bottom-8 before:left-[1.03rem] before:top-8 before:w-px before:bg-[#b9c7d8] lg:space-y-8 lg:before:left-[10.55rem]">
      {experience.map((role, index) => (
        <li key={role.company} className="relative grid gap-4 pl-10 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-8 lg:pl-0">
          <div className="lg:pt-7 lg:text-right">
            <p className="text-sm font-semibold tracking-[-0.02em] text-[#40516a]">{role.dates}</p>
            {index === 0 ? (
              <span className="mt-2 inline-flex rounded-full bg-[#ddecff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#155a9c]">
                Current
              </span>
            ) : null}
          </div>

          <span className="absolute left-0 top-7 z-10 grid h-[2.1rem] w-[2.1rem] place-items-center rounded-full border-[5px] border-[#eef3f8] bg-[#1b6fbd] lg:left-[9.5rem]" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </span>

          <article className="rounded-[24px] border border-[#d9e2eb] bg-white p-5 shadow-[0_16px_40px_rgba(49,73,103,0.055)] sm:p-7 lg:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 items-center gap-4">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-[#e1e7ee] bg-[#f6f8fb]">
                  <Image src={role.logo} alt="" fill sizes="48px" className="object-contain p-1.5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-[-0.045em] text-[#172033] sm:text-2xl">{role.company}</h3>
                  <p className="mt-1 text-sm font-medium leading-snug tracking-[-0.015em] text-[#58687e] sm:text-base">{role.role}</p>
                </div>
              </div>
              <a
                href={role.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1 text-sm font-semibold tracking-[-0.02em] text-[#1b6fbd] transition-colors hover:text-[#123f73]"
              >
                Company <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed tracking-[-0.018em] text-[#35445a] sm:text-[1.05rem]">
              {role.summary}
            </p>

            <ul className="mt-5 grid gap-3 border-y border-[#e7edf3] py-5 text-sm leading-relaxed text-[#415169] sm:grid-cols-2">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#197c5d]" strokeWidth={2.5} aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${role.company} technologies and areas`}>
              {role.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-[#d6e2ef] bg-[#f5f9fd] px-3 py-1.5 text-xs font-semibold tracking-[-0.01em] text-[#31516f]">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
