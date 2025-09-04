export type Project = {
  title: string
  description: string
  image: string
  techStack?: string[]
  liveLink?: string
  codeLink?: string
}

export const projects: Project[] = [
  {
    title: "NC News",
    description: "A social news aggregation app",
    image: "/projects/NC.png",
    techStack: ["HTML", "CSS", "JavaScript", "React", "PSQL"],
    liveLink: "https://teal-begonia-fd31b5.netlify.app/",
    codeLink: "https://github.com/Darkon101/nc-news",
  },
  {
    title: 'reci-p.ai',
    description: "AI-powered recipe generator",
    image: "/projects/recipai.png",
    techStack: ["React Native", "JavaScript", "MongoDB", "Gemini"],
    codeLink: "https://github.com/bluesky2006/reci-p.ai",
  },
  {
    title: 'Portfolio Website',
    description: "My portfolio",
    image: "/projects/placeholder.png",
    techStack: ["HTML", "CSS", "TypeScript", "React", "NextJs", "Tailwind"],
    codeLink: "https://github.com/Darkon101/developer-portfolio",
  }
]
