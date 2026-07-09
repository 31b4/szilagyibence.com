"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import { assetPath } from "@/data/paths";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-[#dce5ee] bg-[#f8fafc]/85 backdrop-blur-xl"
          : "border-transparent bg-[#f8fafc]/55 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-[78rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Bence Szilágyi, home">
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[10px] bg-[#172033]" aria-hidden="true">
            <Image src={assetPath("/icon.png")} alt="" fill sizes="32px" className="object-contain" />
          </span>
          <span className="hidden text-[13px] font-semibold tracking-[-0.02em] text-[#243650] sm:block">
            Bence Szilágyi
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold tracking-[-0.01em] text-[#506278] transition-colors hover:text-[#172033] sm:text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-[#172033] px-4 py-2 text-sm font-semibold tracking-[-0.02em] text-white transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
