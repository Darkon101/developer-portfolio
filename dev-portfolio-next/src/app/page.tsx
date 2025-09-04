import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { TechStack } from "@/components/sections/TechStack"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TechStack></TechStack>
    </>
  )
}
