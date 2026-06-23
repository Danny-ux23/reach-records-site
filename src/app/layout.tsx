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
