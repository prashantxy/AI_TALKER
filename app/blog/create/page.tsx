"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Navbar } from "@/app/components/navbar"
import { SiteFooter } from "@/app/components/side-footer"

export default function CreateBlogPost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ title, content })
    // Reset form
    setTitle("")
    setContent("")
    alert("Blog post created successfully!")
  }

  return (
    <div className="min-h-screen bg-[#FFF8F6] py-12">
        <Navbar />
      <main className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Create a New <span className="text-[#FF7B5F]">Blog Post</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full" />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full h-64"
            />
          </div>
          <Button type="submit" className="w-full bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white">
            Publish Blog Post
          </Button>
        </form>
      </main>
      <SiteFooter/>
    </div>
  )
}

