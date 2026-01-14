"use client"

import Header from "@/components/Header"

export default function PortfolioPage() {
  const timeline = [
    {
      year: "2025",
      title: "Eventtually App - Desarrollador Full Stack y Project Manager",
      descriptions: [
        "Me gradué como TSU en Informática e inicié mi trabajo como desarrollador full stack" + 
        "en Eventtually App, donde lideré el inicio del desarrollo de una aplicación móvil para la gestión de eventos. Utilicé React Native para el desarrollo front-end y Node.js con ASP.NET para el back-end, implementando una base de datos con MariaDB.",
        "Además, gestioné el proyecto utilizando metodologías ágiles, coordinando un equipo de desarrolladores y asegurando la entrega oportuna de funcionalidades clave.",
        " Ese mismo año, junto a mi equipo, ganamos el tercer lugar en el IV maratón de programación de la universidad Dr. Rafael Belloso Chacín."
      ],
      image: "",
    },
    {
      year: "2024",
      title: "Alcaldía de San Francisco, Zulia",
      descriptions: [
        "Inicié como programador Jr. en la Alcaldía de San Francisco, formando parte de la oficina de Ciencia y Tecnología, encargado de crear y mantener aplicaciones internas para mejorar la eficiencia administrativa.",
        "También aporté con la automatización de procesos por medio de bots desarrollados en Python. Gracias a mi desempeño, fui promovido a programador Semi-Senior en pocos meses y destaqué en mi trabajo como project manager."
      ],
      image: "",
    },
    {
      year: "2023",
      title: "El comienzo de mi carrera como desarrollador",
      descriptions: [
        "Empecé mis estudios formales en la carrera de Técnico Superior Universitario en Informática.",
        "Durante este año salté de Unity a Unreal Engine, aprendiendo a usar Blueprints y C++ para desarrollar juegos más complejos y realistas. Además, comencé a explorar el desarrollo web full-stack con React y Node.js."
      ],
      image: "",
    },
    {
      year: "2022",
      title: "Contabilidad y Finanzas",
      descriptions: [
        "Me gradué como bachiller técnico medio en contabilidad y trabajé durante un tiempo en la firma contable Ramos Rodríguez C.A.",
        "Ese mismo año inicié el desarrollo de mi primer juego completo, Ritual Gaslight, un JRPG con toma de decisiones al estilo Until Dawn."
      ],
      image: "",
    },
    {
      year: "2019",
      title: "Unity y C#",
      descriptions: [
        "Aprendí a usar Unity y C# para desarrollar videojuegos, creando varios proyectos pequeños.",
        "Esto me permitió afianzar conceptos de programación orientada a objetos y desarrollo de juegos en 3D."
      ],
      image: "",
    },
    {
      year: "2017",
      title: "Un paso adelante y mis primeras experiencias web",
      descriptions: [
        "Decidí dedicarme de forma más seria a la programación y al desarrollo de juegos, aprendiendo a usar GameMaker Studio y el lenguaje GML.",
        "Además, comencé a explorar la programación web utilizando HTML, CSS y JavaScript para crear sitios interactivos."
      ],
      image: "",
    },
    {
      year: "2016",
      title: "El comienzo de todo",
      descriptions: [
        "Conocí RPG Maker y tuve mis primeras experiencias con la programación utilizando Ruby para modificar y crear scripts personalizados.",
        "Aquí nació mi interés por el desarrollo de software y videojuegos."
      ],
      image: "",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Título */}
      <section className="flex flex-col items-center pt-16 pb-8 md:pt-24 md:pb-12 px-4 md:px-6">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-lg">
          Portfolio
        </h1>
        <div className="h-1 w-32 mt-4 mb-4 bg-gradient-to-r from-primary via-accent to-primary" />
        <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase text-center">
          Mis proyectos y logros hasta ahora
        </p>
      </section>

      {/* Timeline */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Línea vertical central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 border-l-4 border-accent/50" />

        <div className="flex flex-col space-y-16">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <div key={index} className="relative w-full flex items-start">
                {/* Columna izquierda */}
                <div className={`w-1/2 pr-8 ${isLeft ? "text-right" : "text-left"}`}>
                  {isLeft && (
                    <>
                      <div className="p-6 rounded-xl shadow-md bg-background">
                        <h3 className="text-xl font-bold text-foreground">
                          {item.title}
                        </h3>

                        <div className="mt-2 space-y-4">
                          {item.descriptions.map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-foreground/70 leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                      <hr className="border-t border-foreground/20 mt-4" />
                    </>
                  )}

                  {!isLeft && (
                    <p className="text-sm font-mono text-foreground/70 mt-2 text-right">
                      {item.year}
                    </p>
                  )}
                </div>

                {/* Punto central */}
                <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent rounded-full border-2 border-background shadow z-10" />

                {/* Columna derecha */}
                <div className={`w-1/2 pl-8 ${!isLeft ? "text-left" : "text-right"}`}>
                  {!isLeft && (
                    <>
                      <div className="p-6 rounded-xl shadow-md bg-background">
                        <h3 className="text-xl font-bold text-foreground">
                          {item.title}
                        </h3>

                        <div className="mt-2 space-y-4">
                          {item.descriptions.map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-foreground/70 leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                      <hr className="border-t border-foreground/20 mt-4" />
                    </>
                  )}

                  {isLeft && (
                    <p className="text-sm font-mono text-foreground/70 mt-2 text-left">
                      {item.year}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
