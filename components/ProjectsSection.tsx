"use client"

import { useState } from "react"
import Image from "next/image"
import { FaFolder } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiBlender,
  SiUnrealengine,
} from "react-icons/si"

interface Project {
  name: string
  image?: string
  techIcon?: React.ElementType
  repoLink?: string
  liveLink?: string
}

/* ===== PROYECTOS WEB ===== */
const webProjects: Project[] = [
  {
    name: "Mi web personal",
    image: "/ss_sethprie.png",
    techIcon: SiNextdotjs,
    repoLink: "https://github.com/Sethprie/sethprie-sWeb",
    liveLink: "https://sethprie.vercel.app/",
  },
  {
    name: 'Web para pizzería "El Club de las Pizzas"',
    image: "/ss_el-club-de-las-pizzas.png",
    techIcon: SiTailwindcss,
    repoLink: "https://github.com/Sethprie/el-club-de-las-pizzas",
    liveLink: "https://el-club-de-las-pizzas.vercel.app/",
  },
  {
    name: "3 en raya",
    techIcon: SiCplusplus,
    repoLink: "https://github.com/Sethprie/3-en-raya/tree/main",
  },
  {
    name: "Sistema Backend",
    techIcon: SiPython,
    repoLink: "#",
  },
]

/* ===== PROYECTOS 3D / JUEGOS ===== */
const gameProjects: Project[] = [
  {
    name: "Duolingo Character Render",
    image: "/ss_duo.png",
    techIcon: SiBlender,
  },
  {
    name: "Animación 3D en Blender",
    image: "/ss_alien.png",
    techIcon: SiBlender,
  },
    {
    name: "Escena 3D en Blender",
    image: "/ss_truck.png",
    techIcon: SiBlender,
  },
]

export default function ProjectsSection() {
  const [mode, setMode] = useState<"web" | "games">("web")
  const projects = mode === "web" ? webProjects : gameProjects

  return (
    <section className="w-full py-10 bg-background">
      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-4 mb-14">
        {/* Título centrado */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Mis Proyectos
          </h2>
          <p className="text-sm text-foreground/60 mt-2">
            {mode === "web" ? "Desarrollo web y software" : "3D, renders y videojuegos"}
          </p>
        </div>

        {/* Switch versión móvil: debajo del título */}
        {/* <div className="flex justify-center items-center gap-2 text-sm font-medium mt-4 md:hidden">
          <span className={mode === "web" ? "text-foreground" : "text-foreground/40"}>Web</span>
          <button
            onClick={() => setMode((prev) => (prev === "web" ? "games" : "web"))}
            className="relative w-12 h-6 rounded-full bg-foreground/20 transition"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-background shadow transition-transform ${
                mode === "games" ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span className={mode === "games" ? "text-foreground" : "text-foreground/40"}>3D / Juegos</span>
        </div> */}

        {/* Switch versión desktop: derecha del subtítulo */}
        {/* <div className="hidden md:flex justify-end items-center mt-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className={mode === "web" ? "text-foreground" : "text-foreground/40"}>Web</span>
            <button
              onClick={() => setMode((prev) => (prev === "web" ? "games" : "web"))}
              className="relative w-12 h-6 rounded-full bg-foreground/20 transition"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-background shadow transition-transform ${
                  mode === "games" ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span className={mode === "games" ? "text-foreground" : "text-foreground/40"}>
              3D / Juegos
            </span>
          </div>
        </div> */}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => {
          const TechIcon = project.techIcon
          return (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl overflow-hidden border border-foreground/10 bg-background shadow-sm"
            >
              {/* Imagen / Icono */}
              <div className="h-48 w-full flex items-center justify-center">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                ) : TechIcon ? (
                  <TechIcon className="w-16 h-16 text-foreground/80" />
                ) : (
                  <FaFolder className="w-16 h-16 text-foreground/80" />
                )}
              </div>

              {/* Contenido */}
              <div className="p-4 flex flex-col gap-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>

                {(project.repoLink || project.liveLink) && (
                  <div className="flex gap-4">
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm font-medium text-center border border-foreground/20 rounded-full hover:border-accent hover:text-accent transition"
                      >
                        Repositorio
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 text-sm font-medium text-center border border-foreground/20 rounded-full hover:border-accent hover:text-accent transition"
                      >
                        Ver
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
