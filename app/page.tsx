import { Mic, MessageSquare, Volume2, Zap, Moon, Globe, PenTool, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F6]">
      
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
       {/* Wrap the Button with Link */}
<Link href="/get-started" passHref>
  <Button className="mt-8 mb-4 inline-flex items-center gap-2 border rounded-full px-6 py-5 bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white text-lg transition">
    Start Speaking Now
  </Button>
</Link>

{/* Product Hunt Badge */}
<Link href="/chat-bot" passHref>
  <button className="mt-8 inline-flex items-center gap-2 border rounded-full px-6 py-5 bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white text-lg transition">
    <span className="text-yellow-500">🏆</span>
    <span className="font-semibold">Consult with AI</span>
  </button>
</Link>

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

        {/* Share Your Voice Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Share Your <span className="text-[#FF7B5F]">Voice</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Express yourself through writing. Share your experiences, tips, and stories with our community.
          </p>

          <Link href="/blog/create">
          <Button className="mb-12 bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-3 text-lg rounded-full flex items-center justify-center">
            <PenTool className="mr-2 h-5 w-5" />
              Write a Blog Post
             </Button>

          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            {[{ title: "My Journey with Voice AI", excerpt: "How Voice AI transformed my daily communication and gave me back my voice.", author: "John Doe", date: "May 15, 2023" }, { title: "5 Tips for Effective Communication", excerpt: "Discover how to make the most of Voice AI features for clear and impactful communication.", author: "Jane Smith", date: "May 10, 2023" }, { title: "Voice AI in Healthcare", excerpt: "Exploring the impact of Voice AI technology in modern healthcare settings.", author: "Dr. Emily Johnson", date: "May 5, 2023" }].map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <Link href="/blog" className="mt-4 text-[#FF7B5F] flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
