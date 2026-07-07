import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { artists, getArtistBySlug } from "@/data/artists";

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return {};
  return {
    title: `${artist.name} — Reach Records`,
    description: artist.bio,
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  const currentIndex = artists.findIndex((a) => a.slug === slug);
  const prevArtist = artists[(currentIndex - 1 + artists.length) % artists.length];
  const nextArtist = artists[(currentIndex + 1) % artists.length];

  return (
    <div style={{ backgroundColor: "#EFEFEB", fontFamily: "var(--font-space-grotesk)", color: "#1a1a1a" }}>
      <Nav />

      {/* ── ARTIST NAV ──────────────────────────────────────────── */}
      <div
        className="fixed left-0 right-0 z-40 flex justify-between items-center px-12 md:px-20 py-3"
        style={{ top: "72px", backgroundColor: "rgba(26,26,26,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(239,239,235,0.06)" }}
      >
        <Link
          href={`/artists/${prevArtist.slug}`}
          className="flex items-center gap-3 group"
        >
          <span className="text-[11px] opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "#EFEFEB" }}>←</span>
          <span className="text-[10px] tracking-[0.18em] uppercase font-light opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "#EFEFEB" }}>
            {prevArtist.name}
          </span>
        </Link>
        <Link
          href={`/artists/${nextArtist.slug}`}
          className="flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.18em] uppercase font-light opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "#EFEFEB" }}>
            {nextArtist.name}
          </span>
          <span className="text-[11px] opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "#EFEFEB" }}>→</span>
        </Link>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        {/* Artist photo — full bleed behind everything */}
        {artist.heroImage && (
          <Image
            src={artist.heroImage}
            alt={artist.name}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.45, objectPosition: artist.imagePosition ?? "center" }}
            quality={95}
            priority
          />
        )}

        {/* Placeholder gradient when no image */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #1a1a1a 0%, ${artist.accentColor}40 50%, #1a1a1a 100%)`,
            zIndex: 0,
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{ background: "linear-gradient(to bottom, transparent, #1a1a1a)", zIndex: 1 }}
        />

        {/* Content */}
        <div className="relative z-10 px-12 md:px-20 pb-16 pt-40">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-4 font-light"
            style={{ color: artist.accentColor }}
          >
            {artist.genre}
          </p>

          {/* Giant name */}
          <h1
            className="font-bold uppercase leading-none mb-10"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              letterSpacing: "-0.02em",
              color: "#EFEFEB",
            }}
          >
            {artist.name}
          </h1>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 mb-8">
            {artist.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl font-bold leading-none mb-1"
                  style={{ color: "#EFEFEB" }}
                >
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase font-light opacity-50" style={{ color: "#EFEFEB" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIO + DISCO LINK ────────────────────────────────────── */}
      <section className="px-12 md:px-20 py-20 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <div className="flex-1">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-6 opacity-40"
          >
            About
          </p>
          <p
            className="text-[15px] leading-[1.9] font-light max-w-2xl"
            style={{ opacity: 0.8 }}
          >
            {artist.bio}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-6 pt-8 md:pt-10">
          {/* Social links */}
          <div className="flex items-center gap-5">
            {artist.socials.instagram && (
              <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-40" style={{ color: "#1a1a1a" }} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            )}
            {artist.socials.youtube && (
              <a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-40" style={{ color: "#1a1a1a" }} aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            )}
            {artist.socials.facebook && (
              <a href={artist.socials.facebook} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-40" style={{ color: "#1a1a1a" }} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            )}
          </div>
          <a
            href={artist.discoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-4 text-[11px] tracking-[0.18em] uppercase font-medium transition-all hover:opacity-70"
            style={{
              border: "1px solid #1a1a1a",
              color: "#1a1a1a",
            }}
          >
            View on Disco
            <span style={{ fontSize: "16px" }}>→</span>
          </a>
        </div>
      </section>

      {/* ── SYNC PLACEMENTS ─────────────────────────────────────── */}
      {artist.syncExamples.length > 0 && (
        <section
          className="px-12 md:px-20 py-20"
          style={{ backgroundColor: "#1a1a1a", color: "#EFEFEB" }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10 opacity-40">
            Sync Placements
          </p>
          <div>
            <div
              className="hidden md:grid gap-8 pb-4 mb-2"
              style={{
                gridTemplateColumns: "80px 1fr 1fr 120px",
                borderBottom: "1px solid rgba(239,239,235,0.12)",
              }}
            >
              {["Year", "Song", "Show / Placement", "Network"].map((h) => (
                <span key={h} className="text-[9px] tracking-[0.2em] uppercase opacity-30">
                  {h}
                </span>
              ))}
            </div>
            {artist.syncExamples.map((sync, i) => (
              <div
                key={i}
                className="grid gap-4 md:gap-8 py-5 items-center"
                style={{
                  gridTemplateColumns: "1fr",
                  borderBottom: "1px solid rgba(239,239,235,0.08)",
                }}
              >
                <div className="flex flex-col gap-1 md:hidden">
                  <span className="text-[10px] tracking-[0.12em] font-light opacity-40">
                    {sync.year}
                  </span>
                  <span className="text-[13px] font-medium">
                    &ldquo;{sync.songTitle}&rdquo;
                  </span>
                  <span className="text-[12px] font-light opacity-60">
                    {sync.show}
                  </span>
                  {sync.network && (
                    <span
                      className="text-[10px] tracking-[0.12em] uppercase font-light"
                      style={{ color: artist.accentColor }}
                    >
                      {sync.network}
                    </span>
                  )}
                </div>
                <div
                  className="hidden md:grid gap-8 items-center"
                  style={{ gridTemplateColumns: "80px 1fr 1fr 120px" }}
                >
                  <span className="text-[11px] tracking-[0.1em] font-light opacity-40">
                    {sync.year}
                  </span>
                  <span className="text-[13px] font-medium">
                    &ldquo;{sync.songTitle}&rdquo;
                  </span>
                  <span className="text-[13px] font-light opacity-60">
                    {sync.show}
                  </span>
                  <span
                    className="text-[10px] tracking-[0.14em] uppercase font-medium"
                    style={{ color: artist.accentColor }}
                  >
                    {sync.network}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── YOUTUBE VIDEOS ──────────────────────────────────────── */}
      {artist.youtubeVideos.length > 0 && (
        <section className="px-12 md:px-20 py-20">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10 opacity-40">
            Videos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artist.youtubeVideos.map((video, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16/9", backgroundColor: "#D8D6D2" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-[11px] tracking-[0.08em] font-light opacity-50">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PHOTO GALLERY ───────────────────────────────────────── */}
      {artist.photos.length > 0 && (
        <section className="px-12 md:px-20 pb-20">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10 opacity-40">
            Photos
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {artist.photos.map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{
                  aspectRatio: i % 3 === 0 ? "3/4" : "1/1",
                  backgroundColor: "#D8D6D2",
                }}
              >
                <Image
                  src={photo}
                  alt={`${artist.name} ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── FOOTER NAV ──────────────────────────────────────────── */}
      <div
        className="px-12 md:px-20 py-12 flex justify-between items-center"
        style={{ borderTop: "1px solid rgba(26,26,26,0.10)" }}
      >
        <Link
          href="/roster"
          className="text-[11px] tracking-[0.16em] uppercase opacity-30 hover:opacity-100 transition-opacity"
        >
          ← Roster
        </Link>

        <a
          href={artist.discoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-[0.16em] uppercase opacity-30 hover:opacity-100 transition-opacity"
        >
          Disco →
        </a>
      </div>
    </div>
  );
}
