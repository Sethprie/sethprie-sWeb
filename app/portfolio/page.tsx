"use client"

import Header from "@/components/Header"
import Timeline from "@/components/Timeline"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Título */}
      <section className="flex flex-col items-center pt-16 pb-8 md:pt-24 md:pb-12 px-4 md:px-6">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-lg">
          Portafolio
        </h1>
        <div className="h-1 w-32 mt-4 mb-4 bg-gradient-to-r from-primary via-accent to-primary" />
        <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase text-center">
          Proyectos destacados y trayectoria profesional
        </p>
      </section>

      {/* Timeline */}
      <Timeline />
    </main>
  )
}
