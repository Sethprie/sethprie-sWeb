import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GridOverlay from "@/components/GridOverlay"

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sethprie",
  "url": "https://www.sethprie.com",
  "sameAs": [
    "https://www.twitch.tv/sethprie",
    "https://www.youtube.com/@sethpriee",
    "https://www.tiktok.com/@sethprie",
    "https://discord.gg/V89yga8Ut9",
    "https://www.instagram.com/sethprie/",
    "https://github.com/Sethprie",
    "https://sethprie.itch.io"
  ],
  "description": "Soy Sethprie, desarrollador de videojuegos indie independiente y creador digital. Creador de Ritual Gaslight.",
  "jobTitle": "Indie Game Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Sethprie Studios"
  },
  "knowsAbout": ["Videojuegos indie", "Desarrollo de juegos", "Streaming", "Ritual Gaslight", "JRPG", "Game Development"],
  "image": "https://www.sethprie.com/sethprieAvatar.png"
}

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sethprie.com"),
  title: {
    default: "Sethprie",
    template: "%s | Sethprie",
  },
  description: "Soy Sethprie, desarrollador de videojuegos indie independiente y creador digital. Creador de Ritual Gaslight. Streamer, Indie Dev, y Designer.",
  keywords: ["sethprie", "sethprie dev", "sethprie streamer", "Sethprie", "desarrollador indie", "videojuegos indie", "Ritual Gaslight", "game developer"],
  verification: {
    google: "bllGUWYStOwlVcPhMGAGnOCKIKACXYOJiprnjRMwWYE",
  },
  openGraph: {
    title: "Sethprie",
    description: "Soy Sethprie, desarrollador de videojuegos indie independiente y creador digital. Creador de Ritual Gaslight.",
    siteName: "Sethprie",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased dark min-h-screen flex flex-col`}>
        {/* 1. La cuadrícula al fondo */}
        <GridOverlay />

        {/* 2. El contenido con un z-index superior para que Disqus no se maree */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}