"use client";

import { usePageTransition } from "@/context/TransitionContext";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function TransitionLink({
  href,
  children,
  className,
  style,
  onClick,
}: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        navigateTo(href);
      }}
    >
      {children}
    </a>
  );
}
