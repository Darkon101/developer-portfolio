import { FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import {
  SiExpo,
  SiExpress,
  SiGithub,
  SiGnubash,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"

import { Card, CardContent } from "../ui/card"

export function TechStack() {
  const tech = [
    { name: "React", icon: FaReact, color: "text-sky-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "Jest", icon: SiJest, color: "text-red-600" },
    { name: "Express", icon: SiExpress, color: "text-black-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    { name: "React Native", icon: FaReact, color: "text-sky-500" },
    { name: "Expo", icon: SiExpo, color: "text-black dark:text-white" },
    { name: "Bash", icon: SiGnubash, color: "text-gray-700" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-white" },
  ]

  return (
    <section className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-6">
          {[...tech, ...tech].map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="w-32 h-32 flex-shrink-0 shadow-none border transition"
              >
                <CardContent className="flex flex-col items-center justify-center h-full gap-2">
                  <div className="flex items-center justify-center w-12 h-12">
                    <Icon className={`${item.color} text-5xl`} />
                  </div>
                  <span className="text-sm font-medium text-center leading-tight">
                    {item.name}
                  </span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
