import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sohan Saldanha — Autonomy Engineer & Software Developer",
  description:
    "Portfolio of Sohan Saldanha, an autonomy technologies master's student and software developer working in robotics, computer vision and intelligent systems.",
  other: {
    "portfolio": "under development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
