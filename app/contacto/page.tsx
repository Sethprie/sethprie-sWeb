"use client"

import { FaTiktok, FaTwitch, FaYoutube, FaDiscord, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Contacto() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex items-center justify-center pt-24 pb-12 px-4">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-lg">
            CONTACTO
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-primary" />
          <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase">
            [HABLEMOS]
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
                  Pongámonos en contacto
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-6" />
                <p className="text-foreground/70 leading-relaxed">
                  ¿Tienes alguna pregunta, propuesta de colaboración o simplemente quieres saludar?
                  No dudes en contactarme a través de cualquiera de mis redes sociales o correo electrónico.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-foreground/50 font-mono">
                  Redes Sociales
                </h3>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.tiktok.com/@sethprie?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="TikTok"
                    className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)]"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.twitch.tv/sethprie"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitch"
                    className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                  >
                    <FaTwitch className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.youtube.com/@sethpriee"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                    className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)]"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>

                  <a
                    href="https://discord.gg/V89yga8Ut9"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Discord"
                    className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                  >
                    <FaDiscord className="w-5 h-5" />
                  </a>

                  <a
                    href="https://github.com/sethprie"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)]"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-foreground/50 font-mono">
                  Correo Electrónico
                </h3>

                <a
                  href="mailto:sethprie@example.com"
                  className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors group"
                >
                  <FaEnvelope className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-mono">sethprie@example.com</span>
                </a>
              </div>

              {/* WhatsApp Group */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-foreground/50 font-mono">
                  Comunidad
                </h3>

                <a
                  href="https://chat.whatsapp.com/I1LQGapourICeFTp0XbLd6?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-bold hover:bg-accent hover:text-background transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,100,0,0.8)]"
                >
                  <span>Grupo de WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card/50 border border-border/40 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                Envíame un mensaje
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono uppercase tracking-widest text-foreground/70">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-background border border-border/60 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono uppercase tracking-widest text-foreground/70">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-background border border-border/60 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono uppercase tracking-widest text-foreground/70">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="¿De qué quieres hablar?"
                    className="w-full px-4 py-3 bg-background border border-border/60 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono uppercase tracking-widest text-foreground/70">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-3 bg-background border border-border/60 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary via-accent to-primary text-foreground font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 border border-primary/40"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-primary" />
          <p className="text-foreground/50 font-mono text-sm">
            {"// ¡Gracias por visitar mi página!"}
          </p>
        </div>
      </section>
    </main>
  )
}
