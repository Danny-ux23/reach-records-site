"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import { artists } from "@/data/artists";

const legacyArtists = artists.filter((a) => a.legacy);

export default function LegacyPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "var(--font-space-grotesk)" }}
    >
      <Nav />

      <div className="flex-1 flex flex-col px-10 py-16 lg:px-20">

        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[9px] tracking-[0.35em] uppercase font-light mb-4"
            style={{ color: "rgba(239,239,235,0.3)" }}
          >
            002
          </p>
          <h1
            className="font-bold uppercase leading-none"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.02em",
              color: "#EFEFEB",
            }}
          >
            Legacy
          </h1>
          <p
            className="mt-4 text-[11px] tracking-[0.12em] font-light max-w-sm"
            style={{ color: "rgba(239,239,235,0.35)" }}
          >
            Artists who helped shape the sound and legacy of Reach Records.
          </p>
        </div>

        {/* Artist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ borderTop: "1px solid rgba(239,239,235,0.06)" }}>
          {legacyArtists.map((artist) => (
            <button
              key={artist.slug}
              type="button"
              onClick={() => router.push(`/artists/${artist.slug}`)}
              className="group relative flex flex-col text-left overflow-hidden"
              style={{ borderBottom: "1px solid rgba(239,239,235,0.06)" }}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden">
                {artist.profileImage && (
                  <Image
                    src={artist.profileImage}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      opacity: 0.5,
                      objectPosition: artist.imagePosition ?? "center",
                      filter: "grayscale(30%)",
                    }}
                  />
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, #1a1a1a 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className="text-[9px] tracking-[0.3em] uppercase font-light mb-1"
                    style={{ color: artist.accentColor }}
                  >
                    {artist.genre}
                  </p>
                  <h2
                    className="font-bold uppercase leading-none"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      letterSpacing: "-0.02em",
                      color: "#EFEFEB",
                    }}
                  >
                    {artist.name}
                  </h2>
                </div>
              </div>

              {/* View link */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(239,239,235,0.06)" }}
              >
                <span
                  className="text-[9px] tracking-[0.25em] uppercase font-light"
                  style={{ color: "rgba(239,239,235,0.3)" }}
                >
                  View Profile
                </span>
                <span
                  className="text-[11px] transition-transform group-hover:translate-x-1"
                  style={{ color: artist.accentColor }}
                >
                  →
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
