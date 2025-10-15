'use client';

import { useState } from 'react';
import Link from 'next/link';

const demoStory = {
  title: "Emma's Magical Adventure",
  language: "English",
  pages: [
    {
      number: 1,
      text: "Once upon a time, in a cozy house on Maple Street, lived a brave girl named Emma. She loved unicorns, playing soccer, and reading under her favorite oak tree.",
      color: "from-purple-200 to-pink-200"
    },
    {
      number: 2,
      text: "One sunny morning, Emma discovered a mysterious golden key hidden beneath her pillow. The key sparkled with magic and seemed to whisper, 'An adventure awaits...'",
      color: "from-yellow-200 to-orange-200"
    },
    {
      number: 3,
      text: "Following the whispers, Emma walked to the enchanted forest. There, behind a waterfall of rainbows, she found a magical door that the golden key fit perfectly!",
      color: "from-blue-200 to-green-200"
    },
    {
      number: 4,
      text: "As the door opened, Emma gasped! A beautiful unicorn with a shimmering silver mane stood before her. 'I've been waiting for you, Emma,' the unicorn said with a gentle smile.",
      color: "from-purple-300 to-pink-300"
    },
    {
      number: 5,
      text: "Together, Emma and the unicorn soared through clouds made of cotton candy, over mountains of chocolate, and across rivers of sparkling lemonade. It was the best adventure ever!",
      color: "from-pink-200 to-purple-200"
    },
    {
      number: 6,
      text: "As the sun began to set, the unicorn brought Emma home. 'Remember, brave Emma, magic is always around you—you just have to believe.' And with that, Emma knew this was just the first of many adventures.",
      color: "from-orange-200 to-red-200"
    }
  ]
};

export default function DemoStory() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextPage = () => {
    if (currentPage < demoStory.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In production, this would trigger ElevenLabs audio narration
  };

  const page = demoStory.pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
            ← Back to Home
          </Link>
          <div className="text-sm text-gray-400">
            Demo Story • {demoStory.language}
          </div>
        </div>
      </header>

      {/* Story Viewer */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {demoStory.title}
          </h1>

          {/* Story Page Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
            {/* Illustration Area */}
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${page.color} flex items-center justify-center p-12`}>
              <div className="text-center">
                <div className="text-8xl mb-4">
                  {currentPage === 0 && "🏡"}
                  {currentPage === 1 && "🔑✨"}
                  {currentPage === 2 && "🌈🚪"}
                  {currentPage === 3 && "🦄💫"}
                  {currentPage === 4 && "☁️🍬"}
                  {currentPage === 5 && "🌅⭐"}
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-gray-800 font-semibold">
                  Page {page.number} of {demoStory.pages.length}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8 md:p-12 bg-white text-gray-800">
              <p className="text-xl md:text-2xl leading-relaxed text-center font-serif">
                {page.text}
              </p>
            </div>

            {/* Audio Controls */}
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={togglePlay}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all flex items-center gap-2"
                >
                  {isPlaying ? (
                    <>
                      <span>⏸</span>
                      <span>Pause Narration</span>
                    </>
                  ) : (
                    <>
                      <span>▶️</span>
                      <span>Play Narration</span>
                    </>
                  )}
                </button>
                <div className="text-sm text-gray-600">
                  🎧 Professional voice narration in English
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                currentPage === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              ← Previous
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {demoStory.pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPage
                      ? 'bg-purple-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === demoStory.pages.length - 1}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                currentPage === demoStory.pages.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              Next →
            </button>
          </div>

          {/* Features Showcase */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-6 text-center">What Makes This Special?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-semibold mb-1">Personalized</h3>
                <p className="text-sm text-gray-300">Your child's name, age, and interests woven into every story</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="font-semibold mb-1">9 Languages</h3>
                <p className="text-sm text-gray-300">Same story available in English, Spanish, French, and more</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold mb-1">60 Seconds</h3>
                <p className="text-sm text-gray-300">Generate a complete story with illustrations in under a minute</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Story?</h3>
            <p className="text-gray-300 mb-6">Make your child the hero of their own magical adventure</p>
            <Link
              href="/auth/signin"
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Create Your First Story Free →
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-12 border-t border-gray-700">
        <div className="text-center text-gray-400 text-sm">
          <p>This is a demo story to showcase the Dahling Dreams experience</p>
          <p className="mt-2">In production, stories are fully personalized with your child's details and AI-generated illustrations</p>
        </div>
      </footer>
    </div>
  );
}
