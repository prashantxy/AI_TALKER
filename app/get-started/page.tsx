"use client"

import { useState } from "react"
import { SiteHeader } from "../components/side-header"
import { SiteFooter } from "../components/side-footer"
import { Button } from "../components/ui/button"
import  Textarea  from "../components/ui/textarea"
import  {Select} from "../components/ui/select"
import  {SelectTrigger} from "../components/ui/select"
import  {SelectValue} from "../components/ui/select"
import  {SelectItem} from "../components/ui/select"
import  {SelectContent} from "../components/ui/select"
import  Slider  from "../components/ui/slider"
import { Volume2, Pause, Play } from "lucide-react"

export default function GetStartedPage() {
  const [text, setText] = useState("")
  const [voice, setVoice] = useState("en-US-1")
  const [speed, setSpeed] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleVoiceChange = (value: string) => {
    setVoice(value)
  }

  const handleSpeedChange = (value: number[]) => {
    setSpeed(value[0])
  }

  const handlePlay = () => {
    setIsPlaying(true)
    // Here you would typically call your text-to-speech API
    // For now, we'll just simulate it with a timeout
    setTimeout(() => {
      setIsPlaying(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#FFF8F6]">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">
          Get Started with <span className="text-[#FF7B5F]">Voice AI</span>
        </h1>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Enter your text</label>
            <Textarea
              placeholder="Type your message here..."
              className="h-32"
              value={text}
              onChange={handleTextChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Choose a voice</label>
              <Select onValueChange={handleVoiceChange} defaultValue={voice}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-US-1">English (US) - Female</SelectItem>
                  <SelectItem value="en-US-2">English (US) - Male</SelectItem>
                  <SelectItem value="es-ES-1">Spanish - Female</SelectItem>
                  <SelectItem value="fr-FR-1">French - Male</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Adjust speed</label>
              <Slider min={0.5} max={2} step={0.1} value={[speed]} onValueChange={handleSpeedChange} />
              <div className="text-sm text-gray-600 mt-2">Current speed: {speed.toFixed(1)}x</div>
            </div>
          </div>

          <Button
            className="w-full bg-[#FF7B5F] hover:bg-[#FF6B4F] text-white"
            onClick={handlePlay}
            disabled={!text || isPlaying}
          >
            {isPlaying ? (
              <>
                <Pause className="mr-2 h-4 w-4" /> Speaking...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" /> Speak Now
              </>
            )}
          </Button>

          {isPlaying && (
            <div className="mt-4 flex items-center justify-center text-[#FF7B5F]">
              <Volume2 className="animate-pulse h-8 w-8" />
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

