"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import { artists } from "@/data/artists";

const activeArtists = artists.filter((a) => !a.legacy);
const legacyArtists = artists.filter((a) => a.legacy);

export default function RosterPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const goTo = useCallback(
    (index: number) => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex(index);
        setVisible(true);
      }, 250);
    },
    []
  );

  const next = useCallback(() => {
    goTo((activeIndex + 1) % activeArtists.length);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + activeArtists.length) % activeArtists.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const active = activeArtists[activeIndex];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "var(--font-space-grotesk)" }}
    >
      <Nav />

      <div className="flex-1 flex flex-col lg:flex-row">

        {/* Left — artist visual */}
        <div
          className="relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer min-h-[60vh] lg:min-h-0"
          onClick={() => router.push(`/artists/${active.slug}`)}
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
        >
          {/* Photo if available */}
          {active.profileImage && (
            <Image
              src={active.profileImage}
              alt={active.name}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ opacity: 0.6, objectPosition: active.imagePosition ?? "center" }}
              quality={95}
            />
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, #1a1a1a 0%, ${active.accentColor}30 60%, #1a1a1a 100%)`,
              zIndex: 1,
            }}
          />

          {/* Big name in background */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
            style={{ zIndex: 2 }}
          >
            <span
              className="font-bold uppercase text-center leading-none"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: active.accentColor,
                opacity: 0.12,
                letterSpacing: "-0.02em",
              }}
            >
              {active.name}
            </span>
          </div>

          {/* Click label */}
          <div
            className="absolute bottom-8 right-8 flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity"
            style={{ zIndex: 3 }}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-white opacity-60">
              View Artist
            </span>
            <span className="text-white opacity-60">→</span>
          </div>
        </div>

        {/* Right — artist info + controls */}
        <div
          className="flex flex-col justify-between px-10 py-12 lg:py-24 lg:w-96"
          style={{ borderLeft: "1px solid rgba(239,239,235,0.08)" }}
        >
          {/* Artist detail */}
          <div
            className="flex-1 flex flex-col justify-center"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.25s ease" }}
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase font-light mb-4"
              style={{ color: active.accentColor }}
            >
              {active.genre}
            </p>
            <h2
              className="font-bold uppercase leading-none mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "#EFEFEB",
              }}
            >
              {active.name}
            </h2>
            <p
              className="text-[12px] leading-[1.85] font-light mb-8 line-clamp-4"
              style={{ color: "rgba(239,239,235,0.5)" }}
            >
              {active.bio}
            </p>

            {/* Top stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {active.stats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-xl font-bold leading-none mb-1"
                    style={{ color: "#EFEFEB" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[9px] tracking-[0.2em] uppercase font-light"
                    style={{ color: "rgba(239,239,235,0.35)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push(`/artists/${active.slug}`)}
              className="flex items-center gap-3 w-fit text-[11px] tracking-[0.18em] uppercase font-medium transition-opacity hover:opacity-60"
              style={{ color: active.accentColor }}
            >
              View Full Profile
              <span>→</span>
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-10" style={{ borderTop: "1px solid rgba(239,239,235,0.08)" }}>
            {/* Prev / Next */}
            <div className="flex items-center gap-6">
              <button
                onClick={prev}
                className="text-[11px] tracking-[0.1em] transition-opacity hover:opacity-100"
                style={{ color: "rgba(239,239,235,0.35)" }}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={next}
                className="text-[11px] tracking-[0.1em] transition-opacity hover:opacity-100"
                style={{ color: "rgba(239,239,235,0.35)" }}
                aria-label="Next"
              >
                →
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {activeArtists.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Artist ${i + 1}`}
                  style={{
                    width: i === activeIndex ? "18px" : "5px",
                    height: "2px",
                    backgroundColor: i === activeIndex ? active.accentColor : "rgba(239,239,235,0.25)",
                    transition: "all 0.3s ease",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span
              className="text-[10px] tracking-[0.1em] font-light"
              style={{ color: "rgba(239,239,235,0.25)" }}
            >
              {String(activeIndex + 1).padStart(2, "0")}/{String(activeArtists.length).padStart(2, "0")}
            </span>
          </div>
        </div>

      </div>

      {/* Legacy Artists */}
      {legacyArtists.length > 0 && (
        <div
          className="px-10 py-5 flex items-center gap-6"
          style={{ borderTop: "1px solid rgba(239,239,235,0.06)" }}
        >
          <span
            className="text-[9px] tracking-[0.3em] uppercase font-light shrink-0"
            style={{ color: "rgba(239,239,235,0.25)" }}
          >
            Legacy
          </span>
          <div className="flex items-center gap-4">
            {legacyArtists.map((artist) => (
              <button
                key={artist.slug}
                onClick={() => router.push(`/artists/${artist.slug}`)}
                className="flex items-center gap-2 group transition-opacity hover:opacity-100"
                style={{ opacity: 0.4 }}
                title={artist.name}
              >
                {artist.profileImage && (
                  <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={artist.profileImage}
                      alt={artist.name}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                )}
                <span
                  className="text-[10px] tracking-[0.15em] uppercase font-light"
                  style={{ color: "rgba(239,239,235,0.7)" }}
                >
                  {artist.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
