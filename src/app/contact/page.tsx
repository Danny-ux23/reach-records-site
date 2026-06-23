import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#EFEFEB", fontFamily: "var(--font-space-grotesk)" }}
    >
      <Nav />

      <div className="flex-1 flex flex-col justify-end px-12 md:px-20 pb-20 md:pb-28">

        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-6">
              Contact
            </p>
            <p className="text-[13px] font-light tracking-[0.06em] leading-7 max-w-xs opacity-70">
              For sync licensing inquiries,<br />
              artist features, or general questions.
            </p>
          </div>

          <div className="text-right space-y-4">
            <div>
              <p className="text-[10px] tracking-[0.16em] uppercase opacity-40 mb-1">
                Email
              </p>
              <a
                href="mailto:sync@reachrecords.com"
                className="text-[13px] tracking-[0.06em] hover:opacity-40 transition-opacity"
              >
                sync@reachrecords.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.16em] uppercase opacity-40 mb-1">
                Website
              </p>
              <a
                href="https://reachrecords.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] tracking-[0.06em] hover:opacity-40 transition-opacity"
              >
                reachrecords.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-baseline justify-between">
          <span className="text-[13px] font-light tracking-[0.12em] uppercase">Reach</span>
          <span className="text-[13px] font-light tracking-[0.12em] uppercase">Records</span>
          <span className="text-[13px] font-light tracking-[0.12em] uppercase opacity-30">—</span>
        </div>

      </div>
    </div>
  );
}
