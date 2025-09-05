import { PageFooter } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { TechStack } from "@/components/sections/TechStack"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TechStack></TechStack>
      <Projects></Projects>
      <PageFooter></PageFooter>
    </>
  )
}
