"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import { artists } from "@/data/artists";

const rosterArtists = artists.filter((a) => !a.legacy);

export default function RosterPage() {
  const [activeIndex, setActiveIndex] = useState(0);
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
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "var(--font-space-grotesk)" }}
    >
      <Nav />

      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 pt-32 pb-16">

        {/* Header */}
        <p
          className="text-[9px] tracking-[0.35em] uppercase font-light mb-10"
          style={{ color: "rgba(239,239,235,0.25)" }}
        >
          Roster &mdash; {String(rosterArtists.length).padStart(2, "0")} Artists
        </p>

        {/* Artist list */}
        <div>
          {rosterArtists.map((artist, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={artist.slug}
                className="flex items-center gap-8 cursor-pointer group"
                style={{ borderBottom: "1px solid rgba(239,239,235,0.04)" }}
                onClick={() =>
                  isActive
                    ? router.push(`/artists/${artist.slug}`)
                    : setActiveIndex(i)
                }
              >
                {/* Number */}
                <span
                  className="text-[9px] tracking-[0.2em] font-light flex-shrink-0 w-6 py-4 transition-colors duration-300"
                  style={{ color: isActive ? active.accentColor : "rgba(239,239,235,0.15)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <span
                  className="font-bold uppercase leading-none transition-all duration-300"
                  style={{
                    fontSize: isActive
                      ? "clamp(2rem, 4.5vw, 3.8rem)"
                      : "clamp(1.4rem, 3vw, 2.5rem)",
                    letterSpacing: "-0.02em",
                    color: isActive ? "#EFEFEB" : "rgba(239,239,235,0.16)",
                    paddingTop: isActive ? "0.6rem" : "0.4rem",
                    paddingBottom: isActive ? "0.6rem" : "0.4rem",
                  }}
                >
                  {artist.name}
                </span>

                {/* Active: genre + view link */}
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
                      View Profile →
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom controls */}
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
