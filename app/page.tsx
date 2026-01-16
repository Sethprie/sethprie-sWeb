"use client"

import { FaTiktok, FaTwitch, FaYoutube, FaDiscord } from "react-icons/fa"

import { useState, useRef } from "react"
import Header from "@/components/Header"
import PanelCard from "@/components/panel-card"

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const panels = [
    {
      title: "Contenido",
      subtitle: "Todo sobre mis streams y videos",
      image: "/streamBCK.jpg",
      icon: "▶",
      link: "/contenido",
    },
    {
      title: "Blog",
      subtitle: "Detalles sobre mis proyectos y más",
      image: "/gameDevBCK.jpg",
      icon: "</",
      link: "/blog",
    },
    {
      title: "Portfolio",
      subtitle: "Mi trabajo y proyectos",
      image: "/webCodeBCK.jpg",
      icon: "◆",
      link: "/portfolio",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Title */}
      <section className="flex items-center justify-center pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground drop-shadow-lg">
            SETHPRIE
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-primary" />
          <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase">
            [PROGRAMADOR & CREADOR DIGITAL]
          </p>
          <div className="flex justify-center gap-4 mt-8">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@sethprie?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok"
              className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)]"
            >
              <FaTiktok className="w-5 h-5" />
            </a>

            {/* Twitch */}
            <a
              href="https://www.twitch.tv/sethprie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            >
              <FaTwitch className="w-5 h-5" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@sethpriee"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)]"
            >
              <FaYoutube className="w-5 h-5" />
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/2VdDgsms"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
              className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            >
              <FaDiscord className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3D Panel Grid */}
      <section
        ref={containerRef}
        className="flex justify-center px-4 md:px-6 py-8 md:py-12 perspective"
        style={{ perspective: "1200px" }}
      >
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {panels.map((panel, index) => (
              <PanelCard
                key={index}
                {...panel}
                index={index}
                mousePosition={mousePosition}
                aspect="aspect-[4/5]"
                link={panel.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Breve About Me */}
      <section className="relative py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/sethprieAvatar.png"
                alt="Sethprie"
                className="w-56 h-56 md:w-80 md:h-80 object-cover rounded_2xl border border-border/40 shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Sobre mí
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent" />

              <p className="text-foreground/70 leading-relaxed">
                Soy Sethprie, desarrollador de videojuegos indie y creador digital.
                Disfruto de contar buenas historias a traves de mis videojuegos.
                Aquí encontrarás detalles sobre mis proyectos y mucho más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyecto Destacado */}

      <section className="relative py-24 px-4 md:px-6 overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{
            backgroundImage: "url('/a.png')",
          }}
        />

        {/* Gradiente de desvanecimiento */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Proyecto Ritual Gaslight
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent" />

            <p className="text-foreground/70 leading-relaxed">
              Ritual Gaslight es mi juego actualmente en desarrollo. Un proyecto
              que combina mecanicas propias de un JRPG con las de juegos narrativos al estilo de Beyond Two Souls o The Walking Dead.
              Actualmente se encuentra en una etapa temprana de desarrollo, pero puedes seguir su progreso y actualizaciones desde aquí y en mis redes sociales.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 md:px-6 overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-left"
          style={{
            backgroundImage: "url('https://tarjetadirecta.es/cdn-cgi/imagedelivery/Pk8Ky-xDyeK8TLUvfplArQ/7/e81fdb01-07f1-47d6-b74f-e77b67b1ac5b-TikTok%20platform%20banner.png/public')",
          }}
        />

        {/* Gradiente de desvanecimiento */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/90 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="ml-auto max-w-xl space-y-6">
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Streams en vivo
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary" />

            <p className="text-foreground/70 leading-relaxed">
              Hago streams casi todos los días, con un horario fijo de{" "}
              <span className="text-foreground font-semibold">
                viernes a domingo a las 7:00 PM (hora de Venezuela)
              </span>
              . Espacios para jugar, desarrollar proyectos y compartir en tiempo real.
            </p>

            <p className="text-foreground/60">
              Por ahora, solo streams en{" "}
              <a
                href="https://www.tiktok.com/@sethprie?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline"
              >
                TikTok
              </a>
              , pero próximamente también estaremos en{" "}
              <a
                href="https://www.twitch.tv/sethprie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Twitch
              </a>
              .
            </p>

            {/* Comunidad */}
            <div className="pt-6 space-y-4">
              <p className="text-sm uppercase tracking-widest text-foreground/50 font-mono">
                Únete a la comunidad
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://chat.whatsapp.com/tu-grupo"
                  target="_blank"
                  className="flex-1 text-center px-6 py-3 border-2 border-accent text-accent font-bold hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,100,0,0.8)]"
                >
                  Grupo de WhatsApp
                </a>

                <a
                  href="https://discord.gg/tu-servidor"
                  target="_blank"
                  className="flex-1 text-center px-6 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
                >
                  Servidor de Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
