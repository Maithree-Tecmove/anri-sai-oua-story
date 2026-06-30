import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anri Bakery · The Untranslateble Taste — Sai Oua Early Access Batch",
  description:
    "Anri Bakery presents Sai Oua (ไส้อั่ว) — a Northern Thai herb-sausage campaign. รสชาติที่อธิบายไม่ได้. Early Access Batch pre-order.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6E1E1E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        {/* Fonts loaded at runtime (browser-side) for resilience.
            Pairing: Playfair Display + Noto Serif Thai (display) / Sarabun (body). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Serif+Thai:wght@400;500;600;700&family=Sarabun:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
