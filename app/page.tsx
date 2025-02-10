import { Mic, MessageSquare, Volume2, Zap, Moon, Globe } from "lucide-react";
import { Button } from "./components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F6]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Volume2 className="h-8 w-8 text-[#FF7B5F]" />
          <span className="font-semibold text-xl">Voice AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="/features">Features</a>
          <a href="/how-it-works">How it works</a>
          <a href="/blog">Blogs</a>
          <a href="/faq">FAQ</a>
          <a href="/support">Support</a>
        </div>
        <Button className="bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-4 text-lg rounded-full">Connect</Button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          <span className="text-[#FF7B5F]">Voice AI</span>: your personal
          <br />
          voice assistant
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering communication for throat patients through AI-powered voice assistance. Type or select, and let our
          natural voice speak for you.
        </p>
        
        {/* Wrap the Button with Link */}
        <Link href="/get-started">
          <Button className="mt-8 mb-4 bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-5 text-lg rounded-full">
            Start Speaking Now
          </Button>
        </Link>

        {/* Product Hunt Badge */}
        <div className="mt-8 inline-flex items-center gap-2 border rounded-full px-4 py-2 bg-white">
          <span className="text-yellow-500">🏆</span>
          <span className="text-gray-500">PRODUCT HUNT</span>
          <span className="text-[#FF7B5F]">#1 Product of the Day</span>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#FF7B5F]/10 rounded-lg flex items-center justify-center mb-4">
              <Mic className="h-6 w-6 text-[#FF7B5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Text-to-Speech</h3>
            <p className="text-gray-600">
              Natural AI-powered voice that speaks your typed messages with clarity and emotion
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#FF7B5F]/10 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-[#FF7B5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Responses</h3>
            <p className="text-gray-600">Pre-set messages for common phrases and emergency situations</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#FF7B5F]/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-[#FF7B5F]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Voice Effects</h3>
            <p className="text-gray-600">
              Customize your voice with various effects and styles to match your personality
            </p>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F6] to-transparent z-10" />
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-t-xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 p-4 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="bg-gray-800 text-white border-gray-700">
                  I need water
                </Button>
                <Button variant="outline" className="bg-gray-800 text-white border-gray-700">
                  Call the nurse
                </Button>
                <Button variant="outline" className="bg-gray-800 text-white border-gray-700">
                  Thank you
                </Button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-white">Type your message here...</div>
              <div className="flex items-center gap-4">
                <Button className="bg-[#FF7B5F] text-white">
                  <Mic className="mr-2 h-4 w-4" />
                  Speak Now
                </Button>
                <Button variant="outline" className="border-gray-700 text-white">
                  <Moon className="mr-2 h-4 w-4" />
                  Dark Mode
                </Button>
                <Button variant="outline" className="border-gray-700 text-white">
                  <Globe className="mr-2 h-4 w-4" />
                  Language
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
