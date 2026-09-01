import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luna — personal assistant",
  description:
    "Luna — a personal voice assistant with an animated orb interface.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
