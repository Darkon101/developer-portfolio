import { Terminal } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"

export function PageFooter() {
  return (
    <div className="w-full">
      <Footer
        logo={<Terminal className="h-10 w-10" />}
        brandName="Samin Taseen"
        socialLinks={[
          {
            icon: <FaLinkedinIn className="h-5 w-5" />,
            href: "https://linkedin.com/in/samin-taseen",
            label: "LinkedIn",
          },
          {
            icon: <SiGithub className="h-5 w-5" />,
            href: "https://github.com/Darkon101",
            label: "GitHub",
          },
        ]}
        mainLinks={[
            { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/#projects", label: "Projects" },
          { href: "/contact", label: "Contact" },
        ]}
        copyright={{
          text: "© 2025 Samin Taseen",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}
