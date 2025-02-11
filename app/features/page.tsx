
import { SiteFooter } from "../components/side-footer"
import { Mic, MessageSquare, Zap, Moon, Globe, Heart, Shield } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F6]">
     
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">
          Powerful features for seamless <span className="text-[#FF7B5F]">voice communication</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#FF7B5F]/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

const features = [
  {
    icon: <Mic className="h-6 w-6 text-[#FF7B5F]" />,
    title: "Text-to-Speech",
    description: "Natural AI-powered voice that speaks your typed messages with clarity and emotion",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-[#FF7B5F]" />,
    title: "Quick Responses",
    description: "Pre-set messages for common phrases and emergency situations",
  },
  {
    icon: <Zap className="h-6 w-6 text-[#FF7B5F]" />,
    title: "Voice Effects",
    description: "Customize your voice with various effects and styles to match your personality",
  },
  {
    icon: <Moon className="h-6 w-6 text-[#FF7B5F]" />,
    title: "Dark Mode",
    description: "Easy on the eyes with a beautiful dark theme option",
  },
  {
    icon: <Globe className="h-6 w-6 text-[#FF7B5F]" />,
    title: "Multilingual",
    description: "Support for multiple languages to help you communicate globally",
  },
  {
    icon: <Heart className="h-6 w-6 text-[#FF7B5F]" />,
    title: "Custom Voice Mode",
    description: "Record and use your own voice for a more personal touch",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#FF7B5F]" />,
    title: "Privacy Focused",
    description: "Your voice data is encrypted and protected at all times",
  },
]

