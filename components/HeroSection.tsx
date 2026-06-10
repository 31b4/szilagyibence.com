"use client";

import gsap from "gsap";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroRoles, profile } from "@/data/content";
import { assetPath } from "@/data/paths";

const HERO_VIDEO =
  "https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8";
const LOOP_FADE_SECONDS = 0.9;
const LOOP_RESET_AFTER_FADE_MS = 650;
const LOOP_RESTART_DELAY_MS = 180;
const HERO_MEDIA_READY_EVENT = "portfolio-hero-media-ready";
const PAGE_VISIBLE_EVENT = "portfolio-page-visible";
const VIDEO_FALLBACK_DELAY_MS = 7000;

export default function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const loopResetTimerRef = useRef<number | null>(null);
  const loopFadeInTimerRef = useRef<number | null>(null);
  const loopTransitioningRef = useRef(false);
  const entrancePlayedRef = useRef(false);
  const heroMediaReadyRef = useRef(false);
  const videoFallbackTimerRef = useRef<number | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isLoopTransitioning, setIsLoopTransitioning] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    videoFallbackTimerRef.current = window.setTimeout(() => {
      setVideoFailed(true);
      markHeroMediaReady();
    }, VIDEO_FALLBACK_DELAY_MS);

    return () => {
      if (videoFallbackTimerRef.current !== null) {
        window.clearTimeout(videoFallbackTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    let playEntrance: (() => void) | null = null;

    const context = gsap.context(() => {
      gsap.set(".name-reveal", { opacity: 0, y: 50 });
      gsap.set(".blur-in", { opacity: 0, filter: "blur(10px)", y: 20 });

      playEntrance = () => {
        if (entrancePlayedRef.current) return;
        entrancePlayedRef.current = true;

        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        timeline.to(
          ".name-reveal",
          { opacity: 1, y: 0, duration: 1.2 },
          0.1
        );

        timeline.to(
          ".blur-in",
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1,
            stagger: 0.1
          },
          0.3
        );
      };

      window.addEventListener(PAGE_VISIBLE_EVENT, playEntrance);
    }, rootRef);

    return () => {
      if (playEntrance) {
        window.removeEventListener(PAGE_VISIBLE_EVENT, playEntrance);
      }

      context.revert();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (loopResetTimerRef.current !== null) {
        window.clearTimeout(loopResetTimerRef.current);
      }

      if (loopFadeInTimerRef.current !== null) {
        window.clearTimeout(loopFadeInTimerRef.current);
      }
    };
  }, []);

  const restartHeroVideo = (video: HTMLVideoElement) => {
    if (loopResetTimerRef.current !== null) {
      window.clearTimeout(loopResetTimerRef.current);
      loopResetTimerRef.current = null;
    }

    if (loopFadeInTimerRef.current !== null) {
      window.clearTimeout(loopFadeInTimerRef.current);
    }

    video.currentTime = 0;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => setVideoFailed(true));
    }

    loopFadeInTimerRef.current = window.setTimeout(() => {
      loopTransitioningRef.current = false;
      setIsLoopTransitioning(false);
    }, LOOP_RESTART_DELAY_MS);
  };

  const markHeroMediaReady = () => {
    if (heroMediaReadyRef.current) return;
    heroMediaReadyRef.current = true;

    if (videoFallbackTimerRef.current !== null) {
      window.clearTimeout(videoFallbackTimerRef.current);
      videoFallbackTimerRef.current = null;
    }

    window.dispatchEvent(new Event(HERO_MEDIA_READY_EVENT));
  };

  const requestHeroVideoPlay = (video: HTMLVideoElement) => {
    const playPromise = video.play();

    if (playPromise) {
      playPromise.catch(() => {
        setVideoFailed(true);
        markHeroMediaReady();
      });
    }
  };

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-28 text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(78,133,191,0.2),rgba(10,10,10,0.96)_56%,#0a0a0a_100%)]" />
        {videoFailed ? (
          <Image
            src={assetPath("/images/hero-poster.avif")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-75"
            aria-hidden="true"
          />
        ) : (
          <video
            className={`hero-video absolute left-1/2 top-1/2 min-h-full min-w-full object-cover transition-opacity duration-700 ${
              videoReady && !isLoopTransitioning
                ? "opacity-100"
                : "opacity-0"
            }`}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={(event) => {
              requestHeroVideoPlay(event.currentTarget);
            }}
            onCanPlay={(event) => {
              requestHeroVideoPlay(event.currentTarget);
            }}
            onPlaying={() => {
              setVideoReady(true);
              markHeroMediaReady();
            }}
            onTimeUpdate={(event) => {
              const video = event.currentTarget;

              if (
                Number.isFinite(video.duration) &&
                video.duration > LOOP_FADE_SECONDS &&
                video.duration - video.currentTime <= LOOP_FADE_SECONDS &&
                !loopTransitioningRef.current
              ) {
                loopTransitioningRef.current = true;
                setIsLoopTransitioning(true);

                loopResetTimerRef.current = window.setTimeout(() => {
                  restartHeroVideo(video);
                }, LOOP_RESET_AFTER_FADE_MS);
              }
            }}
            onEnded={(event) => {
              const video = event.currentTarget;

              loopTransitioningRef.current = true;
              setIsLoopTransitioning(true);
              restartHeroVideo(video);
            }}
            onError={() => {
              setVideoFailed(true);
              markHeroMediaReady();
            }}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO} type="application/vnd.apple.mpegurl" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/55 md:bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="hero-copy-shadow relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-text/55 md:text-muted">
          Collection &apos;26
        </p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-normal text-text md:text-8xl lg:text-9xl">
          {profile.name}
        </h1>

        <p className="blur-in mb-10 text-lg text-text/90 md:text-xl lg:text-2xl">
          <span
            key={heroRoles[roleIndex]}
            className="inline-block animate-fade-in font-display italic text-text"
          >
            {heroRoles[roleIndex]}
          </span>{" "}
          making health data understandable.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm leading-relaxed text-text/85 md:text-base md:text-text/75">
          {profile.bio}
        </p>

        <div className="blur-in flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="gradient-border-hover inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-text px-7 py-3.5 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            See works
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="gradient-border-hover inline-flex min-w-40 items-center justify-center gap-2 rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm font-medium text-text transition-transform hover:scale-105"
          >
            Reach out
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="blur-in absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
          Scroll
        </p>
        <div className="relative mx-auto h-10 w-px overflow-hidden bg-stroke">
          <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-text animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
