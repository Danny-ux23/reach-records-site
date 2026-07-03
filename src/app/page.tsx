import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#EFEFEB", fontFamily: "var(--font-space-grotesk)" }}
    >
      {/* Core content block — centered vertically */}
      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 py-20">

        {/* Logo + Navigation row */}
        <div className="flex items-start justify-between mb-14">
          <span className="text-[13px] font-medium tracking-[0.18em] uppercase select-none">
            Reach Records
          </span>

          <nav>
            <ul className="space-y-[3px]">
              <li>
                <TransitionLink href="/roster" className="flex items-center group">
                  <span className="text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity group-hover:opacity-40 w-24">
                    Roster
                  </span>
                  <span className="text-[11px] font-light tracking-[0.1em] opacity-60">
                    001
                  </span>
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/legacy" className="flex items-center group">
                  <span className="text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity group-hover:opacity-40 w-24">
                    Legacy
                  </span>
                  <span className="text-[11px] font-light tracking-[0.1em] opacity-60">
                    002
                  </span>
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/contact" className="flex items-center group">
                  <span className="text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity group-hover:opacity-40 w-24">
                    Contact
                  </span>
                  <span className="text-[11px] font-light tracking-[0.1em] opacity-60">
                    003
                  </span>
                </TransitionLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Tagline spread across full width */}
        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-light tracking-[0.12em] uppercase">A</span>
          <span className="text-[13px] font-light tracking-[0.12em] uppercase">Roster</span>
          <span className="text-[13px] font-light tracking-[0.12em] uppercase">Showcase</span>
        </div>

      </div>
    </main>
  );
}
