"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/60 backdrop-blur-xl border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-tighter text-foreground">SETHPRIE</div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-foreground/50 hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest hover:drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,100,0,0.6)]"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-foreground/50 hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest hover:drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,100,0,0.6)]"
          >
            Proyectos
          </a>
          <a
            href="#"
            className="text-foreground/50 hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest hover:drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,100,0,0.6)]"
          >
            Contacto
          </a>
        </div>

        {/* <button className="px-6 py-2 text-foreground font-black text-sm uppercase tracking-widest border-2 border-accent hover:bg-accent hover:text-background transition-all hover:shadow-lg hover:drop-shadow-[0_0_12px_rgba(255,100,0,0.8)]">
          Conectar
        </button> */}
      </nav>
    </header>
  )
}
