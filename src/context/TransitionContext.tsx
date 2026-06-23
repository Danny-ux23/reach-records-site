"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

interface TransitionContextType {
  navigateTo: (href: string) => void;
  overlayOpacity: number;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  overlayOpacity: 0,
});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const router = useRouter();
  const pendingNav = useRef<string | null>(null);

  const navigateTo = useCallback(
    (href: string) => {
      pendingNav.current = href;
      // Fade in overlay
      setOverlayOpacity(1);
      setTimeout(() => {
        if (pendingNav.current) {
          router.push(pendingNav.current);
        }
        // Fade out overlay after short delay to let new page render
        setTimeout(() => setOverlayOpacity(0), 100);
      }, 450);
    },
    [router]
  );

  return (
    <TransitionContext.Provider value={{ navigateTo, overlayOpacity }}>
      {children}
      {/* Full-screen transition overlay */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#1a1a1a",
          zIndex: 9999,
          opacity: overlayOpacity,
          transition: overlayOpacity === 1
            ? "opacity 0.45s ease"
            : "opacity 0.55s ease",
          pointerEvents: overlayOpacity > 0.5 ? "all" : "none",
        }}
      />
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => useContext(TransitionContext);
