"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Resume", href: "#resume", id: "resume" }
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [active, setActive] = useState("home");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const syncState = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setHasScrolled(currentScrollY > 100);

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (Math.abs(scrollDelta) > 14) {
        setIsVisible(scrollDelta < 0);
      }

      lastScrollYRef.current = currentScrollY;

      const current = links
        .map((link) => document.getElementById(link.id))
        .filter((section): section is HTMLElement => section !== null)
        .findLast((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.45;
        });

      if (current?.id) {
        setActive(current.id);
      }
    };

    syncState();
    window.addEventListener("scroll", syncState, { passive: true });
    window.addEventListener("resize", syncState);

    return () => {
      window.removeEventListener("scroll", syncState);
      window.removeEventListener("resize", syncState);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-4 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 md:pt-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-20 opacity-0"
      }`}
    >
      <nav
        className={`inline-flex max-w-[calc(100vw-1.5rem)] items-center rounded-full border border-white/10 bg-surface/95 px-2 py-2 backdrop-blur-md transition-shadow ${
          hasScrolled ? "shadow-md shadow-black/10" : ""
        }`}
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="nav-logo-ring group grid h-9 w-9 shrink-0 place-items-center rounded-full p-[2px]"
          aria-label="Home"
        >
          <span className="grid h-full w-full place-items-center rounded-full bg-bg font-display text-[13px] italic tracking-normal text-text transition-transform group-hover:scale-110">
            SB
          </span>
        </a>

        <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <div className="flex items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                active === link.id
                  ? "bg-stroke/50 text-text"
                  : "text-muted hover:bg-stroke/50 hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href={`mailto:${profile.email}`}
          className="gradient-border-hover inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:bg-stroke/40 hover:text-text sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="hidden sm:inline">Say hi</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
