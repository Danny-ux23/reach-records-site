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

  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "var(--font-space-grotesk)" }}
    >
      <Nav />

      {/* ── FULL-SCREEN PHOTOS ───────────────────────────────────── */}
      {rosterArtists.map((artist, i) => {
        const isShown = hoveredIndex === i || (hoveredIndex === null && activeIndex === i);
        return (
          <div
            key={artist.slug}
            className="fixed inset-0 pointer-events-none"
            style={{
              opacity: isShown ? 1 : 0,
              transition: "opacity 0.6s ease",
              willChange: "opacity",
              backfaceVisibility: "hidden",
              zIndex: 0,
            }}
          >
            <Image
              src={artist.profileImage}
              alt={artist.name}
              fill
              sizes="100vw"
              className="object-cover"
              style={{
                objectPosition: artist.imagePosition ?? "center center",
                transform: isShown ? "scale(1)" : "scale(1.04)",
                transition: "transform 0.8s ease",
              }}
              priority={i < 3}
            />
            {/* Left-side overlay so names stay readable */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(26,26,26,0.96) 0%, rgba(26,26,26,0.80) 28%, rgba(26,26,26,0.35) 55%, transparent 78%)",
              }}
            />
            {/* Top vignette for Nav readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(26,26,26,0.55) 0%, transparent 18%)",
              }}
            />
            {/* Bottom vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,26,26,0.4) 0%, transparent 20%)",
              }}
            />
            {/* Accent wash */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, transparent 55%, ${artist.accentColor}14 100%)`,
              }}
            />
          </div>
        );
      })}

      {/* ── ARTIST LIST (left overlay) ───────────────────────────── */}
      <div
        className="fixed left-0 top-0 bottom-0 flex flex-col justify-center px-12 md:px-20"
        style={{ zIndex: 10, paddingTop: "88px" }}
      >
        {rosterArtists.map((artist, i) => {
          const isActive = i === activeIndex;
          const isHovered = i === hoveredIndex;

          return (
            <div
              key={artist.slug}
              className="cursor-pointer outline-none"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push(`/artists/${artist.slug}`)}
            >
              <span
                className="font-bold uppercase leading-none block"
                style={{
                  fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.02em",
                  color:
                    isHovered || isActive ? "#EFEFEB" : "rgba(239,239,235,0.15)",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  transition: "color 0.3s ease",
                }}
              >
                {artist.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
