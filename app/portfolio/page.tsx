"use client"

import Header from "@/components/Header"
import Timeline from "@/components/Timeline"
import TechStackSection from "@/components/TechStackSection"
import ProjectsSection from "@/components/ProjectsSection"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Título Principal */}
      <section className="flex flex-col items-center pt-16 pb-0 md:pt-20 md:pb-0 px-4 md:px-6">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-lg">
          Portafolio
        </h1>
        <div className="h-1 w-32 mt-4 mb-4 bg-gradient-to-r from-primary via-accent to-primary" />
        <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase text-center mb-6">
          Proyectos destacados y trayectoria profesional
        </p>
      </section>

      {/* Sobre mí */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src="/sethprieAvatar.png"
            alt="Avatar de Sethprie"
            fill
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
            ¡Hola! Soy Sethprie, desarrollador apasionado por crear experiencias digitales únicas. Me enfoco en construir proyectos que combinan eficiencia, diseño moderno y funcionalidad real. Desde aplicaciones web hasta sistemas backend, disfruto cada etapa del proceso de desarrollo y siempre busco aprender nuevas tecnologías y mejorar mis habilidades.
          </p>
        </div>
      </section>

      {/* Proyectos */}
      <ProjectsSection />

      {/* Tecnologías */}
      <TechStackSection />

      {/* Timeline */}
      <section className="w-full py-10">
        <div className="w-full bg-black py-4 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-24 bg-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white tracking-tight">
            Línea de Tiempo
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-0 pb-12">
          <Timeline />
        </div>
      </section>
    </main>
  )
}
