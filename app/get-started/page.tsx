"use client";  // Ensure this is at the top

import { useState, useEffect } from "react";

import { SiteFooter } from "../components/side-footer";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Slider from "../components/ui/slider";
import { Volume2, Pause, Play } from "lucide-react";

export default function GetStartedContent() {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name); // Default to the first voice
      }
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (value: string) => {
    setSelectedVoice(value);
  };

  const handleSpeedChange = (value: number) => {
    setSpeed(value);
  };

  const handlePlay = () => {
    if (!text.trim()) return;

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Find and apply the selected voice
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) utterance.voice = voice;

    utterance.rate = speed; // Set playback speed

    utterance.onend = () => {
      setIsPlaying(false);
    };

    setIsPlaying(true);
    synth.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F6]">
     
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">
          Get Started with <span className="text-[#FF7B5F]">Voice AI</span>
        </h1>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Text Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Enter your text</label>
            <Textarea
              placeholder="Type your message here..."
              className="h-32 resize-none"
              value={text}
              onChange={handleTextChange}
            />
          </div>

          {/* Voice & Speed Selection */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Voice Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Choose a voice</label>
              <Select onValueChange={handleVoiceChange} value={selectedVoice}>
                <SelectTrigger children={undefined}>
                  
                </SelectTrigger>
                <SelectContent>
                  {voices.map((voice) => (
                    <SelectItem key={voice.name} value={voice.name}>
                      {voice.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Speed Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Adjust speed</label>
              <Slider 
                min={0.5} 
                max={2} 
                step={0.1} 
                value={speed}
                onValueChange={handleSpeedChange} 
              />
              <div className="text-sm text-gray-600 mt-2">
                Current speed: {speed.toFixed(1)}x
              </div>
            </div>
          </div>

          {/* Play Button */}
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

          {/* Audio Icon While Speaking */}
          {isPlaying && (
            <div className="mt-4 flex items-center justify-center text-[#FF7B5F]">
              <Volume2 className="animate-pulse h-8 w-8" />
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
