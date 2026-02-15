"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-background/80 backdrop-blur-xl border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="text-xl font-black tracking-tighter text-foreground cursor-pointer">
              SETHPRIE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/50 hover:text-accent transition-colors font-mono text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-background z-40 transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-28 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold uppercase tracking-wide text-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
