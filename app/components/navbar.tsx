"use client"

import Link from "next/link"
import { Volume2, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import {ArConnectButton} from "../components/arconnect"

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto"> {/* Reduced padding here */}
        <Link href="/" className="flex items-center gap-2">
          <Volume2 className="h-8 w-8 text-[#FF7B5F]" />
          <span className="font-semibold text-xl text-foreground">Voice AI</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-[#FF7B5F]" /> : <Menu className="h-6 w-6 text-[#FF7B5F]" />}
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8 text-foreground">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#FF7B5F]"
            >
              {item.label}
            </Link>
          ))}

          {/* Button */}
         <ArConnectButton/>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white p-6`}>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-foreground hover:text-[#FF7B5F]"
              onClick={() => setIsMenuOpen(false)} 
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-6">
        <ArConnectButton/>  
        </div>
      </div>
    </header>
  )
}
