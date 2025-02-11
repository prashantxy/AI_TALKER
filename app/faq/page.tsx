"use client"
import { Navbar } from "../components/navbar";
import { SiteFooter } from "../components/side-footer";
import { useState } from "react";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F6]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">
          Frequently Asked <span className="text-[#FF7B5F]">Questions</span>
        </h1>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <div
        className="cursor-pointer py-2 px-4 flex justify-between items-center bg-gray-100"
        onClick={toggle}
      >
        <span>{question}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="py-2 px-4">{answer}</div>}
    </div>
  );
};

const faqs = [
  {
    question: "How does Voice AI work?",
    answer:
      "Voice AI uses advanced text-to-speech technology to convert your typed messages into natural-sounding speech. You can either type your message or select from pre-set phrases, and our AI will speak them out loud for you.",
  },
  {
    question: "Can I customize the voice?",
    answer:
      "Yes! You can choose from various voice styles, adjust the speaking speed, and even record your own voice to create a personalized voice profile.",
  },
  {
    question: "What languages are supported?",
    answer:
      "We currently support English, Spanish, French, German, and Mandarin Chinese. We're constantly adding more languages to our platform.",
  },
  {
    question: "Is my voice data secure?",
    answer:
      "Yes, we take privacy very seriously. All voice data is encrypted and stored securely. We never share your personal information with third parties.",
  },
  {
    question: "Can I use Voice AI offline?",
    answer:
      "Yes, you can download voice packs for offline use. However, some advanced features may require an internet connection.",
  },
];
