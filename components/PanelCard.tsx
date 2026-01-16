"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface PanelCardProps {
  title: string
  subtitle: string
  image: string
  icon: string
  index: number
  mousePosition: { x: number; y: number }
  aspect?: string // NUEVO: relación de aspecto, ej: "aspect-[4/5]"
  link?: string   // NUEVO: URL a la que debe ir al hacer click
}

export default function PanelCard({
  title,
  subtitle,
  image,
  icon,
  index,
  mousePosition,
  aspect = "aspect-[9/16]",
  link,
}: PanelCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter();

  const handleClick = () => {
    if (link) router.push(link)
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`group relative ${aspect} rounded-none overflow-hidden cursor-pointer border border-primary/30`}
      style={{
        transform: isHovered ? "translateY(-12px) scale(1.03)" : "translateY(0) scale(1)",
        transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div
        className={`absolute inset-0 rounded-none transition-all duration-300 pointer-events-none z-20`}
        style={{
          background: isHovered
            ? `radial-gradient(circle at center, rgba(255,100,0,0.6), transparent 40%)`
            : "transparent",
          boxShadow: isHovered
            ? "inset 0 0 40px rgba(255,100,0,0.4), 0 0 60px rgba(168,85,247,0.5)"
            : "inset 0 0 20px rgba(168,85,247,0.2)",
        }}
      />

      {/* Image Container with aggressive Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{
          transform: isHovered ? "scale(1.15)" : "scale(1)",
        }}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority={index === 0}
        />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-20" : "opacity-50"}`}
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.9) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-500"
        style={{
          transform: isHovered ? "translateY(-15px) scale(1.05)" : "translateY(0) scale(1)",
          opacity: 1,
        }}
      >
        <div
          className="text-7xl mb-6 transition-all duration-500 font-black"
          style={{
            transform: isHovered ? "scale(1.3) rotate(5deg)" : "scale(1) rotate(0deg)",
            textShadow: isHovered ? "0 0 30px rgba(255,100,0,0.8), 0 0 60px rgba(168,85,247,0.6)" : "none",
          }}
        >
          {icon}
        </div>

        <h2
          className="text-3xl md:text-4xl font-black tracking-wider text-foreground mb-2 transition-all duration-500 uppercase"
          style={{
            textShadow: isHovered ? "0 0 20px rgba(255,100,0,0.6), 0 0 40px rgba(168,85,247,0.4)" : "none",
          }}
        >
          {title}
        </h2>

        <p className="text-sm text-foreground/60 mb-8 transition-all duration-500 font-mono uppercase tracking-widest">
          {subtitle}
        </p>

        <button
          className={`px-8 py-3 border-2 border-accent font-black text-sm uppercase tracking-widest transition-all duration-500 transform pointer-events-none ${
            isHovered ? "scale-100 opacity-100 bg-accent text-background" : "scale-75 opacity-0"
          }`}
          style={{
            boxShadow: isHovered
              ? "0 0 20px rgba(255,100,0,0.8), inset 0 0 10px rgba(255,100,0,0.3)"
              : "none",
          }}
        >
          Explorar
        </button>
      </div>

      {/* Esquinas y top border glow */}
      <div
        className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent transition-all duration-500 ${
          isHovered ? "opacity-100 scale-100" : "opacity-30 scale-50"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary transition-all duration-500 ${
          isHovered ? "opacity-100 scale-100" : "opacity-30 scale-50"
        }`}
      />
      <div
        className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: isHovered ? "0 0 20px rgba(255,100,0,0.8)" : "none",
        }}
      />
    </div>
  )
}
