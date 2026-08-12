import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ganesh Krishna | Software Engineer",
  description: "Software Engineer building scalable systems and thoughtful digital experiences.",
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
