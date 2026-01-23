"use client"

import Image from "next/image"
import { FaFolder } from "react-icons/fa"
import { SiNextdotjs, SiReact, SiTailwindcss, SiPython, SiCplusplus } from "react-icons/si"

interface Project {
  name: string
  image?: string
  techIcon?: React.ElementType
  repoLink: string
  liveLink?: string
}

const projects: Project[] = [
  {
    name: "Mi web personal",
    image: "/ss_sethprie.png",
    techIcon: SiNextdotjs,
    repoLink: "https://github.com/Sethprie/sethprie-sWeb",
    liveLink: "https://sethprie.vercel.app/",
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
  {
    name: "Web para pizzería \"El Club de las Pizzas\"",
    image: "/ss_el-club-de-las-pizzas.png",
    techIcon: SiTailwindcss,
    repoLink: "https://github.com/Sethprie/el-club-de-las-pizzas",
    liveLink: "https://el-club-de-las-pizzas.vercel.app/",
  },
]

export default function ProjectsSection() {
  return (
    <section className="w-full py-10 bg-background">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Mis Proyectos
        </h2>
        <p className="text-sm text-foreground/60 mt-2">
          Algunos de los trabajos que he desarrollado
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => {
          const TechIcon = project.techIcon
          return (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl overflow-hidden border border-foreground/10 bg-background shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              {/* Imagen o icono */}
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
                <div className="flex gap-4">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm font-medium text-center border border-foreground/20 rounded-full hover:border-accent hover:text-accent transition"
                  >
                    Repositorio
                  </a>
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
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
