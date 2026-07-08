"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import { artists } from "@/data/artists";

const rosterArtists = artists.filter((a) => !a.legacy);

export default function RosterPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % rosterArtists.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + rosterArtists.length) % rosterArtists.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") next();
      if (e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const active = rosterArtists[activeIndex];

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden relative"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "var(--font-space-grotesk)" }}
    >
      <Nav />

      {/* ── PHOTO PANEL (right side, revealed on hover) ─────────── */}
      <div className="fixed right-0 top-0 bottom-0 w-[44vw] pointer-events-none" style={{ zIndex: 1 }}>
        {rosterArtists.map((artist, i) => (
          <div
            key={artist.slug}
            className="absolute inset-0"
            style={{
              opacity: hoveredIndex === i || (hoveredIndex === null && activeIndex === i) ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <Image
              src={artist.profileImage}
              alt={artist.name}
              fill
              sizes="44vw"
              className="object-cover"
              style={{
                objectPosition: artist.imagePosition ?? "center",
                transform: hoveredIndex === i || (hoveredIndex === null && activeIndex === i) ? "scale(1)" : "scale(1.04)",
                transition: "transform 0.6s ease, opacity 0.5s ease",
              }}
              priority={i < 3}
            />
            {/* Blend into background on left edge */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, #1a1a1a 0%, rgba(26,26,26,0.3) 35%, transparent 60%)",
              }}
            />
            {/* Subtle top/bottom vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(26,26,26,0.5) 0%, transparent 25%, transparent 75%, rgba(26,26,26,0.5) 100%)",
              }}
            />
            {/* Accent color wash */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, transparent 50%, ${artist.accentColor}18 100%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* ── LIST ────────────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center px-12 md:px-20 pt-32 pb-16 relative"
        style={{ zIndex: 10 }}
      >
        {/* Artist list */}
        <div>
          {rosterArtists.map((artist, i) => {
            const isActive = i === activeIndex;
            const isHovered = i === hoveredIndex;

            return (
              <div
                key={artist.slug}
                className="flex items-center gap-8 cursor-pointer outline-none"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() =>
                  isActive
                    ? router.push(`/artists/${artist.slug}`)
                    : setActiveIndex(i)
                }
              >
                {/* Name */}
                <span
                  className="font-bold uppercase leading-none"
                  style={{
                    fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                    letterSpacing: "-0.02em",
                    color: isHovered || isActive
                      ? "#EFEFEB"
                      : "rgba(239,239,235,0.16)",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  {artist.name}
                </span>

                {/* Active: genre + hint */}
                {isActive && (
                  <div className="flex items-center gap-8 ml-2">
                    <span
                      className="text-[9px] tracking-[0.22em] uppercase font-light hidden sm:block"
                      style={{ color: active.accentColor }}
                    >
                      {artist.genre}
                    </span>
                    <span
                      className="text-[9px] tracking-[0.18em] uppercase font-light hidden md:block"
                      style={{ color: "rgba(239,239,235,0.3)" }}
                    >
                      {isHovered ? "Click to view →" : "View Profile →"}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-8 mt-12">
          <button
            onClick={prev}
            className="text-[20px] transition-opacity hover:opacity-100"
            style={{ color: "rgba(239,239,235,0.3)" }}
            aria-label="Previous"
          >
            ↑
          </button>
          <button
            onClick={next}
            className="text-[20px] transition-opacity hover:opacity-100"
            style={{ color: "rgba(239,239,235,0.3)" }}
            aria-label="Next"
          >
            ↓
          </button>
          <div className="flex items-center gap-2 ml-4">
            {rosterArtists.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Artist ${i + 1}`}
                style={{
                  width: i === activeIndex ? "18px" : "4px",
                  height: "2px",
                  backgroundColor:
                    i === activeIndex
                      ? active.accentColor
                      : "rgba(239,239,235,0.2)",
                  transition: "all 0.3s ease",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
