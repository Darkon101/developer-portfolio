import { FaLinkedinIn } from "react-icons/fa"
import { SiGithub } from "react-icons/si"

import { Button } from "../ui/button"

export function ContactContent() {
  return (
    <>
      <section className="container mx-auto text-left">
        <h1 className="font-extrabold text-6xl mt-24 tracking-tight px-40 mb-8">
          Contact Me!
        </h1>
        <h2 className="font-extrabold text-6xl mt-24 tracking-tight px-40 mb-8">
          samin.taseen@outlook.com
          
        </h2>
        <h2 className="font-extrabold text-6xl tracking-tight px-40 mb-8" >
          +447722376585
        </h2>
        <div className="px-40">
          <h2 className="font-extrabold text-6xl mt-24 tracking-tight mb-8">
            Let's connect:
          </h2>
          <div className="flex flex-row gap-5">
              <Button
            
                size="icon"
                className="h-30 w-30 rounded-full border-4"
                asChild
              >
                <a href="https://www.linkedin.com/in/samin-taseen" target="_blank">
                  <FaLinkedinIn className="h-20 w-20"/>
                </a>
              </Button>
              <Button
                
                size="icon"
                className="h-30 w-30 rounded-full border-4"
                asChild
              >
                <a href="https://www.linkedin.com/in/samin-taseen" target="_blank">
                  <SiGithub className="h-20 w-20"/>
                </a>
              </Button>
          </div>
          
        </div>
      </section>
    </>
  )
}
