import Image from "next/image";
import { profile, projects } from "@/data/content";

const trackIt = projects.find((project) => project.title === "TrackIt") ?? projects[0];

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-bg pt-16">
      <div className="hero-halo pointer-events-none absolute -right-40 top-20 h-[48rem] w-[48rem] opacity-90" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[44rem] max-w-[78rem] gap-4 px-5 pb-0 pt-14 sm:px-8 sm:pt-20 lg:min-h-[48rem] lg:grid-cols-[0.93fr_1.07fr] lg:items-center lg:gap-12 lg:px-10 lg:pt-10">
        <div className="relative z-10 pb-8 lg:pb-16">
          <p className="hero-enter text-sm font-semibold tracking-[-0.01em] text-[#5c6e85]">
            {profile.location}
          </p>
          <h1 className="hero-enter hero-enter-delay-1 mt-5 max-w-xl text-[clamp(3.5rem,7.4vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-[#172033]">
            {profile.name}
          </h1>
          <p className="hero-enter hero-enter-delay-2 mt-6 text-2xl font-medium tracking-[-0.045em] text-[#243650] sm:text-3xl">
            {profile.role}.
          </p>
          <p className="hero-enter hero-enter-delay-2 mt-4 max-w-md text-base leading-relaxed tracking-[-0.02em] text-[#53647a] sm:text-lg">
            {profile.focus}
          </p>

          <div className="hero-enter hero-enter-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-semibold tracking-[-0.02em]">
            <a href="#work" className="text-[#1766ad] transition-colors hover:text-[#123f73]">
              View work <span aria-hidden="true">↓</span>
            </a>
            <a href="#experience" className="text-[#53647a] transition-colors hover:text-[#172033]">
              View experience <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <figure className="hero-enter hero-enter-delay-2 relative mx-auto h-[27rem] w-full max-w-[37rem] self-end overflow-hidden rounded-t-[3rem] border border-[#d6e3ef] bg-[#edf6f0] sm:h-[33rem] lg:h-[43rem]" aria-label="TrackIt app screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_24%,rgba(77,181,124,0.24),transparent_45%),linear-gradient(160deg,#f7fbf7_0%,#e8f4eb_100%)]" aria-hidden="true" />
          <div className="absolute bottom-0 left-1/2 h-[82%] w-[78%] -translate-x-1/2 rounded-t-[3rem] border border-[#c9e0cf] bg-white/60" aria-hidden="true" />
          <Image
            src={trackIt.image}
            alt="TrackIt health dashboard on iPhone"
            width={741}
            height={1517}
            priority
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 300px, 230px"
            className="absolute bottom-[-2%] right-[20%] z-20 w-[52%] rotate-[4deg] drop-shadow-[0_40px_38px_rgba(25,67,43,0.28)]"
          />
        </figure>
      </div>

      <div className="relative mx-auto flex max-w-[78rem] flex-wrap gap-x-6 gap-y-2 border-t border-[#dce5ee] px-5 py-5 text-sm tracking-[-0.02em] text-[#63758c] sm:px-8 lg:px-10">
        <span>Currently at Sonrisa</span>
        <span className="hidden h-1 w-1 self-center rounded-full bg-[#9aaabd] sm:block" aria-hidden="true" />
        <span>{profile.availability}</span>
      </div>
    </section>
  );
}
