import Image from "next/image"
import { projects } from "@/data/projects"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Projects() {
  return (
    <section className="container mx-auto mb-20 px-20" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="rounded-lg overflow-hidden shadow-none border transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                objectFit="contain"
                className="object-cover"
              />
            </div>

            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              {project.techStack && (
                <p className="text-xs">
                  Tech stack: {project.techStack.join(", ")}
                </p>
              )}
            </CardContent>

            <CardFooter className="flex justify-between p-4">
              {project.liveLink && (
                <Button asChild size="sm" variant="outline">
                  <a href={project.liveLink} target="_blank">
                    Live Preview
                  </a>
                </Button>
              )}
              {project.codeLink && (
                <Button asChild size="sm" variant="outline">
                  <a href={project.codeLink} target="_blank">
                    View Code
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
