"use client"

import Link from "next/link"
import { Button } from "../components/ui/button"
import { PenTool } from "lucide-react"
import blogs from "../data/blog.json"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import { Navbar } from "../components/navbar"
import { SiteFooter } from "../components/side-footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F6] py-12">
        <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="text-[#FF7B5F]">Voice AI</span> Blog
        </h1>
        <div className="text-center mb-12">
          <Link href="/blog/create">
            <Button className="bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white px-6 py-3 text-lg rounded-full">
              <PenTool className="mr-2 h-5 w-5" />
              Write a New Blog Post
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; content: string; author: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; date: string | number | Date }) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <Link href={`/blog/${post.id}`} className="text-[#FF7B5F] hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </main>
       <SiteFooter/>
    </div>
  )
}

