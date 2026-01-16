"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

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
        {/* Logo / Nombre */}
        <Link href="/">
          <div className="text-xl font-black tracking-tighter text-foreground cursor-pointer">SETHPRIE</div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground/50 hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest hover:drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,100,0,0.6)]"
          >
            Inicio
          </Link>
          <Link
            href="/portfolio"
            className="text-foreground/50 hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest hover:drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,100,0,0.6)]"
          >
            Portfolio
          </Link>
          <Link
            href="/contacto"
            className="text-foreground/50 hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest hover:drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,100,0,0.6)]"
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  )
}
