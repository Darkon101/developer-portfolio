import { PageFooter } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { ContactContent } from "@/components/sections/ContactContent"

export default function Contact() {
  return (
    <section className="flex flex-col min-h-screen">
      <main className="flex-grow">
          <Navbar></Navbar>
          <ContactContent></ContactContent>
      </main>
      <PageFooter></PageFooter>
    </section>
  )
}
