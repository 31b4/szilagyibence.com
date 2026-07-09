"use client";

import Image from "next/image";
import { useState } from "react";
import { experience } from "@/data/content";

const careerSpans = [
  { index: 0, start: 0, end: 35, lane: "top" },
  { index: 1, start: 35, end: 68, lane: "top" },
  { index: 2, start: 68, end: 100, lane: "top" }
] as const;

const scale = [
  { label: "2024", position: 0, alignment: "left" },
  { label: "2025", position: 35, alignment: "center" },
  { label: "2026", position: 68, alignment: "center" },
  { label: "Now", position: 100, alignment: "right" }
] as const;

type RoleCardProps = {
  item: (typeof experience)[number];
  isActive: boolean;
  onSelect: () => void;
  className?: string;
  style?: React.CSSProperties;
};

function RoleCard({ item, isActive, onSelect, className = "", style }: RoleCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      style={style}
      className={`group rounded-[22px] border p-6 text-left transition-[background-color,color,transform,box-shadow] duration-300 sm:p-7 ${className} ${
        isActive
          ? "border-[#101114] bg-[#101114] text-white shadow-[0_20px_42px_rgba(0,0,0,0.16)]"
          : "border-black/10 bg-white text-[#141416] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)]"
      }`}
    >
      <p className={`text-xs font-semibold tracking-[-0.01em] ${isActive ? "text-white/55" : "text-black/45"}`}>
        {item.dates}
      </p>
      <div className="mt-7 flex items-center gap-3">
        <span className={`relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl ${isActive ? "bg-white" : "bg-[#f5f5f7]"}`}>
          <Image src={item.logo} alt="" fill sizes="44px" className="object-contain p-1.5" />
        </span>
        <span className="min-w-0">
          <span className="block text-xl font-semibold tracking-[-0.045em]">{item.company}</span>
          <span className={`mt-1 block text-sm leading-snug tracking-[-0.015em] ${isActive ? "text-white/60" : "text-black/55"}`}>
            {item.role}
          </span>
        </span>
      </div>
      <span className={`mt-6 block max-w-xs text-sm leading-relaxed tracking-[-0.015em] ${isActive ? "text-white/70" : "text-black/60"}`}>
        {item.summary}
      </span>
    </button>
  );
}

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(experience.length - 1);
  const activeRole = experience[activeIndex] ?? experience[0];

  return (
    <div>
      <div className="md:hidden">
        <div className="relative">
          <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-black/15" aria-hidden="true" />
          <div className="relative grid gap-4">
            {experience.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={item.company} className="relative ml-7">
                  <span
                    className={`absolute -left-3 top-8 z-10 grid h-3.5 w-3.5 place-items-center rounded-full border-4 border-[#f5f5f7] ${
                      isActive ? "bg-[#69d9ff]" : "bg-[#141416]"
                    }`}
                    aria-hidden="true"
                  />
                  <RoleCard item={item} isActive={isActive} onSelect={() => setActiveIndex(index)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative h-[27rem]">
          <div className="absolute left-0 right-0 top-9 h-px bg-black/15" aria-hidden="true" />
          {scale.map((point) => (
            <span
              key={point.label}
              style={{ left: `${point.position}%` }}
              className={`absolute top-0 text-xs font-semibold tracking-[-0.01em] text-black/45 ${
                point.alignment === "left"
                  ? "translate-x-0"
                  : point.alignment === "right"
                    ? "-translate-x-full"
                    : "-translate-x-1/2"
              }`}
            >
              {point.label}
            </span>
          ))}

          {careerSpans.map((span) => {
            const item = experience[span.index];

            if (!item) {
              return null;
            }

            const isActive = span.index === activeIndex;

            return (
              <div
                key={item.company}
                style={{
                  left: `${span.start}%`,
                  width: `calc(${span.end - span.start}% - 0.85rem)`
                }}
                className={`absolute ${span.lane === "top" ? "top-[4rem]" : "top-[16rem]"}`}
              >
                <span
                  className={`absolute -top-[1.18rem] left-0 z-10 h-3.5 w-3.5 rounded-full border-4 border-[#f5f5f7] ${
                    isActive ? "bg-[#69d9ff]" : "bg-[#141416]"
                  }`}
                  aria-hidden="true"
                />
                <RoleCard item={item} isActive={isActive} onSelect={() => setActiveIndex(span.index)} className="min-h-[10.5rem] w-full" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 rounded-[20px] bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7" aria-live="polite">
        <div>
          <p className="text-sm font-semibold tracking-[-0.02em] text-[#141416]">{activeRole.company}</p>
          <p className="mt-1 text-sm text-black/55">Selected role</p>
        </div>
        <ul className="mt-5 grid gap-3 text-sm font-medium tracking-[-0.02em] text-black/70 sm:mt-0 sm:grid-cols-2 sm:gap-x-8">
          {activeRole.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f7a68]" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
