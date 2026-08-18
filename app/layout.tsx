import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zappride — Community Mobility",
  description:
    "Community-led mobility connecting Chennai neighbourhood nodes to Chennai One.",
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
