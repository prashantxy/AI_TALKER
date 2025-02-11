"use client"

import Link from "next/link"
import { Volume2, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

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
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Volume2 className="h-8 w-8 text-[#FF7B5F]" />
          <span className="font-semibold text-xl">Voice AI</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-[#FF7B5F]" /> : <Menu className="h-6 w-6 text-[#FF7B5F]" />}
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8 text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#FF7B5F]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Button */}
        <Button 
          className="bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-4 text-lg rounded-full hidden md:block"
        >
          Connect
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white p-6`}>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-gray-600 hover:text-[#FF7B5F]"
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Button 
            className="bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-4 text-lg rounded-full w-full"
          >
            Connect
          </Button>
        </div>
      </div>
    </header>
  )
}
