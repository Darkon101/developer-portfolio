"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu"

export function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-40 justify-be">
        <Link href="/" className="text-xl font-bold">
          Samin Taseen
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <Link href="/about">About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects">Projects</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">Contact</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
