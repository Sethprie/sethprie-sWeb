"use client"

// Icons
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
  SiPython,
  SiDotnet,
  SiCplusplus,
  SiC,
  SiBlender,
  SiUnrealengine,
} from "react-icons/si"

interface Tech {
  name: string
  icon?: React.ElementType
}

// Lista de tecnologías
const technologies: Tech[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Expo", icon: SiExpo },

  { name: "Python", icon: SiPython },
  { name: "C#" },
  { name: "ASP.NET", icon: SiDotnet },

  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },

  { name: "Blender", icon: SiBlender },
  { name: "Unreal Engine", icon: SiUnrealengine },
]

export default function TechStackSection() {
  return (
    <section className="w-full py-10">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Tecnologías
        </h2>
        <p className="text-sm text-foreground/60 mt-2">
          Herramientas y lenguajes con los que trabajo
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="
              group
              flex flex-col items-center justify-center
              gap-4
              p-6
              rounded-2xl
              border border-foreground/10
              bg-background
              transition
              hover:border-accent
              hover:-translate-y-1
            "
          >
            {tech.icon ? (
              <tech.icon className="text-4xl text-foreground/80 group-hover:text-accent transition" />
            ) : (
              <span className="text-4xl font-bold text-foreground/80 group-hover:text-accent transition">
                {tech.name}
              </span>
            )}
            <span className="text-sm font-medium text-foreground/80 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
