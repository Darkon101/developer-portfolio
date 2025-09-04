import { PageFooter } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutMe } from "@/components/sections/AboutMe";

export default function About(){
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Navbar></Navbar>
                <AboutMe></AboutMe>
            </main>
            <PageFooter></PageFooter>
        </div>
    )
}