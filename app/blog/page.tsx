// app/blog/[slug]/page.tsx

import { SiteHeader } from "../components/side-header";
import { SiteFooter } from "../components/side-footer";
import { notFound } from "next/navigation";

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    image: string;
    category: string;
    date: string;
    author: {
      name: string;
      avatar: string;
    };
  };
}

// This function will generate static paths for the dynamic route based on the `slug`
export async function generateStaticParams() {
  // Fetch the paths for all blog posts from your data source
  const paths = blogPosts.map((post) => ({
    slug: post.slug,
  }));

  return paths.map((param) => ({ params: param }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound(); // Show 404 if no post is found
  }

  return (
    <div className="min-h-screen bg-[#FFF8F6]">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <article>
          <div className="text-sm text-[#FF7B5F] mb-4">{post.category}</div>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 mb-8">
            <img
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-gray-600">{post.date}</div>
            </div>
          </div>

          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none">{post.content}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

const blogPosts = [
  {
    slug: "voice-ai-in-healthcare",
    title: "The Impact of Voice AI in Healthcare",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Healthcare",
    date: "March 15, 2024",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
];
