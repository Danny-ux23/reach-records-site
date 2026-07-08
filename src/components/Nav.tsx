"use client";

import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 md:px-20 py-8"
      style={{ backgroundColor: "transparent" }}
    >
      <TransitionLink
        href="/"
        className="text-[11px] font-medium tracking-[0.18em] uppercase hover:opacity-50 transition-opacity"
        style={{ color: "#EFEFEB" }}
      >
        Reach Records
      </TransitionLink>

      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <TransitionLink
              href="/roster"
              className={`text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-50 ${
                pathname === "/roster" ? "opacity-100" : "opacity-60"
              }`}
              style={{ color: "#EFEFEB" }}
            >
              Roster
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/legacy"
              className={`text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-50 ${
                pathname === "/legacy" ? "opacity-100" : "opacity-60"
              }`}
              style={{ color: "#EFEFEB" }}
            >
              Legacy
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/contact"
              className={`text-[11px] font-medium tracking-[0.16em] uppercase transition-opacity hover:opacity-50 ${
                pathname === "/contact" ? "opacity-100" : "opacity-60"
              }`}
              style={{ color: "#EFEFEB" }}
            >
              Contact
            </TransitionLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
