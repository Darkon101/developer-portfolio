import { Button } from "@/components/ui/button";
import Image from "next/image";
import profilePic from "@/../public/profile.jpg";

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-6 py-20 text-center">
      <div className="flex flex-row items-center py-4 gap-100 px-40">
        <h1 className="text-6xl tracking-tight font-extrabold text-left">
          Hi, I’m <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent ">Samin</span>
          <br />
          and I'm a Software Developer
        </h1>
        <Image
          src={profilePic}
          alt="Profile picture"
          height={250}
          width={250}
          className="rounded-full border-4 border-indigo-500"
        />
      </div>
    </section>
  );
}
