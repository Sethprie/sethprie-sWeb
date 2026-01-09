"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import PanelCard from "@/components/panel-card"

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const panels = [
    {
      title: "Perfil de Streamer",
      subtitle: "Transmisiones en vivo",
      image: "/streamBCK.jpg",
      icon: "▶",
    },
    {
      title: "Perfil de Indie Dev",
      subtitle: "Desarrollo de juegos",
      image: "/gameDevBCK.jpg",
      icon: "</",
    },
    {
      title: "Portfolio",
      subtitle: "Mi trabajo y proyectos",
      image: "/webCodeBCK.jpg",
      icon: "◆",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(255,100,0,.1) 25%, rgba(255,100,0,.1) 26%, transparent 27%, transparent 74%, rgba(255,100,0,.1) 75%, rgba(255,100,0,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,100,0,.1) 25%, rgba(255,100,0,.1) 26%, transparent 27%, transparent 74%, rgba(255,100,0,.1) 75%, rgba(255,100,0,.1) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px",
        }}
      />

      <Header />

      {/* Hero Title */}
      <section className="flex items-center justify-center py-16 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground drop-shadow-lg">SETHPRIE</h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-primary" />
          <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase">
            [INTERACTIVE UNIVERSE]
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#"
              className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent font-black hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)]"
              title="TikTok"
            >
              抖
            </a>
            <a
              href="#"
              className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary font-black hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
              title="Twitch"
            >
              ⧸
            </a>
            <a
              href="#"
              className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent font-black hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)]"
              title="YouTube"
            >
              ▶
            </a>
            <a
              href="#"
              className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary font-black hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
              title="Discord"
            >
              ◉
            </a>
          </div>
        </div>
      </section>

      {/* 3D Panel Grid */}
      <section
        ref={containerRef}
        className="flex items-center justify-center min-h-[80vh] py-12 px-4 md:px-6 perspective"
        style={{
          perspective: "1200px",
        }}
      >
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {panels.map((panel, index) => (
              <PanelCard key={index} {...panel} index={index} mousePosition={mousePosition} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 md:px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/40 text-xs font-mono tracking-widest uppercase">
            © 2026 SETHPRIE | EDGE OF DIGITAL
          </p>
        </div>
      </footer>
    </main>
  )
}
