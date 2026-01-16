"use client"

import { useState, useEffect } from "react"
import { timeline } from "@/data/timeline"

interface TimelineItemType {
  year: string
  title: string
  descriptions: string[]
}

// Hook optimizado para detectar ancho de pantalla
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return // evitar SSR

    const media = window.matchMedia(query)
    setMatches(media.matches) // estado inicial
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [query]) // solo query, nada más

  return matches
}

// Componente genérico para renderizar título y descripciones
function TimelineContent({ item }: { item: TimelineItemType }) {
  return (
    <>
      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
      <div className="mt-2 space-y-4">
        {item.descriptions.map((p, i) => (
          <p key={i} className="text-foreground/70 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </>
  )
}

// Versión de escritorio
function TimelineItemDesktop({ item, isLeft }: { item: TimelineItemType; isLeft: boolean }) {
  const leftSide = isLeft ? (
    <>
      <TimelineContent item={item} />
      <hr className="border-t border-foreground/20 mt-4" />
    </>
  ) : (
    <p className="text-sm font-mono text-foreground/70 mt-2 text-right">{item.year}</p>
  )

  const rightSide = !isLeft ? (
    <>
      <TimelineContent item={item} />
      <hr className="border-t border-foreground/20 mt-4" />
    </>
  ) : (
    <p className="text-sm font-mono text-foreground/70 mt-2 text-left">{item.year}</p>
  )

  return (
    <div className="relative w-full flex items-start">
      <div className={`w-1/2 pr-8 ${isLeft ? "text-right" : "text-left"}`}>{leftSide}</div>
      {/* Punto central */}
      <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent rounded-full shadow z-10" />
      <div className={`w-1/2 pl-8 ${!isLeft ? "text-left" : "text-right"}`}>{rightSide}</div>
    </div>
  )
}

// Versión móvil
function TimelineMobile() {
  return (
    <div className="relative flex flex-col">
      <span className="absolute left-6 top-0 bottom-0 w-1 bg-accent/50 rounded" />
      {timeline.map((item, index) => (
        <div key={index} className="relative flex flex-col mb-8">
          <span className="absolute left-[16px] top-0 w-5 h-5 bg-accent rounded-full shadow z-10" />
          <div className="ml-16 pr-9">
            <TimelineContent item={item} />
            <p className="text-sm font-mono text-foreground/70 mt-1">{item.year}</p>
            {index !== timeline.length - 1 && <hr className="border-t border-foreground/20 mt-4" />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Timeline() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16">
      {!isMobile ? (
        <>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 border-l-4 border-accent/50" />
          <div className="flex flex-col space-y-16">
            {timeline.map((item, index) => (
              <TimelineItemDesktop key={index} item={item} isLeft={index % 2 === 0} />
            ))}
          </div>
        </>
      ) : (
        <TimelineMobile />
      )}
    </div>
  )
}