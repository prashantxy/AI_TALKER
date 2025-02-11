import Link from "next/link"
import { Volume2 } from "lucide-react"
import { Button } from "./ui/button"

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Volume2 className="h-8 w-8 text-[#FF7B5F]" />
          <span className="font-semibold text-xl">Voice AI</span>
        </Link>
        
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
        
        <Button 
          className="bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-4 text-lg rounded-full"
        >
          Connect
        </Button>
      </nav>
    </header>
  )
}