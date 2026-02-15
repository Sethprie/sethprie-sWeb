"use client"

import { FaTiktok, FaTwitch, FaYoutube, FaDiscord } from "react-icons/fa"

export default function Contenido() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* HERO POSTER */}
      <section className="relative px-4 pt-32 pb-20">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 blur-3xl opacity-60" />
        
        <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto">

          {/* Big Poster Title */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-foreground">
            CONTENIDO
          </h1>

          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-primary via-accent to-primary" />

          <p className="text-lg md:text-xl text-foreground/70 font-mono uppercase tracking-widest">
            Streams • Opiniones • Proyectos • Desarrollo
          </p>

          {/* Call to Action */}
          <div className="space-y-6 pt-8">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Sígueme y forma parte del proceso.
            </h2>

            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Aquí comparto mis proyectos en desarrollo, mis streams jugando,
              ideas, opiniones sin filtro y todo lo que voy construyendo.
              Si quieres ver cómo evoluciona cada cosa desde cero, este es el lugar.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

            <a
              href="https://www.twitch.tv/sethprie"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-primary p-6 flex flex-col items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]"
            >
              <FaTwitch className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold tracking-widest uppercase">Twitch</span>
              <span className="text-xs font-mono mt-2 opacity-70">Streams en vivo</span>
            </a>

            <a
              href="https://www.youtube.com/@sethpriee"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-accent p-6 flex flex-col items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,100,0,0.7)]"
            >
              <FaYoutube className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold tracking-widest uppercase">YouTube</span>
              <span className="text-xs font-mono mt-2 opacity-70">Videos y análisis</span>
            </a>

            <a
              href="https://www.tiktok.com/@sethprie"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-primary p-6 flex flex-col items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]"
            >
              <FaTiktok className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold tracking-widest uppercase">TikTok</span>
              <span className="text-xs font-mono mt-2 opacity-70">Clips y opiniones rápidas</span>
            </a>

            <a
              href="https://discord.gg/V89yga8Ut9"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-accent p-6 flex flex-col items-center justify-center hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,100,0,0.7)]"
            >
              <FaDiscord className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold tracking-widest uppercase">Discord</span>
              <span className="text-xs font-mono mt-2 opacity-70">Comunidad directa</span>
            </a>

          </div>

        </div>
      </section>
    </main>
  )
}
