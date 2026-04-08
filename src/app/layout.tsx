import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahnaf Thaqeef — Malaysian AI Automation Educator",
  description:
    "I build AI tools and automations for Malaysian businesses — and teach you how to do the same. Documenting the journey from Nestlé professional to full-time AI builder.",
  keywords: ["AI automation", "Malaysia", "n8n", "WhatsApp API", "AI education", "Malaysian AI", "automation tools"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
