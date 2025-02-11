"use client"
import { SiteHeader } from "../components/side-header"
import { SiteFooter } from "../components/side-footer"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import  {Textarea}  from "../components/ui/textarea"
import { MessageSquare, Mail, Phone } from "lucide-react"
import { ChangeEvent } from "react"

export default function SupportPage() {
  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    throw new Error("Function not implemented.")
  }

  return (
    <div className="min-h-screen bg-[#FFF8F6]">
      <SiteHeader />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">
          Need <span className="text-[#FF7B5F]">Help?</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-[#FF7B5F]" />
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-gray-600">Chat with our support team</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#FF7B5F]" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@voiceai.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#FF7B5F]" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="How can we help you?" className="h-32" value={""} 
                 onChange={handleTextChange} />
              </div>
              <Button className="w-full bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

