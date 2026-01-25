import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import Footer from "@/components/Footer";
import GridOverlay from "@/components/GridOverlay"

import { SpeedInsights } from "@vercel/speed-insights/next"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // El template asegura que "sethprie" sea constante para el algoritmo
  title: {
    default: "sethprie",
    template: "%s | sethprie",
  },
  description: "Official website of sethprie. Streamer, Indie Dev, and Designer.",
  keywords: ["sethprie", "sethprie dev", "sethprie streamer"],
  verification: {
    google: 'bllGUWYStOwlVcPhMGAGnOCKIKACXYOJiprnjRMwWYE',
  },
  // OpenGraph ayuda a que cuando compartas el link se vea el nombre correcto
  openGraph: {
    title: 'sethprie',
    description: 'Streamer, Indie Dev, and Designer',
    url: 'https://sethprie.vercel.app',
    siteName: 'sethprie',
    type: 'website',
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Cambiado a "es" para mejor SEO en español
    <html lang="es">
      <body className={`font-sans antialiased dark`}>
        <GridOverlay />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}