import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahnaf Thaqeef — AI Innovation Leader",
  description:
    "Building enterprise-grade AI from prototype to production. LLM applications, RAG systems, document intelligence, and AI strategy.",
  keywords: ["AI innovation", "enterprise AI", "LLM applications", "RAG", "Malaysia"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
