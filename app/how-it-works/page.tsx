import { Navbar } from "../components/navbar"
import { SiteFooter } from "../components/side-footer"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F6]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">
          How <span className="text-[#FF7B5F]">Voice AI</span> Works
        </h1>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="text-[#FF7B5F] font-bold mb-2">Step {index + 1}</div>
                <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
               
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

const steps = [
  {
    title: "Type or Select Your Message",
    description:
      "Simply type your message or choose from pre-set quick responses. Our interface is designed to be intuitive and easy to use, even in urgent situations.",
    
  },
  {
    title: "Choose Your Voice Style",
    description:
      "Select from various voice styles or use your custom recorded voice. Adjust the tone and speed to match your preferences.",
    
  },
  {
    title: "Speak with Confidence",
    description:
      "Your message is converted to natural-sounding speech instantly. Communication becomes effortless and comfortable.",
   
  },
]

