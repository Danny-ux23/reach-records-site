import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { TransitionProvider } from "@/context/TransitionContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reach Records — Roster Showcase",
  description: "Reach Records artist roster for sync placement",
  keywords: ["sync licensing", "music placement", "Reach Records", "hip-hop", "gospel", "afrobeat"],
  robots: "index, follow",
  openGraph: {
    title: "Reach Records — Roster Showcase",
    description: "Discover Reach Records artists for sync licensing",
    url: "https://sync-showcase-site.onrender.com",
    type: "website",
    images: [{ url: "/images/artists/lecrae.jpg", width: 1200, height: 630, alt: "Reach Records" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reach Records — Roster Showcase",
    description: "Discover Reach Records artists for sync licensing",
    images: ["/images/artists/lecrae.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full">
          <TransitionProvider>{children}</TransitionProvider>
        </body>
    </html>
  );
}
