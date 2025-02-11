import Link from "next/link"
import { Volume2 } from "lucide-react"
import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <Volume2 className="h-8 w-8 text-[#FF7B5F]" />
        <span className="font-semibold text-xl">Voice AI</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-gray-600">
        <Link href="/features">Features</Link>
        <Link href="/how-it-works">How it works</Link>
        <Link href="/">Blog</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/support">Support</Link>
      </div>
      <Button className="bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-4 text-lg rounded-full">Connect</Button>
    </nav>
  )
}

