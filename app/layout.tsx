import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GridOverlay from "@/components/GridOverlay"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sethprie.vercel.app"),
  title: {
    default: "Sethprie",
    template: "%s | Sethprie",
  },
  description: "Official website of Sethprie. Streamer, Indie Dev, and Designer.",
  keywords: ["sethprie", "sethprie dev", "sethprie streamer", "Sethprie"],
  verification: {
    google: "bllGUWYStOwlVcPhMGAGnOCKIKACXYOJiprnjRMwWYE",
  },
  openGraph: {
    title: "Sethprie",
    description: "Streamer, Indie Dev, and Designer",
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
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased dark min-h-screen flex flex-col`}
      >
        <GridOverlay />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
