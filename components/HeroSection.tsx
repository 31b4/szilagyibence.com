import Image from "next/image";
import { profile, projects } from "@/data/content";

const trackIt = projects[0];

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-bg pt-16">
      <div className="hero-halo pointer-events-none absolute -right-40 top-20 h-[48rem] w-[48rem] opacity-80" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[44rem] max-w-[78rem] gap-4 px-5 pb-0 pt-14 sm:px-8 sm:pt-20 lg:min-h-[48rem] lg:grid-cols-[0.93fr_1.07fr] lg:items-center lg:gap-12 lg:px-10 lg:pt-10">
        <div className="relative z-10 pb-8 lg:pb-16">
          <p className="hero-enter text-sm font-medium tracking-[-0.01em] text-white/60">
            {profile.location}
          </p>
          <h1 className="hero-enter hero-enter-delay-1 mt-5 max-w-xl text-[clamp(3.5rem,7.4vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-white">
            {profile.name}
          </h1>
          <p className="hero-enter hero-enter-delay-2 mt-6 text-2xl font-medium tracking-[-0.045em] text-white sm:text-3xl">
            {profile.role}.
          </p>
          <p className="hero-enter hero-enter-delay-2 mt-4 max-w-md text-base leading-relaxed tracking-[-0.02em] text-white/60 sm:text-lg">
            {profile.focus}
          </p>

          <div className="hero-enter hero-enter-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-semibold tracking-[-0.02em]">
            <a href="#work" className="text-white transition-colors hover:text-[#69d9ff]">
              View work <span aria-hidden="true">↓</span>
            </a>
            <a href="#experience" className="text-white/65 transition-colors hover:text-white">
              View experience <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <figure className="hero-enter hero-enter-delay-2 relative mx-auto h-[27rem] w-full max-w-[37rem] self-end overflow-hidden sm:h-[33rem] lg:h-[43rem]" aria-label="TrackIt app screens">
          <div className="absolute bottom-0 left-1/2 h-[82%] w-[78%] -translate-x-1/2 rounded-t-[3rem] border border-white/10 bg-white/[0.035]" aria-hidden="true" />
          <div className="absolute left-[10%] top-[16%] h-40 w-40 rounded-full bg-[#2563eb]/30 blur-[70px]" aria-hidden="true" />
          <Image
            src={trackIt.images[0]}
            alt="TrackIt dashboard on iPhone"
            width={741}
            height={1517}
            priority
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 300px, 230px"
            className="absolute bottom-[-2%] right-[20%] z-20 w-[52%] rotate-[4deg] rounded-[2.4rem] shadow-[0_44px_80px_rgba(0,0,0,0.65)]"
          />
          <figcaption className="absolute bottom-7 left-7 z-30 text-xs font-medium tracking-[-0.01em] text-white/50 sm:bottom-9 sm:left-9">
            TrackIt for iPhone
          </figcaption>
        </figure>
      </div>

      <div className="relative mx-auto flex max-w-[78rem] flex-wrap gap-x-6 gap-y-2 border-t border-white/10 px-5 py-5 text-sm tracking-[-0.02em] text-white/55 sm:px-8 lg:px-10">
        <span>Currently at Sonrisa</span>
        <span className="hidden h-1 w-1 self-center rounded-full bg-white/30 sm:block" aria-hidden="true" />
        <span>{profile.availability}</span>
      </div>
    </section>
  );
}
